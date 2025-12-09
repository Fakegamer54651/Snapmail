import { useRef } from 'react';
import { useRive } from '@rive-app/react-canvas';
import './FeatureCard.css';

function FeatureCard({ title, description, riveSrc }) {
  const containerRef = useRef(null);

  const { RiveComponent, rive } = useRive({
    src: riveSrc,
    autoplay: true,
    stateMachines: 'State Machine 1',
    onLoad: () => {
      // Try to use state machine if it exists, otherwise use default animation
    },
  });

  const handleMouseEnter = () => {
    if (rive) {
      rive.play();
    }
  };

  const handleMouseLeave = () => {
    if (rive) {
      rive.pause();
    }
  };

  return (
    <div 
      className="feature-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="feature-card__animation" ref={containerRef}>
        <RiveComponent />
      </div>
      <div className="feature-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;

