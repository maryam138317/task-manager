import { CheckCircle } from "@mui/icons-material";
import { Box, List, ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material";

export default function About(){


    return <Paper sx={{height: '100vh'}}>
        <Box sx={{p: 6, textAlign: 'justify', lineHeight: '2rem'}}>
            This App is for managing your tasks easily by defining date or importance of it.
            <br/>Here's what we provided for you:
            <List>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircle sx={{color: 'text.secondary'}}/>
                        </ListItemIcon>
                        <ListItemText>Add your Tasks</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircle sx={{color: 'text.secondary'}}/>
                        </ListItemIcon>
                        <ListItemText>Categorize Tasks by the Priority of it</ListItemText>
                    </ListItem>
                     <ListItem>
                        <ListItemIcon>
                            <CheckCircle sx={{color: 'text.secondary'}}/>
                        </ListItemIcon>
                        <ListItemText>See the status by a nice Pie Chart</ListItemText>
                    </ListItem>
                     <ListItem>
                        <ListItemIcon>
                            <CheckCircle sx={{color: 'text.secondary'}}/>
                        </ListItemIcon>
                        <ListItemText>Beautiful Color Palettes</ListItemText>
                    </ListItem>


            </List>
        </Box>
    </Paper>
}