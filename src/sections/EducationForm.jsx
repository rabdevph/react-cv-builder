import { useState } from 'react';

import { Input } from '../components/Input.jsx';

export const EducationForm = ({ setEducationDetails }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [formValues, setFormValues] = useState({
    degree: '',
    school: '',
    country: '',
    'start-year': '',
    'end-year': '',
  });

  const toggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // update education object -> [data.js]
    setEducationDetails(formValues);
  };

  return (
    <div className="form-wrapper">
      <button className={`form-collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        EDUCATION
      </button>
      <form className={`form ${collapsed ? 'collapsed' : ''}`} onSubmit={handleFormSubmit}>
        <Input id="degree" label="degree" collapsed={collapsed} handleInputChange={handleInputChange} />
        <Input id="school" label="school" collapsed={collapsed} handleInputChange={handleInputChange} />
        <Input id="country" label="Country" collapsed={collapsed} handleInputChange={handleInputChange} />
        <Input id="start-year" label="start year" collapsed={collapsed} handleInputChange={handleInputChange} />
        <Input id="end-year" label="end year" collapsed={collapsed} handleInputChange={handleInputChange} />
        <input type="submit" className="update-button" id="update-btn" value="UPDATE" />
      </form>
    </div>
  );
};
