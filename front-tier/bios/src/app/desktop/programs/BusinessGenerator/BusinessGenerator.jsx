import React, { useEffect, useState } from 'react'
import "./BusinessGenerator.scss";
import Creator from './views/Creator/Creator';
import ProgressBoard from './views/Automaton/components/progress-board/ProgressBoard';
import Window from '../../components/Window';
import Automaton from './views/Automaton/Automaton';
import BusinessRoster from './views/BusinessRoster/BusinessRoster';
import Nav from './components/Nav';

export default function BusinessGenerator({ children }) {

    const [activeView, setActiveView] = useState('business-roster')
    const [activeBusiness, setActiveBusiness] = useState('business-roster')
    
    return (
        
        <>
            <Window title="Business Automaton">
                <Nav setActiveView={setActiveView}/>
                {activeView === 'business-roster' && <BusinessRoster setActiveView={setActiveView} setActiveBusiness={setActiveBusiness} />}
                {activeView === 'creator' && <Creator/>}
                {(activeView === 'automaton' && activeBusiness) && <Automaton activeBusiness={activeBusiness} />}
            </Window>
        </>
    )
}
