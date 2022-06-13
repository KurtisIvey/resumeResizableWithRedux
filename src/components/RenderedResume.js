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
            {experience.slice(-4).map((item, index) => {
              return (
                <div key={index} className="resume__renderedExpItemContainer">
                  <div className="resume__renderedExpFromTo">
                    <div>
                      {item.prevJobDateFrom.substring(5, 8)}
                      {item.prevJobDateFrom.substring(0, 4)}
                    </div>
                    <div>to</div>
                    <div>
                      {item.prevJobDateTo.substring(5, 8)}
                      {item.prevJobDateTo.substring(0, 4)}
                    </div>
                  </div>

                  <div className="resume__renderedExpPrevJob">
                    {item.previousJob}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="resume__educationContainer">
            <h3 className="resume__sectionTitle">Education</h3>
            {education.slice(-4).map((item, index) => {
              return (
                <div key={index} className="resume__renderedEdItemContainer">
                  <div className="resume__edItemFromTo">
                    <div>
                      {item.degreeDateFrom.substring(5, 8)}
                      {item.degreeDateFrom.substring(0, 4)}
                    </div>

                    <div>to</div>
                    <div>
                      {" "}
                      {item.degreeDateTo.substring(5, 8)}
                      {item.degreeDateTo.substring(0, 4)}
                    </div>
                  </div>
                  <div className="resume__edItemUniDegreeSubject">
                    <span style={{ fontWeight: "600" }}>
                      {item.university}, {item.state}
                    </span>
                    <div>Degree Level: {item.degree}</div>

                    <div>Major: {item.subject}</div>
                  </div>
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
