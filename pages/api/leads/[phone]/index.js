// pages/api/customers/[id]/index.js

import { query as q } from 'faunadb';
import { serverClient } from '../../../../src/fauna-auth';

export default async (req, res) => {
  const {
    query: { phone },
  } = req;

  console.log(phone)
  try {
    const leads = await serverClient.query(
      q.Get(q.Ref(q.Collection('leads'), phone))
    );
    console.log(leads.data)
    res.status(200).json(leads.data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};