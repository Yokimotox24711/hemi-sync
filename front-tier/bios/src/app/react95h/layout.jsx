import React from 'react'
import { Button, ThemeProvider } from '@react95/core';
import '@react95/icons/icons.css';

export default function React95Layout({children}) {
  return (
    <>
        <ThemeProvider>
            <Button>Click me!</Button>
        </ThemeProvider>
    </>
  )
}
