import iconEmail from './assets/icons/email.svg';
import iconLinkedin from './assets/icons/linkedin.svg';
import iconGithub from './assets/icons/github.svg';
import cvSvg from './assets/icons/cv.svg';
import cvSvgDark from './assets/icons/cv-dark.svg';
import cvPdf from './assets/documents/CV.pdf';

const links = [
  {
    name: 'email',
    svg: iconEmail,
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=santiagourregolaya@gmail.com&su=Solicitud%20de%20contacto%20-%20Desarrollo%20Frontend&body=Hola,%0A%0AMe%20gustaría%20ponerme%20en%20contacto%20contigo%20para%20discutir%20oportunidades%20de%20desarrollo%20frontend.%20Estoy%20interesado%20en%20conocer%20más%20sobre%20tus%20proyectos%20y%20cómo%20puedo%20contribuir%20a%20ellos.%0A%0AGracias%20por%20tu%20tiempo.%0A%0ASaludos,%0A[Tu%20nombre]%0A[Tu%20número%20de%20contacto%20o%20cualquier%20otra%20información%20relevante]',
    text: '',
    importance: 'second'
  },
  {
    name: 'linkedin',
    svg: iconLinkedin,
    url: 'https://www.linkedin.com/in/jose-santiago-urrego-olaya-145a98210/',
    text: '',
    importance: 'second'
  },
  {
    name: 'github',
    svg: iconGithub,
    url: 'https://github.com/santicollage',
    text: '',
    importance: 'second'
  },
  {
    name: 'CV',
    svg: cvSvgDark,
    url: cvPdf,
    text: 'CV',
    importance: 'first'
  }
];

export {links};