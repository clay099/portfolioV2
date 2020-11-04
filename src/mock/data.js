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
  solving problems and providing workable solutions`,
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Software Engineer who believes that technology can improve the user experience to ensure client satisfaction and deliver sustained business growth.',
  paragraphTwo:
    'I started my professional career working in the financial services industry in Australia. During this time i focused on enhancing existing technology efficiencies. This experience led to a real passion for technology and automation.',
  paragraphThree:
    'I always seek opportunities and challenges that can provide a meaningful improvement to our ever day lives.',
  resume: 'https://drive.google.com/file/d/1-8ueKcfJDcuMTVw5-yhysivro4gX-NA1/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ProjectFreelanceImg.png',
    title: 'Project Freelance - React & Express Project',
    info:
      'Full stack Peer-To-Peer Outsourcing Project. General site users can create jobs, find local contractors and post reviews. Tradesmen can be matched with available jobs in their area',
    info2: '',
    url: 'https://project-freelance.netlify.app/',
    repo: 'https://github.com/clay099/work-order-frontend',
  },
  {
    id: nanoid(),
    img: 'StockTrackerImg.png',
    title: 'Stock Tracking Application - Flask Python Project',
    info:
      'This Project allows for users to create a fake stock portfolio and track its profit & loss over time',
    info2: '',
    url: `http://cw-stock-tracker.herokuapp.com/`,
    repo: `https://github.com/clay099/stock-tracker`,
  },
  {
    id: nanoid(),
    img: 'Connect4Img.png',
    title: `Connect 4 Game - Vanilla Javascript & CSS Project`,
    info: `Fully functional connect four game. All DOM and game logic is implemented with Javascript & styling with CSS`,
    info2: '',
    url: `https://clay099.github.io/connect-four/`,
    repo: `https://github.com/clay099/connect-four`,
  },
  {
    id: nanoid(),
    img: 'JoblyImg.png',
    title: `Jobly - React & Express Project`,
    info: `Full stack (front-end & back-end) Job board. Back-end API has full REST principles`,
    info2: '',
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
export const skillsData = {
  Languages: ['HTML', 'JavaScript', 'CSS', 'Python', 'SQL'],
  Frontend: ['React', 'Redux', 'jQuery', 'Bootstrap', 'MaterialUI', 'SASS', 'Jasmine'],
  Backend: ['nodejs', 'Express', 'Flask', 'PostgreSQL', 'Jest', 'Mongodb', 'Passport'],
  Other: ['git', 'GitHub', 'Heroku', 'Netlify', 'NPM', 'Linux'],
};

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
