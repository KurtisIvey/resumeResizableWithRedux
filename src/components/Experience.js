import React from "react";
import "./styling/experience.css";

const Experience = () => {
  /*
  const handleDeleteExperience = (e) => {
    e.preventDefault();
    const experienceArray = value.experience;
    experienceArray.pop();
    setValue((prevValue) => ({ ...prevValue, experience: experienceArray }));
    console.log(value.experience);
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    const experienceArray = value.experience;
    let valuesToBeInjectedArray = [];
    const targetContainer = e.target.children[0].children;
    //multiple values present in experience, so used for loop to grab them all
    //will have to render each value individually so pushed them into an array
    for (let i = 0; i < targetContainer.length - 1; i++) {
      valuesToBeInjectedArray.push(targetContainer[i].value);
      targetContainer[i].value = "";
    }

    experienceArray.push(valuesToBeInjectedArray);
    setValue((prevValue) => ({ ...prevValue, experience: experienceArray }));
    console.log(value.experience);
  };
  
  */
  return (
    <div className="experience">
      <h2 className="experience__header">Experience</h2>
      <form className="experience__container">
        <input
          name="previousJob"
          type="text"
          defaultValue=""
          placeholder="Previous Job"
          required
          className="experience__input experience__previousJob"
        />
        <span className="dateSpan">
          <label className="dateLabel" for="previousJobFrom">
            From:
          </label>
          <input
            id="previousJobFrom"
            name="previousJobFrom"
            type="date"
            defaultValue=""
            required
            className="experience__input"
          />
        </span>

        <span className="dateSpan">
          <label className="dateLabel" for="previousJobTo">
            To:
          </label>
          <input
            id="previousJobTo"
            name="previousJobTo"
            type="date"
            defaultValue=""
            required
            className="experience__input"
          />
        </span>

        <button className="experience__addBtn">Add</button>
        <button className="experience__deleteBtn">Delete</button>
      </form>
    </div>
  );
};

export default Experience;
