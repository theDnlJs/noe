import dbConnect from "../../lib/dbConnect";
import Lead from "../../models/Lead";
import Prize from "../../models/Prize";


export default async function handler(req, res) {
  await dbConnect();
  const {
    method,
    body: {data}
  } = req;
  const { leadPlayed, prizeOwn } = data;
  const prizeId = prizeOwn._id
  switch (method) {
    case "POST":
      try {
        const newLead = await new Lead({ name: leadPlayed.name, phone: leadPlayed.phone, prize: prizeId });
        newLead.save().catch(e => console.log(e))
        await Prize.update({
            _id: prizeId,
        }, { $push: { leads: leadPlayed } })
        res.status(200).json({ newLead });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
  }
}
