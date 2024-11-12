"use client";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
interface UserData {
  id: string;
}
interface PoliceData {
  id: string;
  name: string;
  email: string;
  mobile: string;
  post: string;
}

interface AppContextType {
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;

  policeData: PoliceData[];
  setpoliceData: Dispatch<SetStateAction<PoliceData[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AdminWrapper({ children }: { children: React.ReactNode }) {
  const [policeData, setpoliceData] = useState<PoliceData[]>([]);
  const [userData, setUserData] = useState<UserData>({ id: "" });
  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        policeData,
        setpoliceData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AdminWrapper");
  }
  return context;
}
