import React from 'react';

export const Summary = ({ data }) => {
  const { summary } = data;
  const { isVisible, content } = summary || {};

  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
  };

  return (
    <>
      {isEmptyObject(summary) && (
        <div className="section-placeholder">
          <p>SUMMARY</p>
        </div>
      )}

      {!isEmptyObject(summary) && isVisible && (
        <div className="summary section-wrapper">
          <div className="section-heading">
            <p>SUMMARY</p>
            <div className="section-hr"></div>
          </div>
          <div className="section-content">
            <p className="summary-content">{content}</p>
          </div>
        </div>
      )}
    </>
  );
};
