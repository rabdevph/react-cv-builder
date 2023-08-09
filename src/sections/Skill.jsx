import { SkillsList } from '../components/SkillsList.jsx';

export const Skill = ({ data }) => {
  const { skills } = data;
  const { languages, technologies, tools } = skills;

  const isNotEmptyObject = (obj) => {
    return Object.keys(obj).length !== 0;
  };

  const isNotEmptyArray = (arr) => {
    return Array.isArray(arr) && arr.length !== 0;
  };

  return (
    <>
      {!isNotEmptyObject(skills) && (
        <div className="section-placeholder">
          <p>SKILLS</p>
        </div>
      )}

      {isNotEmptyObject(skills) && (
        <div className="skills section-wrapper">
          <div className="section-heading">
            <p>SKILLS</p>
            <div className="section-hr"></div>
          </div>
          <div className="section-content">
            {isNotEmptyArray(languages) && <SkillsList skillArray={languages} />}
            {isNotEmptyArray(technologies) && <SkillsList skillArray={technologies} />}
            {isNotEmptyArray(tools) && <SkillsList skillArray={tools} />}
          </div>
        </div>
      )}
    </>
  );
};
