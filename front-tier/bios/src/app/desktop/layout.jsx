"use client"
import React from 'react'
import { ThemeProvider } from '@react95/core';
import '@react95/icons';
import { List, TaskBar } from '@react95/core'
import Startmenu from './components/Startmenu'
import "98.css";

// import { getServerSession } from "next-auth/next"
// import { authOptions } from "./auth/[...nextauth]"

export default async function React95Layout({children}) {

  // const session = await getServerSession(req, res, authOptions)
  // if (session) {
  //   res.send({
  //     content:
  //       "This is protected content. You can access this content because you are signed in.",
  //   })
  // } else {
  //   res.send({
  //     error: "You must be signed in to view the protected content on this page.",
  //   })
  // }

  return (
    <>
        <ThemeProvider>
            {children}
            <TaskBar list={<Startmenu/>}></TaskBar>
        </ThemeProvider>
    </>
  )
}