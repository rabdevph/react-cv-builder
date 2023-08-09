import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const FormList = ({ id, entry, isVisible, toggleVisibility, deleteEntry }) => {
  return (
    <div className="form-list-item">
      <p className="entry">{entry}</p>
      <div className="data-controls-wrapper">
        <button type="button" className="visibility-button" onClick={() => toggleVisibility(id)}>
          {isVisible && (
            <VisibilityOffIcon
              sx={{
                fontSize: 14,
                color: '#3b82f6',
                '&:hover': { color: '#2563eb' },
                '&:active': { color: '#3b82f6' },
              }}
            />
          )}

          {!isVisible && (
            <VisibilityIcon
              sx={{
                fontSize: 14,
                color: '#3b82f6',
                '&:hover': { color: '#2563eb' },
                '&:active': { color: '#3b82f6' },
              }}
            />
          )}
        </button>
        <button type="button" className="delete-button" onClick={() => deleteEntry(id)}>
          <DeleteOutlineIcon
            sx={{
              fontSize: 14,
              color: '#3b82f6',
              '&:hover': { color: '#2563eb' },
              '&:active': { color: '#3b82f6' },
            }}
          />
        </button>
      </div>
    </div>
  );
};
