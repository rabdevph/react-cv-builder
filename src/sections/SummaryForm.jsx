import { useState, useRef } from 'react';

import { TextArea } from '../components/TextArea.jsx';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import '../styles/forms.css';

export const SummaryForm = ({ summaryData, setSummaryData, isSummaryVisible, setIsSummaryVisible }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [formValue, setFormValue] = useState({});

  const toggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    setFormValue({
      content: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // update summary object -> [data.js]
    setSummaryData(formValue);
    setFormValue({});
    e.target.reset();
  };

  const toggleSummaryVisibility = () => {
    setIsSummaryVisible((prevState) => !prevState);
  };

  return (
    <div className="form-wrapper">
      <button className={`form-collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        SUMMARY
      </button>
      <div className={`form-collapse-wrapper ${collapsed ? 'collapsed' : ''}`}>
        <form className="form" onSubmit={handleFormSubmit}>
          <TextArea id="content" label="Summary" handleInputChange={handleInputChange} />
          <div className="controls">
            {summaryData && (
              <button type="button" className="visibility-button" onClick={toggleSummaryVisibility}>
                {isSummaryVisible && (
                  <VisibilityOffIcon
                    sx={{
                      fontSize: 18,
                      color: '#3b82f6',
                      '&:hover': { color: '#2563eb' },
                      '&:active': { color: '#3b82f6' },
                    }}
                  />
                )}

                {!isSummaryVisible && (
                  <VisibilityIcon
                    sx={{
                      fontSize: 18,
                      color: '#3b82f6',
                      '&:hover': { color: '#2563eb' },
                      '&:active': { color: '#3b82f6' },
                    }}
                  />
                )}
              </button>
            )}

            <input type="submit" className="update-button" id="update-btn" value="UPDATE" />
          </div>
        </form>
      </div>
    </div>
  );
};
