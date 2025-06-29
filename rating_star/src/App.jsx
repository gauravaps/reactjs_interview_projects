import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './App.css';

const App = () => {
  const num = 10;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(num)].map((_, index) => {
        const currentIndex = index + 1;
        return (
          <FaStar
            key={currentIndex}
            size={40}
            onClick={() => setRating(currentIndex)}
            onMouseMove={() => setHover(currentIndex)}
            onMouseLeave={() => setHover()}
            className={currentIndex <= (hover || rating) ? 'active' : 'inactive'}
          />
        );
      })}
    </div>
  );
};

export default App;
