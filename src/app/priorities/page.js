import { Typography, Container,Grid } from "@mui/material";
import { getTasksByPriority } from "../../../lib/tasks";
import PriorityBox from "../../../components/priority-task-box";

export const dynamic = "force-dynamic";

export default function Priority() {
    // Note: In Next.js App Router, these calls are usually done in a Server Component
    const priorityTasks = [
        { title: 'Not Important', items: getTasksByPriority(0), color: '#4caf50' },
        { title: 'Important', items: getTasksByPriority(1), color: '#ff9800' },
        { title: 'Urgent', items: getTasksByPriority(2), color: '#f44336' },
    ];

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, opacity: 0.9 }}>
                Priority Dashboard
            </Typography>
            
            <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
                {priorityTasks.map(task => (
                    <Grid key={task.title} size={{ xs: 12, md: 4 }} sx={{ display: 'flex' }}>
                        <PriorityBox 
                            items={task.items} 
                            title={task.title} 
                            accentColor={task.color} 
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
