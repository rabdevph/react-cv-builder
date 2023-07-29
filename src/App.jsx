import { useState } from 'react';

import { PersonalDetailsForm } from './sections/PersonalDetailsForm.jsx';
import { SummaryForm } from './sections/SummaryForm.jsx';
import { EducationForm } from './sections/EducationForm.jsx';
import { PersonalDetails } from './sections/PersonalDetails.jsx';
import { Summary } from './sections/Summary.jsx';
import { Education } from './sections/Education.jsx';

import { data } from './data/data.js';

import './App.css';

function App() {
  const { personal, summary, education } = data;
  const [personalData, setPersonalData] = useState(personal);
  const [summaryData, setSummaryData] = useState(summary);
  const [educationData, setEducationData] = useState(education);

  return (
    <div className="app">
      <div className="cv-forms">
        <PersonalDetailsForm setPersonalData={setPersonalData} />
        <SummaryForm summaryData={summaryData} setSummaryData={setSummaryData} />
        <EducationForm educationData={educationData} setEducationData={setEducationData} />
      </div>
      <div className="cv-wrapper">
        <div className="cv">
          <PersonalDetails personalData={personalData} />
          <div className="general-info">
            <div className="primary-info">{summaryData.content && <Summary summaryData={summaryData} />}</div>
            <div className="secondary-info">
              {educationData.length > 0 && <Education educationData={educationData} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
