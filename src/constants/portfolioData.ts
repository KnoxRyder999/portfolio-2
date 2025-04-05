
// Project data
export const projects = [
  {
    id: 1,
    title: 'Next Ventures',
    description: 'A online space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design.',
    image: '/lovable-uploads/c8b97f60-f85b-43f8-9b08-1f53f29e7206.png',
    url: 'https://example.com/nextventures',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Auth.js', 'Sanity.cms', 'GROQ', 'Sentry', 'markdown'],
    features: [
      'Leveraged Partial Prerendering and After for faster loading.',
      'Simplified idea submission with a clean, intuitive design.',
      'Enhanced browsing with seamless performance optimization.'
    ]
  },
  {
    id: 2,
    title: 'Fitness Tracker',
    description: 'A comprehensive fitness tracking application with personalized workout plans and progress visualization.',
    image: 'https://picsum.photos/id/26/800/600',
    url: 'https://example.com/fitnesstracker',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    features: [
      'Real-time workout tracking and analytics',
      'Personalized fitness recommendations',
      'Social sharing and community features'
    ]
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with advanced product filtering and secure checkout process.',
    image: 'https://picsum.photos/id/96/800/600',
    url: 'https://example.com/ecommerce',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
    features: [
      'Secure payment processing with Stripe integration',
      'Advanced product filtering and search capabilities',
      'Responsive design for all devices'
    ]
  }
];

// Skills data
export const skillCategories = [
  {
    name: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Vue', icon: '🖖' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Angular', icon: '🅰️' },
      { name: 'TailwindCSS', icon: '🌊' },
      { name: 'TypeScript', icon: '📝' },
    ]
  },
  {
    name: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'NestJS', icon: '🐈' },
      { name: 'Django', icon: '🐍' },
      { name: 'PHP', icon: '🐘' },
      { name: 'Laravel', icon: '🔺' },
      { name: 'ASP.NET', icon: '🌐' },
    ]
  },
  {
    name: 'Blockchain',
    icon: 'Coins',
    skills: [
      { name: 'Ethereum', icon: '⟠' },
      { name: 'Solana', icon: '☀️' },
      { name: 'TON', icon: '💎' },
      { name: 'Tron', icon: '♦️' },
      { name: 'Smart Contract', icon: '📜' },
      { name: 'Web3.js', icon: '🔌' },
      { name: 'Ethers.js', icon: '🔄' },
    ]
  },
  {
    name: 'Database',
    icon: 'Database',
    skills: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'Firebase', icon: '🔥' },
    ]
  },
  {
    name: 'DevOps & Tools',
    icon: 'Settings',
    skills: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'Kafka', icon: '📊' },
      { name: 'CI/CD', icon: '🔄' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Google Cloud', icon: '☁️' },
      { name: 'Redis', icon: '🔻' },
      { name: 'Linux', icon: '🐧' },
    ]
  },
];

// Experience data
export const experienceData = [
  {
    title: "Senior Full-Stack Developer",
    company: "SoftServe",
    period: "2023 - 2025",
    location: "Kyiv, Ukraine",
    descriptions: [
      "Began offering custom web development and blockchain solutions for European clients in e-commerce, fintech, and blockchain.",
      "Successfully collaborated with company and developing scalable, high-performance web applications using React, Next.js, Node.js.",
      "Optimized website performance, reducing load times by 30% and improving API response speeds.",
      "Developed secure blockchain applications, including smart contracts on the Ethereum and Solana networks."
    ]
  },
  {
    title: "Backend Developer",
    company: "HTEC",
    period: "2022 - 2023",
    location: "Germany",
    descriptions: [
      "Improved the website's backend performance by optimizing server responses, resulting in 40% faster load times.",
      "Built and integrated real-time product recommendation engines, enhancing user engagement and increasing conversion rates.",
      "Worked closely with the frontend team using Django and MongoDB."
    ]
  },
  {
    title: "Full-Stack Developer",
    company: "Monzo",
    period: "2020 - 2021",
    location: "UK",
    descriptions: [
      "Built and optimized backend services for a mobile banking app serving over 5 million users in the UK and Europe.",
      "Focused on developing secure, high-performance APIs for payments and financial transactions.",
      "Reduced data processing time by 30%, improving efficiency of banking services."
    ]
  },
  {
    title: "Software Engineer",
    company: "Balt",
    period: "2019 - 2020",
    location: "Lithuania",
    descriptions: [
      "Built and maintained microservices for a major European marketplace.",
      "Enhanced the platform's search functionality and user recommendation system using Node.js and React.",
      "Reduced platform load times by 25%, improving performance on both mobile and desktop versions.",
      "Integrated payment platforms like PayPal and Stripe, and implemented cloud hosting solutions."
    ]
  }
];

// Contact section data
export const contactInfo = [
  {
    icon: "Phone",
    title: "Phone",
    value: "+380963598237"
  },
  {
    icon: "Mail",
    title: "Email",
    value: "suroviahinartem@gmail.com"
  },
  {
    icon: "MapPin",
    title: "Location",
    value: "Kyiv City, Ukraine"
  },
  {
    icon: "Calendar",
    title: "Availability",
    value: "Ready for new projects"
  }
];

// Social links
export const socialLinks = [
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: "https://linkedin.com/in/artem-suroviahin-b857a4357"
  },
  {
    name: "GitHub",
    icon: "Github",
    url: "#"
  },
  {
    name: "Twitter",
    icon: "Twitter",
    url: "#"
  },
  {
    name: "Blog",
    icon: "BookOpen",
    url: "#"
  }
];
