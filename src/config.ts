export const siteConfig = {
  name: "Phill Scargill",
  title: "Control Systems Engineer",
  description: "Portfolio website of Phill Scargill - Control Systems Engineer with expertise in automation, PLC programming, and full-stack development",
  accentColor: "#8b5cf6",
  location: "Austin, TX",
  social: {
    email: "phill.scargill@gmail.com",
    linkedin: "https://www.linkedin.com/in/phillip-scargill-4a709a274/",
    instagram: "@phllop",
    github: "https://github.com/Ph-ill",
  },
  resume: "/Resume.pdf",
  aboutMe:
    "Experienced Control Systems Engineer with over 7 years of hands-on expertise in automation across industrial, manufacturing, and energy sectors. Multidisciplinary background in PLC programming, SCADA/HMI development, full-stack software development, system administration, and eCommerce operations. Relocated to the U.S. with valid work authorization (EAD). Currently exploring new Control Systems Engineering roles while actively developing open-source software.",
  skills: [
    "PLC Programming", 
    "SCADA/HMI", 
    "Python", 
    "JavaScript", 
    "Node.js", 
    "C#", 
    "Docker", 
    "Linux", 
    "Git"
  ],
  projects: [
    {
      name: "Digestarr",
      description:
        "Python tool for generating daily digests from Radarr/Sonarr. Sends messages via Telegram or WhatsApp using ChatMeBot with Flask-based configuration panel. Built for Plex, Jellyfin, or Emby server users.",
      link: "https://github.com/Ph-ill/Digestarr",
      skills: ["Python", "Flask", "Telegram API", "Radarr/Sonarr"],
    },
    {
      name: "Capwise",
      description:
        "A full-stack web app for personalized movie discovery. Swipe through suggestions, build a taste profile, and get intelligent recommendations. Designed for API flexibility, it features interactive swiping, a watchlist, and secure API key management. Built with React, Node.js, Express.js, and NeDB, integrating with the TMDB API.",
      link: "https://github.com/Ph-ill/Capwise",
      skills: ["React", "Node.js", "Express.js", "NeDB", "TMDB API", "Full-Stack"],
    },
    {
      name: "Anon-TV",
      description:
        "Google TV application for seamlessly browsing imageboard content, including webm and images, directly on your TV.",
      link: "https://github.com/Ph-ill/Anon-TV",
      skills: ["Google TV", "Android", "Imageboard API", "Media Streaming"],
    },
    {
      name: "Heat Death",
      description:
        "A game about the death of a world and its inhabitants. A side scrolling exploration and adventure video game created with Aseprite, Wick Editor, GIMP & Audacity.",
      link: "https://github.com/Euphonia-Games/Heat-Death",
      skills: ["Game Development", "Aseprite", "Wick Editor", "GIMP", "Audacity", "Side Scrolling"],
    },
  ],
  experience: [
    {
      company: "Freelance",
      title: "Web Developer & eCommerce Marketer",
      dateRange: "2021 - 2024",
      bullets: [
        "Developed cryptocurrency project websites and built Shopify/Etsy stores",
        "Automated inventory/shipping via scripts and 3PL APIs",
        "Implemented data-driven social media and A/B testing strategies",
      ],
    },
    {
      company: "Hyve Managed Hosting",
      title: "Technical Support Engineer",
      dateRange: "2023",
      bullets: [
        "Maintained Windows/Linux cloud servers and deployed/provisioned VMs",
        "Designed analytics software to monitor server and VM metrics",
        "Provided customer-facing issue resolution and technical support",
      ],
    },
    {
      company: "Néos Superform",
      title: "Control Systems Engineer",
      dateRange: "2016 - 2021",
      bullets: [
        "Designed, programmed, and commissioned PLC-based systems",
        "Upgraded existing safety and automation logic",
        "Collaborated across mechanical and software teams",
        "Provided training and technical documentation",
      ],
    },
    {
      company: "Cepha Controls",
      title: "Control Systems Engineer",
      dateRange: "2012 - 2014",
      bullets: [
        "Delivered end-to-end automation projects globally including UAE",
        "Designed PLC/SCADA/HMI using ladder, structured text, and FBD",
        "Worked across oil & gas, manufacturing, and renewable energy domains",
      ],
    },
  ],
  education: [
    {
      school: "Open University",
      degree: "BSc (Honors) in Computer and IT",
      dateRange: "2017 - Present",
      achievements: [
        "Currently pursuing degree in Computer and IT",
        "Focus on software development and systems engineering",
        "Balancing education with professional experience",
      ],
    },
    {
      school: "CompTIA",
      degree: "IT Fundamentals (ITF+) Certification",
      dateRange: "2025",
      achievements: [
        "Completed IT Fundamentals certification",
        "Demonstrated core IT knowledge and skills",
        "Foundation for advanced IT certifications",
      ],
    },
    {
      school: "MAKE UK",
      degree: "Robotics Course",
      dateRange: "2018",
      achievements: [
        "Completed specialized robotics training program",
        "Enhanced automation and control systems knowledge",
        "Applied robotics principles to industrial automation",
      ],
    },
  ],
};
