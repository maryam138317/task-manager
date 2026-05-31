"use client";
import { List, ListItem, Typography, Box } from "@mui/material";
import TaskItems from "./task-item";
import { useSearch } from "./searchContext";

export default function TaskGrid({ tasks }) { 
    const { searchQuery } = useSearch();

    const filteredTasks = tasks?.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (!filteredTasks || filteredTasks.length === 0) {
        return (
            <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography color="text.secondary">
                    {searchQuery ? `No matches for "${searchQuery}"` : "No tasks found"}
                </Typography>
            </Box>
        );
    }

    return (
        <List sx={{ width: '100%' }}>
            {filteredTasks.map(task => (
                <ListItem 
                    key={task.id} 
                    divider 
                    sx={{ px: 1 }}
                >
                    <TaskItems 
                        id={task.id}
                        title={task.title}
                        status={task.status}
                        priority={task.priority}
                        date={task.date}
                    />
                </ListItem>
            ))}
        </List>
    );
}
