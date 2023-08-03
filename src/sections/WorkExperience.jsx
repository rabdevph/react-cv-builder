import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export const WorkExperience = ({ data }) => {
  const { experience } = data;

  const isNotEmptyArray = (obj) => {
    return Array.isArray(obj) && obj.length !== 0;
  };

  return (
    <>
      {!isNotEmptyArray(experience) && (
        <div className="section-placeholder">
          <p>WORK EXPERIENCE</p>
        </div>
      )}

      {isNotEmptyArray(experience) && (
        <div className="work-experience section-wrapper">
          <div className="section-heading">
            <p>WORK EXPERIENCE</p>
            <div className="section-hr"></div>
          </div>
          <div className="section-content">
            {experience.map((workExpData) => {
              const { id, isVisible, details } = workExpData;
              const {
                title,
                company,
                description,
                location,
                'start-year': startYear,
                'end-year': endYear,
                tasks,
              } = details;
              return (
                isVisible && (
                  <div className="section-content-item" key={id}>
                    <p className="work-experience-title">{title}</p>
                    <div className="work-experience-details">
                      <p className="work-experience-company">{company}</p>
                      <div className="work-experience-year">
                        <CalendarTodayOutlinedIcon sx={{ fontSize: 11, color: '#1f2937' }} />
                        <p>
                          {startYear} - {endYear}
                        </p>
                      </div>
                      <p className="work-experience-location">{location}</p>
                    </div>
                    <p className="work-experience-description">{description}</p>
                    <ul className="work-experience-tasks">
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
