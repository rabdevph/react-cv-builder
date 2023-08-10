import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export const Experience = ({ data }) => {
  const { experience } = data;

  const isNotEmptyArray = (obj) => {
    return Array.isArray(obj) && obj.length !== 0;
  };

  return (
    <>
      {!isNotEmptyArray(experience) && (
        <div className="section-placeholder">
          <p>EXPERIENCE</p>
        </div>
      )}

      {isNotEmptyArray(experience) && (
        <div className="experience section-wrapper">
          <div className="section-heading">
            <p>EXPERIENCE</p>
            <div className="section-hr"></div>
          </div>
          <div className="section-content">
            {experience.map((workExpData) => {
              const { id, isVisible, details } = workExpData;
              const {
                title,
                company,
                location,
                'start-year': startYear,
                'end-year': endYear,
                tasks,
              } = details;
              return (
                isVisible && (
                  <div className="section-content-item" key={id}>
                    <p className="experience-title">{title}</p>
                    <div className="experience-details">
                      <p className="experience-company">{company}</p>
                      <div className="experience-year">
                        <CalendarTodayOutlinedIcon sx={{ fontSize: 11, color: '#1f2937' }} />
                        <p>
                          {startYear} - {endYear}
                        </p>
                      </div>
                      <p className="experience-location">{location}</p>
                    </div>
                    <ul className="experience-tasks">
                      {tasks.map((task, index) => {
                        return <li key={index}>{task}</li>;
                      })}
                    </ul>
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
