import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    const typeNextCharacter = () => {
      setCurrentText(text.slice(0, currentIndex + 1));
      setCurrentIndex(prevIndex => (prevIndex + 1) % text.length);
    };

    if (currentIndex < text.length) {
      timeout = setTimeout(typeNextCharacter, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;
