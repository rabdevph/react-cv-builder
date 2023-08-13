import { useState } from 'react';

import { TextArea } from '../components/TextArea.jsx';
import { FormSkillsList } from '../components/FormSkillsList.jsx';

const Form = ({ handleFormSubmit, handleInputChange, toggleFormVisiblity }) => {
  return (
    <form className="skills | form" onSubmit={handleFormSubmit}>
      <TextArea
        id="languages"
        label="programming languages&#10;* enter comma between entries"
        handleInputChange={handleInputChange}
      />
      <TextArea
        id="technologies"
        label="technologies&#10;* enter comma between entries"
        handleInputChange={handleInputChange}
      />
      <TextArea
        id="tools"
        label="tools&#10;* enter comma between entries"
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

const Controls = ({ toggleFormVisiblity }) => {
  return (
    <div className="section-control-wrapper">
      <button
        className="new-skill-button | section-control-button"
        id="new-button"
        onClick={toggleFormVisiblity}
      >
        NEW
      </button>
    </div>
  );
};

export const SkillForm = ({ data, updateData }) => {
  const { skills } = data;
  const { languages, technologies, tools } = skills;
  const defaultFormValues = {
    languages: [],
    technologies: [],
    tools: [],
  };
  const [collapsed, setCollapsed] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formValues, setFormValues] = useState(defaultFormValues);

  const isNotEmptyObject = (obj) => {
    return Object.keys(obj).length !== 0;
  };

  const isNotEmptyArray = (arr) => {
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
    const valueArray = value
      .split(',')
      .map((entry) => entry.trimStart())
      .filter((entry) => entry !== '');

    setFormValues((prevState) => {
      return {
        ...prevState,
        [id]: valueArray,
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isNotEmptyObject(skills)) {
      updateData('skills', formValues);
    } else {
      updateData('skills', {
        languages: [...skills.languages, ...formValues.languages],
        technologies: [...skills.technologies, ...formValues.technologies],
        tools: [...skills.tools, ...formValues.tools],
      });
    }

    setFormValues(defaultFormValues);
    e.target.reset();
  };

  const deleteSkill = (category, index) => {
    const updatedSkills = { ...skills };
    updatedSkills[category].splice(index, 1);

    updateData('skills', updatedSkills);
  };

  return (
    <div>
      <div className="form-section-wrapper">
        <button className={`collapse-btn ${collapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
          SKILLS
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

          {isNotEmptyObject(skills) ? (
            <div className="skills-list">
              {isNotEmptyArray(languages) ? (
                <FormSkillsList
                  skillArray={languages}
                  deleteSkill={deleteSkill}
                  category="languages"
                />
              ) : null}

              {isNotEmptyArray(technologies) ? (
                <FormSkillsList
                  skillArray={technologies}
                  deleteSkill={deleteSkill}
                  category="technologies"
                />
              ) : null}

              {isNotEmptyArray(tools) ? (
                <FormSkillsList skillArray={tools} deleteSkill={deleteSkill} category="tools" />
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
