import { FunctionComponent, PropsWithChildren, useRef, useMemo } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person } from "@/utils/common/person";
import { usePersonContext } from "@/context/PersonContext";
import CurrentTime from "@/components/CurrentTime";
import Skeleton from "@/components/Skeleton";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  const {
    data,
    handleButtonClick,
    error,
    isLoading,
    selectedPerson,
    enableLogs,
    setEnableLogs,
  } = usePersonContext();

  // useRef declaration
  const dataRef = useRef(data);
  const errorRef = useRef(error);
  const isLoadingRef = useRef(isLoading);
  const selectedPersonRef = useRef(selectedPerson);

  dataRef.current = data;
  errorRef.current = error;
  isLoadingRef.current = isLoading;
  selectedPersonRef.current = selectedPerson;

  // animation motion directions
  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    }),
    [],
  );

  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen bg-white",
        "flex flex-col justify-center items-center",
      )}
    >
      <div>
        <CurrentTime />
      </div>
      <label className="text-black">
        <input
          type="checkbox"
          checked={enableLogs}
          onChange={() => setEnableLogs((prev) => !prev)}
        />
        Enable Logs
      </label>
      {isLoading && <Skeleton />}
      {error && <div className="text-black">Error loading person data</div>}
      <AnimatePresence>
        {data && (
          <motion.div
            className="text-black flex flex-row gap-4 my-4 border rounded-md shadow-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div>
              <img src={data.profilePictureUrl} alt="" className="w-40 h-40" />
            </div>
            <div className="p-4">
              <h2 className="font-bold">{data.name}</h2>
              <p className="font-light">{data.title}</p>
              <p className="font-light">Followers: {data.followers}</p>
              <p className="font-light">Following: {data.following}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={classNames("flex gap-2")}>
        {Object.values(Person).map((person) => (
          <Button
            key={person}
            isSelected={selectedPerson === person}
            onClick={() => handleButtonClick(person)}
          >
            {person}
          </Button>
        ))}
        <button />
      </div>
    </main>
  );
};
