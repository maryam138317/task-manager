"use client";

import { Box, Typography } from "@mui/material";
import { 
  CalendarToday, 
  CheckBox, 
  PieChart, 
  PriorityHighRounded, 
  Settings 
} from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { title: 'All Tasks', icon: <CheckBox />, link: '/all-task' },
    { title: 'Today', icon: <CalendarToday />, link: '/' },
    { title: 'Statistics', icon: <PieChart />, link: '/static' },
    { title: 'Priority', icon: <PriorityHighRounded />, link: '/priorities' },
    { title: 'Settings', icon: <Settings />, link: '/settings' },
  ];

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        position: 'fixed',
        bottom: 0,
        py: 1,
        zIndex: 1000,
      }}
    >
      {navItems.map((item) => {
        
        const isActive = item.link === '/' ? pathname === '/' : pathname.startsWith(item.link);

        return (
          <Box
            key={item.title}
            sx={{
              flex: "1 1 0",
              textAlign: "center",
            }}
          >
            <Link href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  
                  color: isActive ? 'primary.main' : 'text.secondary',
                  transition: 'all 0.2s ease-in-out',
                  transform: isActive ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                <Box
                  sx={{
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    lineHeight: 1,
                    mb: 0.5
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  variant="button"
                  sx={{
                    fontSize: "clamp(9px, 1.1vw, 12px)",
                    fontWeight: isActive ? 700 : 400,
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: "block",
                    textTransform: 'capitalize'
                  }}
                >
                  {item.title}
                </Typography>
                
                {isActive && (
                  <Box sx={{ width: 4, height: 4, bgcolor: 'primary.main', borderRadius: '50%', mt: 0.5 }} />
                )}
              </Box>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
}
