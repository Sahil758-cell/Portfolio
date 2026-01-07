import { Code, Cpu, Database, Globe, Layers, Layout, Terminal, Zap } from "lucide-react";

export const PROFILE = {
  name: "Sahil Surendra Deshmukh",
  role: "AI/ML Engineer",
  bio: "Passionate AI/ML Engineer with a knack for transforming data into actionable insights. Dedicated to building intelligent systems that solve real-world problems. Experienced in Python, Data Science, and Machine Learning.",
  email: "sahidesh02@gmail.com", // Placeholder
  linkedin: "https://linkedin.com/in/sahil-deshmukh", // Placeholder
  github: "https://github.com/Sahil758-cell",
};

export const SKILLS = [
  { name: "Python", icon: Code },
  { name: "Machine Learning", icon: Cpu },
  { name: "Deep Learning", icon: Layers },
  { name: "Data Science", icon: Database },
  { name: "Web Development", icon: Globe },
  { name: "TensorFlow/PyTorch", icon: Zap },
  { name: "SQL", icon: Layout },
  { name: "Git", icon: Terminal },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Call Transcribe",
    description: "A Flask-based API server that transcribes and summarizes audio files using Groq's Whisper and Llama models, with automatic Azure Blob Storage integration.",
    tech: ["Python", "Flask", "Groq AI", "Azure Blob"],
    github: "https://github.com/Sahil758-cell/Call_Transcribe",
    live: "#"
  },
  {
    id: 2,
    title: "Face & Iris Attendance",
    description: "Automated attendance system using face and retina/iris recognition. Integrated with a SQL database for real-time tracking.",
    tech: ["Python", "OpenCV", "Deep Learning", "SQL"],
    github: "https://github.com/Sahil758-cell/Face-and-Iris-Based-Attendance-System-Using-Python-and-Sql",
    live: "#"
  },
  {
    id: 3,
    title: "Financial Document Analyzer",
    description: "FastAPI tool that extracts text from PDF/TXT documents to perform rule-based financial analysis and extraction of key metrics.",
    tech: ["Python", "FastAPI", "PyPDF2", "SQLite"],
    github: "https://github.com/Sahil758-cell/financial-document-analyzer-fixed",
    live: "#"
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    company: "Upskill Tech Solutions (Skills Connect)",
    role: "AI/ML Engineer",
    period: "Sep 2025 – Present",
    description: "Developing and maintaining AI/ML solutions for real-world applications. Solving complex problems using analytical and machine learning techniques. Gained exposure to DevOps and Linux server deployment."
  },
  {
    id: 2,
    company: "Upskill Tech Solutions (Skills Connect)",
    role: "AI/ML Intern",
    period: "Jun 2025 – Aug 2025",
    description: "Gained hands-on experience in machine learning model development and data handling. Collaborated on real-world system implementations."
  },
  {
    id: 3,
    company: "Dezignolics Web & Software Company",
    role: "Data Scientist Intern",
    period: "July 2025 – August 2025",
    description: "Conducted data collection and preprocessing. Performed EDA using Python libraries. Developed predictive models and created visualizations for stakeholders."
  }
];

export const CERTIFICATIONS = [
  {
    name: "Core Java",
    issuer: "Internshala",
    date: "Jun 2020",
    link: "https://www.papermark.com/view/cm8l69vld0003js03uud5d8zd" // Found hidden Papermark link
  },
  {
    name: "Basic to Advance Python",
    issuer: "Udemy",
    date: "2023",
    link: "https://www.papermark.com/view/cm8l774ll0001l103qaulrr8k" // Generic link from PDF
  },
  {
    name: "Data Visualization-1",
    issuer: "Anudip",
    date: "2024",
    link: "https://www.papermark.com/view/cmb80o32o0003l104nshbd6t2" // Generic link from PDF
  },
  {
    name: "Python and Data Science Technology",
    issuer: "Dcodetech",
    date: "May 2022",
    link: "https://www.papermark.com/view/cmk12blfd0001lh04j655snaa"
  }
];
