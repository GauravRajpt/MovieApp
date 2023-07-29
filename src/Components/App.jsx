import React from 'react'
import { CssBaseline } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Navbar } from './helper'


export const App = () => {
  return (
  <div>
  <CssBaseline/>
  <Navbar/>
  <main>
  <Outlet/>
  </main>
  </div>
  )
}
