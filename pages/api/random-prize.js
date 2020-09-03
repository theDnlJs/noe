import dbConnect from "../../lib/dbConnect";
import Prize from "../../models/Prize";
export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const toss = Math.floor(Math.random() * 10000) + 1;
        const Allprizes = await Prize.find({ quantity: { $gte: 8 } });
        console.log(Allprizes);
        const shaffled = Allprizes.filter((item) => {
          if (toss > 9900) {
            return item.chances === 1;
          } else {
            return item.chances === 100;
          }
        });
        const tossed = shaffled[Math.floor(Math.random() * shaffled.length)];
        res.status(200).json(tossed);
      } catch (error) {
        res.status(400).json({ error: error });
      }
      break;
    case "POST":
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
