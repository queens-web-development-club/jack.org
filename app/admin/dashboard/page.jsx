"use client"
import React from 'react'
import { useUserContext } from '@/Context/UserContext'

export default function Dashboard() {
  const { user } = useUserContext()
  return (
    <div>Dashboard</div>
  )
}
