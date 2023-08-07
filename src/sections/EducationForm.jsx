import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Input } from '../components/Input.jsx';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

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
    education ? updateData('education', [...education, formValues]) : updateData('education', [formValues]);
    setFormValues(defaultFormValues);
    e.target.reset();
    setIsFormVisible((prevState) => !prevState);
  };

  const toggleEducationVisibility = (id) => {
    if (isNotEmptyArray(education)) {
      const updatedEducation = education.map((eduData) => {
        if (eduData.id === id) {
          return { ...eduData, isVisible: !eduData.isVisible };
        }
        return eduData;
      });
      updateData('education', updatedEducation);
    }
  };

  const deleteEducation = (id) => {
    if (isNotEmptyArray(education)) {
      const updatedEducation = education.filter((eduData) => eduData.id !== id);
      updateData('education', updatedEducation);
    }
  };

  return (
    <div className="form-wrapper">
      <button className={`collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        EDUCATION
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
        )}
        {isNotEmptyArray(education) && (
          <div className="education-list">
            {education.map((eduData) => {
              const { id, isVisible, details } = eduData;
              const { degree } = details;
              return (
                <div className="education-list-item" key={id}>
                  <p className="degree">{degree}</p>
                  <div className="data-controls-wrapper">
                    <button type="button" className="visibility-button" onClick={() => toggleEducationVisibility(id)}>
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
                    <button type="button" className="delete-button" onClick={() => deleteEducation(id)}>
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
  );
};
