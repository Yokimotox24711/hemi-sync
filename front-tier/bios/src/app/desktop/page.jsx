"use client"
import React from 'react'
import BusinessAutomaton from './programs/BusinessAutomaton/BusinessAutomaton'
import "./style.scss";

function DesktopPage() {
    return (
        <>
            <div className="desktop">
                <BusinessAutomaton></BusinessAutomaton>
            </div>
            {/* <div className="taskbar"></div> */}
        </>
    )
}

export default DesktopPage