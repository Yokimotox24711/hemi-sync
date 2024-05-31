// "use client"
import React, { useEffect, useState } from 'react'
import "./BusinessRoster.scss";
import { Frame } from '@react95/core';

export default function MainMenu({ setActiveView, setActiveBusiness }) {


    const [businesses, setBusinesses] = useState();

    const getBusiness = async () => {
        const res = await fetch("/api/program/business-automaton/business", {
            method: "GET"
        });
        var data = await res.json();
        setBusinesses(data);
    };

    useEffect(() => {
        getBusiness();
    }, []);

    function activateBusiness(business) {
        setActiveBusiness(business)
        setActiveView('automaton')
    }

    return (
        <div className='page page--business-roster'>

            <Frame className="business-list-wrapper" w={"100%"} h={"100%"} boxShadow="in" padding={4}>
                {
                    businesses &&
                    businesses.map((business, index) => {
                        return (
                            <button key={index} onClick={() => activateBusiness(business)}>
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
