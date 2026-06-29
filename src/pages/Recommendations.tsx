import React from 'react';
import './Recommendations.css';
import RahulProfilePic from '../images/rahul.png'; // Adjust the path based on your directory structure

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">``
          <img src={RahulProfilePic} alt="Rahul Rai" className="profile-pic" />
          <div>
            <h3>Rahul Rai</h3>
            <p>CEO, Starial</p>
            <p className="date">January 26, 2025</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p> I had the pleasure of working with Harsh Vardhan during his internship as a Web Developer at Starial. From the beginning, he demonstrated a strong willingness to learn, a proactive attitude, and excellent problem-solving skills.

Harsh contributed to the development of responsive, high-quality websites using modern frontend technologies and consistently delivered clean, reliable work. He collaborated effectively with designers, translated Figma designs into pixel-perfect interfaces, and took ownership of tasks from development through deployment. His attention to detail, ability to quickly adapt to new challenges, and commitment to delivering quality results made him a valuable member of the team.

Beyond his technical abilities, Harsh is a dependable professional with a positive attitude and strong work ethic. I am confident he will continue to grow into an exceptional software engineer, and I highly recommend him for any frontend or full-stack development opportunity.
</p>
        
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
