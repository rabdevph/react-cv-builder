import { useState } from 'react';

import { TextArea } from '../components/TextArea.jsx';

import '../styles/forms.css';

export const SummaryForm = ({ setSummaryContent }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [formValue, setFormValue] = useState({
    content: '',
  });

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
    setSummaryContent(formValue);
  };

  return (
    <div className="form-wrapper">
      <button className={`form-collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        SUMMARY
      </button>
      <form className={`form ${collapsed ? 'collapsed' : ''}`} onSubmit={handleFormSubmit}>
        <TextArea id="content" label="Summary" collapsed={collapsed} handleInputChange={handleInputChange} />
        <input type="submit" className="update-button" id="update-btn" value="UPDATE" />
      </form>
    </div>
  );
};
