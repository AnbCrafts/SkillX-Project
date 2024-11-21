import React from "react";
import './MentalHealthSection.css'
import mentalHealthData from "../../../mentalHealthData.js";

const MentalHealthSection = () => {
  return (
    <div className="mental-health-section">
      {mentalHealthData.map((item) => (
        <div key={item.id} className="mental-health-card">
          <h2>{item.title}</h2>
          <p>{item.overview}</p>
          <h4>Symptoms:</h4>
          <ul>
            {item.symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
          <h4>Treatments:</h4>
          <p>Medications: {item.treatments.medications.join(", ")}</p>
          <p>Therapies: {item.treatments.therapies.join(", ")}</p>
          <p>Self-Care: {item.treatments.selfCare.join(", ")}</p>
          <p>{item.additionalInfo}</p>
        </div>
      ))}
    </div>
  );
};

export default MentalHealthSection;
