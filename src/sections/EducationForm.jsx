import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Input } from '../components/Input.jsx';
import { FormList } from '../components/FormList.jsx';

const Form = ({ handleFormSubmit, handleInputChange, toggleFormVisiblity }) => {
  return (
    <form className="education | form" onSubmit={handleFormSubmit}>
      <Input id="degree" label="degree" handleInputChange={handleInputChange} />
      <Input id="school" label="school" handleInputChange={handleInputChange} />
      <Input id="country" label="Country" handleInputChange={handleInputChange} />
      <Input id="start-year" label="start year" handleInputChange={handleInputChange} />
      <Input id="end-year" label="end year" handleInputChange={handleInputChange} />

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

const Controls = ({ toggleFormVisiblity }) => {
  return (
    <div className="new-button-wrapper">
      <div className="section-control-wrapper">
        <button
          className="new-education-button | section-control-button"
          id="new-button"
          onClick={toggleFormVisiblity}
        >
          NEW
        </button>
      </div>
    </div>
  );
};

export const EducationForm = ({ data, updateData }) => {
  const { education } = data;
  const defaultFormValues = {
    id: uuidv4(),
    isVisible: true,
    details: {
      degree: '',
      school: '',
      country: '',
      'start-year': '',
      'end-year': '',
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
    setFormValues((prevState) => {
      return {
        ...prevState,
        details: {
          ...prevState.details,
          [id]: value,
        },
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    isNotEmpty(education)
      ? updateData('education', [...education, formValues])
      : updateData('education', [formValues]);

    e.target.reset();
    setIsFormVisible((prevState) => !prevState);
  };

  const toggleEduVisibility = (id) => {
    if (isNotEmpty(education)) {
      const updatedEducation = education.map((eduInfo) => {
        if (eduInfo.id === id) {
          return { ...eduInfo, isVisible: !eduInfo.isVisible };
        }
        return eduInfo;
      });
      updateData('education', updatedEducation);
    }
  };

  const deleteEducation = (id) => {
    if (isNotEmpty(education)) {
      const updatedEducation = education.filter((eduInfo) => eduInfo.id !== id);
      updateData('education', updatedEducation);
    }
  };

  return (
    <div className="form-section-wrapper">
      <button className={`collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        EDUCATION
      </button>
      <div className={`collapse-wrapper ${collapsed ? 'collapsed' : ''}`}>
        {isFormVisible ? (
          <Form
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            toggleFormVisiblity={toggleFormVisiblity}
          />
        ) : (
          <Controls toggleFormVisiblity={toggleFormVisiblity} />
        )}

        {isNotEmpty(education) ? (
          <div className="form-list">
            {education.map((eduInfo) => {
              const { id, isVisible, details } = eduInfo;
              const { degree } = details;
              return (
                <FormList
                  key={id}
                  id={id}
                  entry={degree}
                  isVisible={isVisible}
                  toggleVisibility={toggleEduVisibility}
                  deleteEntry={deleteEducation}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};
