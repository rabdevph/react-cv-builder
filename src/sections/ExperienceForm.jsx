import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Input } from '../components/Input.jsx';
import { TextArea } from '../components/TextArea.jsx';
import { FormList } from '../components/FormList.jsx';

export const ExperienceForm = ({ data, updateData }) => {
  const { experience } = data;
  const { isSectionVisible, information } = experience;
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

  const isNotEmpty = (arr) => {
    return Array.isArray(arr) && arr.length !== 0;
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

  const toggleSectionVisibility = () => {
    updateData('experience', { ...experience, isSectionVisible: !experience.isSectionVisible });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    isNotEmpty(information)
      ? updateData('experience', {
          ...experience,
          information: [...experience.information, formValues],
        })
      : updateData('experience', { isSectionVisible: true, information: [formValues] });
    setFormValues(defaultFormValues);
    e.target.reset();
    setIsFormVisible((prevState) => !prevState);
  };

  const toggleExpVisibility = (id) => {
    if (isNotEmpty(information)) {
      const updatedInformation = information.map((expInfo) => {
        if (expInfo.id === id) {
          return { ...expInfo, isVisible: !expInfo.isVisible };
        }
        return expInfo;
      });
      updateData('experience', { ...experience, information: updatedInformation });
    }
  };

  const deleteExperience = (id) => {
    if (isNotEmpty(information)) {
      const updatedInformation = information.filter((expInfo) => expInfo.id !== id);
      updateData('experience', { ...experience, information: updatedInformation });
    }
  };

  return (
    <div className="form-section-wrapper">
      <button className={`collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        EXPERIENCE
      </button>
      <div className={`collapse-wrapper ${collapsed ? 'collapsed' : ''}`}>
        {!isFormVisible && (
          <div className="section-control-wrapper">
            <button
              className="new-exprience-button | section-control-button"
              id="new-button"
              onClick={toggleFormVisiblity}
            >
              NEW
            </button>
            {isNotEmpty(information) && (
              <button
                className="toggle-section-button | section-control-button"
                id="new-button"
                onClick={toggleSectionVisibility}
              >
                {isSectionVisible && 'HIDE '}
                {!isSectionVisible && 'SHOW '}
                SECTION
              </button>
            )}
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

        {isNotEmpty(information) && (
          <div className="form-list">
            {information.map((expInfo) => {
              const { id, isVisible, details } = expInfo;
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
