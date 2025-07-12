import React, { useEffect, useRef, useState } from 'react';
import './carousel.css';




const slidesData = [
  {
    title: 'Patato',
    description: `Fresh and organic potatoes perfect for curries, fries, or baking. Sourced locally and packed with nutrition for your daily meals.`,
    link: '/',
    image: "https://as1.ftcdn.net/v2/jpg/13/94/82/22/1000_F_1394822282_OQn1GaxZmI6jh63Kq0LZ55pmAtru7dZq.webp"
  },
  {
    title: 'Carrot',
    description: `Crunchy and sweet carrots loaded with vitamins. Ideal for salads, cooking, and juicing. Farm-fresh and naturally grown.`,
    link: '/',
    image: "https://as1.ftcdn.net/v2/jpg/05/55/24/48/1000_F_555244854_kxjBXWqMbGcHgINbZYYQKw2NGEFMATCv.webp"
  },
  {
    title: 'ice-cream',
    description: `Delicious and creamy ice cream available in multiple flavors. A perfect dessert for hot days and sweet cravings.`,
    link: '/',
    image: "https://as1.ftcdn.net/v2/jpg/06/29/84/18/1000_F_629841855_4AL9ysCnUKPv6WeXNVZVqG3WKr8UHV1G.webp"
  },
  {
    title: 'Drinks',
    description: `Refreshing cold drinks and juices to keep you hydrated. Choose from fruity, fizzy, and health-focused options.`,
    link: '/',
    image: "https://as2.ftcdn.net/v2/jpg/05/87/81/03/1000_F_587810333_qKED9aBXJglxzVVS04QzD5X7GVWPEcgi.jpg"
  },
  {
    title: 'Mangos',
    description: `Juicy and naturally ripened mangoes bursting with flavor. Enjoy as a fruit, shake, or dessert topping.`,
    link: '/',
    image: "https://as1.ftcdn.net/v2/jpg/05/81/83/52/1000_F_581835254_OwdrrA9diGx9Msn8jWeaJ9du2dzc3EyR.webp"
  },
  {
    title: 'Gulab-jamun',
    description: `Soft and sweet gulab jamuns soaked in rose-flavored syrup. A traditional Indian dessert for all occasions.`,
    link: '/',
    image: "https://as2.ftcdn.net/v2/jpg/15/38/77/05/1000_F_1538770530_HmOaK62CdTSJMsdPbdmSqAe0dWwUkOzh.webp"
  },
  {
    title: 'kaju katli',
    description: `Premium quality Kaju Katli made from cashew paste. Rich, smooth, and perfect for gifting or festivals.`,
    link: '/',
    image: "https://as1.ftcdn.net/v2/jpg/15/62/15/32/1000_F_1562153215_XXzcyT3r0hTHqjh9G6kTLth5MdST4KuF.jpg"
  },
  { 
    title: 'Apple',
    description: `Crisp, juicy apples rich in fiber and antioxidants. Ideal for snacking, baking, or adding to salads.`,
    link: '/',
    image: "https://as2.ftcdn.net/v2/jpg/01/07/24/39/1000_F_107243962_93O8mMEWlLU1mGgEdwS0dIv37fbLWfaV.jpg"
  }
];


const Carousel = () => {
  const [index, setIndex] = useState(0);
  const slidesRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slidesData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slidesData.length);
  };

  return (
    <div className="slider-wrapper">
      
      <div className="slider">
        <div className="slides" ref={slidesRef}>
          {slidesData.map((slide, i) => (
            <div className="slide" key={i}>
              <div className="caption">
                <h2>{slide.title}</h2>
                <p>
                  {slide.description} <a href={slide.link} target="_blank" rel="noreferrer">more</a>
                </p>
              </div>
              <img src={slide.image} alt={slide.title} />
            </div>
          ))}
        </div>
        <button className="prev" onClick={handlePrev}>&#10094;</button>
        <button className="next" onClick={handleNext}>&#10095;</button>
      </div>
    </div>
  );
};




export default Carousel;