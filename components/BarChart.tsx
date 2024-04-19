"use client";

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface AthleteData {
  name: string;
  salary: number;
  endorsements: number;
  total: number;
  sport: JSX.Element; // Include the sport property in AthleteData interface
}

interface BarChartProps {
  data: AthleteData[];
}

const BarChartComponent: React.FC<BarChartProps> = ({ data }) => {
  const barWidth = 60; // Width of each bar
  const barSpacing = 75; 
  const avatarSize = 50; 
  const avatarOffset = 130; 

  return (
    <ResponsiveContainer width="120%" height={500}>
      <BarChart data={data} margin={{ top: 50, right: 30, left: 30, bottom: 100 }}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis
          dataKey="name"
          type="category"
          angle={-45}
          textAnchor="end"
          height={60}
        />
        <YAxis type="number" />
        <Tooltip />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
 
        <Bar dataKey="salary" fill="#8884d8" barSize={30} name="Salary" stackId="stack" />
        <Bar dataKey="endorsements" fill="#82ca9d" barSize={30} name="Endorsements" stackId="stack" />
        <Bar dataKey="total" fill="#ff7f0e" barSize={30} name="Total" stackId="stack" />
        {data.map((athlete, index) => (
          <foreignObject
            key={index}
            x={(index * (barWidth + barSpacing)) + (barWidth - avatarSize) / 2 + avatarOffset} 
            y={400} 
            width={avatarSize}
            height={avatarSize}
          >
            <div style={{ width: '100%', height: '100%' }}>
              {athlete.sport}
            </div>
          </foreignObject>
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
