import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export const Education = ({ data }) => {
  const { education } = data;

  return (
    <div className="education-wrapper">
      {!education && (
        <div className="education-empty">
          <p>EDUCATION</p>
        </div>
      )}

      {education && (
        <div className="education">
          <div className="heading">
            <p className="header">EDUCATION</p>
            <div className="horizontal-line"></div>
          </div>
          {education &&
            education.map((eduData) => {
              const { id, isVisible, details } = eduData;
              const { degree, school, country, 'start-year': startYear, 'end-year': endYear } = details;
              return (
                isVisible && (
                  <div className="education-content" key={id}>
                    <p className="education-degree">{degree}</p>
                    <p className="education-school">{school}</p>
                    <p className="education-country">{country}</p>
                    <div className="education-year-wrapper">
                      <CalendarTodayOutlinedIcon sx={{ fontSize: 11, color: '#1f2937' }} />
                      <p className="education-year">
                        {startYear} - {endYear}
                      </p>
                    </div>
                  </div>
                )
              );
            })}
        </div>
      )}
    </div>
  );
};
