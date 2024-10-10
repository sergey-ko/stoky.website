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
    <div className="slide-container" style={{
      width: '100%',
      maxWidth: '70vw',
      margin: '2rem auto',
      marginBottom: '4rem',
    }}>
      <div style={{
        position: 'relative',
        paddingBottom: '56.25%', // 16:9 aspect ratio
      }}>
        <section style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#1f2937', // Tailwind's gray-800
          padding: '2rem',
          borderRadius: '0.5rem',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional: adds a subtle shadow for depth
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 800,
            marginBottom: '1.5rem',
            color: 'var(--pitch-primary, #4a90e2)', // Assuming pitch-primary is defined
            borderBottom: '2px solid var(--pitch-primary, #4a90e2)',
            paddingBottom: '0.5rem',
          }}>
            {title}
          </h2>
          <div style={{
            flex: 1,
            overflowY: 'auto',
          }}>
            {content}
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = `
  @media (max-width: 768px) {
    .slide-container {
      max-width: 100% !important;
    }
  }
`;

export default Slide;