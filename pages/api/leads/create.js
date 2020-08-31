import { query as q } from "faunadb";
import { serverClient } from "../../../src/fauna-auth";

export default async (req, res) => {
  const { name, phone, prize } = req.body;
  try {
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
