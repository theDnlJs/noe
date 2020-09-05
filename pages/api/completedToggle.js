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
        const updatedLead = await Lead.findOneAndUpdate({_id: body.id}, { compoleted: body.compoleted } )
        console.log('========================22222  ===========');
        console.log(updatedLead);
        console.log('====================================');
        res.status(200).json({ updatedLead, body });
      } catch (error) { 
        res.status(400).json({ success: false, error, body });
      }
      break;
      default:
          break;
  }
}
