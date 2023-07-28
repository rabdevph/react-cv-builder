import { v4 as uuidv4 } from 'uuid';

export const data = {
  personal: {
    name: 'full name',
    profession: 'profession',
    phone: 'phone number',
    email: 'email address',
    github: 'github profile link',
    address: 'address',
  },
  summary: {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  education: [
    {
      id: uuidv4(),
      isVisible: true,
      degree: 'Masters in Computer Science',
      school: 'AMA Computer College',
      country: 'Philippines',
      'start-year': '2024',
      'end-year': '2026',
    },
    {
      id: uuidv4(),
      isVisible: true,
      degree: 'Bachelor of Computer Science',
      school: 'AMA Computer College',
      country: 'Philippines',
      'start-year': '2013',
      'end-year': '2015',
    },
  ],
};
