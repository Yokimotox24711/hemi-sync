import React, { useEffect, useState } from "react";
import "./creator.scss";
import { useSession } from "next-auth/react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { uuidv4 } from "@firebase/util";
import { firestoreDB } from "@/lib/firebase";
import Business from "@/lib/mongodb/models/business";
import { useRouter } from "next/navigation";
// import { CreateBusiness } from '@/app/api/business-automaton/controllers/creator/CreatorController';

const Creator = () => {
  var router = useRouter();

  // ++++++++++++++++++++++
  // Populate Data
  const businessTypes = {
    technologyServices: [
      "Software Development Firm",
      "IT Consulting Agency",
      "Cybersecurity Solutions Provider",
      "Web Hosting Service",
      "Mobile App Development Business",
    ],
    retail: [
      "Clothing Boutique",
      "Electronics Store",
      "Grocery Store",
      "Specialty Food Shop (e.g., organic, gourmet)",
      "Bookstore",
    ],
    hospitalityAndTourism: [
      "Hotel or Bed and Breakfast",
      "Tour Operator",
      "Travel Agency",
      "Restaurant or Café",
      "Event Planning Service",
    ],
    healthAndWellness: [
      "Fitness Center or Gym",
      "Spa or Wellness Retreat",
      "Health Food Store",
      "Yoga Studio",
      "Mental Health Counseling Practice",
    ],
    manufacturingAndProduction: [
      "Automobile Assembly Plant",
      "Electronics Manufacturing Facility",
      "Textile Mill",
      "Food Processing Plant",
      "Furniture Workshop",
    ],
    financialServices: [
      "Banking Institution",
      "Investment Firm",
      "Accounting Firm",
      "Insurance Agency",
      "Financial Planning Service",
    ],
    realEstate: [
      "Real Estate Agency",
      "Property Management Business",
      "Real Estate Development Firm",
      "Vacation Rental Management Service",
      "Commercial Leasing Agency",
    ],
    education: [
      "Private School or Tutoring Center",
      "Online Education Platform",
      "Language School",
      "Educational Toy Store",
      "Test Preparation Service",
    ],
    entertainmentAndMedia: [
      "Film Production Business",
      "Music Recording Studio",
      "Online Streaming Service",
      "Event Management Business",
      "Advertising Agency",
    ],
    professionalServices: [
      "Law Firm",
      "Architecture Firm",
      "Engineering Consultancy",
      "Marketing Agency",
      "Human Resources Consultancy",
    ],
  };

  // ++++++++++++++++++++++
  // Capture Data
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");

  const [business, setBusiness] = useState();

  // ++++++++++++++++++++++
  // UI/UX
  const [openAlert, setOpenAlert] = useState(false);
  const [loadingResponse, setLoadingResponse] = useState(false);

  // Function to handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setBusiness((prevBusiness) => ({
      ...prevBusiness,
      [name]: value,
    }));
  };

    // Function to handle changes in nested input fields
    const handleInputNestedChange = (e) => {
      const { name, value } = e.target;
      console.log(name, value);
      const [parentKey, childKey] = name.split('.');
      console.log(parentKey, childKey);
      setBusiness(prevBusiness => ({
        ...prevBusiness,
        [parentKey]: {
          ...prevBusiness[parentKey],
          [childKey]: value
        }
      }));
    };

  // ++++++++++++++++++++++
  // CRUD Business
  const { data: session } = useSession();

  const GenerateBusiness = async () => {
    // AI Random Generate Business
    const res = await fetch(
      "/api/program/business-automaton/business/generate",
      {
        method: "POST",
        body: JSON.stringify({
          businessName: businessName,
          businessType: businessType,
          session: session,
        }),
      }
    );
    var business = await res.json();

    // Populate Additional Metadata
    business["uuid"] = uuidv4();
    business["owner"] = {
      _id: session?.user.email,
      name: session?.user.name,
      avatar:
        session?.user.image ||
        `https://ui-avatars.com/api/?name=${session?.user?.name}`,
    };

    setBusiness(business);
  };

  const SaveBusiness = async () => {
    const res = await fetch("/api/program/business-automaton/business", {
      method: "POST",
      body: JSON.stringify({
        business: business,
      }),
    });
    var data = await res.json();
  };

  return (
    <>
      <div className="page page--creator">
        <div className="page--body">
          <div className="mb-2 field-row">
            <label htmlFor="text17">Business Name</label>
            <input
              id="text17"
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col flex" id="section--business-type">
              <fieldset>
                <legend>Select Business Type</legend>
                {Object.entries(businessTypes).map(([category, types], idx) => (
                  <>
                    {types.map((businessType, typeIdx) => (
                      <div
                        key={`business-type--${idx}-${typeIdx}`}
                        className="field-row"
                      >
                        <div key={typeIdx}>
                          <input
                            id={`radio-business-type--${idx}-${typeIdx}`}
                            type="radio"
                            name={`business-type`}
                            value={businessType}
                            onChange={(e) => setBusinessType(e.target.value)}
                          />
                          <label
                            htmlFor={`radio-business-type--${idx}-${typeIdx}`}
                          >
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
              <fieldset className="business-info__wrapper">
                <legend>Business Info</legend>
                {
                  // @ts-ignore
                  business &&
                    Object.keys(business).map(
                      (key, idx) =>
                        key !== "uuid" &&
                        (key === "info" || key == "owner" ? (
                          <>
                            <fieldset key={`business-prop--${idx}`}>
                              <legend>{key}</legend>
                              {Object.keys(business[key]).map((key2, id) => (
                                <div
                                  key={`business-prop--${idx}-${id}`}
                                  className="field-row"
                                >
                                  <label
                                    htmlFor={`business-prop--${idx}-${id}`}
                                  >
                                    {key2}
                                  </label>
                                  <input
                                    id={`business-prop--${idx}-${id}`}
                                    type="text"
                                    name={`${key}.${key2}`}
                                    value={business[key][key2]}
                                    onChange={handleInputNestedChange}
                                  />
                                </div>
                              ))}
                            </fieldset>
                          </>
                        ) : (
                          <div
                            key={`business-prop--${idx}`}
                            className="field-row"
                          >
                            <label htmlFor={`business-prop--${idx}`}>
                              {key}
                            </label>
                            <input
                              id={`business-prop--${idx}`}
                              type="text"
                              name={`${key}`}
                              value={business[key]}
                              onChange={handleInputChange}
                            />
                          </div>
                        ))
                    )
                }
              </fieldset>
            </div>
          </div>
        </div>
        <div className="page--footer">
          <button onClick={() => GenerateBusiness()}>Generate Business</button>
          <button disabled={!business} onClick={() => SaveBusiness()}>
            Save Business
          </button>
        </div>
      </div>
    </>
  );
};

export default Creator;
