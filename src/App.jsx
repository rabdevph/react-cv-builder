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
    experience: [
      {
        id: uuidv4(),
        isVisible: true,
        details: {
          title: 'Web Developer',
          company: 'Browser Tex AE',
          location: 'Dubai, United Arab Emirates',
          'start-year': '2023',
          'end-year': 'Present',
          tasks: [
            'Created a custom client-side application using React.js and Redux.',
            'Conducted routine updates and maintenance on existing web applications.',
            'Designed and implemented front-end code for new features.',
            'Collaborated with the design team to create user-friendly interfaces.',
            'Optimized web applications for better performance and loading speed.',
            'Troubleshot and debugged issues related to front-end functionalities.',
          ],
        },
      },
      {
        id: uuidv4(),
        isVisible: true,
        details: {
          title: 'Software Engineer',
          company: 'TechGlobe Solutions',
          location: 'New York, USA',
          'start-year': '2022',
          'end-year': '2023',
          tasks: [
            'Collaborated with cross-functional teams to gather requirements and define project scope.',
            'Designed and implemented RESTful APIs to enable seamless communication between frontend and backend systems.',
            'Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript.',
            'Integrated third-party APIs to add new functionalities and features to existing applications.',
            'Performed code reviews and provided constructive feedback to team members.',
            'Conducted unit testing and bug fixing to ensure high-quality code delivery.',
          ],
        },
      },
    ],
    project: [
      {
        id: uuidv4(),
        isVisible: true,
        details: {
          project: 'E-commerce Website',
          'repository-url': 'github.com/rabdevph/e-commerce-website',
          description:
            'A fully functional e-commerce website that allows users to browse products, add items to their cart, and complete the checkout process.',
          features: [
            'User authentication and registration.',
            'Product catalog with search and filtering options.',
            'Shopping cart and order management.',
            'Secure payment processing using Stripe API.',
            'Admin dashboard to manage products and orders.',
          ],
        },
      },
      {
        id: uuidv4(),
        isVisible: true,
        details: {
          project: 'Task Manager App',
          'repository-url': 'github.com/rabdevph/task-manager-app',
          description:
            'A task management application that helps users organize and track their daily tasks and activities.',
          features: [
            'User login and registration.',
            'Create, edit, and delete tasks with due dates and priorities.',
            'Organize tasks into different categories or projects.',
            'Set reminders and notifications for upcoming deadlines.',
            'Collaborate with team members by sharing tasks and updates.',
          ],
        },
      },
    ],
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
