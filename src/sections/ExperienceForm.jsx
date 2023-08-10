import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Input } from '../components/Input.jsx';
import { TextArea } from '../components/TextArea.jsx';
import { FormList } from '../components/FormList.jsx';

export const ExperienceForm = ({ data, updateData }) => {
  const { experience } = data;
  const defaultFormValues = {
    id: uuidv4(),
    isVisible: true,
    details: {
      title: '',
      company: '',
      location: '',
      'start-year': '',
      'end-year': '',
      tasks: [],
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
    setIsFormVisible((prevState) => !prevState);
  };

  const toggleExpVisibility = (id) => {
    if (isNotEmptyArray(experience)) {
      const updatedExperience = experience.map((expData) => {
        if (expData.id === id) {
          return { ...expData, isVisible: !expData.isVisible };
        }
        return expData;
      });
      updateData('experience', updatedExperience);
    }
  };

  const deleteExperience = (id) => {
    if (isNotEmptyArray(experience)) {
      const updatedExperience = experience.filter((expData) => expData.id !== id);
      updateData('experience', updatedExperience);
    }
  };

  return (
    <div className="form-wrapper">
      <button className={`collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        EXPERIENCE
      </button>
      <div className={`collapse-wrapper ${collapsed ? 'collapsed' : ''}`}>
        {!isFormVisible && (
          <div className="new-button-wrapper">
            <button
              className="new-button | control-button"
              id="new-button"
              onClick={toggleFormVisiblity}
            >
              NEW
            </button>
          </div>
        )}

        {isFormVisible && (
          <form className="experience | form" onSubmit={handleFormSubmit}>
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

            <div className="controls-wrapper">
              <input
                type="button"
                className="close-button | control-button"
                id="close-button"
                value="CLOSE"
                onClick={toggleFormVisiblity}
              />
              <input
                type="submit"
                className="add-button | control-button"
                id="add-btn"
                value="ADD"
              />
            </div>
          </form>
        )}

        {isNotEmptyArray(experience) && (
          <div className="form-list">
            {experience.map((expData) => {
              const { id, isVisible, details } = expData;
              const { title } = details;
              return (
                <FormList
                  key={id}
                  id={id}
                  entry={title}
                  isVisible={isVisible}
                  toggleVisibility={toggleExpVisibility}
                  deleteEntry={deleteExperience}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
