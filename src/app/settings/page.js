import { ArrowBack, Info, Palette } from "@mui/icons-material";
import { Paper, Typography, Box } from "@mui/material";
import Link from "next/link";

export default function Settings() {
    return (
       <div>
         
            
            <Typography variant="h5" sx={{fontWeight: '600',ml: 5, pt:3}}>Settings</Typography>
            <Box sx={{height: '100vh', display: 'flex',justifyContent: 'center', alignItems: 'center',gap: 3,flexWrap: 'wrap'}}>
                <Link href={'./settings/change-theme'}>
            <Box sx={{textAlign: 'center', backgroundColor: 'background.paper', p: 2, borderRadius: '1rem', boxShadow: 'revert'}}>
                    <Palette />
                    <Typography>Theme Configuration</Typography>
            </Box>
            </Link>
            <Link href={'./settings/about'}>
                <Box sx={{textAlign: 'center', backgroundColor: 'background.paper', p: 2, borderRadius: '1rem', boxShadow: 'revert'}}>
                    <Info />
                    <Typography>About Task managment</Typography>
                </Box>
            </Link>
            </Box>
       </div>
    )
}