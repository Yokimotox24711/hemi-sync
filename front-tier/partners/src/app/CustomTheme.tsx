"use client";

import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      // main: "#137EF4",
      main: "#74eaea",
    },
    secondary: {
      main: "#E6CA71",
    },
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      // main: "#137EF4",
      main: "#3d9e9e",
      light: "#9effff",
      contrastText: "#222222",
    },
    secondary: {
      main: "#E6CA71",
    },
    background: {
      // default: "#EEEEF1",
      // default: "#f7fff7",
      default: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
});

const CustomThemeContext = createContext({});
export function useCustomThemeContext() {
  return useContext(CustomThemeContext);
}

const GlobalStateContext = createContext({});
export function useGlobalStateContext() {
  return useContext(GlobalStateContext);
}

export default function CustomTheme(props: any) {
  const [currentColorMode, setCurrentColorMode] = useState("dark");
  const [currentPage, setCurrentPage] = useState("home");
  const [initialLogin, setInitialLogin] = useState(true);

  return (
    <GlobalStateContext.Provider value={{ initialLogin, setInitialLogin, currentPage, setCurrentPage }}>
      <CustomThemeContext.Provider
        value={{ currentColorMode, setCurrentColorMode }}
      >
        <ThemeProvider
          theme={currentColorMode == "light" ? lightTheme : darkTheme}
        >
          <Box
            className={currentColorMode == "light" ? "lightmode" : "darkmode"}
            sx={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              background: (theme) => theme.palette.background.default, //dark
              color: (theme) => theme.palette.text.primary, //dark
            }}
          >
            {props.children}
          </Box>
        </ThemeProvider>
      </CustomThemeContext.Provider>
    </GlobalStateContext.Provider>
  );
}
