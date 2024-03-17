// "use client"
import React, { useState } from 'react'
import "./BusinessRoster.scss";
import { Frame } from '@react95/core';

export default function MainMenu({setActiveView, setActiveBusiness}) {

    const [businesses, setBusinesses] = useState([
        {
            name: 'Apple',
            type: 'Tech',
        },
        {
            name: 'Bioplanet',
            type: 'Supermarket'
        },
    ]);

    function activateBusiness (business) {
        setActiveBusiness(business)
        setActiveView('automaton')  
    }

    return (
        <div className='page page--business-roster'>

            {/* <Creator /> */}

            <Frame className="business-list-wrapper" w={"100%"} h={"100%"} boxShadow="in" padding={4}>
                {
                    businesses.map((business, index) => {
                        return (
                            <button key={index} onClick={() => activateBusiness(business.name)}>
                                <div className="business-list-item">
                                    <h2>{business.name}</h2>
                                    <p>{business.type}</p>
                                </div>
                            </button>
                        )
                    })
                }
            </Frame>

        </div>
    )
}
