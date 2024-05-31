"use client"
import React from 'react'
import Button from '@mui/material/Button';
import { signIn } from "next-auth/react";
import Router from 'next/router';
import "./style.scss"

export default function Login() {
  return (
    <>
      <div className="page page--login">
        {/* <img className='icon-gstar' src="/assets/icons/gstar.png" alt="" /> */}
        <h1>One Rock</h1>
        <div className='login-wrapper'>
          <img className="main-image" src="/assets/base/landing-eagle.png" alt="" />
          <a className="btn--sign-in" href="/api/auth/signin" variant="contained">sign in</a>
        </div>
        {/* <ul className="icons-wrapper row">
          <li className="col">
            <img src="/assets/icons/dev.png" alt="" />
          </li>
          <li className="col">
            <img src="/assets/icons/firebase.png" alt="" />
          </li>
          <li className="col">
            <img src="/assets/icons/github.png" alt="" />
          </li>
          <li className="col">
            <img src="/assets/icons/ikarus.png" alt="" />
          </li>
          <li className="col">
            <img src="/assets/icons/net.png" alt="" />
          </li>
        </ul> */}
      </div>
    </>
  )
}
