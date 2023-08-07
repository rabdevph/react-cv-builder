import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Input } from '../components/Input.jsx';
import { TextArea } from '../components/TextArea.jsx';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const ProjectForm = ({ data, updateData }) => {
  const { project } = data;
  const defaultFormValues = {
    id: uuidv4(),
    isVisible: true,
    details: {
      project: '',
      description: '',
      features: [],
    },
  };
  const [collapsed, setCollapsed] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formValues, setFormValues] = useState(defaultFormValues);

  const isNotEmptyArray = (obj) => {
    return Array.isArray(obj) && obj.length !== 0;
  };

  const toggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
    setIsFormVisible(false);
  };

  const toggleFormVisiblity = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'features') {
      const tasksArray = value.split('\n').filter((entry) => entry.trim() !== '');
      setFormValues((prevState) => {
        return {
          ...prevState,
          details: {
            ...prevState.details,
            [id]: tasksArray,
          },
        };
      });
    } else {
      setFormValues((prevState) => {
        return {
          ...prevState,
          details: {
            ...prevState.details,
            [id]: value,
          },
        };
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    isNotEmptyArray(project) ? updateData('project', [...project, formValues]) : updateData('project', [formValues]);
    setFormValues(defaultFormValues);
    e.target.reset();
    setIsFormVisible((prevState) => !prevState);
  };

  const toggleProjectVisibility = (id) => {
    if (isNotEmptyArray(project)) {
      const updatedExperience = project.map((expData) => {
        if (expData.id === id) {
          return { ...expData, isVisible: !expData.isVisible };
        }
        return expData;
      });
      updateData('project', updatedExperience);
    }
  };

  const deleteProject = (id) => {
    if (isNotEmptyArray(project)) {
      const updatedExperience = project.filter((projectData) => projectData.id !== id);
      updateData('project', updatedExperience);
    }
  };

  return (
    <div>
      <div className="form-wrapper">
        <button className={`collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
          PROJECT
        </button>
        <div className={`collapse-wrapper ${collapsed ? 'collapsed' : ''}`}>
          {!isFormVisible && (
            <div className="new-button-wrapper">
              <button className="new-button | control-button" id="new-button" onClick={toggleFormVisiblity}>
                NEW
              </button>
            </div>
          )}

          {isFormVisible && (
            <form className="project | form" onSubmit={handleFormSubmit}>
              <Input id="project" label="project" handleInputChange={handleInputChange} />
              <TextArea id="description" label="description" handleInputChange={handleInputChange} />
              <TextArea
                id="features"
                label="Features&#10;* press Enter key between entries"
                handleInputChange={handleInputChange}
              />

              <div className="controls-wrapper">
                <input
                  type="button"
                  className="close-button | control-button"
                  id="close-button"
                  value="CLOSE"
                  onClick={toggleFormVisiblity}
                />
                <input type="submit" className="add-button | control-button" id="add-btn" value="ADD" />
              </div>
            </form>
          )}

          {isNotEmptyArray(project) && (
            <div className="experience-list">
              {project.map((projectData) => {
                const { id, isVisible, details } = projectData;
                const { project } = details;
                return (
                  <div className="experience-list-item" key={id}>
                    <p className="position">{project}</p>
                    <div className="data-controls-wrapper">
                      <button type="button" className="visibility-button" onClick={() => toggleProjectVisibility(id)}>
                        {isVisible && (
                          <VisibilityOffIcon
                            sx={{
                              fontSize: 14,
                              color: '#3b82f6',
                              '&:hover': { color: '#2563eb' },
                              '&:active': { color: '#3b82f6' },
                            }}
                          />
                        )}

                        {!isVisible && (
                          <VisibilityIcon
                            sx={{
                              fontSize: 14,
                              color: '#3b82f6',
                              '&:hover': { color: '#2563eb' },
                              '&:active': { color: '#3b82f6' },
                            }}
                          />
                        )}
                      </button>
                      <button type="button" className="delete-button" onClick={() => deleteProject(id)}>
                        <DeleteOutlineIcon
                          sx={{
                            fontSize: 14,
                            color: '#3b82f6',
                            '&:hover': { color: '#2563eb' },
                            '&:active': { color: '#3b82f6' },
                          }}
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
