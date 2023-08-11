import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { PersonalDetailsForm } from './sections/PersonalDetailsForm.jsx';
import { SummaryForm } from './sections/SummaryForm.jsx';
import { ExperienceForm } from './sections/ExperienceForm.jsx';
import { ProjectForm } from './sections/ProjectForm.jsx';
import { EducationForm } from './sections/EducationForm.jsx';
import { SkillForm } from './sections/SkillForm.jsx';
import { PersonalDetails } from './sections/PersonalDetails.jsx';
import { Summary } from './sections/Summary.jsx';
import { Experience } from './sections/Experience.jsx';
import { Project } from './sections/Project.jsx';
import { Education } from './sections/Education.jsx';
import { Skill } from './sections/Skill.jsx';

import './styles/app.css';
import './styles/cv.css';
import './styles/forms.css';

function App() {
  const [data, setData] = useState({
    personal: {},
    summary: '',
    experience: {},
    project: {},
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
    skills: {
      languages: ['html', 'css', 'javascript', 'python'],
      technologies: ['reactjs', 'tailwindcss'],
      tools: ['vscode'],
    },
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
        <PersonalDetailsForm data={data} updateData={updateData} />
        <SummaryForm data={data} updateData={updateData} />
        <ExperienceForm data={data} updateData={updateData} />
        <ProjectForm data={data} updateData={updateData} />
        <EducationForm data={data} updateData={updateData} />
        <SkillForm data={data} updateData={updateData} />
      </div>
      <div className="cv-wrapper">
        <div className="cv" id="print-this-section">
          <PersonalDetails data={data} />
          <Summary data={data} />
          <div className="general-info-wrapper">
            <div className="left-panel">
              <Experience data={data} />
              <Project data={data} />
            </div>
            <div className="right-panel">
              <Education data={data} />
              <Skill data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
