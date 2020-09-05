import dbConnect from "../../../lib/dbConnect";
import Prize from "../../../models/Prize";

export default async function handler(req, res) {
  await dbConnect();
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const prize = await Prize.findById(id);
        console.log(prize, 'get request');
        if (!prize) {
          res.status(400).json({ success: false, error });
        }
        res.status(200).json({ data: prize });
      } catch (error) {
        console.log(error);
      }
      break;
    case "PUT" /* Edit a model by its ID */:
      try {
        const prize = await prize.findByIdAndUpdate(id, req.body);
        if (!prize) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: prize });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
