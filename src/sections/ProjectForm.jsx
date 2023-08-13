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

const Controls = ({ toggleFormVisiblity, toggleSectionVisibility, isSectionVisible }) => {
  return (
    <div className="section-control-wrapper">
      <button
        className="new-project-button | section-control-button"
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

export const ProjectForm = ({ data, updateData }) => {
  const { project } = data;
  const { isSectionVisible, content } = project;
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
    isNotEmpty(content)
      ? updateData('project', {
          ...project,
          content: [...project.content, formValues],
        })
      : updateData('project', { ...project, content: [formValues] });

    setFormValues(defaultFormValues);
    e.target.reset();
    setIsFormVisible((prevState) => !prevState);
  };

  const toggleProjVisibility = (id) => {
    if (isNotEmpty(content)) {
      const updatedContent = content.map((contentInfo) => {
        if (contentInfo.id === id) {
          return { ...contentInfo, isVisible: !contentInfo.isVisible };
        }
        return contentInfo;
      });
      updateData('project', { ...project, content: updatedContent });
    }
  };

  const deleteProject = (id) => {
    if (isNotEmpty(content)) {
      const updatedContent = content.filter((contentInfo) => contentInfo.id !== id);
      updateData('project', { ...project, content: updatedContent });
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
            information={content}
            toggleSectionVisibility={toggleSectionVisibility}
            isSectionVisible={isSectionVisible}
          />
        )}

        {isNotEmpty(content) ? (
          <div className="form-list">
            {content.map((contentInfo) => {
              const { id, isVisible, details } = contentInfo;
              const { project } = details;
              return (
                <FormList
                  key={id}
                  id={id}
                  entry={project}
                  isVisible={isVisible}
                  toggleVisibility={toggleProjVisibility}
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
