"use client";
import { createContext, useContext } from 'react';

export const RouterContext = createContext();

export const RouterProvider = ({ router, children }) => {
  return <RouterContext.Provider value={router}>{children}</RouterContext.Provider>;
};

export const useRouter = () => {
  return useContext(RouterContext);
};
