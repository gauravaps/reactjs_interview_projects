import React, { useEffect, useRef, useState } from 'react';
import './slide.css';




const slidesData = [
  {
    title: 'Mern stack development',
    description: `At Optimus Computer, we offer expert services for all types of processors, including custom PC builds, upgrades, and performance tuning. Our team ensures smooth and efficient performance tailored...`,
    link: 'https://optimuscomputer.in/hardware-repair-in-coimbatore',
    image: "https://res.cloudinary.com/gauravkacloud/image/upload/v1744482044/website%20logo/MERN-logo_jrbnqp.png"
  },
  {
    title: 'DATA RECOVERY',
    description: `We recover data from HDDs, SSDs, RAID/NAS/SAN arrays, USB flash drives, memory cards, and more, supporting all major brands like Seagate, Western Digital, Toshiba, Samsung, Hitachi, and IBM.`,
    link: 'https://optimuscomputer.in/data-recovery-services-in-coimbatore',
    image: "https://res.cloudinary.com/gauravkacloud/image/upload/v1744480729/website%20logo/HTML5_logo_and_wordmark.svg_l13iqz.png"
  },
  {
    title: 'Virus Removal',
    description: `At Optimus Computers, we provide advanced virus removal services designed to detect, eliminate, and protect your system from harmful threats. Whether your PC is infected with viruses, worms...`,
    link: 'https://optimuscomputer.in/virus-removal-service-in-coimbatore',
    image: "https://res.cloudinary.com/gauravkacloud/image/upload/v1744481564/website%20logo/css3_nyeagc.png"
  },
  {
    title: 'Cpu Cooler',
    description: `Explore our wide range of CPU coolers from top brands like Cooler Master, Deepcool, Noctua, Corsair, and more. We offer brand-new and certified refurbished cooling solutions at the best market prices...`,
    link: 'https://optimuscomputer.in/products-buy-refurbished-and-used-laptops',
    image: "https://res.cloudinary.com/gauravkacloud/image/upload/v1744475403/website%20logo/erasebg-transformed_g3tkqg.webp"
  },
  {
    title: 'Software Solutions',
    description: `Our expert team provides comprehensive software solutions designed to enhance your system’s efficiency, security, and performance. Whether you need a fresh OS installation,`,
    link: 'https://optimuscomputer.in/software-solutions-in-coimbatore',
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
  },
  {
    title: 'PRINTER',
    description: `We offer a wide range of high-quality Canon, HP, and other leading-brand printers. Partnering with authorized distributors, we ensure genuine products with varied configurations to meet diverse business...`,
    link: 'https://optimuscomputer.in/printer-maintenance-services',
    image: "https://res.cloudinary.com/gauravkacloud/image/upload/v1744477372/website%20logo/React.svg_exa2oe.png"
  },
  {
    title: 'Networking',
    description: `At Optimus Computer, we provide end-to-end network setup, troubleshooting, and security solutions to ensure seamless connectivity, high performance, and robust security.`,
    link: 'https://optimuscomputer.in/networking-services-in-coimbatore',
    image: "https://res.cloudinary.com/gauravkacloud/image/upload/v1744476885/website%20logo/MongoDB_Logo.svg_d19xab.png"
  },
  {
    title: 'Networking',
    description: `At Optimus Computer, we provide end-to-end network setup, troubleshooting, and security solutions to ensure seamless connectivity, high performance, and robust security.`,
    link: 'https://optimuscomputer.in/networking-services-in-coimbatore',
    image: "https://res.cloudinary.com/gauravkacloud/image/upload/v1744476294/website%20logo/javascript_fpaybb.png"
  }
];

const Curosel = () => {
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



export default Curosel