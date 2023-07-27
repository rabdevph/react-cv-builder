import { useState } from 'react';

export const TextArea = ({ id, label, collapsed, handleInputChange }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };
  return (
    <div className={`form-input-wrapper ${collapsed ? 'collapsed' : ''}`}>
      <textarea
        className={`form-input textarea ${focused ? 'focused' : ''}`}
        id={id}
        placeholder={label.charAt(0).toUpperCase() + label.slice(1)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInputChange}
      ></textarea>
    </div>
  );
};
