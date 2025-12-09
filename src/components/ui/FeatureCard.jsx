import { useRef } from 'react';
import { useRive } from '@rive-app/react-canvas';
import './FeatureCard.css';

function FeatureCard({ title, description, riveSrc }) {
  const containerRef = useRef(null);

  const { RiveComponent } = useRive({
    src: riveSrc,
    autoplay: true,
    stateMachines: 'State Machine 1',
  });

  return (
    <div className="feature-card">
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
