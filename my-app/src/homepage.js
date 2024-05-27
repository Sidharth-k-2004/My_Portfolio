import React from 'react';
import './homepage.css';
import profile from './profile1.jpg';
import ProjectSquare from './projects_component';
import inventoryHome from './screens/inventory-homepage.jpg'

function Homepage() {
  return (
    <div className='container'>
      <div className="header">
      <div className='header-profile'>

          <div className='profile'>
            <img
              src={profile}
              alt="Sidharth"
              className="profile-image"
            />
            <h3>SIDHARTH K</h3>

          </div>
          <div className='contents'>
            <div className='name-section'>
              
              <h2 >"Passionate coder with a flair for embracing cutting-edge technologies.
               Dedicated to crafting innovative solutions through code,
              with a keen eye for detail and a relentless drive for excellence."</h2>
            </div>
            </div>
      </div>
        
      </div>
      <div className='projects'>
        <ProjectSquare
          imageSrc={inventoryHome}
          title="STREAMLINED INVENTORY MANAGEMENT WITH VOICE COMMANDS AND ADVANCED IMAGE DETECTION FOR SELLERS"
          description='Perform real-time inventory checks and updates using voice commands in their preferred language, eliminating the need for manual data entry.
  Receive voice-based alerts and notifications when stock levels reach predefined thresholds, facilitating proactive inventory management.
  Offer customizable voice commands to streamline specific inventory management tasks, improving efficiency and reducing workload.
  Image based inventory updation.'
          githubLink="https://github.com/yourusername/project1"
        />
        <ProjectSquare
          imageSrc={profile}
          description="Project 2 description goes here."
          githubLink="https://github.com/yourusername/project2"
        />
        <ProjectSquare
          imageSrc={profile}
          description="Project 2 description goes here."
          githubLink="https://github.com/yourusername/project2"
        />
        <ProjectSquare
          imageSrc={profile}
          description="Project 2 description goes here."
          githubLink="https://github.com/yourusername/project2"
        />
        {/* Add more ProjectSquare components for additional projects */}
      </div>
      <div className='footer'>
        <div className="contact-info">
          <p>Phone</p>
          <p>+91 7676747678</p>
        </div>
        <div className="contact-info">
          <p>Drop your Message</p>
          <p><a href="sidharthkdinesan123@gmail.com">calvino90@gmail.com</a></p>
        </div>
        <div className="contact-info">
          <p>LinkedIn</p>
          <p><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">linkedin.com/in/calvin</a></p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
