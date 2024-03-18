import { Tab, Tabs } from '@react95/core'
import React, { useState } from 'react'
import ProgressBoard from './components/progress-board/ProgressBoard'
import Stats from './components/stats/Stats'
import Journey from './components/journey/Journey'
import BusinessRoster from '../BusinessRoster/BusinessRoster'
import './Automaton.scss'
import Controller from './components/controller/Controller'

export default function Automaton(activeBusiness) {

    var {activeBusiness} = activeBusiness;
    return (
        <>
            {/* <Controller/> */}
            <div className="page page--automaton">
                <Tabs className="tabs" defaultActiveTab="Progress Board">
                    <Tab title="Journey">
                        <Journey activeBusiness={activeBusiness}/>
                    </Tab>
                    <Tab title="Progress Board">
                        <ProgressBoard activeBusiness={activeBusiness}/>
                    </Tab>
                    <Tab title="Stats">
                        <Stats />
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}
