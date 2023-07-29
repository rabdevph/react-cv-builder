import React from 'react';

export const Summary = ({ summaryData }) => {
  return (
    summaryData.isVisible && (
      <div className="summary">
        <div className="heading">
          <p className="header">SUMMARY</p>
          <div className="horizontal-line"></div>
        </div>
        <p className="summary-content">{summaryData.content}</p>
      </div>
    )
  );
};
