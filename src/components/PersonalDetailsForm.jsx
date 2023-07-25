import React, { useState } from 'react';

import '../styles/forms.css';

export const PersonalDetailsForm = ({ onInputChange }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputId) => {
    setFocusedInput(inputId);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const toggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div className="personal-form-wrapper">
      <button className={`form-collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        PERSONAL DETAILS
      </button>
      <form className={`personal-form ${collapsed ? 'collapsed' : ''}`}>
        <div className={`form-input-wrapper ${collapsed ? 'collapsed' : ''}`}>
          <label className="form-label" htmlFor="name">
            FULL NAME
          </label>
          <input
            className={`form-input ${focusedInput === 'name' ? 'focused' : ''}`}
            type="text"
            id="name"
            autoComplete="off"
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
            onChange={onInputChange}
          />
        </div>

        <div className={`form-input-wrapper ${collapsed ? 'collapsed' : ''}`}>
          <label className="form-label" htmlFor="profession">
            PROFESSION
          </label>
          <input
            className={`form-input ${focusedInput === 'profession' ? 'focused' : ''}`}
            type="text"
            id="profession"
            autoComplete="off"
            onFocus={() => handleFocus('profession')}
            onBlur={handleBlur}
            onChange={onInputChange}
          />
        </div>

        <div className={`form-input-wrapper ${collapsed ? 'collapsed' : ''}`}>
          <label className="form-label" htmlFor="phone">
            PHONE NUMBER
          </label>
          <input
            className={`form-input ${focusedInput === 'phone' ? 'focused' : ''}`}
            type="text"
            id="phone"
            autoComplete="off"
            onFocus={() => handleFocus('phone')}
            onBlur={handleBlur}
            onChange={onInputChange}
          />
        </div>

        <div className={`form-input-wrapper ${collapsed ? 'collapsed' : ''}`}>
          <label className="form-label" htmlFor="email">
            EMAIL ADDRESS
          </label>
          <input
            className={`form-input ${focusedInput === 'email' ? 'focused' : ''}`}
            type="text"
            id="email"
            autoComplete="off"
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            onChange={onInputChange}
          />
        </div>

        <div className={`form-input-wrapper ${collapsed ? 'collapsed' : ''}`}>
          <label className="form-label" htmlFor="socmed">
            LINKEDIN/GITHUB URL
          </label>
          <input
            className={`form-input ${focusedInput === 'socmed' ? 'focused' : ''}`}
            type="text"
            id="socmed"
            autoComplete="off"
            onFocus={() => handleFocus('socmed')}
            onBlur={handleBlur}
            onChange={onInputChange}
          />
        </div>

        <div className={`form-input-wrapper ${collapsed ? 'collapsed' : ''}`}>
          <label className="form-label" htmlFor="address">
            ADDRESS
          </label>
          <input
            className={`form-input ${focusedInput === 'address' ? 'focused' : ''}`}
            type="text"
            id="address"
            autoComplete="off"
            onFocus={() => handleFocus('address')}
            onBlur={handleBlur}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};
