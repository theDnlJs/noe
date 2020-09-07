import dbConnect from "../../lib/dbConnect";
import Prize from "../../models/Prize";
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
        const allPrizes = await Prize.find({});
        res.status(200).json({ allPrizes });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      finally {
        console.log(headers.authorization);
      }
      break;
      case "PUT": 
      try {
        await verifyIdToken(headers.authorization)
        const updatePrize = await Prize.findOneAndUpdate({ _id: id }, { 
          name,
          desc,
          imgUrl,
          quantity,
          chances
         })
         res.status(200).json({ updatePrize });
      } catch (error) {
        res.status(400).json({ success: false, error });
      } finally {
        console.log(headers.authorization);
      }
  }

}
