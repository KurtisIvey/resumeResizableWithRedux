import { createSlice, current } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "info",
  initialState: {
    firstName: "firstname",
    lastName: "lastname",
    email: "email@gmail.com",
    title: "title",
    address: "123 address way, fort worth texas",
    phoneNumber: "123-123-1234",
    university: "unviersity",
    degree: "degree",
    subject: "subject",
    degreeState: "degree state",
    degreeDateFrom: "degreedateFrom",
    degreeDateTo: "degreedateTo",
    education: [
      {
        university: "university",
        degree: "degree",
        subject: "computer science",
        state: "state",
        degreeDateFrom: "2022-01-21",
        degreeDateTo: "2022-01-21",
      },
      {
        university: "university",
        degree: "degree",
        subject: "computer science",
        state: "state",
        degreeDateFrom: "2022-01-21",
        degreeDateTo: "2022-01-21",
      },
    ],
    experience: [
      { previousJob: "prev Job", from: "2022-01-21", to: "2022-01-21" },
      { previousJob: "prev Job", from: "2022-01-21", to: "2022-01-22" },
    ],
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
      const newJob = action.payload;
      state.education.push({
        previousJob: newJob.previousJob,
        prevJobDateFrom: newJob.prevJobDateFrom,
        prevJobDateTo: newJob.prevJobDateTo,
      });
    },
    setPrevJob(state, action) {
      state.previousJob = action.payload;
    },
    setPrevJobDateFrom(state, action) {
      state.prevJobDateFrom = action.payload;
    },
    setPrevJobDateTo(state, action) {
      state.prevJobDateTo = action.payload;
    },
  },
});

export const infoSliceActions = infoSlice.actions;
export default infoSlice;
