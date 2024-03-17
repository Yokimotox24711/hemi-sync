"use client"
import React, { useState } from 'react'

export default function Nav({setActiveView}) {
    const [menuOpen, setMenuOpen] = useState(false)

    function setActivePage (page) {
        setActiveView(page)
        setMenuOpen(false)
    }

    return (
        <>
            <div class={`page-blocker ${menuOpen && "active"}`} onClick={() => setMenuOpen(false)}></div>
            <div className='nav-wrapper'>
                <nav className={`menu--top mb-2 ${menuOpen && "open"}`}>
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
            </div>
        </>
    )
}
