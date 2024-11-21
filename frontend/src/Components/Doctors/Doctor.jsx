import React from "react";
import "./Doctor.css";
import doctors from "../../doctorsDB.js";

const Doctor = () => {
  return (
    <div className="find-doctors">
      <div className="search-doctors">
        <input type="search" name="" id=""  placeholder="Doctors near you..."/>
        <span className="material-symbols-outlined">search</span>
      </div>

      <div className="doctors-list-section">

      {doctors.map((item, index) => (
    <div className="doctor-list-card" key={index}>
        <div className="visible-in-short">
            <div className="doc-img">
                <img src={item.image || "/src/assets/doc-default.png"} alt={`Image of ${item.name}`} />
            </div>
            <div className="doc-info">
                <h1>{item.name}</h1>
                <h2>{item.medicalName}</h2>
                <p id="contact">{item.contact}</p>
                <p id="experience">{item.experience}</p>
                <p id="rating">
                    <span>Rating: {item.ratings}</span>
                </p>
            </div>
        </div>
        <div className="visible-in-long">
            <p id="specialization">Specialization: {item.specialization}</p>
            <p id="description">Description: {item.description}</p>
            <p id="background">Background: {item.background}</p>
            <p id="achievements">Achievements: {item.achievements}</p>
            <p id="address">Address: {item.address}</p>
            <p id="fees">Consultation Fee: {item.consultationFee}</p>
            <p id="availability">Availability: {item.availability}</p>
        </div>
    </div>
))}

        
      </div>
    </div>
  );
};

export default Doctor;
