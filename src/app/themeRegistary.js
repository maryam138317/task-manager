"use client";

import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const ThemeModeContext = createContext();

export function useThemeMode() {
  return useContext(ThemeModeContext);
}

export default function ThemeRegistary({ children }) {
  const [mode, setMode] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Initialize from localStorage after mounting to avoid hydration errors
  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") || "light";
    setMode(savedMode);
    setMounted(true);
  }, []);

  const setAndStoreMode = (newMode) => {
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: { main: mode === "light" ? "#7b1fa2" : "#ce93d8" },
        secondary: { main: mode === "light" ? "#9c27b0" : "#ba68c8" },
        background: {
          default: mode === "light" ? "#f3e5f5" : "#4a4141",
          second: mode === "light" ? "#ffffff" : "#513260",
        },
        text: {
          primary: mode === "light" ? "#2d1b36" : "#f3e5f5",
          secondary: mode === "light" ? "#5e4970" : "#d1c4e9",
        },
      },
    });
  }, [mode]);

  // Prevent rendering until mounted to ensure server/client match
  if (!mounted) return <>{children}</>;

  return (
    <ThemeModeContext.Provider value={{ mode, setMode: setAndStoreMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
