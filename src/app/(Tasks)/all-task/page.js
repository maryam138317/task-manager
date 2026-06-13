
import { Paper } from "@mui/material";
import { getAllTasks } from "../../../../lib/tasks";
import TaskGrid from "../../../../components/task-grid";

export const dynamic = "force-dynamic";

export default function AllTasks() {
    const tasks = getAllTasks(); 

    return (
        <Paper sx={{ p: 2, borderRadius: 3 }}>
            <TaskGrid tasks={tasks}/>
        </Paper>
    );
}
