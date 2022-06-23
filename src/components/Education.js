import React from "react";
import "./styling/education.css";
import { useSelector, useDispatch } from "react-redux";
import { infoSliceActions } from "../store/slices/infoSlice";

const Education = () => {
  const dispatch = useDispatch();
  //state
  const university = useSelector((state) => state.info.university);
  const degree = useSelector((state) => state.info.degree);
  const subject = useSelector((state) => state.info.subject);
  const degreeState = useSelector((state) => state.info.degreeState);
  const degreeDateFrom = useSelector((state) => state.info.degreeDateFrom);
  const degreeDateTo = useSelector((state) => state.info.degreeDateTo);
  const education = useSelector((state) => state.info.education);
  // infoSliceActions
  const setUniversity = (universityToBeSet) =>
    dispatch(infoSliceActions.setUniversity(universityToBeSet));
  const setDegree = (degreeToBeSet) =>
    dispatch(infoSliceActions.setDegree(degreeToBeSet));
  const setSubject = (subjectToBeSet) =>
    dispatch(infoSliceActions.setSubject(subjectToBeSet));
  const setDegreeState = (degreestateToBeSet) =>
    dispatch(infoSliceActions.setDegreeState(degreestateToBeSet));
  const setDegreeDateFrom = (degreeDateFromToBeSet) =>
    dispatch(infoSliceActions.setDegreeDateFrom(degreeDateFromToBeSet));
  const setDegreeDateTo = (degreeDateToBeSet) =>
    dispatch(infoSliceActions.setDegreeDateTo(degreeDateToBeSet));
  const setEducation = (educationToBeSet) =>
    dispatch(infoSliceActions.setEducation(educationToBeSet));
  const handleDeleteEducation = () =>
    dispatch(infoSliceActions.handleDeleteEducation());
  const resetEducationFields = () =>
    dispatch(infoSliceActions.resetEducationFields());

  const resetEdFields = () => {
    const universityInput = document.getElementById("university");
    const degreeInput = document.getElementById("degree");
    const subjectInput = document.getElementById("subject");
    const degreeStateInput = document.getElementById("degreeState");
    const degreeDateFromInput = document.getElementById("degreeDateFrom");
    const degreeDateToInput = document.getElementById("degreeDateTo");

    universityInput.value = "";
    degreeInput.value = "";
    subjectInput.value = "";
    degreeStateInput.value = "";
    degreeDateFromInput.value = "";
    degreeDateToInput.value = "";
  };
  const handleAddEducation = (e) => {
    e.preventDefault();
    const newItem = {
      university: university,
      degree: degree,
      subject: subject,
      degreeState: degreeState,
      degreeDateFrom: degreeDateFrom,
      degreeDateTo: degreeDateTo,
    };
    setEducation(newItem);
    resetEducationFields();
    resetEdFields();
  };

  return (
    <div className="education">
      <h2 onClick={() => console.log(education)} className="education__header">
        Education
      </h2>
      <form
        onSubmit={(e) => handleAddEducation(e)}
        className="education__container"
      >
        <input
          id="university"
          name="university"
          type="text"
          onChange={(e) => setUniversity(e.target.value)}
          defaultValue=""
          placeholder="University"
          className="education__input"
          required
        />
        <input
          id="degree"
          name="degree"
          type="text"
          onChange={(e) => setDegree(e.target.value)}
          defaultValue=""
          placeholder="Degree Level"
          className="education__input"
          required
        />
        <input
          id="subject"
          name="subject"
          type="text"
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Major"
          className="education__input"
          required
        />
        <input
          id="degreeState"
          name="degreeState"
          type="text"
          onChange={(e) => setDegreeState(e.target.value)}
          defaultValue=""
          placeholder="State"
          className="education__input"
          required
        />
        <span className="dateSpan">
          <label className="dateLabel" htmlFor="degreeDateFrom">
            From:
          </label>
          <input
            data-testid="degreeDateFrom"
            id="degreeDateFrom"
            name="degreeDateFrom"
            type="date"
            onChange={(e) => setDegreeDateFrom(e.target.value)}
            className=" education__date"
            required
          />
        </span>
        <span className="dateSpan">
          <label className="dateLabel" htmlFor="degreeDateTo">
            To:
          </label>
          <input
            data-testid="degreeDateTo"
            id="degreeDateTo"
            name="degreeDateTo"
            type="date"
            onChange={(e) => setDegreeDateTo(e.target.value)}
            className="education__date"
            required
          />
        </span>
        <button data-testid="educationAddBtn" className="education__addBtn">
          Add
        </button>
        <div
          data-testid="educationDeleteBtn"
          className="education__deleteBtn"
          onClick={(e) => handleDeleteEducation(e)}
        >
          Delete
        </div>
      </form>
    </div>
  );
};

export default Education;
