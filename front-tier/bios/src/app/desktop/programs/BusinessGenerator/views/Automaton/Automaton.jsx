import { Tab, Tabs } from '@react95/core'
import React from 'react'
import ProgressBoard from './components/progress-board/ProgressBoard'
import Stats from './components/stats/Stats'
import BusinessRoster from '../BusinessRoster/BusinessRoster'
import './Automaton.scss'

export default function Automaton() {
    return (
        <>
            <div className="page page--automaton">
                <Tabs className="tabs" defaultActiveTab="Progress Board">
                    <Tab title="Progress Board">
                        <ProgressBoard />
                    </Tab>
                    <Tab title="Stats">
                        <Stats />
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}
