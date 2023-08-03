import React, { useState } from 'react';

import { Input } from '../components/Input.jsx';

import '../styles/forms.css';

export const PersonalDetailsForm = ({ updateData }) => {
  const defaultFormValues = {
    name: '',
    profession: '',
    phone: '',
    email: '',
    github: '',
    linkedin: '',
    address: '',
  };
  const [collapsed, setCollapsed] = useState(false);
  const [formValues, setFormValues] = useState(defaultFormValues);

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
    updateData('personal', formValues);
    setFormValues(defaultFormValues);
    e.target.reset();
  };

  return (
    <div className="form-wrapper">
      <button className={`form-collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        PERSONAL DETAILS
      </button>
      <div className={`form-collapse-wrapper ${collapsed ? 'collapsed' : ''}`}>
        <form className="form" onSubmit={handleFormSubmit}>
          <Input id="name" label="name" handleInputChange={handleInputChange} />
          <Input id="profession" label="profession" handleInputChange={handleInputChange} />
          <Input id="phone" label="phone number" handleInputChange={handleInputChange} />
          <Input id="email" label="email address" handleInputChange={handleInputChange} />
          <Input id="github" label="github profile" handleInputChange={handleInputChange} />
          <Input id="linkedin" label="linkedin profile" handleInputChange={handleInputChange} />
          <Input id="address" label="address" handleInputChange={handleInputChange} />
          <input type="submit" className="update-button" id="update-btn" value="UPDATE" />
        </form>
      </div>
    </div>
  );
};
