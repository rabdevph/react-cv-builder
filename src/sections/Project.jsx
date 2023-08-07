import GitHubIcon from '@mui/icons-material/GitHub';

export const Project = ({ data }) => {
  const { project } = data;

  const isNotEmptyArray = (obj) => {
    return Array.isArray(obj) && obj.length !== 0;
  };

  return (
    <>
      {!isNotEmptyArray(project) && (
        <div className="section-placeholder">
          <p>PROJECT</p>
        </div>
      )}

      {isNotEmptyArray(project) && (
        <div className="project section-wrapper">
          <div className="section-heading">
            <p>PROJECT</p>
            <div className="section-hr"></div>
          </div>
          <div className="section-content">
            {project.map((projectData) => {
              const { id, isVisible, details } = projectData;
              const { project, 'repository-url': repositoryUrl, description, features } = details;
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
                      <p>{repositoryUrl}</p>
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
