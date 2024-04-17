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
}

interface BarChartProps {
  data: AthleteData[];
}


const BarChartComponent: React.FC<BarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart data={data} margin={{ top: 50, right: 30, left: 30, bottom: 50 }}>
        <CartesianGrid />
        <XAxis dataKey="name" type="category" angle={-45} textAnchor="end" interval={0} height={120} />
        <YAxis type="number" />
        <Tooltip />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        <Bar dataKey="salary" fill="#8884d8" barSize={20} name="Salary" stackId="stack" />
        <Bar dataKey="endorsements" fill="#82ca9d" barSize={20} name="Endorsements" stackId="stack" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;