import React from "react";
import "./slider.css";

const logos = [
  // Original logos
  "https://as1.ftcdn.net/v2/jpg/13/94/82/22/1000_F_1394822282_OQn1GaxZmI6jh63Kq0LZ55pmAtru7dZq.webp",
  "https://as1.ftcdn.net/v2/jpg/05/55/24/48/1000_F_555244854_kxjBXWqMbGcHgINbZYYQKw2NGEFMATCv.webp",
  "https://as1.ftcdn.net/v2/jpg/06/29/84/18/1000_F_629841855_4AL9ysCnUKPv6WeXNVZVqG3WKr8UHV1G.webp",
  "https://as2.ftcdn.net/v2/jpg/05/87/81/03/1000_F_587810333_qKED9aBXJglxzVVS04QzD5X7GVWPEcgi.jpg",
  "https://as1.ftcdn.net/v2/jpg/05/81/83/52/1000_F_581835254_OwdrrA9diGx9Msn8jWeaJ9du2dzc3EyR.webp",
  "https://as2.ftcdn.net/v2/jpg/15/38/77/05/1000_F_1538770530_HmOaK62CdTSJMsdPbdmSqAe0dWwUkOzh.webp",
  "https://as1.ftcdn.net/v2/jpg/15/62/15/32/1000_F_1562153215_XXzcyT3r0hTHqjh9G6kTLth5MdST4KuF.jpg",
  "https://as2.ftcdn.net/v2/jpg/01/07/24/39/1000_F_107243962_93O8mMEWlLU1mGgEdwS0dIv37fbLWfaV.jpg",
  "https://as2.ftcdn.net/v2/jpg/02/87/25/37/1000_F_287253716_I1seSRet5pt8YGBRRcTbPPV1WesM00n9.jpg",
  "https://as2.ftcdn.net/v2/jpg/04/37/01/61/1000_F_437016119_ULn6dbWgqBBkcX3nuijoZ8wqsWsqE21Z.jpg",
  "https://as1.ftcdn.net/v2/jpg/13/23/82/78/1000_F_1323827870_eHViExdZYWA4zJcosxmDRBFR5HAoqmmy.webp",
  "https://as1.ftcdn.net/v2/jpg/06/22/21/82/1000_F_622218280_c6iw1u830AXC8tKVM1kT9Mu2V1qMWMvV.webp",
  "https://as2.ftcdn.net/v2/jpg/02/06/68/41/1000_F_206684171_g1IoATC6ACC66dhEdrQbAYOTPjUOEudk.jpg",
  "https://as2.ftcdn.net/v2/jpg/14/11/46/81/1000_F_1411468143_t94zWMkqsqFaiNaEFyQCGNW6zQ50J7cR.webp",

  "https://as2.ftcdn.net/v2/jpg/06/22/21/85/1000_F_622218525_sLC7O2sI8d3gWF8n9ardpKkXLqBjTdwg.webp",
];

const Slider = () => {
  return (
    <div className="brand-carousel">
      <div className="carousel-track">
        {[...logos, ...logos].map((src, index) => (
          <img key={index} src={src} alt="tech-logo" />
        ))}
      </div>
    </div>
  );
};


export default Slider