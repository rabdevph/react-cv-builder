import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Input } from '../components/Input.jsx';
import { TextArea } from '../components/TextArea.jsx';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const WorkExperienceForm = ({ data, updateData }) => {
  const { workExperience } = data;
  const defaultFormValues = {
    id: uuidv4(),
    isVisible: true,
    details: {
      position: '',
      company: '',
      description: '',
      'start-year': '',
      'end-year': '',
      tasks: [],
    },
  };
  const [collapsed, setCollapsed] = useState(false);
  const [formValues, setFormValues] = useState(defaultFormValues);

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
    workExperience
      ? updateData('workExperience', [...workExperience, formValues])
      : updateData('workExperience', [formValues]);
    setFormValues(defaultFormValues);
    e.target.reset();
  };

  const toggleVisibility = (id) => {
    if (workExperience) {
      const updatedEducation = workExperience.map((workExpData) => {
        if (workExpData.id === id) {
          return { ...workExpData, isVisible: !workExpData.isVisible };
        }
        return workExpData;
      });
      updateData('workExperience', updatedEducation);
    }
  };

  const deleteWorkExperience = (id) => {
    if (workExperience) {
      const updatedEducation = workExperience.filter((workExpData) => workExpData.id !== id);
      updateData('workExperience', updatedEducation);
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
            <Input id="position" label="position" handleInputChange={handleInputChange} />
            <Input id="company" label="company" handleInputChange={handleInputChange} />
            <Input id="description" label="description" handleInputChange={handleInputChange} />
            <Input id="start-year" label="start year" handleInputChange={handleInputChange} />
            <Input id="end-year" label="end year" handleInputChange={handleInputChange} />
            <TextArea
              id="tasks"
              label="Tasks/Accomplishments&#10;* press Enter key between entries"
              handleInputChange={handleInputChange}
            />
            <input type="submit" className="add-button" id="add-btn" value="ADD" />
          </form>
          {Array.isArray(workExperience) && workExperience.length !== 0 && (
            <div className="work-experience-list">
              {workExperience.map((workExpData) => {
                const { id, isVisible, details } = workExpData;
                const { position } = details;
                return (
                  <div className="work-experience-list-position" key={id}>
                    <p className="position">{position}</p>
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