import { useState } from 'react';

import { PersonalDetailsForm } from './components/PersonalDetailsForm.jsx';
import { SummaryForm } from './components/SummaryForm.jsx';
import { PersonalDetails } from './components/PersonalDetails.jsx';
import { Summary } from './components/Summary.jsx';

import { personal, summary } from './data/data.js';

import './App.css';

function App() {
  const [personalDetails, setPersonalDetails] = useState(personal);
  const [summaryContent, setSummaryContent] = useState(summary);

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

  return (
    <div className="app">
      <div className="cv-forms">
        <PersonalDetailsForm onInputChange={(e) => handlePersonalInputChange(e)} />
        <SummaryForm onInputChange={(e) => handleSummaryInputChange(e)} />
      </div>
      <div className="cv-display">
        <PersonalDetails personalDetails={personalDetails} />
        <div className="general-info">
          <div className="primary-info">
            <Summary summaryContent={summaryContent} />
          </div>
          <div className="secondary-info">EDUCATION, SKILLS</div>
        </div>
      </div>
    </div>
  );
}

export default App;
