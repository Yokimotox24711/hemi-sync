import React, { createContext, useContext, useState } from "react";

const ApiKeyContext = createContext();

export const useOpenAIApiKey = () => useContext(ApiKeyContext);

export function ApiKeyProvider({ children }) {
  const [openAIApiKey, setOpenAIApiKey] = useState<string>("");

  return (
    <ApiKeyContext.Provider value={{ openAIApiKey, setOpenAIApiKey }}>
      {children}
    </ApiKeyContext.Provider>
  );
}
