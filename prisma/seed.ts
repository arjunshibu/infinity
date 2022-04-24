import { readFileSync } from 'fs';
import prisma from './client';

const data = JSON.parse(readFileSync('./prisma/data.json', 'utf-8'));

(() => {
  prisma.car
    .createMany({ data })
    .then(() => {
      console.log('Seeded with 500 records');
    })
    .catch((e) => {
      throw e;
    });
})();
