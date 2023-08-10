import React, { useState } from 'react';

import { Input } from '../components/Input.jsx';

export const PersonalDetailsForm = ({ data, updateData }) => {
  const { personal } = data;
  const defaultFormValues = {
    name: '',
    profession: '',
    phone: '',
    email: '',
    github: '',
    address: '',
  };
  const [formValues, setFormValues] = useState(defaultFormValues);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    updateData('personal', { ...personal, [id]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateData('personal', formValues);
    setFormValues(defaultFormValues);
    e.target.reset();
  };

  return (
    <div className="personal | form-section-wrapper">
      <div className="header">PERSONAL DETAILS</div>
      <div className="form-wrapper">
        <form className="form" onSubmit={handleFormSubmit}>
          <Input id="name" label="name" handleInputChange={handleInputChange} />
          <Input id="profession" label="profession" handleInputChange={handleInputChange} />
          <Input id="phone" label="phone number" handleInputChange={handleInputChange} />
          <Input id="email" label="email address" handleInputChange={handleInputChange} />
          <Input id="github" label="github profile" handleInputChange={handleInputChange} />
          <Input id="address" label="address" handleInputChange={handleInputChange} />
        </form>
      </div>
    </div>
  );
};
