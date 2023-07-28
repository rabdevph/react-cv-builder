import React from 'react';

export const Summary = ({ summaryData }) => {
  const { content } = summaryData;
  return (
    <div className="summary">
      <div className="heading">
        <p className="header">SUMMARY</p>
        <div className="horizontal-line"></div>
      </div>
      <p className="summary-content">{content}</p>
    </div>
  );
};
