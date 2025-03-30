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
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const currentRole = roles[roleIndex].text;

    if (isTyping) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => {
          setText((prev) => currentRole.substring(0, prev.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenRoles);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.substring(0, prev.length - 1));
        }, typingSpeed / 2);
      } else {
        setIsTyping(true);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping, roleIndex, roles, typingSpeed, delayBetweenRoles]);

  return (
    <span className="inline-block font-bold select-none" translate="no" lang="en">
      <motion.span
        key={roleIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`bg-gradient-to-r ${roles[roleIndex].gradient} bg-clip-text text-transparent`}
      >
        {text}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
          className="ml-0.5 text-gray-800 dark:text-gray-100"
        >
          |
        </motion.span>
      </motion.span>
    </span>
  );
};

export default TypingText;
