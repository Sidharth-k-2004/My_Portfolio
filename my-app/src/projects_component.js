import React from 'react';
import './ProjectSquare.css'; // You can create this file for styling if needed
import Knowmore from './knowmore_button';
function ProjectSquare({ imageSrc,title, description, githubLink }) {
  return (
    <div className="project-square">
      <img src={imageSrc} alt="Project" className="project-image" />
      <div className="project-description">
        <p>{title}</p>        
        <p>{description}</p>        

        <a href={githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        
        <div className='know-more'>

        <Knowmore/>
        </div>
      </div>
      

      
    </div>
  );
}

export default ProjectSquare;
