

import React from 'react'
import BarChartComponent from '@/components/BarChart'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface AthleteData {
  name: string
  salary: number
  endorsements: number
  total: number
  sport: JSX.Element
}

const Home: React.FC = () => {
  const athleteData: AthleteData[] = [
    {
      name: 'Cristiano Ronaldo',
      salary: 215,
      endorsements: 60,
      total: 275,
      sport: (
        <Avatar>
          <AvatarImage
            src='https://img.freepik.com/free-vector/vector-isolated-realistic-soccer-ball-white_1284-41932.jpg?w=740&t=st=1713500162~exp=1713500762~hmac=d20b36a4d93850eb57a62a7f4b302b82ce6bd91b1d4090a2f72fffebe0b1b589'
            alt='soccer'
          />
          <AvatarFallback>CR</AvatarFallback>
        </Avatar>
      )
    },
    {
      name: 'Jon Rahm',
      salary: 181,
      endorsements: 22,
      total: 203,
      sport: (
        <Avatar>
          <AvatarImage
            src='https://img.freepik.com/premium-vector/illustration-golf-ball_614983-3969.jpg?w=740'
            alt='golf'
          />
          <AvatarFallback>JR</AvatarFallback>
        </Avatar>
      )
    },
    {
      name: 'Lionel Messi',
      salary: 65,
      endorsements: 65,
      total: 130,
      sport: (
        <Avatar>
          <AvatarImage
            src='https://img.freepik.com/free-vector/vector-isolated-realistic-soccer-ball-white_1284-41932.jpg?w=740&t=st=1713500162~exp=1713500762~hmac=d20b36a4d93850eb57a62a7f4b302b82ce6bd91b1d4090a2f72fffebe0b1b589'
            alt='soccer'
          />
          <AvatarFallback>LM</AvatarFallback>
        </Avatar>
      )
    },
    {
      name: 'LeBron James',
      salary: 45.7,
      endorsements: 80,
      total: 125.7,
      sport: (
        <Avatar>
          <AvatarImage
            src='https://img.freepik.com/free-vector/basketball-ball-isolated_1284-42545.jpg?t=st=1713500298~exp=1713503898~hmac=a2e514d4d52b0ddb4fbd1fae826df0436b082bbd6db01fa0f67fbe0e6beffe3b&w=740'
            alt='basketball'
          />
          <AvatarFallback>LJ</AvatarFallback>
        </Avatar>
      )
    },
    {
      name: 'Kylian Mbappé',
      salary: 100,
      endorsements: 25,
      total: 125,
      sport: (
        <Avatar>
          <AvatarImage
            src='https://img.freepik.com/free-vector/vector-isolated-realistic-soccer-ball-white_1284-41932.jpg?w=740&t=st=1713500162~exp=1713500762~hmac=d20b36a4d93850eb57a62a7f4b302b82ce6bd91b1d4090a2f72fffebe0b1b589'
            alt='soccer'
          />
          <AvatarFallback>KM</AvatarFallback>
        </Avatar>
      )
    },
    {
      name: 'Neymar',
      salary: 86,
      endorsements: 35,
      total: 121,
      sport: (
        <Avatar>
          <AvatarImage
            src='https://img.freepik.com/free-vector/vector-isolated-realistic-soccer-ball-white_1284-41932.jpg?w=740&t=st=1713500162~exp=1713500762~hmac=d20b36a4d93850eb57a62a7f4b302b82ce6bd91b1d4090a2f72fffebe0b1b589'
            alt='soccer'
          />
          <AvatarFallback>N</AvatarFallback>
        </Avatar>
      )
    },
    {
      name: 'Stephen Curry',
      salary: 48.9,
      endorsements: 50,
      total: 98.9,
      sport: (
        <Avatar>
          <AvatarImage
            src='https://img.freepik.com/free-vector/basketball-ball-isolated_1284-42545.jpg?t=st=1713500298~exp=1713503898~hmac=a2e514d4d52b0ddb4fbd1fae826df0436b082bbd6db01fa0f67fbe0e6beffe3b&w=740'
            alt='basketball'
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      )
    },
    {
      name: 'Giannis Antetokounmpo',
      salary: 43.4,
      endorsements: 45,
      total: 88.4,
      sport: (
        <Avatar>
          <AvatarImage
            src='https://img.freepik.com/free-vector/basketball-ball-isolated_1284-42545.jpg?t=st=1713500298~exp=1713503898~hmac=a2e514d4d52b0ddb4fbd1fae826df0436b082bbd6db01fa0f67fbe0e6beffe3b&w=740'
            alt='basketball'
          />
          <AvatarFallback>GA</AvatarFallback>
        </Avatar>
      )
    },
    {
      name: 'Kevin Durant',
      salary: 44.9,
      endorsements: 42,
      total: 86.9,
      sport: (
        <Avatar>
          <AvatarImage
            src='https://img.freepik.com/free-vector/basketball-ball-isolated_1284-42545.jpg?t=st=1713500298~exp=1713503898~hmac=a2e514d4d52b0ddb4fbd1fae826df0436b082bbd6db01fa0f67fbe0e6beffe3b&w=740'
            alt='basketball'
          />
          <AvatarFallback>KD</AvatarFallback>
        </Avatar>
      )
    },
    {
      name: 'Patrick Mahomes',
      salary: 59.3,
      endorsements: 25,
      total: 84.3,
      sport: (
        <Avatar>
          <AvatarImage
            src='https://img.freepik.com/free-vector/ball_53876-25476.jpg?w=740&t=st=1713504038~exp=1713504638~hmac=446469031da4afa3ecbc3bbedd2be7f3833664f36cc66806e850208a4c566397'
            alt='football'
            
          />
          <AvatarFallback>PM</AvatarFallback>
        </Avatar>
      )
    }
    // Add other athlete data objects
  ]

  return (
    <main className='container'>
      <div className='flex items-center justify-center'>
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Top 10 Highest-Paid Athletes in the World
        </h2>
      </div>
      <p className="flex items-center justify-center leading-7 mt-4">In Millions</p>
      <div style={{ width: '100%', height: '700px' }}>
        <BarChartComponent data={athleteData} />
      </div>
    </main>
  )
}

export default Home
