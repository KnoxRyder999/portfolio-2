
// Project data
export const projects = [
  {
    id: 1,
    title: 'Laika Chain - Blockchain Platform',
    description: 'A high-performance blockchain platform facilitating secure transactions, token staking, cross-chain transfers, and automated airdrops with intuitive UI/UX design.',
    image: '/png/laika1.png',
    url: 'https://laikachain.dog/',
    technologies: ['React', 'Next.js', 'Node.js', 'Ethereum', 'Solana', 'Express', 'MongoDB', 'Smart Contracts', 'Web3.js'],
    features: [
      'Developed secure staking system with real-time reward calculations, providing full transparency on earnings',
      'Built cross-chain bridge enabling seamless asset transfers between blockchain networks with minimal fees',
      'Implemented automated airdrop system with eligibility verification and claim tracking for promotional events',
      'Optimized platform performance, reducing load times by 30% through advanced front-end techniques'
    ],
    role: 'Full-Stack | Blockchain | Cross-Chain, Ethereum, Solana, Node.js, Mongodb, OpenAI API, React, Chart',
    company: 'SoftServe',
    period: '2023-2025'
  },
  {
    id: 2,
    title: 'Ceras Health - Healthcare Platform',
    description: 'Scalable healthcare solution for an online health retailer serving customers across Europe with improved performance and personalized recommendations.',
    image: '/png/ceras.png',
    url: 'https://cerashealth.com/',
    technologies: ['Next.js', 'Node.js', 'Django', 'MongoDB', 'AWS', 'RESTful APIs'],
    features: [
      'Engineered scalable API systems improving backend performance with 40% faster load times',
      'Integrated real-time product recommendation engines increasing customer conversion rates',
      'Implemented seamless integration between frontend and backend systems for reliable e-commerce features',
      'Optimized server responses to handle peak traffic periods with enhanced reliability'
    ],
    role: 'Full-Stack Developer',
    company: 'HTEC',
    period: '2022-2023'
  },
  {
    id: 3,
    title: 'Monzo - Banking System',
    description: 'High-performance banking application serving over 5 million users with secure financial transaction processing and optimized data handling.',
    image: '/png/monzo1.png',
    url: 'https://monzo.com/',
    technologies: ['React', 'Node.js', 'Express', 'Stripe', 'PayPal', 'Shopify', 'MongoDB', 'RESTful APIs'],
    features: [
      'Built secure, high-performance APIs for payments and financial transactions serving 5+ million users',
      'Reduced data processing time by 30%, enhancing banking efficiency and user satisfaction',
      'Integrated multiple payment solutions including Stripe, PayPal, and Shopify for seamless transaction processing',
      'Developed robust backend services optimized for handling sensitive financial data at scale'
    ],
    role: 'Software Engineer',
    company: 'Monzo',
    period: '2020-2021'
  },
  {
    id: 4,
    title: 'Vinted - European Marketplace',
    description: 'Scalable microservices architecture for a major European marketplace with enhanced search functionality and recommendation systems.',
    image: '/png/vinted.png',
    url: 'https://www.vinted.com/',
    technologies: ['Node.js', 'React', 'Microservices', 'Stripe', 'PayPal', 'Google Cloud', 'RESTful APIs'],
    features: [
      'Developed and maintained microservices architecture improving transaction speed and system scalability',
      'Enhanced platform search functionality and user recommendation systems using Node.js and React',
      'Reduced platform load times by 25% for both mobile and desktop versions, improving user experience',
      'Implemented payment processing with PayPal and Stripe and cloud hosting via Google Cloud'
    ],
    role: 'Full-Stack Developer',
    company: 'Balt',
    period: '2019-2020'
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
    value: "+3800953754592"
  },
  {
    icon: "Mail",
    title: "Email",
    value: "vdmitrenko717@gmail.com"
  },
  {
    icon: "MapPin",
    title: "Location",
    value: "Chernihivska 610 Shostka , Sumy 41108 Ukraine"
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
    url: "https://www.linkedin.com/in/vitalii-dmytrenko-90a210361"
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
