import { useState } from 'react';

import { PersonalDetailsForm } from './sections/PersonalDetailsForm.jsx';
import { SummaryForm } from './sections/SummaryForm.jsx';
import { EducationForm } from './sections/EducationForm.jsx';
import { WorkExperienceForm } from './sections/WorkExperienceForm.jsx';
import { PersonalDetails } from './sections/PersonalDetails.jsx';
import { Summary } from './sections/Summary.jsx';
import { Education } from './sections/Education.jsx';

import './App.css';

function App() {
  const [data, setData] = useState({});

  const updateData = (property, data) => {
    setData((prevState) => {
      return {
        ...prevState,
        [property]: data,
      };
    });
  };

  console.log(data);

  return (
    <div className="app">
      <div className="cv-forms">
        <PersonalDetailsForm updateData={updateData} />
        <SummaryForm data={data} updateData={updateData} />
        <EducationForm data={data} updateData={updateData} />
        <WorkExperienceForm data={data} updateData={updateData} />
      </div>
      <div className="cv-wrapper">
        <div className="cv">
          <PersonalDetails data={data} />
          <div className="general-info-wrapper">
            <div className="primary-info">
              <Summary data={data} />
            </div>
            <div className="secondary-info">
              <Education data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
