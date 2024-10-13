import React, { ReactNode, useEffect } from 'react';

interface SlideProps {
  content: ReactNode;
  title: string;
}

const Slide: React.FC<SlideProps> = ({ title, content }) => {
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="slide-title">{title}</h2>
        <div className="slide-body">{content}</div>
      </div>
    </div>
  );
};

const styles = `
  .slide-container {
    width: 100%;
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
  }

  .slide-content {
    background-color: #1f2937;
    padding: 2rem;
    border-radius: 0.5rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .slide-title {
    font-size: clamp(1.5rem, 5vw, 3rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    color: var(--pitch-primary, #4a90e2);
    border-bottom: 2px solid var(--pitch-primary, #4a90e2);
    padding-bottom: 0.5rem;
  }

  .slide-body {
    flex: 1;
    overflow-y: auto;
  }

  @media (max-width: 768px) {
    .slide-container {
      margin: 1rem auto;
    }

    .slide-content {
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .slide-content {
      padding: 1rem;
    }
  }
`;

export default Slide;
