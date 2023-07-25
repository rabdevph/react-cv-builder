import React from 'react';

export const Summary = ({ summaryContent }) => {
  return (
    <div className="summary">
      <div className="summary-heading">
        <p className="summary-header">SUMMARY</p>
        <div className="horizontal-line"></div>
      </div>
      <div className="summary-content">{summaryContent.content}</div>
    </div>
  );
};
