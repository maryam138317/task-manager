"use client";
import { Add, Search } from "@mui/icons-material";
import { Box, Button, TextField, Typography, InputAdornment, Dialog, DialogTitle} from "@mui/material";
import { useSearch } from "../../../components/searchContext"; // Import the hook
import { useState } from "react";
import CRUDModal from "../../../components/crud-modal";

export default function TaskLayout({ children }) {
  const { searchQuery, setSearchQuery } = useSearch();

  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "short", day: "numeric", month: "long",
  }).format(new Date());

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenStatus = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column"}}>
      <Box sx={{ width: "100%", display: "flex",flexWrap: 'wrap', justifyContent: "space-between", alignItems: "center", p: 2, borderBottom: "1px solid", borderColor: "divider" }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>Today</Typography>
          <Typography variant="caption" color="text.secondary">{today}</Typography>
        </Box>

        <TextField
          size="small"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update state directly
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start"><Search fontSize="small" /></InputAdornment>
              ),
              sx: { borderRadius: "12px" }
            },
          }}
          sx={{ width: "200px" }}
        />
      </Box>

      <Box sx={{ flexGrow: 1, p: 2 }}>{children}</Box>

      <Button 
      variant="contained"
       color="secondary" 
       sx={{ position: "fixed", right: "2rem", bottom: "7rem", width: "64px", height: "64px", borderRadius: "50%", minWidth: 0 }}
       onClick={toggleOpenStatus}
       >
        <Add sx={{ fontSize: "2rem", color: "white" }} />
      </Button>

      <CRUDModal title={'Add New Task'} isOpen={isOpen} toggleOpenStatus={toggleOpenStatus}/>
    </Box>
  );
}
