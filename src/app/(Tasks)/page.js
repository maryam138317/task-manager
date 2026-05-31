import { Paper } from "@mui/material";
import { getTodayTasks } from "../../../lib/tasks";
import TaskGrid from "../../../components/task-grid";


export default function TodaysTask() {

  const tasks = getTodayTasks();

  return (
        <Paper sx={{ p: 2, borderRadius: 3 }}>
            <TaskGrid tasks={tasks}/>
        </Paper>
  );
}
