import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalInfo from "./components/PersonalInfo";
import { useSelector, useDispatch } from "react-redux";
import RenderedResume from "./components/RenderedResume";

function App() {
  return (
    <div className="app">
      <div className="app__headerContainer">
        <header className="app__header">Resume</header>
      </div>

      <div className="app__body">
        <div className="app__entryContainer">
          <PersonalInfo />
          <Education />
          <Experience />
        </div>
        <div className="app__renderContainer">
          <RenderedResume />
        </div>
      </div>
    </div>
  );
}

export default App;
