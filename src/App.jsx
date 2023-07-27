import { useState } from 'react';

import { PersonalDetailsForm } from './sections/PersonalDetailsForm.jsx';
import { SummaryForm } from './sections/SummaryForm.jsx';
import { EducationForm } from './sections/EducationForm.jsx';
import { PersonalDetails } from './sections/PersonalDetails.jsx';
import { Summary } from './sections/Summary.jsx';
import { Education } from './sections/Education.jsx';

import { personal, summary, education } from './data/data.js';

import './App.css';

function App() {
  const [personalDetails, setPersonalDetails] = useState(personal);
  const [summaryContent, setSummaryContent] = useState(summary);
  const [educationDetails, setEducationDetails] = useState(education);

  const handleInputChange = (e, setFunction) => {
    const property = e.target.id;
    setFunction((prevState) => {
      return {
        ...prevState,
        [property]: e.target.value,
      };
    });
  };

  return (
    <div className="app">
      <div className="cv-forms">
        <PersonalDetailsForm setPersonalDetails={setPersonalDetails} />
        <SummaryForm onInputChange={(e) => handleInputChange(e, setSummaryContent)} />
        <EducationForm onInputChange={(e) => handleInputChange(e, setEducationDetails)} />
      </div>
      <div className="cv-wrapper">
        <div className="cv">
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
    </div>
  );
}

export default App;
