import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Input } from '../components/Input.jsx';
import { TextArea } from '../components/TextArea.jsx';
import { FormList } from '../components/FormList.jsx';

const Form = ({ handleFormSubmit, handleInputChange, toggleFormVisiblity }) => {
  return (
    <form className="project | form" onSubmit={handleFormSubmit}>
      <Input id="project" label="project" handleInputChange={handleInputChange} />
      <TextArea id="description" label="description" handleInputChange={handleInputChange} />
      <TextArea
        id="features"
        label="Features&#10;* press Enter key between entries"
        handleInputChange={handleInputChange}
      />
      <Input id="repository" label="repository url" handleInputChange={handleInputChange} />

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

const Controls = ({
  toggleFormVisiblity,
  isNotEmpty,
  information,
  toggleSectionVisibility,
  isSectionVisible,
}) => {
  return (
    <div className="section-control-wrapper">
      <button
        className="new-exprience-button | section-control-button"
        id="new-button"
        onClick={toggleFormVisiblity}
      >
        NEW
      </button>

      {isNotEmpty(information) ? (
        <button
          className="toggle-section-button | section-control-button"
          id="new-button"
          onClick={toggleSectionVisibility}
        >
          {isSectionVisible ? 'HIDE ' : 'SHOW '}
          SECTION
        </button>
      ) : null}
    </div>
  );
};

export const ProjectForm = ({ data, updateData }) => {
  const { project } = data;
  const { isSectionVisible, information } = project;
  const defaultFormValues = {
    id: uuidv4(),
    isVisible: true,
    details: {
      project: '',
      description: '',
      features: [],
      repository: '',
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
    if (id === 'features') {
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
    updateData('project', { ...project, isSectionVisible: !project.isSectionVisible });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    isNotEmpty(information)
      ? updateData('project', {
          ...project,
          information: [...project.information, formValues],
        })
      : updateData('project', { isSectionVisible: true, information: [formValues] });
    setFormValues(defaultFormValues);
    e.target.reset();
    setIsFormVisible((prevState) => !prevState);
  };

  const toggleProjectVisibility = (id) => {
    if (isNotEmpty(information)) {
      const updatedInformation = information.map((projectInfo) => {
        if (projectInfo.id === id) {
          return { ...projectInfo, isVisible: !projectInfo.isVisible };
        }
        return projectInfo;
      });
      updateData('project', { ...project, information: updatedInformation });
    }
  };

  const deleteProject = (id) => {
    if (isNotEmpty(information)) {
      const updatedInformation = information.filter((projectInfo) => projectInfo.id !== id);
      updateData('project', { ...project, information: updatedInformation });
    }
  };

  return (
    <div className="form-section-wrapper">
      <button className={`collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
        PROJECT
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
            isNotEmpty={isNotEmpty}
            information={information}
            toggleSectionVisibility={toggleSectionVisibility}
            isSectionVisible={isSectionVisible}
          />
        )}

        {isNotEmpty(information) ? (
          <div className="form-list">
            {information.map((projectInfo) => {
              const { id, isVisible, details } = projectInfo;
              const { project } = details;
              return (
                <FormList
                  key={id}
                  id={id}
                  entry={project}
                  isVisible={isVisible}
                  toggleVisibility={toggleProjectVisibility}
                  deleteEntry={deleteProject}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};
