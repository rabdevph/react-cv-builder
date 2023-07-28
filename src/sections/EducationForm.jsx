import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Input } from '../components/Input.jsx';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const EducationForm = ({ educationData, setEducationData }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [formValues, setFormValues] = useState({
    id: uuidv4(),
    isVisible: true,
    degree: '',
    school: '',
    country: '',
    'start-year': '',
    'end-year': '',
  });

  const toggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  const toggleVisibility = (id) => {
    setEducationData((prevData) =>
      prevData.map((eduData) => {
        if (eduData.id === id) {
          return {
            ...eduData,
            isVisible: !eduData.isVisible,
          };
        }
        return eduData;
      }),
    );
  };

  const deleteEducation = (id) => {
    setEducationData((prevData) => prevData.filter((eduData) => eduData.id !== id));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // update education array -> [data.js]
    setEducationData((prevState) => {
      return [...prevState, formValues];
    });

    // clear form values
    setFormValues({
      id: uuidv4(),
      isVisible: true,
      degree: '',
      school: '',
      country: '',
      'start-year': '',
      'end-year': '',
    });

    e.target.reset();
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
        {educationData.length > 0 && (
          <div className="education-list">
            {educationData.map((eduData) => {
              const { id, isVisible, degree } = eduData;
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
