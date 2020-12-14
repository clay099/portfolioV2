import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Clayton Whittaker | Full Stack Developer',
  lang: 'en',
  description: 'Welcome to my portfolio website',
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Clayton Whittaker',
  subtitle: `I have a passion for `,
  subtitle2: [
    { subId: nanoid(), text: 'turning ideas into reality' },
    { subId: nanoid(), text: 'solving problems' },
    { subId: nanoid(), text: 'providing workable solutions' },
  ],
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Software Engineer who believes that technology can improve the user experience, ensure client satisfaction and deliver sustained business growth.',
  paragraphTwo:
    'I started my professional career working in the financial services industry in Australia. During this time, I focused on enhancing existing technology efficiencies. This experience led to a real passion for technology and automation.',
  paragraphThree:
    'I enjoy seeking opportunities and challenges that can provide meaningful improvements to our every day lives.',
  resume: 'https://drive.google.com/file/d/1-8ueKcfJDcuMTVw5-yhysivro4gX-NA1/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ProjectFreelanceImg.png',
    title: 'Project Freelance',
    subTitle:
      'Peer-to-peer outsourcing application (front-end & back-end) to match user with tradesmen for real world projects.',
    info: [
      'Architected and implemented a modular backend infrastructure including custom Object Relational Mapping (ORM) following full RESTful principles.',
      'Built a custom front-end UI. Along with a full Redux Store including persisting data and client-side routing',
    ],
    stack: [
      { stackId: nanoid(), tech: 'React' },
      { stackId: nanoid(), tech: 'Express' },
      { stackId: nanoid(), tech: 'Redux' },
      { stackId: nanoid(), tech: 'Material-UI' },
      { stackId: nanoid(), tech: 'Bcrypt' },
      { stackId: nanoid(), tech: 'PostgreSQL' },
      { stackId: nanoid(), tech: 'Jest' },
    ],
    url: 'https://project-freelance.netlify.app/',
    repo: 'https://github.com/clay099/work-order-frontend',
  },
  {
    id: nanoid(),
    img: 'StockTrackerImg.png',
    title: 'Stock Tracking Application',
    subTitle:
      'Stock tracking application designed to let users create a stock portfolio and track its performance over time.',
    info: [
      'Connected to a third-party API to collect Stock data. Combined collected data with custom classes for data manipulation',
      'Implemented secure data transfer via hash encryption',
      'Obtained over 90% of test coverage with unit, integration, and functional testing.',
    ],
    stack: [
      { stackId: nanoid(), tech: 'Flask' },
      { stackId: nanoid(), tech: 'SQLAlchemy' },
      { stackId: nanoid(), tech: 'Bcrypt' },
      { stackId: nanoid(), tech: 'WTForms' },
      { stackId: nanoid(), tech: 'Bootstrap' },
    ],
    url: `http://cw-stock-tracker.herokuapp.com/`,
    repo: `https://github.com/clay099/stock-tracker`,
  },
  {
    id: nanoid(),
    img: 'JoblyImg.png',
    title: `Jobly`,
    subTitle: `Full stack (front-end & back-end) Job board.`,
    info: [
      'Designed a custom Back-end API following full RESTful principles and seeded with fake user data',
      'Modern UI/UX platform for users to interact and apply to back-end jobs',
      'Obtained 95% test coverage with unit, integration, and functional testing.',
      'Implemented full CI/CD using Travis CI',
    ],
    stack: [
      { stackId: nanoid(), tech: 'React' },
      { stackId: nanoid(), tech: 'Express' },
      { stackId: nanoid(), tech: 'Bootstrap' },
      { stackId: nanoid(), tech: 'Reactstrap' },
      { stackId: nanoid(), tech: 'Bcrypt' },
      { stackId: nanoid(), tech: 'PostgreSQL' },
      { stackId: nanoid(), tech: 'Jest' },
    ],
    url: `https://job-app-demo.netlify.app/`,
    repo: `https://github.com/clay099/jobly-frontend`,
  },
  {
    id: nanoid(),
    img: 'Connect4Img.png',
    title: `Connect 4 Game`,
    subTitle: `Fully functional connect four game`,
    info: ['All DOM and game logic is implemented with Vanilla Javascript & styling with CSS.'],
    stack: [
      { stackId: nanoid(), tech: 'Javascript' },
      { stackId: nanoid(), tech: 'CSS' },
    ],
    url: `https://clay099.github.io/connect-four/`,
    repo: `https://github.com/clay099/connect-four`,
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'clayton.whittaker@gmail.com',
};

// SKILLS DATA
export const skillsData = [
  {
    id: nanoid(),
    heading: 'Languages',
    skillList: [
      { id: nanoid(), name: 'HTML' },
      { id: nanoid(), name: 'JavaScript' },
      { id: nanoid(), name: 'TypeScript' },
      { id: nanoid(), name: 'CSS' },
      { id: nanoid(), name: 'Python' },
      { id: nanoid(), name: 'SQL' },
    ],
  },
  {
    id: nanoid(),
    heading: 'Frontend',
    skillList: [
      { id: nanoid(), name: 'React' },
      { id: nanoid(), name: 'Redux' },
      { id: nanoid(), name: 'jQuery' },
      { id: nanoid(), name: 'Bootstrap' },
      { id: nanoid(), name: 'MaterialUI' },
      { id: nanoid(), name: 'SASS' },
      { id: nanoid(), name: 'Jasmine' },
    ],
  },
  {
    id: nanoid(),
    heading: 'Backend',
    skillList: [
      { id: nanoid(), name: 'nodejs' },
      { id: nanoid(), name: 'Express' },
      { id: nanoid(), name: 'Flask' },
      { id: nanoid(), name: 'PostgreSQL' },
      { id: nanoid(), name: 'Jest' },
      { id: nanoid(), name: 'Mongodb' },
      { id: nanoid(), name: 'Passport' },
    ],
  },
  {
    id: nanoid(),
    heading: 'Other',
    skillList: [
      { id: nanoid(), name: 'git' },
      { id: nanoid(), name: 'GitHub' },
      { id: nanoid(), name: 'Heroku' },
      { id: nanoid(), name: 'Netlify' },
      { id: nanoid(), name: 'NPM' },
      { id: nanoid(), name: 'Linux' },
    ],
  },
];

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/clayton-whittaker/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/clay099',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto: clayton.whittaker@gmail.com',
    },
  ],
};
