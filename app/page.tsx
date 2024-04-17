"use client";

import React from 'react';
import BarChartComponent from "@/components/BarChart";

const Home: React.FC = () => {
  const athleteData = [
    {
      name: 'Cristiano Ronaldo',
      salary: 215,
      endorsements: 60,
    },
    {
      name: 'Jon Rahm',
      salary: 181,
      endorsements: 22,
    },
    {
      name: 'Lionel Messi',
      salary: 65,
      endorsements: 65,
    },
    {
      name: 'LeBron James',
      salary: 45.7,
      endorsements: 80,
    },
    {
      name: 'Kylian Mbappé',
      salary: 100,
      endorsements: 25, // Corrected property name
    },
    {
      name: 'Neymar',
      salary: 86,
      endorsements: 35, // Corrected property name
    },
    {
      name: 'Stephen Curry',
      salary: 48.9,
      endorsements: 50,
    },
    {
      name: 'Giannis Antetokounmpo',
      salary: 43.4,
      endorsements: 45,
    },
    {
      name: 'Kevin Durant',
      salary: 44.9,
      endorsements: 42,
    },
    {
      name: 'Patrick Mahomes',
      salary: 59.3,
      endorsements: 25,
    },  
    // Add other athlete data objects
  ];
  return (
    <main className="container">
      <h3 className="text-2xl font-semibold mb-4">
        Top 10 Highest-Paid Athletes in the World
      </h3>
      <div style={{ width: '100%', height: '600px' }}>
        <BarChartComponent data={athleteData} />
      </div>
    </main>
  );
};

export default Home;
