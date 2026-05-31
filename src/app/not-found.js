import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
    return <Paper sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Box sx={{textAlign: 'center'}}>
            <Typography>The Requested page isn't found!</Typography>
            <Link href={'/'}>
                <Button endIcon={<ArrowForward />} >Home Page</Button>
            </Link>
        </Box>
    </Paper>
}