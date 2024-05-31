"use client"
import React from 'react'
import "./FXProvider.scss";

export default function FXProvider({ children }) {
  return (
    <>
      <div className="scanlines">
        {children}
      </div>
    </>
  )
}
