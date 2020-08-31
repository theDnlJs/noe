import { query as q } from 'faunadb';
import { serverClient } from '../../../../utils/fauna-auth';

export default async (req, res) => {
  const { prize } = req.body;
 try {
     
 } catch (error) {
     console.log(error);
     res.status(500).json(e);
 }
};