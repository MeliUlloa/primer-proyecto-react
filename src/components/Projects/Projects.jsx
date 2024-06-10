import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Mis proyectos</h2>
      <div className="project-list">
        <div className="project">
          <h3>Plataforma de Fitness Personalizado en la Nube: </h3>
          <p>Un proyecto que combina tus habilidades en desarrollo de software y tu experiencia previa como entrenadora personal. Esta plataforma proporcionaría programas de entrenamiento personalizado basados en datos recopilados de los usuarios, como sus objetivos de fitness, niveles de condición física y preferencias de ejercicio. Utilizando tecnologías en la nube, los usuarios podrían acceder a sus planes de entrenamiento desde cualquier dispositivo y recibir actualizaciones en tiempo real sobre su progreso. Además, la plataforma podría incluir características sociales que permitan a los usuarios conectarse, compartir logros y motivarse mutuamente.</p>
        </div>
        <div className="project">
          <h3>Aplicación de Gestión de Proyectos de Desarrollo de Software:</h3>
          <p>Un proyecto que aprovecha tus habilidades en desarrollo de software y tu pasión por trabajar en equipo. Esta aplicación proporcionaría una plataforma centralizada para la gestión de proyectos de desarrollo de software, desde la planificación y asignación de tareas hasta el seguimiento del progreso y la colaboración entre equipos. Incorporaría características como tableros Kanban, seguimiento de tiempo, gestión de archivos y comunicación en tiempo real. La aplicación podría adaptarse a las metodologías ágiles y ofrecer herramientas para la retrospección y mejora continua del equipo.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
