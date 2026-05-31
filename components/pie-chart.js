'use client';

import { Box, useTheme } from "@mui/material";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Cell,
  Legend,
} from "recharts";

export default function PieChartComponent({ data }) {
    const theme = useTheme();

  const COLORS = [theme.palette.primary.main, theme.palette.secondary.main];

  return (
    <Box
      sx={{
        width: "100%",
        height: 300,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="title"
            cx="50%"
            cy="50%"
            outerRadius={90}
            innerRadius={55}
            paddingAngle={4}
            label={({ title, percent }) =>
              `${title} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}
