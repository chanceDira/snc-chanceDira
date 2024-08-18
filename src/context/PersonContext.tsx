import {
  Context,
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import useLogDetails from "@/hooks/useLogDetails";
import { usePersonData } from "@/hooks/usePersonData";

interface Person {
  backgroundImageUrl: string;
  followers: number;
  following: number;
  name: string;
  profilePictureUrl: string;
  title: string;
}

type PersonContextType = {
  data: Person | undefined;
  handleButtonClick: (person: string) => void;
  error: any;
  isLoading: boolean;
  selectedPerson: string | null;
  enableLogs: boolean;
  setEnableLogs: React.Dispatch<React.SetStateAction<boolean>>;
};

const personContextDefaultValues: PersonContextType = {
  data: {
    backgroundImageUrl: "",
    followers: 0,
    following: 0,
    name: "",
    profilePictureUrl: "",
    title: "",
  },
  handleButtonClick: () => {},
  error: "",
  isLoading: false,
  selectedPerson: "",
  enableLogs: false,
  setEnableLogs: () => {},
};

const PersonContext = createContext<PersonContextType>(
  personContextDefaultValues,
);

export function usePersonContext<ContextValue>(
  context?: Context<ContextValue | null>,
) {
  const safeContext = useContext(PersonContext);
  if (!safeContext) {
    throw new Error(`You can't use useContext outside of the provider`);
  }
  return safeContext;
}

type Props = {
  children: ReactNode;
};

export function PersonProvider({ children }: Props) {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [enableLogs, setEnableLogs] = useState<boolean>(false);

  const { data, error, isLoading } = usePersonData(selectedPerson);

  const handleButtonClick = useCallback((person: string) => {
    setSelectedPerson(person);
  }, []);

  useLogDetails({ personDetails: data, enableLogs });

  const value = useMemo(
    () => ({
      data,
      handleButtonClick,
      error,
      isLoading,
      selectedPerson,
      enableLogs,
      setEnableLogs,
    }),
    [
      data,
      handleButtonClick,
      error,
      isLoading,
      selectedPerson,
      enableLogs,
      setEnableLogs,
    ],
  );

  return (
    <PersonContext.Provider value={value}>{children}</PersonContext.Provider>
  );
}
