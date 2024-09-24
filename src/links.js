import iconEmail from './assets/email.svg';
import iconLinkedin from './assets/linkedin.svg';
import iconGithub from './assets/github.svg';
import cvSvg from './assets/cv.svg';
import cvPdf from './assets/documents/CV.pdf';

const links = [
  {
    name: 'email',
    svg: iconEmail,
    url: 'mailto:santiagourregolaya@gmail.com',
    importance: 'second'
  },
  {
    name: 'linkedin',
    svg: iconLinkedin,
    url: 'https://www.linkedin.com/in/jose-santiago-urrego-olaya-145a98210/',
    importance: 'second'
  },
  {
    name: 'github',
    svg: iconGithub,
    url: 'https://github.com/santicollage',
    importance: 'second'
  },
  {
    name: 'CV',
    svg: cvSvg,
    url: cvPdf,
    importance: 'first'
  }
];

export {links};