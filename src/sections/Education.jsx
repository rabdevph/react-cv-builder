import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export const Education = ({ educationData }) => {
  return (
    <div className="education">
      <div className="heading">
        <p className="header">EDUCATION</p>
        <div className="horizontal-line"></div>
      </div>
      {educationData.map((eduData) => {
        const { id, isVisible, degree, school, country, 'start-year': startYear, 'end-year': endYear } = eduData;
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
  );
};
