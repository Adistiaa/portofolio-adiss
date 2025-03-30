import React, { useRef } from "react";
import {
  Award,
  Backpack,
  BookOpen,
  Code as CodeXml,
  Facebook,
  Github,
  Globe,
  Instagram,
  Languages,
  Laptop,
  Linkedin,
  School,
  Terminal,
  Trophy,
  UniversityIcon,
  Users,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import Divider from "../components/Divider";
import TypingText from "../components/TypingText";

function Home() {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "https://github.com/Adistiaa",
      name: "GitHub",
    },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/muhammad-adistia-pratama-b15a0b347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", name: "LinkedIn" },
    { icon: <Facebook size={20} />, url: "https://www.facebook.com/share/18wxuNcRUJ/", name: "Facebook" },
    {
      icon: <Instagram size={20} />,
      url: "https://instagram.com/bad.single_player",
      name: "Instagram",
    },
  ];

  const educationTimeline = [
    {
      icon: <Backpack className="text-gray-500 dark:text-white" />,
      title: "TK Bina Siswa",
      institution: "Pulo Gebang, Kec. Cakung, Kota Jakarta Timur",
      years: "2013-2015",
      details: "The first step in my education journey, where I learned basic social and motor skills.",
    },
    {
      icon: <BookOpen className="text-gray-500 dark:text-white" />,
      title: "SDN Malaka Jaya 04 Pagi",
      institution:
        "Jl. Mawar Merah VI No.11, RT.11/RW.4, Malaka Jaya, Kec. Duren Sawit, Kota Jakarta Timur",
      years: "2015-2020",
      details: "Where I built my foundation in reading, writing, and arithmetic, and discovered a love for learning.",
    },
    {
      icon: <School className="text-gray-500 dark:text-white" />,
      title: "SMP Negeri 139 Jakarta",
      institution:
        "Jl. Bunga Rampai X No.38, Malaka Jaya, Kec. Duren Sawit, Kota Jakarta Timur",
      years: "2020-2024",
      details: "A period of growth and exploration, where I developed critical thinking and problem-solving skills.",
    },
    {
      icon: <UniversityIcon className="text-gray-500 dark:text-white" />,
      title: "SMK Negeri 69 Jakarta",
      institution:
        "Jl. Dr. KRT Radjiman Widyodiningrat No.32, RT.07/RW.7, Rawa Badung, Kec. Cakung, Kota Jakarta Timur",
      years: "2024-Now",
      details: "Specializing in Information and Communication Technology, honing my skills in web development and cybersecurity.",
    },
  ];

  const projects = [
    {
      image:
        "https://res.cloudinary.com/dxbkwpm3i/image/upload/v1743292742/Screenshot_2025-03-30_065815_nbhcsy.png",
      title: "Danantara ReDesign",
      year: "2025",
      description:
        "I redesigned the Danantara website without compromising its essence, using original assets, and making it more mobile-friendly.",
      techStack: [
        "React",
        "Vite",
        "JavaScript",
        "Tailwind",
        "DaisyUI",
        "Framer-Motion",
      ],
      liveLink: "https://danantara-redesign.vercel.app/",
      sourceCode: "https://github.com/Adistiaa/danantara-redesign",
    },
    {
      image:
        "https://res.cloudinary.com/dxbkwpm3i/image/upload/v1743292741/Screenshot_2025-03-30_065739_glu5f9.png",
      title: "PixBooth",
      year: "2025",
      description:
        "I created this website with the aim of helping people who want to experience a photobooth without having to leave the house.",
      techStack: [
        "React",
        "Vite",
        "JavaScript",
        "Tailwind",
        "DaisyUI",
        "Framer-Motion",
      ],
      liveLink: "https://pixbooth-cam.vercel.app/",
      sourceCode: "https://github.com/Adistiaa/pixbooth-cam",
    },
    {
      image:
        "https://res.cloudinary.com/dxbkwpm3i/image/upload/v1743292741/Screenshot_2025-03-30_065619_oxyyj4.png",
      title: "PIK-R ARBES Collab",
      year: "2025",
      description:
        "I created this website because the PIK-R extracurricular activities at State Vocational School 69 Jakarta collaborated with State Vocational School 48 Jakarta.",
      techStack: ["React", "Vite", "JavaScript", "Tailwind"],
      liveLink: "https://pik-rarbes.vercel.app/",
      sourceCode: "https://github.com/Adistiaa/pik-r",
    },
    {
      image:
        "https://res.cloudinary.com/dxbkwpm3i/image/upload/v1743293131/Screen_Recording_2025-02-03_045320_-_frame_at_0m15s_ddg5ah.jpg",
      title: "RentCar | Pelatihan",
      year: "2025",
      description:
        "I practice making a dynamic website with a database and API that is simple and easy to understand.",
      techStack: [
        "Laravel 11",
        "React",
        "JavaScript",
        "Vite",
        "Bootstrap 5",
        "Axios",
      ],
      liveLink: "https://github.com/Adistiaa/pelatihan-akhir",
      sourceCode: "https://github.com/Adistiaa/pelatihan-akhir",
    },
    {
      image:
        "https://res.cloudinary.com/dxbkwpm3i/image/upload/v1743294067/Screenshot_2024-11-14_083521_moqxcu.png",
      title: "Warisan Waktu",
      year: "2024",
      description:
        "Design created for a school website project design with many uses and users.",
      techStack: ["Figma"],
      liveLink:
        "https://www.figma.com/design/r9qBT9RRrFp7iLNSYh1P7q/Warisan-Waktu?m=auto&t=1QT6cGaaKaGeOxe4-6",
      sourceCode:
        "https://www.figma.com/design/r9qBT9RRrFp7iLNSYh1P7q/Warisan-Waktu?m=auto&t=1QT6cGaaKaGeOxe4-6",
    },
    {
      image:
        "https://res.cloudinary.com/dxbkwpm3i/image/upload/v1743294221/Screenshot_2025-03-30_072310_qfcit9.png",
      title: "IT Club Website",
      year: "2024",
      description:
        "The design was made to design a website project that I was working on to fulfill my needs.",
      techStack: ["Figma"],
      liveLink:
        "https://www.figma.com/design/2fBDIwaRbP4P7OsuTDjVYZ/IT-Club?m=auto&t=1QT6cGaaKaGeOxe4-6",
      sourceCode:
        "https://www.figma.com/design/2fBDIwaRbP4P7OsuTDjVYZ/IT-Club?m=auto&t=1QT6cGaaKaGeOxe4-6",
    },
  ];

  const categories = [
    {
      title: "Community Leadership",
      items: [
        {
          name: "PIK-R",
          logo: <Award size={20} />,
          description:
            "I joined PIK-R because I wanted to learn how and how to handle problems that teenagers often face during their development.",
        },
        {
          name: "IT Club",
          logo: <Award size={20} />,
          description:
            "I have been joining IT Club since 2024 because I want to practice my programming skills.",
        },
      ],
      icon: <Users size={20} />,
    },
    {
      title: "Achievements",
      items: [
        {
          name: "Pelatihan Akhir Web",
          logo: <Award size={20} />,
          description:
            "Graduated and entered the next round in the web field, will continue until grade 12 to become a Senior Web Developer",
        },
        {
          name: "ICP Participation",
          logo: <Award size={20} />,
          description:
            "I participated in ICP on Web 3 and learned how to work well together.",
        },
      ],
      icon: <Trophy size={20} />,
    },
  ];

  // ref animasi section
  const containerRef = useRef(null);
  const profileRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const eduRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);

  // track ref section
  const isContainerInView = useInView(containerRef, {
    once: false,
    amount: 0.1,
  });
  const isProfileInView = useInView(profileRef, { once: false, amount: 0.2 });
  const isAboutInView = useInView(aboutRef, { once: false, amount: 0.1 });
  const isSkillInView = useInView(skillRef, { once: false, amount: 0.1 });
  const isEducationInView = useInView(eduRef, { once: false, amount: 0.1 });
  const isExperienceInView = useInView(experienceRef, {
    once: false,
    amount: 0.1,
  });
  const isProjectInView = useInView(projectRef, { once: false, amount: 0.1 });
  const isCertificatesInView = useInView(certificatesRef, {
    once: false,
    amount: 0.1,
  });
  const isContactInView = useInView(contactRef, { once: false, amount: 0.1 });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div id="profile" className="min-h-screen flex items-center justify-center py-20 bg-gray-50/50 dark:bg-gray-900 py-15 px-4 sm:px-6 lg:px-8">
      <div ref={containerRef} className="w-full max-w-2xl mx-auto">
        {/* Container Utama */}
        <motion.div
          variants={staggerContainer}
          initial="visible"
          animate={isContainerInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="relative bg-white dark:bg-gray-800 p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
        >
          {/* Hiasan Border */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isContainerInView ? { scaleX: 1 } : {}}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute top-0 left-0 right-0 h-[1px] bg-gray-200 dark:bg-gray-700 origin-left"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isContainerInView ? { scaleX: 1 } : {}}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200 dark:bg-gray-700 origin-right"
            />
          </div>

          {/* Profile Section */}
          <motion.div
            ref={profileRef}
            variants={staggerContainer}
            initial="hidden"
            animate={isProfileInView ? "visible" : {}}
            className="flex flex-col items-center mb-10 py-5"
          >
            <motion.div
              variants={textVariants}
              className="relative w-24 h-24 mb-5"
            >
              {/* Glowing Animated Border */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full p-[2px]"
                style={{
                  background:
                    "conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #f43f5e, #f59e0b, #6366f1)",
                }}
              >
                <div className="absolute inset-0 rounded-full bg-white/80 dark:bg-gray-800/80 blur-[6px]"></div>
              </motion.div>

              {/* Inner Glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(99, 102, 241, 0.5)",
                    "0 0 20px rgba(139, 92, 246, 0.7)",
                    "0 0 10px rgba(236, 72, 153, 0.5)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 rounded-full pointer-events-none"
              ></motion.div>

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 overflow-hidden border border-gray-200 dark:border-gray-600 shadow-sm z-10">
                {/* Replace with your actual image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                  <img
                    src="https://res.cloudinary.com/dxbkwpm3i/image/upload/v1743302996/WhatsApp_Image_2025-03-02_at_16.35.11_f8a5e4ec_qpobrr.jpg"
                    alt="Adiss"
                  />
                </div>
              </div>
            </motion.div>

            <motion.h1
              variants={textVariants}
              className="text-3xl font-medium text-gray-900 dark:text-white mb-1.5"
            >
              Hi, I'm Adiss
            </motion.h1>

            <motion.h2
              variants={textVariants}
              className="text-lg font-semibold mb-5"
            >
              <TypingText />
            </motion.h2>

            <motion.p
              variants={textVariants}
              className="text-gray-600 dark:text-gray-300 text-center max-w-md mb-7 leading-relaxed"
            >
              I love designing and coding,  
              Passionate about technology, slightly addicted to coffee.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="flex gap-6 justify-center flex-wrap"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  variants={textVariants}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-lg border border-gray-300 dark:border-gray-600 transition-all hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="mt-2 text-xs font-semibold">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <span id="about"><Divider  /></span>

          {/* About Section */}
          <motion.section
            ref={aboutRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl font-medium text-gray-800 dark:text-white mb-5 pb-2 border-b border-gray-100 dark:border-gray-700"
            >
              About
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isAboutInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, staggerChildren: 0.05 }}
              className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {[
                "I am Muhammad Adistia Pratama, a student from SMK Negeri 69 Jakarta majoring in SIJA (Sistem Informasi, Jaringan, dan Aplikasi).",
                "I as a student have an interest in the field of Fullstack Web Developer, I as a Web Developer try to be a wise person and also seek various experiences to create an application / website that is good and also interesting to use.",
              ].map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </motion.section>

          {/* Skill Section */}
          <motion.section
            ref={skillRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isSkillInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              animate={isSkillInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl font-medium text-gray-800 dark:text-white mb-5 pb-2 border-b border-gray-100 dark:border-gray-700"
            >
              Skill
            </motion.h3>

            {/* Skill Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                {
                  title: "Programming Languages",
                  skills: ["JavaScript", "PHP", "Python", "C++"],
                  icon: <CodeXml size={20} />,
                },
                {
                  title: "Technologies",
                  skills: [
                    "React",
                    "Node.js",
                    "Tailwind CSS",
                    "Bootstrap",
                    "MySQL",
                    "Vite.js",
                  ],
                  icon: <Terminal size={20} />,
                },
                {
                  title: "Tools",
                  skills: ["VS Code", "Git", "Figma", "Postman"],
                  icon: <Laptop size={20} />,
                },
                {
                  title: "Languages",
                  skills: ["English (Pemula)", "Indonesia"],
                  icon: <Languages size={20} />,
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-2"
                >
                  <h3 className="font-semibold mb-2 flex items-center gap-2 text-gray-800 dark:text-white">
                    {category.icon} {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            ref={eduRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isEducationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              animate={isEducationInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl font-medium text-gray-800 dark:text-white mb-5 pb-2 border-b border-gray-100 dark:border-gray-700"
            >
              Education
            </motion.h3>
            <div className="space-y-6">
              {educationTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 border-l-4 border-gray-500 dark:border-white bg-gray-50 dark:bg-gray-700/50 rounded-lg shadow-sm"
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-600 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.institution} • {item.years}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section*/}
          <motion.section
            ref={experienceRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              animate={isExperienceInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl font-medium text-gray-800 dark:text-white mb-5 pb-2 border-b border-gray-100 dark:border-gray-700"
            >
              Experience
            </motion.h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isExperienceInView ? "visible" : {}}
              className="space-y-6"
            >
              {[
                {
                  company: "SMK Negeri 69 Jakarta",
                  position: "Student",
                  period: "July 2024 - Present",
                  description:
                    "Currently pursuing a vocational high school education in the field of network and application systems, focusing on programming, system management, and networking.",
                },
                {
                  company: "Pusat Pelatihan dan Pengembangan Pendidikan",
                  position: "Trainee - Junior Web Developer",
                  period: "2025",
                  description:
                    "Learn the basics of creating a website, focusing on understanding logic and also creating an attractive design.",
                },
              ].map((job, i) => (
                <motion.div
                  key={i}
                  variants={textVariants}
                  className="border-l-2 border-gray-200 dark:border-gray-700 pl-4"
                >
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    {job.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                    {job.position}
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-xs mb-2">
                    {job.period}
                  </p>
                  {job.description && (
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {job.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <span id="projects"><Divider  /></span>

          {/* Projects Section */}
          <motion.section
            ref={projectRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isProjectInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={isProjectInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-gray-100 dark:text-white dark:bg-gray-900 text-sm font-medium rounded-full mb-4"
              >
                My Projects
              </motion.span>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={isProjectInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-3"
              >
                Check out my latest works
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isProjectInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
              >
                I developed and designed websites, from simple pages to advanced
                web applications. Here are a few of my favorites.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
                        {project.year}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 mt-auto">
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 
          bg-gray-900 hover:bg-gray-800 
          dark:bg-gray-700 dark:hover:bg-gray-600 
          text-white rounded-lg text-sm font-medium
          transition-colors duration-200"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Globe size={16} /> Website
                      </motion.a>

                      <motion.a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 
          bg-gray-100 hover:bg-gray-200 
          dark:bg-gray-800 dark:hover:bg-gray-700 
          text-gray-900 dark:text-gray-100 
          rounded-lg text-sm font-medium 
          border border-gray-200 dark:border-gray-700
          transition-colors duration-200"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={16} /> Source
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <span id="achievements"><Divider  /></span>

          {/* Achievement Section */}
          <motion.section
            ref={certificatesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isCertificatesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={isCertificatesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-gray-100 dark:text-white dark:bg-gray-900 text-sm font-medium rounded-full mb-4"
              >
                Certificates
              </motion.span>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={isCertificatesInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-3"
              >
                Browse my community and achievements
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isCertificatesInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
              >
                Certifications and awards that showcase my journey of continuous
                learning and expertise in the field.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800"
                >
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                    {category.icon} {category.title}
                  </h3>
                  <ul className="space-y-4">
                    {category.items.map((item, i) => (
                      <li key={i}>
                        <p className="font-medium mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                          {item.logo}
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <span id="contact"><Divider  /></span>

          {/* Contact Section */}
          <motion.section
            ref={contactRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={isContactInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-gray-100 dark:text-white dark:bg-gray-900 text-sm font-medium rounded-full mb-4"
              >
                Contact
              </motion.span>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={isContactInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-3"
              >
                Get in Touch
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isContactInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
              >
                Have a question or want to work together? Feel free to reach
                out!
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-lg md:max-w-4xl mx-auto">
              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/6289693440807?text=Halo%20Adiss,%20aku%20tertarik%20dengan%20jasa%20yang%20kamu%20tawarkan!" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-gray-600 dark:text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>WhatsApp icon</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                  WhatsApp
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Chat me
                </p>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:muhammadadistiapratama@gmail.com?subject=Halo Adiss, aku mau nanya dong&body=Adiss, aku mau tanya tentang..." // Replace with your email
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-gray-600 dark:text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                  Email
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Send a message
                </p>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/direct/t/bad.single_player" // Replace with your Instagram
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-gray-600 dark:text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                  Instagram
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  DM me
                </p>
              </motion.a>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.section
            ref={contactRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <motion.footer className="py-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  &copy;{new Date().getFullYear()} Portofolio Adiss made with❤️.
                  All rights reserved.
                </p>
              </motion.footer>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
