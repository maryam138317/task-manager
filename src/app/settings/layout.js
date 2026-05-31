import { ArrowBack } from "@mui/icons-material";
import { Box, Paper } from "@mui/material";
import Link from "next/link";

export default function SettingLayout({ children }){
    return <Paper sx={{backgroundColor: 'background.default', pt: 3}}>
        <Link href={'./'}>
        <Box sx={{bgcolor: 'background.default',width: '2rem', height: '2rem', borderRadius: '50%', p:3, ml: 3, border: '1px solid',borderColor: 'text.primary' , display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <ArrowBack />
        </Box>
        </Link>
        {children}
    </Paper>
}