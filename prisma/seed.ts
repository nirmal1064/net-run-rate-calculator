import { PrismaClient } from "@prisma/client";
import { iplTeams } from "../data/teams";
const prisma = new PrismaClient();

const main = async () => {
  await prisma.teams.createMany({ data: iplTeams });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
