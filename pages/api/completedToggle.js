import dbConnect from "../../lib/dbConnect";
import Lead from "../../models/Lead";

export default async function handler(req, res) {
  await dbConnect();
  const {
    method,
    body,
  } = req;

  switch (method) {
    case "POST":
      try {
        const leadToUpdate = await Lead.findOneAndUpdate({_id: body.id}, { compoleted: body.compoleted } )
        console.log('====================================');
        console.log(leadToUpdate);
        console.log('====================================');
        res.status(200).json({ leadToUpdate });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
      default:
          break;
  }
}
