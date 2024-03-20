"use client"
import React, { useState } from 'react'
import "./Nav.scss";

export default function Nav({ setActiveView }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [menuRightOpen, setMenuRightOpen] = useState(false)

    function setActivePage(page) {
        setActiveView(page)
        setMenuOpen(false)
    }

    return (
        <>
            <div className={`page-blocker ${menuOpen && "active"}`} onClick={() => setMenuOpen(false)}></div>
            <div className='nav-wrapper'>
                <nav className={`menu--top  ${menuOpen && "open"}`}>
                    <div className="main-buttons">
                        <button onClick={() => setMenuOpen(!menuOpen)}>Game</button>
                    </div>
                    <ul className={`list--dropdown`}>
                        <li className={`list--dropdown-item`}>
                            <button onClick={() => setActivePage("creator")}>Create Business</button>
                        </li>
                        <li>
                            <button onClick={() => setActivePage("business-roster")}>Business Roster</button>
                        </li>
                    </ul>
                </nav>
                <div className="display">
                    <h3>Fitality</h3>
                    <h5>launch</h5>
                </div>
                <div>
                    <div></div>
                </div>
                <nav className={`menu--top  ${menuRightOpen && "open"}`}>
                    <div className="main-buttons">
                        <button onClick={() => setMenuRightOpen(!menuRightOpen)}>Level Up</button>
                    </div>
                    <ul className={`list--dropdown`}>
                        <li className={`list--dropdown-item`}>
                            <button onClick={() => setActivePage("creator")}>Create Business</button>
                        </li>
                        <li>
                            <button onClick={() => setActivePage("business-roster")}>Business Roster</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
