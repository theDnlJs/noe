import dbConnect from "../../lib/dbConnect";
import Prize from "../../models/Prize";

export default async function handler(req, res) {
  const {
    method,
    body
  } = req;
  const { name, desc, imgUrl, quantity, chances } = body;
  await dbConnect();
  switch (method) {
    case "POST":
      try {
          console.log(req.body);
        const newPrize = new Prize({ name, desc, imgUrl, quantity, chances });
        newPrize.save();
        res.status(200).json({ newPrize });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
  }
}
