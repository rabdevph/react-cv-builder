import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export const Experience = ({ data }) => {
  const { experience } = data;
  const { isSectionVisible, content } = experience;

  const isEmpty = (obj, prop) => {
    if (Object.hasOwn(obj, prop)) {
      return obj[prop].length === 0;
    }
    return true;
  };

  return (
    <>
      {isSectionVisible && isEmpty(experience, 'content') ? (
        <div className="section-placeholder">
          <p>EXPERIENCE</p>
        </div>
      ) : null}

      {isSectionVisible && !isEmpty(experience, 'content') ? (
        <div className="experience section-wrapper">
          <div className="section-heading">
            <p>EXPERIENCE</p>
            <div className="section-hr"></div>
          </div>
          <div className="section-content">
            {content.map((contentInfo) => {
              const { id, isVisible, details } = contentInfo;
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
      ) : null}
    </>
  );
};
