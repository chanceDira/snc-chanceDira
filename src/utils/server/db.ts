import { Person } from "@/utils/common/person";
import { mockUsers } from "@/utils/server/mock-users";

export const getPersonFromDB = async (person: Person) => {
  return mockUsers[person];
};
