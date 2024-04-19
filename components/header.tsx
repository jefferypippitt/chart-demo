"use client";

import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Header() {
  return (
    <header className='py-4'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-6'>
          <li>
            <Link href='/'>home</Link>
          </li>
          <li>
            <Link href='/about'>about</Link>
          </li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  )
}
