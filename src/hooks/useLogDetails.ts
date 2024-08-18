import { useEffect } from "react";

interface Person {
  backgroundImageUrl: string;
  profilePictureUrl: string;
  name: string;
  title: string;
  followers: number;
  following: number;
}

type UseLogDetailsParams = {
  personDetails: Person | undefined;
  enableLogs: boolean;
};

const useLogDetails = ({ personDetails, enableLogs }: UseLogDetailsParams) => {
  useEffect(() => {
    let nowDate = new Date();
    if (enableLogs && personDetails) {
      console.log("Person Details:", personDetails);
      console.log("Current Time:", nowDate);
    }
  }, [personDetails, enableLogs]);
};

export default useLogDetails;
