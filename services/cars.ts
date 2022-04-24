import Filter from '../types/filter';
import prisma from '../prisma/client';

const filter: Filter = {
  take: 12,
  skip: 0,
};

const getCars = async (next?: boolean) => {
  if (!next) {
    delete filter.cursor;
    filter.skip = 0;
  }

  try {
    const cars = await prisma.car.findMany(filter);
    const cursorId = cars[cars.length - 1].id;

    filter.cursor = { id: cursorId };

    if (!filter.skip) {
      filter.skip = 1;
    }

    return cars;
  } catch (e) {
    return [];
  }
};

export default getCars;
