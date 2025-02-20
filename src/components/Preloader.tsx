import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showFinalContent, setShowFinalContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 80); // Smooth progress increase

    if (progress === 100) {
      setTimeout(() => setShowFinalContent(true), 500); // Show "Zavior" & logo after 100%
      setTimeout(() => setFadeOut(true), 2500); // Move up text & fade out everything
      setTimeout(onComplete, 3000); // Load homepage
    }

    return () => clearInterval(timer);
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full h-full bg-[#f4f0ea] flex flex-col items-center justify-center z-50"
    >
      {!showFinalContent ? (
        <div className="relative flex flex-col items-center text-6xl font-bold tracking-wide">
          <motion.span
            key={progress}
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {progress}%
          </motion.span>
        </div>
      ) : (
        <>
          <div className="relative flex flex-col items-center">
            {/* Logo Appears on Top of Text */}
            <motion.div
              className="absolute flex items-center justify-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img src="/logo.png" alt="Zavior Logo" className="w-24 h-24" />
            </motion.div>

            {/* "100%" Moves Up One by One */}
            <motion.div className="relative flex text-6xl font-bold mt-24">
              {"100%".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: -60, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            {/* "Zavior" Appears Letter by Letter Under Logo */}
            <motion.div className="text-6xl font-extrabold flex mt-4">
              {"Zavior".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

       
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
