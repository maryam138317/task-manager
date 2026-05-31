import { Box, Paper, Typography } from "@mui/material";
//import { ResponsiveContainer } from "recharts";
import { getAllTasks, getPrioritySummary, getStatusSummary } from "../../../lib/tasks";
import PieChartComponent from "../../../components/pie-chart";
import BarChartComponent from "../../../components/bar-chart";

export default function Status() {

    const tasksNumber = getAllTasks().length;

    const {completed, Notcompleted} = getStatusSummary();

    const pieChartData = [
        {title: 'Completed', count: completed},
        {title: 'Not Completed', count: Notcompleted}
    ]


    const {notImp, Imp, urg} = getPrioritySummary();

    const barChartData = [
        {title: 'Not Important', count: notImp},
        {title: 'Important', count: Imp},
        {title: 'Urgent', count: urg}
    ]
    

    return <Paper sx={{bgcolor: 'background.second', display: 'flex', flexDirection: 'column', gap: 5, py: 4, pl: 6}}>
        <Typography sx={{fontWeight: '800'}} variant="h5">
            Chart Dashboard
        </Typography>
        {tasksNumber === 0 ? 
        <Typography>No Tasks here!</Typography>    
        :
        <>
        <Box sx={{bgcolor: 'background.default', borderRadius: '1rem', py: 3}}>
            <PieChartComponent data={pieChartData}/>       
        </Box>
        <Box sx={{bgcolor: 'background.default', borderRadius: '1rem', width: '100%', minHeight: '30vh', py: 3}}>
            <BarChartComponent data={barChartData}/>
        </Box>
        </>
    }
    </Paper>
}