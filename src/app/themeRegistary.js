"use client";

import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const ThemeModeContext = createContext(null);

export function useThemeMode() {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error(
      "useThemeMode must be used within ThemeRegistary"
    );
  }

  return context;
}

export default function ThemeRegistary({
  children,
  initialMode = "light",
}) {
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");

    if (savedMode === "light" || savedMode === "dark") {
      setMode(savedMode);
    }
  }, []);

  const setAndStoreMode = (newMode) => {
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#7b1fa2" : "#ce93d8",
          },
          secondary: {
            main: mode === "light" ? "#9c27b0" : "#ba68c8",
          },
          background: {
            default: mode === "light" ? "#f3e5f5" : "#4a4141",
            second: mode === "light" ? "#ffffff" : "#513260",
          },
          text: {
            primary: mode === "light" ? "#2d1b36" : "#f3e5f5",
            secondary: mode === "light" ? "#5e4970" : "#d1c4e9",
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider
      value={{
        mode,
        setMode: setAndStoreMode,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}