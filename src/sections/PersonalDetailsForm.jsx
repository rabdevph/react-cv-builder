import React, { useState } from 'react';

import { Input } from '../components/Input.jsx';

import '../styles/forms.css';

export const PersonalDetailsForm = ({ setPersonalDetails }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    profession: '',
    phone: '',
    email: '',
    github: '',
    address: '',
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
    // update personal object -> [data.js]
    setPersonalDetails(formValues);
  };

  return (
    <div className="form-wrapper">
      <button className={`form-collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        PERSONAL DETAILS
      </button>
      <form className={`form ${collapsed ? 'collapsed' : ''}`} onSubmit={handleFormSubmit}>
        <Input id="name" label="name" collapsed={collapsed} handleInputChange={handleInputChange} />
        <Input id="profession" label="profession" collapsed={collapsed} handleInputChange={handleInputChange} />
        <Input id="phone" label="phone number" collapsed={collapsed} handleInputChange={handleInputChange} />
        <Input id="email" label="email address" collapsed={collapsed} handleInputChange={handleInputChange} />
        <Input id="github" label="github profile link" collapsed={collapsed} handleInputChange={handleInputChange} />
        <Input id="address" label="address" collapsed={collapsed} handleInputChange={handleInputChange} />
        <input type="submit" className="save-button" id="save-btn" value="UPDATE" />
      </form>
    </div>
  );
};
