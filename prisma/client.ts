import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const connect = (callback?: CallableFunction) => {
  prisma.$connect().catch(async (e) => {
    if (callback) {
      await callback();
    }

    throw e;
  });
};

const disconnect = async () => {
  await prisma.$disconnect();
};

export default prisma;
export { connect, disconnect };
