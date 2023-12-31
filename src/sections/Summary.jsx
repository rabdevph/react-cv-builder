import React from 'react';

export const Summary = ({ data }) => {
  const { summary } = data;

  return (
    <>
      {!summary && (
        <div className="section-placeholder">
          <p>SUMMARY</p>
        </div>
      )}

      {summary && (
        <div className="summary section-wrapper">
          <div className="section-content">
            <p className="summary-content">{summary}</p>
          </div>
        </div>
      )}
    </>
  );
};
