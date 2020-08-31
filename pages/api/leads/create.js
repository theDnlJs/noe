import { query as q } from "faunadb";
import { serverClient } from "../../../src/fauna-auth";

export default async (req, res) => {
  const { name, phone } = req.body;
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
    serverClient.query(
      q.Create(
        q.Collection('leads'),
        {   data: {
                  name,
                  phone,
                },},
      )
    )
    .then((rett) => {
      console.log(rett)
      res.status(200).json({data: rett})
    });

  //   await serverClient.query(
  //     q.Create(q.Collection("leads"), {
  //       data: {
  //         name,
  //         phone,
  //       },
  //     })
  //   );
  //   res.status(200).end();
  } catch (e) {
    if (e.message === "instance not unique") {
      return res.status(401).json(e);
    }
    res.status(500).json({ error: e.message });
  }
};
