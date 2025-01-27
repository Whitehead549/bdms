import React, { useEffect } from 'react';

const Translate = () => {
  useEffect(() => {
    const addTranslateScript = () => {
      if (!window.google || !window.google.translate) {
        const script = document.createElement('script');
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    addTranslateScript();
  }, []);

  const containerStyle = {
    position: 'relative',
    zIndex: 50,
    display: 'inline-block',
    padding: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '32px', // Rounded corners
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
  };

  const widgetStyle = {
    width: '100%',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div id="google_translate_element" style={widgetStyle}></div>
    </div>
  );
};

export default Translate;
