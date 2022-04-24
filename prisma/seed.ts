import { readFileSync } from 'fs';
import prisma, { connect, disconnect } from './client';

const data = JSON.parse(readFileSync('./prisma/data.json', 'utf-8'));

connect(disconnect);

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

disconnect();
