import React, { useEffect, useRef, useState } from "react";
import ProductDescription from "../ProductDescription/ProductDescription";
import Button from "../Button/Button";

const VideoSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          playVideo();
        } else {
          resetVideo();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const resetVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  return (
    <div className="mt-50 w-full h-[675px] bg-dark-green rounded-14 relative">
      <video
        src="https://cdn.coverr.co/videos/coverr-surfing-through-the-ocean-waves-4214/1080p.mp4"
        className="h-full w-full object-fill rounded-14 opacity-35 absolute"
        autoPlay
        muted
        ref={videoRef}
      />
      <div className="absolute h-full w-full">
        <div className="flex flex-col gap-16 justify-center items-center h-full">
          <ProductDescription
            productName="CLEANIN OUR OCEANS WITH EVERY WIPE"
            title="Wipes have plastic in them. We don’t."
            description="We reinvented wipes to cut out all the bad stuff —like single-use plastic that hurts the\n environment, and toxic chemicals that don’t belong in our oceans (or in our homes)."
            className="text-[#ffffff] text-center"
          />
          <Button type="white">LEARN MORE</Button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
