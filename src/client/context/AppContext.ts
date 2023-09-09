import { createContext, useContext } from "react";
import { AppConfig } from "../../AppConfig";

export interface IAppContext {
  appConfig: AppConfig;
}

const AppContext = createContext<IAppContext | null>(null);

export function useAppContext() {
  const context = useContext(AppContext);

  if (context === null) {
    throw new Error("App context not available!");
  }

  return context;
}

export default AppContext;
