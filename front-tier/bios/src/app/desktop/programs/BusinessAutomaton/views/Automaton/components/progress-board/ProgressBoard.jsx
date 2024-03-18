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

    var partners = [
        {
            name: "Microsoft"
        },
        {
            name: "Google"
        },
        {
            name: "OpenAI"
        },
        {
            name: "NVIDIA"
        }
    ]

    var activities = [
        {
            name: "Create Virtual Network",
            time_in_hours: "0.5"
        },
        {
            name: "Setup SQL Server",
            time_in_hours: "0.5"
        },
        {
            name: "Setup Wordpress",
            time_in_hours: "1"
        },
        {
            name: "Buy Domainname",
            time_in_hours: "0.2"
        },
        {
            name: "Setup SSL Certificate",
            time_in_hours: "0.2"
        },
        {
            name: "Setup CDN",
            time_in_hours: "0.5"
        }
    ]

    var valuePropositions = [
        {
            name: "Website",
            type: "Product",
        },
        {
            name: "Blog",
            type: "Product",
        },
        {
            name: "E-commerce",
            type: "Product",
        },
        {
            name: "Cloud Integration",
            type: "Service",
        },
        {
            name: "Analytics Report",
            type: "Product",
        },
        {
            name: "Go To Market Plan",
            type: "Product",
        },
        {
            name: "SEO Optimization",
            type: "Service",
        }
    ]

    var resources = [
        {
            name: "Virtual Network",
            type: "Infrastructure",
            cost_per_hour: 0.0002
        },
        {
            name: "SQL Server",
            type: "Infrastructure",
            seller: "Azure",
            cost_per_hour: 0.00001
        },
        {
            name: "Web Server",
            type: "Infrastructure",
            seller: "Azure",
            cost_per_hour: 0.0001
        },
        {
            name: "Virtual Machine",
            type: "Infrastructure",
            seller: "Azure",
            cost_per_hour: 0.0003,
        },
        {
            name: "Kubernetes cluster",
            type: "Infrastructure",
            seller: "Azure",
            cost_per_hour: 0.0005,
        },
        {
            name: "Software Developer",
            type: "Employee",
            cost_per_hour: 0.0005,
        }
    ]

    var channels = [
        {
            name: "Web",
            type: "Online",
        },
        {
            name: "Mobile",
            type: "Online",
        },
        {
            name: "Social Media",
            type: "Online",
        },
        {
            name: "Physical Store",
            type: "Offline",
        },
        {
            name: "Sales Team",
            type: "Offline",
        }
    ]

    var customers = [
        {
            name: "Jimmy McMillan",
            age: 25,
        },
        {
            name: "Franklin D. Roosevelt",
            age: 25,
        },
        {
            name: "John F. Kennedy",
            age: 59,
        },
        {
            name: "James Madison",
            age: 40,
        },
        {
            name: "Bill Gates",
            age: 65,
        },
        {
            name: "Steve Jobs",
            age: 56,
        },
        {
            name: "Elon Musk",
            age: 49,
        },
        {
            name: "Jeff Bezos",
            age: 57,
        }
    ]

    var customerRelations = [
        {
            activity: "Helpdesk Call"
        },
        {
            activity: "Email"
        },
        {
            activity: "Chat"
        },
        {
            activity: "Social Media"
        },
        {
            activity: "Feedback Form"
        }
    ]

    const addItem = () => {
        console.log("Add item");
    }

    return (
        <>
            <div className="tab tab--progress-board">
                <div className="tab--body">
                    <div className="row" style={{ flex: 4 }}>
                        <div className="col">
                            <div className="business-area partners">
                                <h2>Partners</h2>
                                <div className='table-wrapper'>
                                    {(partners && partners.length) === 0 && (
                                        <table className="interactive">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {partners.map(partner => (
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
                                <h2>Activities</h2>
                                <div className='table-wrapper'>
                                    {(activities && activities.length) === 0 && (
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
                                <h2>Resources</h2>
                                <div className='table-wrapper'>
                                    {(resources && resources.length) === 0 && (
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
                                <h2>Value Proposition</h2>
                                <div className='table-wrapper'>
                                    {(valuePropositions && valuePropositions.length) === 0 && (
                                        <table className="interactive">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {valuePropositions.map(valueProposition => (
                                                    <tr>
                                                        <td>{valueProposition.name}</td>
                                                        <td>{valueProposition.type}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                    <button className='btn--add'>
                                        Add Value Proposition
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="business-area customer-relations">
                                <h2>Customer Relations</h2>
                                <div className='table-wrapper'>
                                    {(customerRelations && customerRelations.length) === 0 && (
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
                                <h2>Channels</h2>
                                <div className='table-wrapper'>
                                    {(channels && channels.length) === 0 && (
                                        <table className="interactive">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {channels.map(channel => (
                                                    <tr>
                                                        <td>{channel.name}</td>
                                                        <td>{channel.type}</td>
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
                                <h2>Customers</h2>
                                <div className='table-wrapper'>
                                    {(customers && customers.length) === 0 && (
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
                                <h2>Cost Structure</h2>
                                <div className='table-wrapper'>
                                    {(channels && channels.length) === 0 && (
                                        <table className="interactive">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {partners.map(partner => (
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
                            <div className="business-area cost-structure">
                                <h2>Revenue Stream</h2>
                                <div className='table-wrapper'>
                                    {(channels && channels.length) === 0 && (
                                        <table className="interactive">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {partners.map(partner => (
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
                    </div>
                </div>
                <div className="tab--footer">
                    <div>
                        <h2 className="mb-2">Creating a Wordpress Application</h2>
                        <CustomProgressBar />
                    </div>
                </div>
            </div>
        </>
    )
}
