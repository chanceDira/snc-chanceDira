import { PrismaClient } from "@prisma/client";
import { mockUsers } from "@/utils/server/mock-users";
import { Person, User } from "@/utils/common/person";

const prisma = new PrismaClient();

async function main() {
  // TODO: Add mock users
  // await prisma.user.create({
  //   data: mockUsers[Person.PersonA] as unknown as User,
  // });
  // await prisma.user.create({
  //   data: mockUsers[Person.PersonB] as unknown as User,
  // });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
