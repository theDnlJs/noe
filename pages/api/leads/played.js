import { query as q } from "faunadb";
import { serverClient } from "../../../src/fauna-auth";

export default async (req, res) => {
  const { name, phone, prize } = req.body;

    serverClient.query(
      q.Get(
        q.Match(q.Index('all_leads'), phone)
      )
    )
    .then((ret) => {
        console.log('retttttt',{ret}, 'retttttt');
      if(ret){
        return res.status(401).end();
      }
      if(!ret) {
         
      }
    }).
    catch(e =>{
        console.log({e})
        if (e.name === "NotFound") {
            console.log('success')
            return res.status(200).end();
        }
        res.status(500).json({ error: e.name});
    });
};
