import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

interface Person {
  backgroundImageUrl: string;
  profilePictureUrl: string;
  name: string;
  title: string;
  followers: number;
  following: number;
}

const fetchPerson = async (person: string): Promise<Person> => {
  const { data } = await axios.get(`/api/person?person=${person}`);
  return data;
};

export const usePersonData = (person: string | null) => {
  const { data, error, isLoading } = useQuery<Person, Error>({
    queryKey: ["person", person],
    queryFn: () => fetchPerson(person as string),
    retry: false,
    enabled: !!person,
  });

  return { data, error, isLoading };
};
