import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Input } from '../components/Input.jsx';
import { TextArea } from '../components/TextArea.jsx';
import { FormList } from '../components/FormList.jsx';

const Form = ({ handleFormSubmit, handleInputChange, toggleFormVisiblity }) => {
  return (
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
        <input type="submit" className="add-button | control-button" id="add-btn" value="ADD" />
      </div>
    </form>
  );
};

const Controls = ({ toggleFormVisiblity, toggleSectionVisibility, isSectionVisible }) => {
  return (
    <div className="section-control-wrapper">
      <button
        className="new-exprience-button | section-control-button"
        id="new-button"
        onClick={toggleFormVisiblity}
      >
        NEW
      </button>
      <button
        className="toggle-section-button | section-control-button"
        id="new-button"
        onClick={toggleSectionVisibility}
      >
        {isSectionVisible ? 'HIDE ' : 'SHOW '}
        SECTION
      </button>
    </div>
  );
};

export const ExperienceForm = ({ data, updateData }) => {
  const { experience } = data;
  const { isSectionVisible, content } = experience;
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
    isNotEmpty(content)
      ? updateData('experience', {
          ...experience,
          content: [...experience.content, formValues],
        })
      : updateData('experience', { ...experience, content: [formValues] });

    setFormValues(defaultFormValues);
    e.target.reset();
    setIsFormVisible((prevState) => !prevState);
  };

  const toggleExpVisibility = (id) => {
    if (isNotEmpty(content)) {
      const updatedContent = content.map((contentInfo) => {
        if (contentInfo.id === id) {
          return { ...contentInfo, isVisible: !contentInfo.isVisible };
        }
        return contentInfo;
      });
      updateData('experience', { ...experience, content: updatedContent });
    }
  };

  const deleteExperience = (id) => {
    if (isNotEmpty(content)) {
      const updatedContent = content.filter((contentInfo) => contentInfo.id !== id);
      updateData('experience', { ...experience, content: updatedContent });
    }
  };

  return (
    <div className="form-section-wrapper">
      <button className={`collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        EXPERIENCE
      </button>
      <div className={`collapse-wrapper ${collapsed ? 'collapsed' : ''}`}>
        {isFormVisible ? (
          <Form
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            toggleFormVisiblity={toggleFormVisiblity}
          />
        ) : (
          <Controls
            toggleFormVisiblity={toggleFormVisiblity}
            toggleSectionVisibility={toggleSectionVisibility}
            isSectionVisible={isSectionVisible}
          />
        )}

        {isNotEmpty(content) ? (
          <div className="form-list">
            {content.map((contentInfo) => {
              const { id, isVisible, details } = contentInfo;
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
        ) : null}
      </div>
    </div>
  );
};
