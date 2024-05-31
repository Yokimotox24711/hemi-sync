import React from 'react'


export default function Window({children, ...props}) {
    const {title} = props

    return (
        <>
            <div className="window" style={{ width: "100%", height: "100%" }}>
                <div className="window-content">
                    <div className="title-bar">
                        <div className="title-bar-text">{title}</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize" />
                            <button aria-label="Maximize" />
                            <button aria-label="Close" />
                        </div>
                    </div>
                    <div className="window-body">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
