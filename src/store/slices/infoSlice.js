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
        from: "01-21-2022",
        to: "02-22-2022",
      },
      {
        university: "university",
        degree: "degree",
        subject: "computer science",
        state: "state",
        from: "01-21-2022",
        to: "02-22-2022",
      },
    ],
    experience: [],
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
    setEducation(state, action) {
      state.education = [...state, action.payload];
    },
    addToEducation(state) {
      let newArray = state.education;

      newArray.push({
        university: state.university,
        degree: state.degree,
        subject: state.subject,
        degreeState: state.degreeState,
        degreeDateFrom: state.degreeDateFrom,
        degreeDateTo: state.degreeDateTo,
      });
      state.education = newArray;
      console.log("trying");
      console.log(current(state.education));
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
      state.experience = action.payload;
    },
  },
});

export const infoSliceActions = infoSlice.actions;
export default infoSlice;
