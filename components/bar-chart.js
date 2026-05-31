'use client';


import { useTheme } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from 'recharts';

export default function BarChartComponent({ data }) {

    const theme = useTheme();

  return (
    <ResponsiveContainer width="90%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill={theme.palette.text.secondary} barSize={30}/>
      </BarChart>
    </ResponsiveContainer>
  );
}
