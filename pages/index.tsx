import React, { useState, useEffect } from 'react'
import Dashboard from '../components/Dashboard'
import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-darker">
      <Navigation />
      <Dashboard />
    </div>
  )
}
