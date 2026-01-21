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
    text: 'NPS es una empresa de comercialización de repuestos diésel con amplia experiencia en el sector. Su presencia digital era limitada, lo que restringía su alcance a nuevos clientes.',
    image: npsImage,
    url: 'https://www.npsdieselsas.com/',
    github: 'https://github.com/santicollage/NPS-WEB',
    description: 'NPS es una empresa especializada en la comercialización de repuestos diésel nuevos, con una amplia trayectoria y experiencia en el sector. Ha colaborado con diversas empresas de transporte urbano, intermunicipal, turismo, recolección y logística. <br/> Sin embargo, su presencia digital era limitada, lo que restringía su alcance a nuevos clientes. Para solucionar este problema, se desarrolló un e-commerce que permite a los clientes potenciales conocer más sobre la empresa, explorar el catálogo de productos y comprar directamente desde la pagina web o contactar directamente con un asesor a través de un call to action.',
    characteristics: [
      "Arquitectura Fullstack desacoplada, con frontend y API REST independientes, diseñada para escalabilidad y mantenimiento.",
      "Interfaz web responsiva y alineada con la identidad corporativa, optimizada para una experiencia de usuario consistente en cualquier dispositivo.",
      "Autenticación segura mediante JWT e inicio de sesión con Google, garantizando control de acceso y protección de datos.",
      "Gestión completa del e-commerce mediante CRUD de productos, carrito de compras y pedidos, integrando la lógica de negocio desde la API.",
      "Integración de pasarela de pagos, permitiendo transacciones seguras dentro de la plataforma.",
      "Almacenamiento de archivos e imágenes en Amazon S3, asegurando disponibilidad y escalabilidad.",
      "Optimización SEO desde el frontend y uso de elementos dinámicos para mejorar visibilidad y experiencia de usuario.",
      "Módulo de estadísticas básicas y notificaciones por correo electrónico, orientado al seguimiento de ventas y eventos del sistema."
    ],
    process: [
      {
        etapa: "Descubrimiento y definición del proyecto",
        detalle: "Reuniones iniciales con el cliente para levantamiento de requerimientos funcionales y no funcionales. Definición de objetivos del negocio, alcance del e-commerce, flujos de usuario y prioridades. Elaboración de un brief técnico y funcional como base para el diseño y desarrollo."
      },
      {
        etapa: "Diseño UX/UI y prototipado",
        detalle: "Diseño de la arquitectura de información y flujos de navegación. Creación de prototipos en Figma, alineados con la identidad corporativa y criterios de usabilidad. Validación de interfaces y ajustes iterativos antes de pasar a desarrollo."
      },
      {
        etapa: "Diseño de arquitectura y base de datos",
        detalle: "Definición de una arquitectura Fullstack desacoplada (Frontend + API REST). Modelado del esquema de base de datos relacional para usuarios, productos, pagos, carritos y pedidos. Definición de relaciones, claves y estructura orientada a escalabilidad."
      },
      {
        etapa: "Desarrollo del backend y API REST",
        detalle: "Implementación de la API REST con Node.js y Express, centralizando la lógica de negocio. Desarrollo de CRUD completos para gestión de usuarios, productos, carritos de compra y pedidos. Implementación de autenticación y autorización mediante JWT y login con Google. Integración de servicios externos como pasarela de pagos, almacenamiento en Amazon S3 y envío de notificaciones por correo electrónico."
      },
      {
        etapa: "Desarrollo del frontend",
        detalle: "Implementación de la aplicación frontend con React, utilizando una arquitectura basada en componentes. Gestión del estado global mediante Redux Toolkit para carrito, sesión y datos persistentes. Configuración de rutas protegidas y públicas usando React Router. Integración del frontend con la API REST y manejo de estados de carga, errores y validaciones. Optimización SEO y mejora de rendimiento desde el frontend."
      },
      {
        etapa: "Pruebas y validación",
        detalle: "Pruebas funcionales de flujos críticos: autenticación, compra, pagos y gestión de pedidos. Validación de integridad de datos y comportamiento de la aplicación en distintos dispositivos. Ajustes finales basados en feedback del cliente."
      },
      {
        etapa: "Despliegue, infraestructura y puesta en producción",
        detalle: "Despliegue del frontend en Netlify y del backend en Render. Configuración de la base de datos en Neon (PostgreSQL). Implementación de Cloudflare para manejo de dominio, seguridad y rendimiento. Configuración de variables de entorno. Publicación y monitoreo inicial del sistema."
      }
    ],
    processImages: [NPS1, NPS2, NPS3],
    technologies: [
    "React",
    "Redux Toolkit",
    "React Router",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Vite",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Neon",
    "REST API",
    "JWT Authentication",
    "Google OAuth",
    "Amazon S3",
    "Payment Gateway",
    "Render",
    "Netlify",
    "Cloudflare",
    "Git",
    "GitHub",
    "Figma"
    ]
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