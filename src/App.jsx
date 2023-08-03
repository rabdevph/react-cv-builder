import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { PersonalDetailsForm } from './sections/PersonalDetailsForm.jsx';
import { SummaryForm } from './sections/SummaryForm.jsx';
import { EducationForm } from './sections/EducationForm.jsx';
import { WorkExperienceForm } from './sections/WorkExperienceForm.jsx';
import { PersonalDetails } from './sections/PersonalDetails.jsx';
import { Summary } from './sections/Summary.jsx';
import { Education } from './sections/Education.jsx';
import { WorkExperience } from './sections/WorkExperience.jsx';

import './App.css';

function App() {
  const [data, setData] = useState({
    personal: {
      name: 'ralph arsy bauto',
      profession: 'web developer',
      phone: '+971 55 161 5292',
      email: 'rab.devph@gmail.com',
      github: 'github.com/profile',
      linkedin: 'linkedin.com/profile',
      address: 'dubai, u.a.e',
    },
    summary: {
      isVisible: true,
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
    education: [
      {
        id: uuidv4(),
        isVisible: true,
        details: {
          degree: 'Bachelor of Computer Science',
          school: 'AMA Computer College',
          country: 'Philippines',
          'start-year': '2013',
          'end-year': '2015',
        },
      },
      {
        id: uuidv4(),
        isVisible: true,
        details: {
          degree: 'Masters in Computer Science',
          school: 'AMA Computer College',
          country: 'Philippines',
          'start-year': '2024',
          'end-year': '2026',
        },
      },
    ],
    experience: [
      {
        id: uuidv4(),
        isVisible: true,
        details: {
          title: 'Web Developer',
          company: 'Browser Tex AE',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          location: 'Dubai, United Arab Emirates',
          'start-year': '2023',
          'end-year': 'Present',
          tasks: ['Created a custom client...', 'Conducted routine updates...', 'Designed front-end code..'],
        },
      },
      {
        id: uuidv4(),
        isVisible: true,
        details: {
          title: 'Software Developer',
          company: 'Digital One',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          location: 'Dubai, United Arab Emirates',
          'start-year': '2020',
          'end-year': '2022',
          tasks: ['Created a custom client...', 'Conducted routine updates...', 'Designed front-end code..'],
        },
      },
    ],
    project: [],
  });

  const updateData = (property, data) => {
    setData((prevState) => {
      return {
        ...prevState,
        [property]: data,
      };
    });
  };

  console.log(data);

  return (
    <div className="app">
      <div className="cv-forms">
        <PersonalDetailsForm updateData={updateData} />
        <SummaryForm data={data} updateData={updateData} />
        <WorkExperienceForm data={data} updateData={updateData} />
        <EducationForm data={data} updateData={updateData} />
      </div>
      <div className="cv-wrapper">
        <div className="cv">
          <PersonalDetails data={data} />
          <div className="general-info-wrapper">
            <div className="left-panel">
              <Summary data={data} />
              <WorkExperience data={data} />
            </div>
            <div className="right-panel">
              <Education data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
