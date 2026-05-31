"use client";

import { Paper, Typography, Box } from "@mui/material";
import { useThemeMode } from "@/app/themeRegistary";

export default function ChangeTheme() {
  const { mode, setMode } = useThemeMode();

  return (
    <Paper sx={{ p: 4, borderRadius: 2, maxWidth: 300 }}>
      <Typography variant="h6" gutterBottom>Theme Settings</Typography>
      
      {/* Light Mode Option */}
      <Box sx={{ mb: 1 }}>
        <input
          type="radio"
          id="light"
          name="theme"
          value="light"
          checked={mode === "light"}
          onChange={() => setMode("light")}
        />
        <label htmlFor="light" style={{ marginLeft: "10px", cursor: "pointer" }}>
          Light Mode
        </label>
      </Box>

      {/* Dark Mode Option */}
      <Box>
        <input
          type="radio"
          id="dark"
          name="theme"
          value="dark"
          checked={mode === "dark"}
          onChange={() => setMode("dark")}
        />
        <label htmlFor="dark" style={{ marginLeft: "10px", cursor: "pointer" }}>
          Dark Mode
        </label>
      </Box>
    </Paper>
  );
}
