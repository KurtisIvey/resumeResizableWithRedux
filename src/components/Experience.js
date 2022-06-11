import React from "react";
import "./styling/experience.css";
import { useSelector, useDispatch } from "react-redux";
import { infoSliceActions } from "../store/slices/infoSlice";

const Experience = () => {
  const dispatch = useDispatch();
  const prevJob = useSelector((state) => state.info.previousJob);
  const prevJobDateFrom = useSelector((state) => state.info.prevJobDateFrom);
  const prevJobDateTo = useSelector((state) => state.info.prevJobDateTo);
  const setExperience = (exp) => dispatch(infoSliceActions.setExperience(exp));
  const setPrevJob = (job) => dispatch(infoSliceActions.setPrevJob(job));
  const setPrevJobFrom = (from) =>
    dispatch(infoSliceActions.setPrevJobDateFrom(from));
  const setPrevJobTo = (to) => dispatch(infoSliceActions.setPrevJobDateTo(to));

  const handleDeleteExperience = () =>
    dispatch(infoSliceActions.handleDeleteExperience());

  const handleAddExperience = (e) => {
    e.preventDefault();
    const newItem = {
      previousJob: prevJob,
      previousJobDateFrom: prevJobDateFrom,
      previousJobDateTo: prevJobDateTo,
    };
    setExperience(newItem);
  };

  return (
    <div className="experience">
      <h2 className="experience__header">Experience</h2>
      <form
        onSubmit={(e) => handleAddExperience(e)}
        className="experience__container"
      >
        <input
          name="previousJob"
          type="text"
          onChange={(e) => setPrevJob(e.target.value)}
          defaultValue=""
          placeholder="Previous Job"
          required
          className="experience__input experience__previousJob"
        />
        <span className="dateSpan">
          <label className="dateLabel" htmlFor="previousJobFrom">
            From:
          </label>
          <input
            id="previousJobFrom"
            name="previousJobFrom"
            type="date"
            onChange={(e) => setPrevJobFrom(e.target.value)}
            defaultValue=""
            required
            className="experience__input"
          />
        </span>

        <span className="dateSpan">
          <label className="dateLabel" htmlFor="previousJobTo">
            To:
          </label>
          <input
            id="previousJobTo"
            name="previousJobTo"
            type="date"
            onChange={(e) => setPrevJobTo(e.target.value)}
            defaultValue=""
            required
            className="experience__input"
          />
        </span>

        <button className="experience__addBtn">Add</button>
      </form>
      <button
        onClick={() => handleDeleteExperience()}
        className="experience__deleteBtn"
      >
        Delete
      </button>
    </div>
  );
};

export default Experience;
