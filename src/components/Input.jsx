import { useState } from 'react';

export const Input = ({ id, label, collapsed, handleInputChange }) => {
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputId) => {
    setFocusedInput(inputId);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  return (
    <div className={`form-input-wrapper ${collapsed ? 'collapsed' : ''}`}>
      <input
        className={`form-input ${focusedInput === id ? 'focused' : ''}`}
        type="text"
        id={id}
        placeholder={label.replace(/(^|\s)\S/g, (match) => match.toUpperCase())}
        autoComplete="off"
        onFocus={() => handleFocus(id)}
        onBlur={handleBlur}
        onChange={handleInputChange}
      />
    </div>
  );
};
