"use client"
import React from 'react'
import { ThemeProvider } from '@react95/core';
import '@react95/icons';
import { List, TaskBar } from '@react95/core'
import Startmenu from './components/Startmenu'

export default function React95Layout({children}) {
  return (
    <>
        <ThemeProvider>
            {children}
            <TaskBar list={<Startmenu/>}></TaskBar>
        </ThemeProvider>
    </>
  )
}
