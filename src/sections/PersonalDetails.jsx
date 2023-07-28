import React from 'react';

import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlaceIcon from '@mui/icons-material/Place';

import '../styles/cv.css';

export const PersonalDetails = ({ personalData }) => {
  const { name, profession, phone, email, github, address } = personalData;

  return (
    <div className="personal">
      <p className="personal-name">{name.toUpperCase()}</p>
      <p className="personal-profession">{profession.replace(/(^|\s)\S/g, (match) => match.toUpperCase())}</p>
      <div className="personal-details">
        <div className="detail">
          <PhoneIcon sx={{ fontSize: 12, color: '#1f2937' }} />
          <p>{phone}</p>
        </div>
        <div className="detail">
          <AlternateEmailIcon sx={{ fontSize: 12, color: '#1f2937' }} />
          <p>{email}</p>
        </div>
        <div className="detail">
          <GitHubIcon sx={{ fontSize: 12, color: '#1f2937' }} />
          <p>{github}</p>
        </div>
        <div className="detail">
          <PlaceIcon sx={{ fontSize: 12, color: '#1f2937' }} />
          <p>{address.replace(/(^|\s|\.)\S/g, (match) => match.toUpperCase())}</p>
        </div>
      </div>
    </div>
  );
};
