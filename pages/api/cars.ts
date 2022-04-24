// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import getCars from '../../services/cars';
import Car from '../../types/car';
import Error from '../../types/error';

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Car[] | Error>
) => {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'method not allowed' });
  }

  const next = req.query.next === 'true' || req.query.next === '1';

  try {
    const cars = await getCars(next);

    res.status(200).json(cars);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'internal error' });
  }
};
