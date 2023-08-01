import React from 'react';

export const Summary = ({ data }) => {
  const { summary } = data;
  const { isVisible = true, content = '' } = summary || {};
  return (
    <div className="summary-wrapper">
      {!summary && (
        <div className="summary-empty">
          <p>SUMMARY</p>
        </div>
      )}
      {summary && isVisible && (
        <div className="summary">
          <div className="heading">
            <p className="header">SUMMARY</p>
            <div className="horizontal-line"></div>
          </div>
          <p className="summary-content">{content}</p>
        </div>
      )}
    </div>
  );
};
