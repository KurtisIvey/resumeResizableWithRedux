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
  };

  return (
    <div className="education">
      <button onClick={() => handleDeleteEducation()}> delete</button>
      <h2 onClick={() => console.log(education)} className="education__header">
        Education
      </h2>
      <form
        onSubmit={(e) => handleAddEducation(e)}
        className="education__container"
      >
        <input
          name="university"
          type="text"
          onChange={(e) => setUniversity(e.target.value)}
          defaultValue=""
          placeholder="University"
          className="education__input"
          required
        />
        <input
          name="degree"
          type="text"
          onChange={(e) => setDegree(e.target.value)}
          defaultValue=""
          placeholder="Degree Level"
          className="education__input"
          required
        />
        <input
          name="subject"
          type="text"
          onChange={(e) => setSubject(e.target.value)}
          defaultValue=""
          placeholder="Major"
          className="education__input"
          required
        />
        <input
          name="degreeState"
          type="text"
          onChange={(e) => setDegreeState(e.target.value)}
          defaultValue=""
          placeholder="State"
          className="education__input"
          required
        />
        <span className="dateSpan">
          <label className="dateLabel" for="dateFrom">
            From:
          </label>
          <input
            id="dateFrom"
            name="degreeDateFrom"
            type="date"
            onChange={(e) => setDegreeDateFrom(e.target.value)}
            defaultValue=""
            className=" education__date"
            required
          />
        </span>
        <span className="dateSpan">
          <label className="dateLabel" for="dateTo">
            To:
          </label>
          <input
            id="dateTo"
            name="degreeDateTo"
            type="date"
            onChange={(e) => setDegreeDateTo(e.target.value)}
            defaultValue=""
            className="education__date"
            required
          />
        </span>

        <button className="education__addBtn">Add</button>
        <button className="education__deleteBtn">Delete</button>
      </form>
    </div>
  );
};

export default Education;
