import { useState } from 'react';

import { TextArea } from '../components/TextArea.jsx';

export const SummaryForm = ({ data, updateData }) => {
  const { summary } = data;
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    updateData('summary', e.target.value);
  };

  return (
    <div className="form-section-wrapper">
      <button className={`collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        SUMMARY
      </button>
      <div className={`collapse-wrapper ${collapsed ? 'collapsed' : ''}`}>
        <form className="summary | form">
          <TextArea
            id="content"
            label="summary"
            val={summary}
            handleInputChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
};
