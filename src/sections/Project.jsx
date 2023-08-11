import GitHubIcon from '@mui/icons-material/GitHub';

export const Project = ({ data }) => {
  const { project } = data;
  const { isSectionVisible, information } = project;

  const isNotEmpty = (arr) => {
    return Array.isArray(arr) && arr.length !== 0;
  };

  return (
    <>
      {!isNotEmpty(information) ? (
        <div className="section-placeholder">
          <p>PROJECT</p>
        </div>
      ) : null}

      {isNotEmpty(information) && isSectionVisible ? (
        <div className="project section-wrapper">
          <div className="section-heading">
            <p>PROJECT</p>
            <div className="section-hr"></div>
          </div>
          <div className="section-content">
            {information.map((projectInfo) => {
              const { id, isVisible, details } = projectInfo;
              const { project, repository, description, features } = details;
              return (
                isVisible && (
                  <div className="section-content-item" key={id}>
                    <p className="project-title">{project}</p>
                    <p className="project-description">{description}</p>
                    <ul className="project-features">
                      {features.map((task, index) => {
                        return <li key={index}>{task}</li>;
                      })}
                    </ul>
                    <div className="project-repo-url">
                      <GitHubIcon sx={{ fontSize: 12, color: '#1f2937' }} />
                      <p>{repository}</p>
                    </div>
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
