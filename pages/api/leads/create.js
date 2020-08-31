import { query as q } from "faunadb";
import { serverClient } from "../../../src/fauna-auth";

export default async (req, res) => {
  const { name, phone, prize } = req.body;
  try {
    serverClient.query(
      q.Get(
        q.Match(q.Index('all_leads'), phone)
      )
    )
    .then((ret) => {
      if(ret){
        return res.status(401).json({ exists: true })
      }
    }).
    catch(e => console.log(e));
  

    const dbs = await serverClient.query(
      q.Create(q.Collection("leads"), {
        data: {
          name,
          phone,
          prize
        },
      })
    );
    return res.status(200).json(dbs);
  } catch (e) {
    if (e.message === "instance not unique") {
      return res.status(401).json(e);
    }
    res.status(500).json({ error: e.message });
  }
};
