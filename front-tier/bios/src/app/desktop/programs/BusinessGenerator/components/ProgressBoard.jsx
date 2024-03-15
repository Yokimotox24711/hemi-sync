import React from 'react'
import "./progressboard.scss";

export default function ProgressBoard() {
    return (
        <>
            <div className="page page--progress-board">
                <div className="page--body">
                    <div className="row">
                        <div className="col">
                            <div className="business-area partners">
                                <h2>Partners</h2>
                            </div>
                        </div>
                        <div className="col">
                            <div className="business-area activity">
                                <h2>Activity</h2>
                            </div>
                            <div className="business-area resources">
                                <h2>Resources</h2>
                            </div>
                        </div>
                        <div className="col">
                            <div className="business-area value-proposition">
                                <h2>Value Proposition</h2>
                                <div className='table-wrapper'>
                                    <table class="interactive">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Version</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>MySQL ODBC 3.51 Driver</td>
                                                <td>3.51.11.00</td>
                                            </tr>
                                            <tr>
                                                <td>SQL Server</td>
                                                <td>3.70.06.23</td>
                                            </tr>
                                            <tr>
                                                <td>SQL Server</td>
                                                <td>3.70.06.23</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="business-area customer-relations">
                                <h2>Customer Relations</h2>
                            </div>
                            <div className="business-area channels">
                                <h2>Channels</h2>
                            </div>
                        </div>
                        <div className="col">
                            <div className="business-area customers">
                                <h2>Customers</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page--footer">
                </div>
            </div>
        </>
    )
}
