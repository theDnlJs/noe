import dbConnect from "../../lib/dbConnect";
import Lead from "../../models/Lead";
import { verifyIdToken } from '../../utils/auth/firebaseAdmin'

export default async function handler(req, res) {
  await dbConnect();
  const {
    method,
    body,
    headers
  } = req;

  switch (method) {
    case "GET":
      try {
        await verifyIdToken(headers.authorization)
        try {
          const allLeads = await Lead.find({});
          res.status(200).json({ allLeads });
        } catch (error) {
          res.status(400).json({ success: false, error });
        }     
      } catch (error) {
        res.status(400).json({ auth: false, error });

      }
   
      break;
      case "PUT":
        try {
          await verifyIdToken(headers.authorization)
          const updatedLead = await Lead.findOneAndUpdate(
            { _id: body.id },
            { compoleted: body.compoleted },
            {
              new: true,
              runValidators: true,
            }
          );
          console.log("========================22222  ===========");
          console.log(updatedLead);
          console.log("====================================");
          res.status(200).json({ updatedLead, body });
        } catch (error) {
          res.status(400).json({ success: false, error, body });
        }
        break;
  }
} 
