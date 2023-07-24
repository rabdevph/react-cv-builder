import { PersonalForm } from './components/PersonalForm/PersonalForm.jsx';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="cv-forms">
        <PersonalForm />
      </div>
      <div className="cv-display">CV</div>
    </div>
  );
}

export default App;
