import React, { useState } from 'react';

import './personalform.css';

export const PersonalForm = () => {
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputId) => {
    setFocusedInput(inputId);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  return (
    <>
      <form className="personal-form">
        <p className="form-header">PERSONAL DETAILS</p>
        <div className="input-wrapper">
          <label className="form-label" htmlFor="full-name">
            FULL NAME
          </label>
          <input
            className={`form-input ${focusedInput === 'full-name' ? 'focused' : ''}`}
            type="text"
            id="full-name"
            autoComplete="off"
            onFocus={() => handleFocus('full-name')}
            onBlur={handleBlur}
          />
        </div>

        <div className="input-wrapper">
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
          />
        </div>

        <div className="input-wrapper">
          <label className="form-label" htmlFor="phone-number">
            PHONE NUMBER
          </label>
          <input
            className={`form-input ${focusedInput === 'phone-number' ? 'focused' : ''}`}
            type="text"
            id="phone-number"
            autoComplete="off"
            onFocus={() => handleFocus('phone-number')}
            onBlur={handleBlur}
          />
        </div>

        <div className="input-wrapper">
          <label className="form-label" htmlFor="email-address">
            EMAIL ADDRESS
          </label>
          <input
            className={`form-input ${focusedInput === 'email-address' ? 'focused' : ''}`}
            type="text"
            id="email-address"
            autoComplete="off"
            onFocus={() => handleFocus('email-address')}
            onBlur={handleBlur}
          />
        </div>

        <div className="input-wrapper">
          <label className="form-label" htmlFor="socmed-url">
            LINKEDIN/GITHUB URL
          </label>
          <input
            className={`form-input ${focusedInput === 'socmed-url' ? 'focused' : ''}`}
            type="text"
            id="socmed-url"
            autoComplete="off"
            onFocus={() => handleFocus('socmed-url')}
            onBlur={handleBlur}
          />
        </div>

        <div className="input-wrapper">
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
          />
        </div>
      </form>
    </>
  );
};
