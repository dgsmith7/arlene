import { createContext, useContext, useMemo, useState } from "react";
const CsrfContext = createContext();

// eslint-disable-next-line react/prop-types
export const CsrfProvider = ({ children }) => {
  const [token, setToken] = useState("empty");

  const setCsrfToken = (token) => {
    setToken(token);
  };

  const value = useMemo(
    () => ({
      token,
      setCsrfToken,
    }),
    [token]
  );

  return <CsrfContext.Provider value={value}>{children}</CsrfContext.Provider>;
};

export const useCsrf = () => {
  return useContext(CsrfContext);
};
