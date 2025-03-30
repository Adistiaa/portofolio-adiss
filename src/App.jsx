import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loading from "./pages/Loading";
import Home from "./pages/Home";
import { CodeXml, FolderCode, HomeIcon, Medal, User } from "lucide-react";
import ThemeToggle from "./components/ThemeToggle";
import Dock from "./components/Dock/Dock";
import ScrollBar from "./components/ScrollBar";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const items = [
    { 
      icon: <HomeIcon size={18} />, 
      label: "Home", 
      onClick: () => document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' }) 
    },
    { 
      icon: <CodeXml size={18} />, 
      label: "Profile", 
      onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) 
    },
    { 
      icon: <FolderCode size={18} />, 
      label: "Projects", 
      onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) 
    },
    { 
      icon: <Medal size={18} />, 
      label: "Certificates", 
      onClick: () => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' }) 
    },
    { 
      icon: <User size={18} />, 
      label: "Contact", 
      onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) 
    },
  ];

  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Event scroll untuk menyembunyikan Dock saat scroll ke bawah dan menampilkannya saat scroll ke atas
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Sembunyikan saat scroll ke bawah
      } else {
        setIsVisible(true); // Tampilkan saat scroll ke atas
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <Loading />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <CustomCursor />
            <ScrollBar />
            <Home />
            <ThemeToggle />

            {/* Dock efek animasi */}
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.3 }}
                  className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50"
                >
                  <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
