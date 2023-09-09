import { PropsWithChildren, useEffect, useState } from "react";
import AppContext, { IAppContext } from "./AppContext";
import axios from "axios";

export default function AppContextProvider({ children }: PropsWithChildren) {
  const [value, setValue] = useState<IAppContext | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/config.json");
      setValue({ appConfig: data });
    })();
  }, []);

  return (
    <AppContext.Provider value={value}>
      {value ? children : "Loading..."}
    </AppContext.Provider>
  );
}
