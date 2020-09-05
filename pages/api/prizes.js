import dbConnect from "../../lib/dbConnect";
import Prize from "../../models/Prize";

export default async function handler(req, res) {
  await dbConnect();
  const {
    method,
    body: { data },
  } = req;

  switch (method) {
    case "GET":
      try {
        const allPrizes = await Prize.find({});
        res.status(200).json({ allPrizes });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
      case "PUT": 
      try {
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
      }
  }

}
