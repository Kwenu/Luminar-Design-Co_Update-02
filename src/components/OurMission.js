import React, { useState, useEffect } from "react";
import DotNavigation from "./DotNavigation";
import VideoSource from "../assets/Video-1.mp4";

const OurMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // This ensures navbar/dots are WHITE on dark background
    document.body.setAttribute("data-page-theme", "dark");
    document.body.classList.add("dark-page");

    return () => {
      document.body.removeAttribute("data-page-theme");
      document.body.classList.remove("dark-page");
    };
  }, []);

  const handleVideoError = () => {
    console.error("Video failed to load");
    setVideoError(true);
  };

  return (
    <div className="video-mission-container">
      <DotNavigation />
      
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={VideoSource} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Content Overlay */}
      <div className={`video-content-wrapper ${isVisible ? "visible" : ""}`}>
        <p className="video-text">
          Based in Melbourne and Sydney, we specialise in crafting clean, 
          functional and conversion-driven websites that tell your story <br />
          and grow your business.
        </p>
      </div>
    </div>
  );
};

export default OurMission;