import React from 'react'
import Link from 'next/link'

export default function Back() {
  return (
    <Link href={`/admin`} className='text-3xl text-white'>{"< Back"}</Link>
  )
}
