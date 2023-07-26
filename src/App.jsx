import { useState } from 'react';

import { PersonalDetailsForm } from './components/PersonalDetailsForm.jsx';
import { SummaryForm } from './components/SummaryForm.jsx';
import { EducationForm } from './components/EducationForm.jsx';
import { PersonalDetails } from './components/PersonalDetails.jsx';
import { Summary } from './components/Summary.jsx';
import { Education } from './components/Education.jsx';

import { personal, summary, education } from './data/data.js';

import './App.css';

function App() {
  const [personalDetails, setPersonalDetails] = useState(personal);
  const [summaryContent, setSummaryContent] = useState(summary);
  const [educationDetails, setEducationDetails] = useState(education);

  const handlePersonalInputChange = (e) => {
    const property = e.target.id;
    setPersonalDetails((prevState) => {
      return {
        ...prevState,
        [property]: e.target.value,
      };
    });
  };

  const handleSummaryInputChange = (e) => {
    const property = e.target.id;
    setSummaryContent((prevState) => {
      return {
        ...prevState,
        [property]: e.target.value,
      };
    });
  };

  const handleEducationInputChange = (e) => {
    const property = e.target.id;
    setEducationDetails((prevState) => {
      return {
        ...prevState,
        [property]: e.target.value,
      };
    });
  };

  return (
    <div className="app">
      <div className="cv-forms">
        <PersonalDetailsForm onInputChange={(e) => handlePersonalInputChange(e)} />
        <SummaryForm onInputChange={(e) => handleSummaryInputChange(e)} />
        <EducationForm onInputChange={(e) => handleEducationInputChange(e)} />
      </div>
      <div className="cv-display">
        <PersonalDetails personalDetails={personalDetails} />
        <div className="general-info">
          <div className="primary-info">
            <Summary summaryContent={summaryContent} />
          </div>
          <div className="secondary-info">
            <Education educationDetails={educationDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
