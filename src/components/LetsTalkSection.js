// import React from 'react';

// const LetsTalkSection = () => {
//   return (
//     <section className="lets-talk-section">
//       {/* Content */}
//       <div className="lets-talk-container">
//         <div className="lets-talk-content">
//           <h2 className="lets-talk-title">
//             Let&apos;s build the next f(x) <span className="together">together</span>
//           </h2>
//           <div className="lets-talk-subtitle">We are x</div>
//           <div className="lets-talk-subsubtitle">and f(x) is everything we choose to become.</div>
//           <a className="lets-talk-email" href="mailto:richag@mit.edu">richag@mit.edu</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LetsTalkSection;


import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LetsTalkSection() {
  const [typedText, setTypedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const fullText = 'and f(x) is what we choose to become';
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);
  
  useEffect(() => {
    if (!isVisible) return;
    
    // Start typing animation after 2.5 seconds (after other animations)
    const typingDelay = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50); // 50ms per character
      
      return () => clearInterval(typingInterval);
    }, 2500);
    
    return () => clearTimeout(typingDelay);
  }, [isVisible]);

  return (
    <section className="fx-ending-section" ref={sectionRef}>
      {/* Ambient gradient glow */}
      <motion.div
        className="fx-ambient-glow"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* Breathing bracket animation forming a circle */}
      {isVisible && (
        <motion.div
          className="fx-breathing-circle"
          initial={{ scale: 0.8, rotate: 20, borderRadius: '50%' }}
          animate={{
            scale: [0.8, 1.1, 0.8],
            rotate: [20, 0, 20],
            borderRadius: ['45% 55% 50% 50% / 55% 50% 50% 45%', '50%', '45% 55% 50% 50% / 55% 50% 50% 45%'],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* Content */}
      <div className="fx-ending-content">
        {/* Text content group */}
        <div className="fx-text-group">
          {/* "what if" - appears at center then moves up */}
          {isVisible && (
            <motion.div
              className="fx-what-if"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -100 }}
              transition={{ duration: 1, delay: 0, ease: 'easeOut' }}
            >
              ~ what if ~
            </motion.div>
          )}

          {/* "x is us" - comes after and stays */}
          {isVisible && (
            <motion.h1
              className="fx-ending-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <span className="fx-bracket">x</span>{' '}
              <motion.span 
                className="fx-bracket"
                animate={{ 
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
              >
                is
              </motion.span>{' '}
              <span className="fx-bracket">us</span>
            </motion.h1>
          )}

          {/* "f(x) is what we choose to become" - typing animation */}
          {isVisible && (
            <motion.h2
              className="fx-ending-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              {typedText}
              {typedText.length < fullText.length && <span className="typing-cursor">|</span>}
            </motion.h2>
          )}
        </div>

        {/* Email CTA */}
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 1 }}
            className="fx-ending-cta"
          >
            <a className="fx-email-link" href="mailto:richag@mit.edu">
  {"Let's build f(x) together"}
</a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
