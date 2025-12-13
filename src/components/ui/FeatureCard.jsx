import { useRef } from 'react';
import { useRive } from '@rive-app/react-canvas';
import './FeatureCard.css';

function FeatureCard({ title, description, riveSrc, imageSrc }) {
  const containerRef = useRef(null);

  // Use Rive animation if riveSrc is provided, otherwise use static image
  const { RiveComponent } = riveSrc ? useRive({
    src: riveSrc,
    autoplay: true,
    shouldDisableRiveListeners: true,
    stateMachines: 'State Machine 1',
  }) : {};

  return (
    <div className="feature-card">
      <div className="feature-card__image-container" ref={containerRef}>
        {riveSrc && <RiveComponent />}
        {imageSrc && (
          <img src={imageSrc} alt={title} className="feature-card__screenshot" />
        )}
      </div>
      <div className="feature-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
