"use client"
import React from 'react'
import BusinessGenerator from './programs/BusinessGenerator/BusinessGenerator'
import "./style.scss";

function DesktopPage() {
    return (
        <>
            <div className="desktop">
                <BusinessGenerator></BusinessGenerator>
            </div>
            <div className="taskbar"></div>
        </>
    )
}

export default DesktopPage