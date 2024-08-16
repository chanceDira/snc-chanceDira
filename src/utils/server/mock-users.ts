import { Person, User } from "@/utils/common/person";

export const mockUsers: { [key in Person]: User | null } = {
  [Person.PersonA]: {
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    profilePictureUrl:
      "https://images.squarespace-cdn.com/content/v1/51efe10de4b025019c37bb06/1566986917034-2MGUTZB04MU2GFSPAC10/London-corporate-headshot-photography.jpg",
    name: Person.PersonA,
    title: "Backend Developer",
    followers: 15000,
    following: 500,
  },
  [Person.PersonB]: {
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    profilePictureUrl:
      "https://images.squarespace-cdn.com/content/v1/51efe10de4b025019c37bb06/1566986917034-2MGUTZB04MU2GFSPAC10/London-corporate-headshot-photography.jpg",
    name: Person.PersonB,
    title: "Full Stack Developer",
    followers: 20000,
    following: 1000,
  },
  [Person.PersonC]: null, // Always fails
};
