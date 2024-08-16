import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { Person } from "@/utils/common/person";
import { getPersonFromDB } from "@/utils/server/db";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getPerson: NextApiHandler = async (req, res) => {
  const person = req.query.person as Person;

  switch (person) {
    case Person.PersonA:
      await sleep(1000);
      break;
    case Person.PersonB:
      await sleep(3000);
      break;
    case Person.PersonC:
      res.status(500).send("Error: Request failed for Person C");
      return;
    default:
      res.status(404).send("Error: Person not found");
      return;
  }

  const user = await getPersonFromDB(person);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(500).send("Error: Request failed");
  }

  res.end();
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return getPerson(req, res);

    default:
      res.status(404).send({
        user: null,
      });
  }
};
export default handler;
