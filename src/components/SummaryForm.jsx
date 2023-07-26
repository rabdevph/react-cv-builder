import { useState } from 'react';

import '../styles/forms.css';

export const SummaryForm = ({ onInputChange }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const toggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div className="form-wrapper">
      <button className={`form-collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        SUMMARY
      </button>
      <form className={`form ${collapsed ? 'collapsed' : ''}`}>
        <div className={`form-input-wrapper ${collapsed ? 'collapsed' : ''}`}>
          <label className="form-label" htmlFor="degree">
            CONTENT
          </label>
          <textarea
            className={`form-input textarea ${focused ? 'focused' : ''}`}
            id="content"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={onInputChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};
