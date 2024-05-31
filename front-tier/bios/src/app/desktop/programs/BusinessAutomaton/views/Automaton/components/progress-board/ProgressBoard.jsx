import React, { use, useEffect, useState } from 'react'
import "./progressboard.scss";
import { ProgressBar, Tab, Tabs } from '@react95/core';
import { width } from 'styled-system';
import CustomProgressBar from '../../../../components/CustomProgressBar';

export default function ProgressBoard(activeBusiness) {

    const [journey, setJourney] = useState({

        journeyHistory: [],
        journeyQueue: [
            {
                name: "Stage 1",
                description: ``,
                completion: {
                    numerator: 0,
                    denominator: 200,
                },
                actions: [
                    {
                        title: "Microsoft",
                        section: "partner",
                        type: "create",
                        description: "Partnering up with Microsoft",
                        time_in_hours: 0.5
                    },
                    {
                        title: "Create Virtual Network",
                        section: "activity",
                        type: "create",
                        description: "Create a virtual network",
                        time_in_hours: 0.5
                    },

                ]
            }
        ]
    }

    )

    const [partners, setPartners] = useState([
        {
            name: "Thomas"
        },
        {
            name: "Robbe"
        },
        // {
        //     name: "Google"
        // },
        // {
        //     name: "OpenAI"
        // },
        // {
        //     name: "NVIDIA"
        // }
    ])

    var activities = [
        {
            name: "Create Virtual Network",
            time_in_hours: "0.5"
        },
        // {
        //     name: "Setup SQL Server",
        //     time_in_hours: "0.5"
        // },
        // {
        //     name: "Setup Wordpress",
        //     time_in_hours: "1"
        // },
        // {
        //     name: "Buy Domainname",
        //     time_in_hours: "0.2"
        // },
        // {
        //     name: "Setup SSL Certificate",
        //     time_in_hours: "0.2"
        // },
        // {
        //     name: "Setup CDN",
        //     time_in_hours: "0.5"
        // }
    ]

    var valuePropositions = [
        {
            name: "Website",
            type: "Product",
        },
        // {
        //     name: "Blog",
        //     type: "Product",
        // },
        // {
        //     name: "E-commerce",
        //     type: "Product",
        // },
        // {
        //     name: "Cloud Integration",
        //     type: "Service",
        // },
        // {
        //     name: "Analytics Report",
        //     type: "Product",
        // },
        // {
        //     name: "Go To Market Plan",
        //     type: "Product",
        // },
        // {
        //     name: "SEO Optimization",
        //     type: "Service",
        // }
    ]

    var resources = [
        {
            name: "Virtual Network",
            type: "Infrastructure",
            cost_per_hour: 0.0002
        },
        // {
        //     name: "SQL Server",
        //     type: "Infrastructure",
        //     seller: "Azure",
        //     cost_per_hour: 0.00001
        // },
        // {
        //     name: "Web Server",
        //     type: "Infrastructure",
        //     seller: "Azure",
        //     cost_per_hour: 0.0001
        // },
        // {
        //     name: "Virtual Machine",
        //     type: "Infrastructure",
        //     seller: "Azure",
        //     cost_per_hour: 0.0003,
        // },
        // {
        //     name: "Kubernetes cluster",
        //     type: "Infrastructure",
        //     seller: "Azure",
        //     cost_per_hour: 0.0005,
        // },
        // {
        //     name: "Software Developer",
        //     type: "Employee",
        //     cost_per_hour: 0.0005,
        // }
    ]

    var channels = [
        // {
        //     name: "Web",
        //     type: "Online",
        // },
        // {
        //     name: "Mobile",
        //     type: "Online",
        // },
        // {
        //     name: "Social Media",
        //     type: "Online",
        //     signal: "🛜",
        // },
        // {
        //     name: "Physical Store",
        //     type: "Offline",
        // },
        // {
        //     name: "Sales Team",
        //     type: "Offline",
        // }
    ]

    var customers = [
        {
            name: "Rosalie",
            age: 25,
            role: "Business Owner"
        },
        {
            name: "Lieselotte",
            age: 25,
        },
        {
            name: "Rob",
            age: 25,
        },
        // {
        //     name: "John F. Kennedy",
        //     age: 59,
        // },
        // {
        //     name: "James Madison",
        //     age: 40,
        // },
        // {
        //     name: "Bill Gates",
        //     age: 65,
        // },
        // {
        //     name: "Steve Jobs",
        //     age: 56,
        // },
        // {
        //     name: "Elon Musk",
        //     age: 49,
        // },
        // {
        //     name: "Jeff Bezos",
        //     age: 57,
        // }
    ]

    var customerRelations = [
        {
            activity: "Office Visit"
        },
        // {
        //     activity: "Helpdesk Call"
        // },
        // {
        //     activity: "Email"
        // },
        // {
        //     activity: "Chat"
        // },
        // {
        //     activity: "Social Media"
        // },
        // {
        //     activity: "Feedback Form"
        // }
    ]

    var costStructure = [
        {   
            name: "Virtual Network",
            cost_per_hour: 0.002,
        }
    ]
    var revenueStream = [
        {   
            name: "Virtual Network",
            cost_per_hour: 0.002,
        }
    ]

    const addItem = () => {
        console.log("Add item");
    }

    const openAreaMenu = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <>
            <div className="tab tab--progress-board">
                <div className="tab--body">
                    <div className="row" style={{ flex: 4 }}>
                        <div className="col">
                            <div className="business-area partners">
                                <div className='business-area__header'>
                                    <h2>Partners</h2>
                                    <button>...</button>
                                </div>
                                <div className='table-wrapper'>
                                    {(typeof partners !== undefined) && (
                                        <table className="interactive">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {partners && partners.map(partner => (
                                                    <tr>
                                                        <td>{partner.name}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="business-area activities">
                                <div className='business-area__header'>
                                    <h2>Activities</h2>
                                    <button>
                                        ...
                                    </button>
                                </div>
                                <div className='table-wrapper'>
                                    {(typeof activities !== undefined) && (
                                        <>
                                            <table className="interactive">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* Loop over List */}
                                                    {activities.map(activity => (
                                                        <tr>
                                                            <td>{activity.name}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <CustomProgressBar className='mt-2' />
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="business-area resources mt-2">
                                <div className='business-area__header'>
                                    <h2>Resources</h2>
                                    <button>...</button>
                                </div>
                                <div className='table-wrapper'>
                                    {(typeof resources !== undefined) && (
                                        <>
                                            <table className="interactive">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>type</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {resources.map((resource, idx) => (
                                                        <tr key={`resource-${idx}`}>
                                                            <td>{resource.name}</td>
                                                            <td>{resource.type}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <CustomProgressBar className='mt-2' />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="business-area value-proposition">
                                <div className='business-area__header'>
                                    <h2>Value Proposition</h2>
                                    <button>...</button>
                                </div>
                                <div className='table-wrapper'>
                                    {(typeof valuePropositions !== undefined) && (
                                        <table className="interactive">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Type</th>
                                                    <th>✏️</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {valuePropositions.map(valueProposition => (
                                                    <tr>
                                                        <td>{valueProposition.name}</td>
                                                        <td>{valueProposition.type}</td>
                                                        <td>
                                                            <span className='tr__lvl'>1</span>
                                                            <span className='tr__pencil'>✏️</span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="business-area customer-relations">
                                <div className='business-area__header'>
                                    <h2>Customer Relations</h2>
                                    <div class="business-area__actions">
                                        <button className="business-area__options" onClick={openAreaMenu}>...</button>
                                        <div className="business-area__menu">
                                            <button className="menu-item">Add</button>
                                            <button className="menu-item">Generate</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='table-wrapper'>
                                    {(typeof customerRelations !== undefined) && (
                                        <table className="interactive">
                                            <thead>
                                                <tr>
                                                    <th>Activity</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {customerRelations.map(customerRelation => (
                                                    <tr>
                                                        <td>{customerRelation.activity}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                            <div className="business-area channels mt-2">
                                <div className='business-area__header'>
                                    <h2>Channels</h2>
                                    <button>
                                        ...
                                    </button>
                                </div>
                                <div className='table-wrapper'>
                                    {typeof channels !== "undefined" && (
                                        <table className="interactive">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>type</th>
                                                    <th>pulse</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {channels.map(channel => (
                                                    <tr>
                                                        <td>{channel.name}</td>
                                                        <td>{channel.type}</td>
                                                        <td>🫀</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="business-area customers">
                                <div className='business-area__header'>
                                    <h2>Customers</h2>
                                    <button>...</button>
                                </div>
                                <div className='table-wrapper'>
                                    {(typeof customers !== undefined) && (
                                        <table className="interactive">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Age</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {customers.map(customer => (
                                                    <tr>
                                                        <td>{customer.name}</td>
                                                        <td>{customer.age}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2" style={{ flex: 1 }}>
                        <div className="col">
                            <div className="business-area cost-structure">
                                <div className='business-area__header'>
                                    <h2>Cost Structure</h2>
                                    <button>...</button>
                                </div>
                                <div className='table-wrapper'>
                                    {(typeof costStructure !== undefined) && (
                                        <table className="interactive">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {costStructure.map(costStructure => (
                                                    <tr>
                                                        <td>{costStructure.name}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="business-area revenue-stream">
                                <div className='business-area__header'>
                                    <h2>Revenue Stream</h2>
                                    <button>...</button>
                                </div>
                                <div className='table-wrapper'>
                                    {(typeof revenuestream !== undefined) && (
                                        <table className="interactive">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {revenuestream.map(revenue => (
                                                    <tr>
                                                        <td>{revenue.name}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab--footer">
                    <div className='main-action'>
                        <CustomProgressBar />
                        <h2 className="mt-2">Creating a Wordpress Application</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
