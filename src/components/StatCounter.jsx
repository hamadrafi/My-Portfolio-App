"use client";
import { useState, useEffect, useRef } from "react";

const StatCounter = ({ end, duration = 1500, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Run once
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const endValue = parseInt(end);
    if (isNaN(endValue)) return;
    
    // Adjust duration for small numbers to prevent "sticking"
    const finalDuration = endValue < 10 ? Math.min(duration, 1000) : duration;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / finalDuration, 1);
      
      // Easing function: easeOutQuart (smoother than Expo for small ranges)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = Math.round(easeProgress * endValue);
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      } else {
        setCount(endValue); // Ensure final value is exact
      }
    };

    window.requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
};

export default StatCounter;
