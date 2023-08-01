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
  const [formValues, setFormValues] = useState(defaultFormValues);

  const toggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
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
  };

  const toggleVisibility = (id) => {
    if (education) {
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
    if (education) {
      const updatedEducation = education.filter((eduData) => eduData.id !== id);
      updateData('education', updatedEducation);
    }
  };

  return (
    <div className="form-wrapper">
      <button className={`form-collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        EDUCATION
      </button>
      <div className={`form-collapse-wrapper ${collapsed ? 'collapsed' : ''}`}>
        <form className="form" onSubmit={handleFormSubmit}>
          <Input id="degree" label="degree" handleInputChange={handleInputChange} />
          <Input id="school" label="school" handleInputChange={handleInputChange} />
          <Input id="country" label="Country" handleInputChange={handleInputChange} />
          <Input id="start-year" label="start year" handleInputChange={handleInputChange} />
          <Input id="end-year" label="end year" handleInputChange={handleInputChange} />
          <input type="submit" className="add-button" id="add-btn" value="ADD" />
        </form>
        {Array.isArray(education) && education.length !== 0 && (
          <div className="education-list">
            {education.map((eduData) => {
              const { id, isVisible, details } = eduData;
              const { degree } = details;
              return (
                <div className="education-list-degree" key={id}>
                  <p className="degree">{degree}</p>
                  <div className="education-list-controls">
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
