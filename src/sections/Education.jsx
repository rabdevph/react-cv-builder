import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export const Education = ({ data }) => {
  const { education } = data;

  const isNotEmptyArray = (obj) => {
    return Array.isArray(obj) && obj.length !== 0;
  };

  return (
    <>
      {!isNotEmptyArray(education) && (
        <div className="section-placeholder">
          <p>EDUCATION</p>
        </div>
      )}

      {isNotEmptyArray(education) && (
        <div className="education section-wrapper">
          <div className="section-heading">
            <p>EDUCATION</p>
            <div className="section-hr"></div>
          </div>
          <div className="section-content">
            {education.map((eduData) => {
              const { id, isVisible, details } = eduData;
              const { degree, school, country, 'start-year': startYear, 'end-year': endYear } = details;
              return (
                isVisible && (
                  <div className="education section-content-item" key={id}>
                    <p className="education-degree">{degree}</p>
                    <p className="education-school">{school}</p>
                    <p className="education-country">{country}</p>
                    <div className="education-year">
                      <CalendarTodayOutlinedIcon sx={{ fontSize: 11, color: '#1f2937' }} />
                      <p>
                        {startYear} - {endYear}
                      </p>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
