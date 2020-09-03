import dbConnect from "../../lib/dbConnect";
import Lead from "../../models/Lead";

export default async function handler(req, res) {
  const {
    method,
    body: { name, phone, prizeId, completed = false },
  } = req;
  await dbConnect();
  switch (method) {
    case "POST":
      try {
        const newLead = new Lead({ name, phone, prizeId, completed });
        newLead.save();
        res.status(200).json({ newLead });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
  }
}
