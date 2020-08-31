
import { query as q } from 'faunadb';
import { serverClient } from '../../../src/fauna-auth';
import { ListItemSecondaryAction } from '@material-ui/core';

export default async (req, res) => {
    const toss = Math.floor(Math.random() * 10000) + 1 
  try {
    const prizes = await serverClient.query(
      q.Map(
        // iterate each item in result
        q.Paginate(
          // make paginatable
          q.Match(
            // query index
            q.Index('all_prizes') // specify source
          )
        ),
        (ref) => q.Get(ref) // lookup each result by its reference
      )
    );
    const avilablePrizes = prizes.data.filter((prize) => {
      return prize.data.prizeQuantity > 0
    });
    const shaffled = avilablePrizes.filter((item) => {
      if (toss < 9900) {
        return item.data.prizeChance === '100'
      }
      else {
        return item.data.prizeChance === '1'
      }
    });
    const tossed = shaffled[Math.floor(Math.random() * shaffled.length)];
    // ok
    res.status(200).json(tossed);
  } catch (e) {
    // something went wrong
    res.status(500).json({ error: e.message });
  }
};