import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

import "./ScrollToTop.css";
function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // For smooth scrolling
    });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <button id="myBtn" className="scrollTop" onClick={scrollTop} style={{ display: showScroll ? "flex" : "none" }}>
      <FaArrowCircleUp size={30} />
    </button>
  );
}

export default ScrollToTop;
