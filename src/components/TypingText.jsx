// components/TypingText.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypingText = ({ 
  roles = [
    { text: "Web Developer", gradient: "from-indigo-500 to-purple-600" },
    { text: "UI/UX Designer", gradient: "from-pink-500 to-rose-600" },
    { text: "Game Developer", gradient: "from-emerald-500 to-teal-600" }
  ], 
  typingSpeed = 100, 
  delayBetweenRoles = 2000 
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentRole = roles[currentRoleIndex].text;

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, delayBetweenRoles);
      }
    } else if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, typingSpeed / 2);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentRoleIndex, isTyping, isDeleting, roles, typingSpeed, delayBetweenRoles]);

  return (
    <span className="inline-block font-bold">
      <motion.span
        key={currentRoleIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`bg-gradient-to-r ${roles[currentRoleIndex].gradient} bg-clip-text text-transparent`}
      >
          {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "easeInOut"
        }}
        className={`ml-0.5 bg-gradient-to-r ${roles[currentRoleIndex].gradient} bg-clip-text text-transparent`}
        >|
      </motion.span>
      </motion.span>
    </span>
  );
};

export default TypingText;