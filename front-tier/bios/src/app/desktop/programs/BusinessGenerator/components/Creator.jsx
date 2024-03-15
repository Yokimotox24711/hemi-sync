import React from 'react'
import "./creator.scss";

export default function Creator() {
    const businessTypes = {
        technologyServices: [
            "Software Development Firm",
            "IT Consulting Agency",
            "Cybersecurity Solutions Provider",
            "Web Hosting Service",
            "Mobile App Development Company"
        ],
        retail: [
            "Clothing Boutique",
            "Electronics Store",
            "Grocery Store",
            "Specialty Food Shop (e.g., organic, gourmet)",
            "Bookstore"
        ],
        hospitalityAndTourism: [
            "Hotel or Bed and Breakfast",
            "Tour Operator",
            "Travel Agency",
            "Restaurant or Café",
            "Event Planning Service"
        ],
        healthAndWellness: [
            "Fitness Center or Gym",
            "Spa or Wellness Retreat",
            "Health Food Store",
            "Yoga Studio",
            "Mental Health Counseling Practice"
        ],
        manufacturingAndProduction: [
            "Automobile Assembly Plant",
            "Electronics Manufacturing Facility",
            "Textile Mill",
            "Food Processing Plant",
            "Furniture Workshop"
        ],
        financialServices: [
            "Banking Institution",
            "Investment Firm",
            "Accounting Firm",
            "Insurance Agency",
            "Financial Planning Service"
        ],
        realEstate: [
            "Real Estate Agency",
            "Property Management Company",
            "Real Estate Development Firm",
            "Vacation Rental Management Service",
            "Commercial Leasing Agency"
        ],
        education: [
            "Private School or Tutoring Center",
            "Online Education Platform",
            "Language School",
            "Educational Toy Store",
            "Test Preparation Service"
        ],
        entertainmentAndMedia: [
            "Film Production Company",
            "Music Recording Studio",
            "Online Streaming Service",
            "Event Management Company",
            "Advertising Agency"
        ],
        professionalServices: [
            "Law Firm",
            "Architecture Firm",
            "Engineering Consultancy",
            "Marketing Agency",
            "Human Resources Consultancy"
        ]
    };

    return (
        <>
            <div className="page page--creator">
                <div className="page--body">
                    <div className="mb-2 field-row">
                        <label for="text17">Business Name</label>
                        <input id="text17" type="text" />
                    </div>
                    <div className="row">
                        <div className="col flex" id="section--business-type">
                            <fieldset>
                                <legend>Select Business Type</legend>
                                {Object.entries(businessTypes).map(([category, types], idx) => (
                                    <>
                                        {types.map((businessType, typeIdx) => (
                                            <div className="field-row">
                                                <div key={typeIdx}>
                                                    <input
                                                        id={`radio-business-type--${idx}-${typeIdx}`}
                                                        type="radio"
                                                        name={`business-type`}
                                                    />
                                                    <label htmlFor={`radio-business-type--${idx}-${typeIdx}`}>
                                                        {businessType}
                                                    </label>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                ))}
                            </fieldset>
                        </div>
                        <div className="col flex">
                            <fieldset>
                                <legend>Business Location</legend>
                                <div className="field-row">
                                    <label for="text18">City</label>
                                    <input id="text18" type="text" />
                                </div>
                                <div className="field-row">
                                    <label for="text19">State</label>
                                    <input id="text19" type="text" />
                                </div>
                                <div className="field-row">
                                    <label for="text20">Country</label>
                                    <input id="text20" type="text" />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="page--footer">
                    <button>Generate Business Plan</button>
                </div>
            </div>
        </>
    )
}
