import { useState } from 'react';

import { PersonalForm } from './components/PersonalForm.jsx';
import { SummaryForm } from './components/SummaryForm.jsx';
import { PersonalDetails } from './components/PersonalDetails.jsx';

import { personal, summary } from './data/data.js';

import './App.css';

function App() {
  const [personalDetails, setPersonalDetails] = useState(personal);

  const handlePersonalInputChange = (e) => {
    const property = e.target.id;
    setPersonalDetails((prevState) => {
      return {
        ...prevState,
        [property]: e.target.value,
      };
    });
  };

  return (
    <div className="app">
      <div className="cv-forms">
        <PersonalForm onInputChange={(e) => handlePersonalInputChange(e)} />
        <SummaryForm />
      </div>
      <div className="cv-display">
        <PersonalDetails personalDetails={personalDetails} />
      </div>
    </div>
  );
}

export default App;
