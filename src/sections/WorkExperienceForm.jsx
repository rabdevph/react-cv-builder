import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Input } from '../components/Input.jsx';
import { TextArea } from '../components/TextArea.jsx';

export const WorkExperienceForm = ({ workExperienceData, setWorkExperienceData }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [formValues, setFormValues] = useState({
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
  });

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

    setWorkExperienceData((prevState) => {
      return [...prevState, formValues];
    });

    setFormValues({
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
    });

    e.target.reset();
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
        </div>
      </div>
    </div>
  );
};
