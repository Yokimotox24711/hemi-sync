import React from 'react'
import Creator from './components/Creator';
import ProgressBoard from './components/ProgressBoard';

export default function BusinessGenerator() {
    return (
        <>
            <div className="window" style={{ width: "800px", height: "500px" }}>
                <div className="window-content">
                    <div className="title-bar">
                        <div className="title-bar-text">Business Generator</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize" />
                            <button aria-label="Maximize" />
                            <button aria-label="Close" />
                        </div>
                    </div>
                    <div className="window-body">
                        {/* <Creator/> */}
                        <ProgressBoard/>
                    </div>
                </div>
            </div>
            {/* 
            <div className="test-window" style={{ background: "white", height: "200px", display: "flex", flexDirection: "column" }}>
                <header>test header</header>
                <main style={{ flex: 1}}>
                    <ul>
                        {Object.entries(businessTypes).map(([category, types], idx) => (
                            <>
                                {types.map((type, typeIdx) => (
                                    <li key={typeIdx}>{type}</li>
                                ))}
                            </>
                        ))}
                    </ul>
                </main>
            </div> */}
        </>
    )
}
