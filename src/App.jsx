import { useState } from 'react';

import { PersonalForm } from './components/PersonalForm/PersonalForm.jsx';
import { PersonalDetails } from './components/PersonalDetails/PersonalDetails.jsx';

import { personal } from './data/data.js';

import './App.css';

function App() {
  const [personalDetails, setPersonalDetails] = useState(personal);

  const handlePersonalInputChange = (e) => {
    const property = e.target.id;
    setPersonalDetails({
      ...personalDetails,
      [property]: e.target.value,
    });
  };

  return (
    <div className="app">
      <div className="cv-forms">
        <PersonalForm onInputChange={(e) => handlePersonalInputChange(e)} />
      </div>
      <div className="cv-display">
        <PersonalDetails personalDetails={personalDetails} />
      </div>
    </div>
  );
}

export default App;
