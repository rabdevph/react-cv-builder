import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Input } from '../components/Input.jsx';
import { TextArea } from '../components/TextArea.jsx';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const WorkExperienceForm = ({ data, updateData }) => {
  const { experience } = data;
  const defaultFormValues = {
    id: uuidv4(),
    isVisible: true,
    details: {
      title: '',
      company: '',
      description: '',
      location: '',
      'start-year': '',
      'end-year': '',
      tasks: [],
    },
  };
  const [collapsed, setCollapsed] = useState(false);
  const [formValues, setFormValues] = useState(defaultFormValues);

  const isNotEmptyArray = (obj) => {
    return Array.isArray(obj) && obj.length !== 0;
  };

  const toggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'tasks') {
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
    isNotEmptyArray(experience)
      ? updateData('experience', [...experience, formValues])
      : updateData('experience', [formValues]);
    setFormValues(defaultFormValues);
    e.target.reset();
  };

  const toggleVisibility = (id) => {
    if (isNotEmptyArray(experience)) {
      const updatedExperience = experience.map((workExpData) => {
        if (workExpData.id === id) {
          return { ...workExpData, isVisible: !workExpData.isVisible };
        }
        return workExpData;
      });
      updateData('experience', updatedExperience);
    }
  };

  const deleteWorkExperience = (id) => {
    if (isNotEmptyArray(experience)) {
      const updatedExperience = experience.filter((workExpData) => workExpData.id !== id);
      updateData('experience', updatedExperience);
    }
  };

  return (
    <div>
      <div className="form-wrapper">
        <button className={`form-collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
          WORK EXPERIENCE
        </button>
        <div className={`form-collapse-wrapper ${collapsed ? 'collapsed' : ''}`}>
          <form className="form" onSubmit={handleFormSubmit}>
            <Input id="title" label="position" handleInputChange={handleInputChange} />
            <Input id="company" label="company" handleInputChange={handleInputChange} />
            <Input id="description" label="description" handleInputChange={handleInputChange} />
            <Input id="location" label="location" handleInputChange={handleInputChange} />
            <Input id="start-year" label="start year" handleInputChange={handleInputChange} />
            <Input id="end-year" label="end year" handleInputChange={handleInputChange} />
            <TextArea
              id="tasks"
              label="Tasks/Accomplishments&#10;* press Enter key between entries"
              handleInputChange={handleInputChange}
            />
            <input type="submit" className="add-button" id="add-btn" value="ADD" />
          </form>
          {isNotEmptyArray(experience) && (
            <div className="work-experience-list">
              {experience.map((workExpData) => {
                const { id, isVisible, details } = workExpData;
                const { title } = details;
                return (
                  <div className="work-experience-list-position" key={id}>
                    <p className="position">{title}</p>
                    <div className="work-experience-list-controls">
                      {' '}
                      <button type="button" className="visibility-button" onClick={() => toggleVisibility(id)}>
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
                      <button type="button" className="delete-button" onClick={() => deleteWorkExperience(id)}>
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
