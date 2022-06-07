import React from "react";
import "./styling/RenderedResume.css";
import { useSelector } from "react-redux";
import photo from "../photos/blankUser.jpeg";

const RenderedResume = () => {
  const firstName = useSelector((state) => state.info.firstName);
  const lastName = useSelector((state) => state.info.lastName);
  const email = useSelector((state) => state.info.email);
  const title = useSelector((state) => state.info.title);
  const address = useSelector((state) => state.info.address);
  const phoneNumber = useSelector((state) => state.info.phoneNumber);
  const education = useSelector((state) => state.info.education);
  const experience = useSelector((state) => state.info.experience);

  return (
    <div className="resume">
      <div className="resume__nameTitleContainer">
        <h2 className="resume__name">
          {firstName} {lastName}
        </h2>
        <div className="resume__title">{title}</div>
      </div>
      <div className="resume__body">
        <div className="resume__edAndExpContainer">
          <div className="resume__experienceContainer">
            <h3 className="resume__sectionTitle">Experience</h3>
            experience container
          </div>
          <div className="resume__educationContainer">
            <h3 className="resume__sectionTitle">Education</h3>education
            container
            {education.map((item) => {
              return (
                <div className="resume__renderedEdItemContainer">
                  <div className="resume__edItemFromTo">
                    {item.from} to {item.to}
                  </div>
                  <div className="resume__edItemUniDegreeSubject"></div>
                  {item.university} {item.degree} {item.subject} {item.state}{" "}
                </div>
              );
            })}
          </div>
        </div>
        <div className="resume__personalInfoContainer">
          <img
            className="resume__userPhoto"
            src={photo}
            alt="generic blank user"
          ></img>
          <h3 className="resume__personalSectionTitle">Personal Details</h3>
          <div>
            <h4 className="resume__minorSectionTitle">Address</h4>
            <div className="resume__address resume__personalItems">
              {address}
            </div>
          </div>
          <div>
            <h4 className="resume__minorSectionTitle">Email</h4>
            <div className="resume__email resume__personalItems resume__emailRender">
              {email}
            </div>
          </div>
          <div>
            <h4 className="resume__minorSectionTitle">Phone Number</h4>
            <div className="resume__phone resume__personalItems">
              {phoneNumber}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderedResume;
