import dbConnect from '../../lib/dbConnect';
import Lead from '../../models/Lead'

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'GET':
      Lead.findOne({ phone: req.body.phone }).then((leadFound) => {
        if (!leadFound) {
          res.status(200).json({ leadFound })
        }
        if (leadFound) {
         res.status(400).json({leadFound}) 
        }
      }).catch((e)=>{
        res.status(500).json({e})
      })
      break
    case 'POST':
      try {
        const { name, phone } = req.body;
        const newLead = new Lead({ name, phone });
        newLead.Save();
        res.status(200).json({ newLead })        
      } catch (error) {
        res.status(500).json({ error, message: 'something went worng'})
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}