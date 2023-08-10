import React from 'react';

import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlaceIcon from '@mui/icons-material/Place';

export const PersonalDetails = ({ data }) => {
  const { personal } = data;
  const { name, profession, phone, email, github, address } = personal || {};

  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
  };

  return (
    <>
      {isEmptyObject(personal) && (
        <div className="section-placeholder">
          <p>PERSONAL DETAILS</p>
        </div>
      )}

      {!isEmptyObject(personal) && (
        <div className="personal section-wrapper">
          <p className="personal-name">{name ? name.toUpperCase() : 'FULL NAME'}</p>
          <p className="personal-profession">
            {profession
              ? profession.replace(/(^|\s)\S/g, (match) => match.toUpperCase())
              : 'Profession'}
          </p>
          <div className="personal-details">
            <div className="personal-details-item">
              <PhoneIcon sx={{ fontSize: 12, color: '#1f2937' }} />
              <p>{phone ? phone : 'phone number'}</p>
            </div>
            <div className="personal-details-item">
              <AlternateEmailIcon sx={{ fontSize: 12, color: '#1f2937' }} />
              <p>{email ? email : 'email address'}</p>
            </div>
            <div className="personal-details-item">
              <GitHubIcon sx={{ fontSize: 12, color: '#1f2937' }} />
              <p>{github ? github : 'github profile'}</p>
            </div>
            <div className="personal-details-item">
              <PlaceIcon sx={{ fontSize: 12, color: '#1f2937' }} />
              <p>
                {address
                  ? address.replace(/(^|\s|\.)\S/g, (match) => match.toUpperCase())
                  : 'address'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
