import { useState } from 'react';

export const EducationForm = ({ onInputChange }) => {
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
    <div className="form-wrapper">
      <button className={`form-collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        EDUCATION
      </button>
      <form className={`form ${collapsed ? 'collapsed' : ''}`}>
        <div className={`form-input-wrapper ${collapsed ? 'collapsed' : ''}`}>
          <label className="form-label" htmlFor="degree">
            DEGREE
          </label>
          <input
            className={`form-input ${focusedInput === 'degree' ? 'focused' : ''}`}
            type="text"
            id="degree"
            autoComplete="off"
            onFocus={() => handleFocus('degree')}
            onBlur={handleBlur}
            onChange={onInputChange}
          />
        </div>

        <div className={`form-input-wrapper ${collapsed ? 'collapsed' : ''}`}>
          <label className="form-label" htmlFor="school">
            SCHOOL
          </label>
          <input
            className={`form-input ${focusedInput === 'school' ? 'focused' : ''}`}
            type="text"
            id="school"
            autoComplete="off"
            onFocus={() => handleFocus('school')}
            onBlur={handleBlur}
            onChange={onInputChange}
          />
        </div>

        <div className={`form-input-wrapper ${collapsed ? 'collapsed' : ''}`}>
          <label className="form-label" htmlFor="year">
            YEAR
          </label>
          <input
            className={`form-input ${focusedInput === 'year' ? 'focused' : ''}`}
            type="text"
            id="year"
            autoComplete="off"
            onFocus={() => handleFocus('year')}
            onBlur={handleBlur}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};
