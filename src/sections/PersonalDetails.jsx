import React from 'react';

import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlaceIcon from '@mui/icons-material/Place';

import '../styles/cv.css';

export const PersonalDetails = ({ data }) => {
  const { personal } = data;
  const { name, profession, phone, email, github, address } = personal || {};

  return (
    <div className="personal-wrapper">
      {!personal && (
        <div className="personal-empty">
          <p>PERSONAL DETAILS</p>
        </div>
      )}
      {personal && (
        <div className="personal">
          <p className="personal-name">{name.toUpperCase()}</p>
          <p className="personal-profession">{profession.replace(/(^|\s)\S/g, (match) => match.toUpperCase())}</p>
          <div className="personal-details">
            <div className="personal-details-item">
              <PhoneIcon sx={{ fontSize: 12, color: '#1f2937' }} />
              <p>{phone}</p>
            </div>
            <div className="personal-details-item">
              <AlternateEmailIcon sx={{ fontSize: 12, color: '#1f2937' }} />
              <p>{email}</p>
            </div>
            <div className="personal-details-item">
              <GitHubIcon sx={{ fontSize: 12, color: '#1f2937' }} />
              <p>{github}</p>
            </div>
            <div className="personal-details-item">
              <PlaceIcon sx={{ fontSize: 12, color: '#1f2937' }} />
              <p>{address.replace(/(^|\s|\.)\S/g, (match) => match.toUpperCase())}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
