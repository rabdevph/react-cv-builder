import { SkillsList } from '../components/SkillsList.jsx';

export const Skill = ({ data }) => {
  const { skills } = data;
  const { languages, technologies, tools } = skills || {};

  const isEmpty = (obj) => {
    const hasNoProperty = Object.keys(obj).length === 0;
    if (hasNoProperty) return true;

    const allArrayEmpty = Object.values(obj).every((val) => Array.isArray(val) && val.length === 0);
    return allArrayEmpty;
  };

  const isNotEmptyArray = (arr) => {
    return arr.length !== 0;
  };

  return (
    <>
      {isEmpty(skills) ? (
        <div className="section-placeholder">
          <p>SKILLS</p>
        </div>
      ) : (
        <div className="skills section-wrapper">
          <div className="section-heading">
            <p>SKILLS</p>
            <div className="section-hr"></div>
          </div>
          <div className="section-content">
            {isNotEmptyArray(languages) ? <SkillsList skillArray={languages} /> : null}
            {isNotEmptyArray(technologies) ? <SkillsList skillArray={technologies} /> : null}
            {isNotEmptyArray(tools) ? <SkillsList skillArray={tools} /> : null}
          </div>
        </div>
      )}
    </>
  );
};
