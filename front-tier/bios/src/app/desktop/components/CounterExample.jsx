"use client"
import React from 'react'

export default function CounterExample() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div style={{  }} className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Counter</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" />
                        <button aria-label="Maximize" />
                        <button aria-label="Close" />
                    </div>
                </div>

                <div className="window-body">
                    <p style={{ textAlign: "center" }}>Current count: {count}</p>
                    <div className="field-row" style={{ justifyContent: "center" }}>
                        <button onClick={() => setCount(count + 1)}>+</button>
                        <button onClick={() => setCount(count - 1)}>-</button>
                        <button onClick={() => setCount(0)}>0</button>
                    </div>
                </div>
            </div>
        </>
    )
}
