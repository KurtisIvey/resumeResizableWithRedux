import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "info",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    address: "",
    phoneNumber: "",
    university: "",
    degree: "",
    subject: "",
    degreeState: "",
    degreeDateFrom: "",
    degreeDateTo: "",
    education: [],
    experience: [],
    previousJob: "",
    prevJobDateFrom: "",
    prevJobDateTo: "",
  },
  reducers: {
    setFirstName(state, action) {
      state.firstName = action.payload;
      console.log(state.firstName);
    },
    setLastName(state, action) {
      state.lastName = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setUniversity(state, action) {
      state.university = action.payload;
      console.log(state.university);
    },
    setDegree(state, action) {
      state.degree = action.payload;
      console.log(state.degree);
    },
    setSubject(state, action) {
      state.subject = action.payload;
      console.log(state.subject);
      console.log(state.education);
    },
    setDegreeState(state, action) {
      state.degreeState = action.payload;
      console.log(state.degreeState);
    },
    setDegreeDateFrom(state, action) {
      state.degreeDateFrom = action.payload;
      console.log(state.degreeDateFrom);
    },
    setDegreeDateTo(state, action) {
      state.degreeDateTo = action.payload;
      console.log(state.degreeDateTo);
    },
    setEducation2(state, action) {
      state.education = action.payload;
    },
    setEducation(state, action) {
      const newItem = action.payload;
      state.education.push({
        university: newItem.university,
        degree: newItem.degree,
        subject: newItem.subject,
        degreeState: newItem.degreeState,
        degreeDateFrom: newItem.degreeDateFrom,
        degreeDateTo: newItem.degreeDateTo,
      });
    },
    handleDeleteEducation(state) {
      state.education.pop();
    },
    resetEducationFields(state) {
      state.university = "";
      state.degree = "";
      state.subject = "";
      state.degreeState = "";
      state.degreeDateFrom = "";
      state.degreeDateTo = "";
    },
    setExperience(state, action) {
      const newItem = action.payload;
      state.experience.push({
        previousJob: newItem.previousJob,
        prevJobDateFrom: newItem.prevJobDateFrom,
        prevJobDateTo: newItem.prevJobDateTo,
      });
    },
    handleDeleteExperience(state) {
      state.experience.pop();
    },
    setPreviousJob(state, action) {
      state.previousJob = action.payload;
      console.log(state.previousJob);
    },
    setPrevJobDateFrom(state, action) {
      state.prevJobDateFrom = action.payload;
      console.log(state.prevJobDateFrom);
    },
    setPrevJobDateTo(state, action) {
      state.prevJobDateTo = action.payload;
      console.log(state.prevJobDateTo);
    },
    resetExperienceFields(state) {
      state.previousJob = "";
      state.prevJobDateFrom = "";
      state.prevJobDateTo = "";
    },
  },
});

export const infoSliceActions = infoSlice.actions;
export default infoSlice;
