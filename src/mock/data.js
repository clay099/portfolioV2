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
  subtitle: `I have a passion for turning ideas into reality,
  solving problems and providing workable solutions.`,
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Software Engineer who believes that technology can improve the user experience to ensure client satisfaction and deliver sustained business growth.',
  paragraphTwo:
    'I started my professional career working in the financial services industry in Australia. During this time, I focused on enhancing existing technology efficiencies. This experience led to a real passion for technology and automation.',
  paragraphThree:
    'I enjoy seeking opportunities and challenges that can provide meaningful improvements to our ever day lives.',
  resume: 'https://drive.google.com/file/d/1-8ueKcfJDcuMTVw5-yhysivro4gX-NA1/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ProjectFreelanceImg.png',
    title: 'Project Freelance',
    info:
      'Full stack Peer-To-Peer Outsourcing Project. General site users can create jobs, find local contractors and post reviews. Tradesmen can be matched with available jobs in their area.',
    info2: '',
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
    info:
      'This Project allows for users to create a fake stock portfolio and track its profit and loss over time. Users can also review company news, detailed financial information and other similar organizations.',
    info2: '',
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
    img: 'Connect4Img.png',
    title: `Connect 4 Game`,
    info: `Fully functional connect four game. All DOM and game logic is implemented with Vanilla Javascript & styling with CSS.`,
    info2: '',
    stack: [
      { stackId: nanoid(), tech: 'Javascript' },
      { stackId: nanoid(), tech: 'CSS' },
    ],
    url: `https://clay099.github.io/connect-four/`,
    repo: `https://github.com/clay099/connect-four`,
  },
  {
    id: nanoid(),
    img: 'JoblyImg.png',
    title: `Jobly`,
    info: `Full stack (front-end & back-end) Job board. Back-end API follows full REST principles`,
    info2: '',
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
      { id: nanoid(), name: 'CSS' },
      { id: nanoid(), name: 'Python' },
      { id: nanoid(), name: 'SQL' },
    ],
  },
  {
    skillId: nanoid(),
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
