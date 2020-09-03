import dbConnect from '../../../lib/dbConnect'
import Pet from '../../../models';


export default async function handler(req, res) {
    const { method } = req
  
    await dbConnect()
  
    switch (method) {
      case 'GET':
        try {
          const user = await Pet.findOne({}) /* find all the data in our database */
          res.status(200).json({ success: true, data: pets })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      case 'POST':
        try {
          const pet = await Pet.create(
            req.body
          ) /* create a new model in the database */
          res.status(201).json({ success: true, data: pet })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }
  © 2020 GitHub, Inc.