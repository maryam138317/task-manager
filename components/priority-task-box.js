import { Box, List, ListItem, Typography, Divider } from "@mui/material";
import TaskItems from "./task-item";

export default function PriorityBox({ items, title, accentColor }) {
    const hasItems = items && items.length > 0;

    return (
        <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'background.paper',
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'translateY(-4px)' }
        }}>

            <Box sx={{ p: 2, borderBottom: `3px solid ${accentColor}`, bgcolor: 'action.hover' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                    {title}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {items.length} {items.length === 1 ? 'Task' : 'Tasks'}
                </Typography>
            </Box>

            <Box sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column',
                minHeight: '200px', // Ensures boxes don't look squashed
                maxHeight: '60vh',  // Scrollable if too many tasks
                overflowY: 'auto'
            }}>
                {hasItems ? (
                    <List disablePadding>
                        {items.map((item, index) => (
                            <Box key={item.id}>
                                <ListItem sx={{ px: 2, py: 1.5 }}>
                                    <TaskItems {...item}/>
                                </ListItem>
                                {index < items.length - 1 && <Divider variant="middle" />}
                            </Box>
                        ))}
                    </List>
                ) : (
                    <Box sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        flexDirection: 'column',
                        justifyContent: 'center', 
                        alignItems: 'center',
                        p: 4,
                        opacity: 0.4
                    }}>
                        <Typography variant="body2">No tasks found</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
}
