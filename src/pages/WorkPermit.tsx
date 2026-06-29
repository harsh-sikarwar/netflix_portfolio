import React from 'react';
import './WorkPermit.css';
import { staticWorkPermit } from '../staticContent';
const WorkPermit: React.FC = () => {
  const workPermitData = staticWorkPermit;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Permit</h2>
        <p className="work-permit-summary">
          I'm a <strong>{workPermitData.visaStatus}</strong> 🛂, which allows me to work in India!
        </p>
        {/* <p className="additional-info">{workPermitData.additionalInfo}</p> */}
      </div>
    </div>
  );
};

export default WorkPermit;
