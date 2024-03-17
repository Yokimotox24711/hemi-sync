"use client"
import React from 'react'
import { ThemeProvider } from '@react95/core';
import '@react95/icons';
import { TaskBar } from '@react95/core'
import Startmenu from './components/Startmenu'
import "98.css";

export default function DesktopLayout({children}) {

  return (
    <>
        <ThemeProvider>
            {children}
            <TaskBar list={<Startmenu/>}></TaskBar>
        </ThemeProvider>
    </>
  )
}