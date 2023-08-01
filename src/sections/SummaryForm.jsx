import { useState } from 'react';

import { TextArea } from '../components/TextArea.jsx';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import '../styles/forms.css';

export const SummaryForm = ({ data, updateData }) => {
  const { summary } = data;
  const { isVisible } = summary || {};
  const defaultFormValues = {
    isVisible: true,
    content: '',
  };
  const [collapsed, setCollapsed] = useState(false);
  const [formValue, setFormValue] = useState(defaultFormValues);

  const toggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    setFormValue((prevState) => {
      return {
        ...prevState,
        content: e.target.value,
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateData('summary', formValue);
    setFormValue(defaultFormValues);
    e.target.reset();
  };

  const toggleSummaryVisibility = () => {
    updateData('summary', { ...summary, isVisible: !isVisible });
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
            {summary && (
              <button type="button" className="visibility-button" onClick={toggleSummaryVisibility}>
                {isVisible && (
                  <VisibilityOffIcon
                    sx={{
                      fontSize: 18,
                      color: '#3b82f6',
                      '&:hover': { color: '#2563eb' },
                      '&:active': { color: '#3b82f6' },
                    }}
                  />
                )}

                {!isVisible && (
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
