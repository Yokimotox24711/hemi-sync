import React, { useEffect, useState } from "react";
import "./creator.scss";
import { useSession } from "next-auth/react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { uuidv4 } from "@firebase/util";
import { firestoreDB } from "@/lib/firebase";
// import { CreateCompany } from '@/app/api/business-automaton/controllers/creator/CreatorController';

const Creator = () => {
  // Populate Data
  const companyTypes = {
    technologyServices: [
      "Software Development Firm",
      "IT Consulting Agency",
      "Cybersecurity Solutions Provider",
      "Web Hosting Service",
      "Mobile App Development Company",
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
      "Property Management Company",
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
      "Film Production Company",
      "Music Recording Studio",
      "Online Streaming Service",
      "Event Management Company",
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

  // Capture Data
  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("");

  const [company, setCompany] = useState();

  // UI/UX
  const [openAlert, setOpenAlert] = useState(false);
  const [loadingResponse, setLoadingResponse] = useState(false);

  // Create Company
  const { data: session } = useSession();
  const CreateCompany = async () => {
    // Get Current User

    // Validate Input
    if (!companyName && !companyType) return;

    // Prepare Company Object
    if (!session) return;
    const company: Company = {
      name: companyName,
      type: companyType,
      uuid: uuidv4(),
      createdAt: serverTimestamp().toString(),
      info: {
        description: "",
        logo: "",
        website: "",
        industry: "",
        founded: 0,
        headquarters: "",
        mission: "",
        vision: "",
        values: [],
      },
      owner: {
        _id: session?.user.email,
        name: session?.user.name,
        avatar:
          session?.user.image ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    // Save To Firestore
    var docRef = await setDoc(
      doc(
        firestoreDB,
        "users",
        session?.user?.email,
        "business automaton",
        company.name
      ),
      company
    );
    setOpenAlert(true);

    // Get AI Populated Business Model Base Components
    setLoadingResponse(true); //Toast notifciation
    await fetch("/api/business-automaton/creator/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company,
        session
      }),
    })
    .then((res) => {
      setLoadingResponse(false);
    })
    .catch((err) => {
      console.log(err);
    });
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
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col flex" id="section--business-type">
              <fieldset>
                <legend>Select Business Type</legend>
                {Object.entries(companyTypes).map(([category, types], idx) => (
                  <>
                    {types.map((companyType, typeIdx) => (
                      <div key={`business-type--${idx}`} className="field-row">
                        <div key={typeIdx}>
                          <input
                            id={`radio-business-type--${idx}-${typeIdx}`}
                            type="radio"
                            name={`business-type`}
                          />
                          <label
                            htmlFor={`radio-business-type--${idx}-${typeIdx}`}
                          >
                            {companyType}
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
                  <label htmlFor="text18">City</label>
                  <input id="text18" type="text" />
                </div>
                <div className="field-row">
                  <label htmlFor="text19">State</label>
                  <input id="text19" type="text" />
                </div>
                <div className="field-row">
                  <label htmlFor="text20">Country</label>
                  <input id="text20" type="text" />
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="page--footer">
          <button onClick={() => CreateCompany()}>Generate Business</button>
        </div>
      </div>
    </>
  );
};

export default Creator;
