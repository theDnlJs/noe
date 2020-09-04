  import dbConnect from "../../lib/dbConnect";
  import Lead from "../../models/Lead";

  export default async function handler(req, res) {
    const { method, body } = req;
    await dbConnect();
    switch (method) {
      case "POST":
        const isExistes = await Lead.findOne({ phone: body.phone });
        if (isExistes === null) {
          return res.status(200).json({ isExistes, body });
        }
        else {
          res.status(400).json({ success: false, body });
        }
        break;
      // case "POST":
      //   try {
      //     const { name, phone } = req.body;
      //     const newLead = new Lead({ name, phone });
      //     newLead.Save();
      //     res.status(200).json({ newLead });
      //   } catch (error) {
      //     res.status(500).json({ error, message: "something went worng" });
      //   }
      //   break;
      default:
        res.status(400).json({ success: false, body });
        break;
    }
  }
