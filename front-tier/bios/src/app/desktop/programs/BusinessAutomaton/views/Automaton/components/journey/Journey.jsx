import React, { useState } from 'react'

// Business Life Cycle Stages
// Existence: Focus on establishing the business, initial products or services, and securing the first customers.
// Survival: Concentrate on sustaining operations, managing finances, and achieving a stable customer base.
// Success: Expand business operations, diversify products/services, and increase market share.
// Take-off: Scale the business rapidly, seek significant funding, and possibly go public.
// Resource Maturity: Achieve stable growth, innovate within the industry, and explore new markets or acquisitions.
// Gameplay Mechanics

// Players make decisions affecting various aspects of the business, such as hiring, product development, marketing, and partnerships.
// The outcome of these decisions impacts the business's progress through the life cycle stages.

// Dynamic Events
// Introduce random events that can positively or negatively affect the business, adding unpredictability and realism to the gameplay.

export default function Journey(activeBusiness) {
    
    
    var { activeBusiness } = activeBusiness;

    const [businessJourney, Stages] = useState([
        {
            name: "Existence",
            description: "Focus on establishing the business, initial products or services, and securing the first customers.",
            episodes: {
                episode1: {
                    decision: "Choose a business name and mission statement.",
                    result: "The business name and mission statement are established.",
                    activities: [

                    ],
                    milestone: []
                },
            }
        },
        {
            name: "Survival",
            description: "Concentrate on sustaining operations, managing finances, and achieving a stable customer base.",
            milestones: []
        },
        {
            name: "Success",
            description: "Expand business operations, diversify products/services, and increase market share.",
            milestones: []
        },
        {
            name: "Take-off",
            description: "Scale the business rapidly, seek significant funding, and possibly go public.",
            milestones: []
        },
        {
            name: "Resource Maturity",
            description: "Achieve stable growth, innovate within the industry, and explore new markets or acquisitions.",
            milestones: []
        }
    ])

    return (
        <>

        </>
    )
}
