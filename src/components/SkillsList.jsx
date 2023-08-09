export const SkillsList = ({ skillArray }) => {
  return (
    <ul className="list">
      {skillArray.map((item, index) => {
        return (
          <li className="item" key={index}>
            {item.toUpperCase()}
          </li>
        );
      })}
    </ul>
  );
};
