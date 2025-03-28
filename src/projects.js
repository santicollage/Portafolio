import npsImage from './assets/images/projects/NPS.png';
import NPS1 from './assets/images/projects/NPS-1.png';
import NPS2 from './assets/images/projects/NPS-2.png';
import NPS3 from './assets/images/projects/NPS-3.png';
import gridGameImage from './assets/images/projects/Grid.png';
import Grid1 from './assets/images/projects/Grid-1.png';
import Grid2 from './assets/images/projects/Grid-2.png';
import Grid3 from './assets/images/projects/Grid-3.png';

const projects = [
  {
    name: 'NPS',
    title: 'NPS Diesel Landing Page',
    text: 'NPS es una empresa de comercialización de repuestos diésel con amplia experiencia en el sector.',
    image: npsImage,
    url: 'https://santicollage.github.io/nps-pagina-web/',
    github: 'https://github.com/santicollage/nps-pagina-web',
    description: 'NPS es una empresa especializada en la comercialización de repuestos diésel nuevos, con una amplia trayectoria y experiencia en el sector. Ha colaborado con diversas empresas de transporte urbano, intermunicipal, turismo, recolección y logística. <br/> Sin embargo, su presencia digital era limitada, lo que restringía su alcance a nuevos clientes. Para solucionar este problema, se desarrolló una página web que permite a los clientes potenciales conocer más sobre la empresa, explorar el catálogo de productos y contactar directamente con un asesor a través de un call to action.',
    characteristics: [
      "Diseño alineado con la identidad corporativa",
      "Interfaz responsiva para una óptima experiencia en cualquier dispositivo",
      "Optimización SEO desde el frontend",
      "Interactividad y elementos dinámicos"
    ],
    process: [
      {
        etapa: "Definición del Proyecto",
        detalle: "Se elaboró un brief con el cliente para establecer objetivos, contenidos y directrices de diseño."
      },
      {
        etapa: "Prototipado",
        detalle: "Se diseñó un prototipo en Figma considerando parámetros visuales y de usabilidad."
      },
      {
        etapa: "Desarrollo Web",
        detalle: "Se implementó la aplicación de forma estructurada y escalable utilizando tecnologías modernas."
      },
      {
        etapa: "Implementación y Producción",
        detalle: "Se está realizando un inventario de productos y fotografías antes del lanzamiento oficial, con una versión preliminar en GitHub Pages."
      }
    ],
    processImages: [NPS1, NPS2, NPS3],
    technologies: ["React", "Sass", "Vite", "Figma", "HTML", "CSS", "JavaScript"],
  },
  {
    name: 'Grid',
    title: 'Grid Game',
    text: 'Inspirado en el clásico juego "Cuadrito", donde el objetivo es rellenar la mayor cantidad de área posible.',
    image: gridGameImage,
    url: 'https://santicollage.github.io/grid-game/#/',
    github: 'https://github.com/santicollage/grid-game',
    description: "Cuando estaba en el colegio, recuerdo un juego popular llamado Cuadrito, que solo requería una hoja cuadriculada y un color por jugador, lo que lo hacía muy accesible. Lo interesante de este juego era la estrategia necesaria para capturar la mayor cantidad de área posible y engañar al oponente. <br/> Inspirado por este recuerdo, decidí retarme a llevar su lógica al mundo digital. Este proyecto me permitió mejorar en lógica de programación y manipulación de estados con React, además de enfrentar el desafío de replicar sus reglas de manera dinámica.",
    characteristics: [
      "Diseño intuitivo, manteniendo la esencia del juego original",
      "Interfaz responsiva, adaptable a cualquier dispositivo",
      "Fácil escalabilidad para expandir el juego y añadir nuevas reglas"
    ],
    process: [
      {
        etapa: "Definición del Proyecto",
        detalle: "Se desglosó la lógica del juego Cuadrito, analizando sus reglas para adaptarlas a código."
      },
      {
        etapa: "Prototipado",
        detalle: "Se diseñó un prototipo en Figma, definiendo la interfaz y las reglas del sistema de juego."
      },
      {
        etapa: "Desarrollo Web",
        detalle: "Se implementó el juego en React, utilizando eventos y lógicas para detectar clics, asignar puntos y determinar el fin del juego según las reglas establecidas."
      },
      {
        etapa: "Implementación y Producción",
        detalle: "El juego cuenta con una versión funcional, pero se planea agregar nuevas reglas y características para hacerlo más dinámico y desafiante."
      }
    ],
    processImages: [Grid1, Grid2, Grid3],
    technologies: ["React", "Sass", "Vite", "Figma", "HTML", "CSS", "JavaScript"],
    },
];

export {projects};