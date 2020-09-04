import dbConnect from "../../lib/dbConnect";
import Lead from "../../models/Lead";

export default async function handler(req, res) {
  await dbConnect();
  const {
    method,
    body: { data },
  } = req;

  switch (method) {
    case "GET":
      try {
        const allLeads = await Lead.find({});
        res.status(200).json({ allLeads });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
  }
}
