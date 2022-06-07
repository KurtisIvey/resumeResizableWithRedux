import React from "react";
import "./styling/personalInfo.css";
import { useSelector, useDispatch } from "react-redux";
import { infoSliceActions } from "../store/slices/infoSlice";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const email = useSelector((state) => state.email);
  const title = useSelector((state) => state.title);
  const address = useSelector((state) => state.address);
  const phoneNumber = useSelector((state) => state.phoneNumber);

  const setFirstName = (arg) => dispatch(infoSliceActions.setFirstName(arg));
  const setLastName = (arg) => dispatch(infoSliceActions.setLastName(arg));
  const setEmail = (arg) => dispatch(infoSliceActions.setEmail(arg));
  const setTitle = (arg) => dispatch(infoSliceActions.setTitle(arg));
  const setAddress = (arg) => dispatch(infoSliceActions.setAddress(arg));
  const setPhoneNumber = (arg) => dispatch(infoSliceActions.setFirstName(arg));

  return (
    <div className="personalInfo">
      <h2 className="personalInfo__header">Personal Info</h2>
      <form className="personalInfo__container">
        <input
          name="firstName"
          type="text"
          defaultValue=""
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          className="personalInfo__input"
          value={firstName}
        />
        <input
          name="lastName"
          type="text"
          defaultValue=""
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className="personalInfo__input"
        />
        <input
          name="address"
          type="text"
          defaultValue=""
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          className="personalInfo__input"
        />
        <input
          name="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          defaultValue=""
          placeholder="Title"
          className="personalInfo__input"
        />
        <input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          defaultValue=""
          placeholder="Email"
          required
          className="personalInfo__input"
        />
        <input
          name="phoneNumber"
          type="text"
          defaultValue=""
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          className="personalInfo__input"
        />
      </form>
    </div>
  );
};

export default PersonalInfo;
