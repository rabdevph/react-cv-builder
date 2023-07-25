import React from 'react';

import Icon from '@mdi/react';
import { mdiPhone, mdiAt, mdiLinkVariant, mdiMapMarker } from '@mdi/js';
import '../styles/cv.css';

export const PersonalDetails = ({ personalDetails }) => {
  const { name, profession, phone, email, socmed, address } = personalDetails;

  return (
    <div className="personal">
      <p className="personal-name">{name.toUpperCase()}</p>
      <p className="personal-profession">{profession.replace(/(^|\s)\S/g, (match) => match.toUpperCase())}</p>
      <div className="personal-details">
        <div className="detail">
          <Icon path={mdiPhone} size={0.5} color={'#6b7280'} />
          <p>{phone}</p>
        </div>
        <div className="detail">
          <Icon path={mdiAt} size={0.5} color={'#6b7280'} />
          <p>{email}</p>
        </div>
        <div className="detail">
          <Icon path={mdiLinkVariant} size={0.5} color={'#6b7280'} />
          <p>{socmed}</p>
        </div>
        <div className="detail">
          <Icon path={mdiMapMarker} size={0.5} color={'#6b7280'} />
          <p>{address.replace(/(^|\s|\.)\S/g, (match) => match.toUpperCase())}</p>
        </div>
      </div>
    </div>
  );
};
