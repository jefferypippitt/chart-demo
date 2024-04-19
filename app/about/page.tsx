import { Button } from '@/components/ui/button'

import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <section className='container'>
      <h3 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight mb-4'>
        Chart Demo
      </h3>
      <Link
        href='https://www.sportico.com/feature/highest-paid-athletes-in-the-world-1234765608/'
        target='_blank'
      >
        <Button variant='outline'>
        source:
          https://www.sportico.com/feature/highest-paid-athletes-in-the-world-1234765608/
        </Button>
      </Link>
    </section>
  )
}
