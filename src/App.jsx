import { useState } from 'react';

import { PersonalForm } from './components/PersonalForm/PersonalForm.jsx';
import { PersonalDetails } from './components/PersonalDetails/PersonalDetails.jsx';

import { handleInputChange } from './scripts/personalFormEvents.js';

import { personal } from './data/data.js';

import './App.css';

function App() {
  const [personalDetails, setPersonalDetails] = useState(personal);

  return (
    <div className="app">
      <div className="cv-forms">
        <PersonalForm onInputChange={(e) => handleInputChange(e, setPersonalDetails, personalDetails)} />
      </div>
      <div className="cv-display">
        <PersonalDetails personalDetails={personalDetails} />
      </div>
    </div>
  );
}

export default App;
