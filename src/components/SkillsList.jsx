import ClearIcon from '@mui/icons-material/Clear';

export const SkillsList = ({ skillArray, deleteSkill, category }) => {
  console.log(skillArray);
  return (
    <ul className="list">
      {skillArray.map((item, index) => {
        return (
          <li className="item" key={index}>
            {item.toUpperCase()}
            <button
              className="delete-skill-button"
              id="delete-skill-button"
              onClick={() => deleteSkill(category, index)}
            >
              <ClearIcon
                sx={{
                  fontSize: 12,
                  color: '#3b82f6',
                  '&:hover': { color: '#2563eb' },
                  '&:active': { color: '#3b82f6' },
                }}
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
};
