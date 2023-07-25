import { useState } from 'react';

import '../styles/forms.css';

export const SummaryForm = () => {
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
    <div className="summary-form-wrapper">
      <button className={`form-collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        SUMMARY
      </button>
      <form className={`summary-form ${collapsed ? 'collapsed' : ''}`}>
        <div className={`form-input-wrapper ${collapsed ? 'collapsed' : ''}`}>
          <textarea
            className={`form-input textarea ${focused ? 'focused' : ''}`}
            id="summary"
            onFocus={handleFocus}
            onBlur={handleBlur}
          ></textarea>
        </div>
      </form>
    </div>
  );
};
