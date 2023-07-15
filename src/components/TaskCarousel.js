import React from 'react';
import { useState } from 'react';

const TaskCarousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
        onClick={handlePrev}
      >
        &lt;
      </button>

      <div className="relative overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className={`carousel-item transform ${
              index === activeIndex ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-500 ease-in-out`}
          >
            {/* Render your data here */}
            <div className="p-4">{item}</div>
          </div>
        ))}
      </div>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default TaskCarousel;
