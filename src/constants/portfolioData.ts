
// Project data
export const projects = [
  {
    id: 1,
    title: '🌟 Solana Explorer: Blockchain Data Explorer',
    description: 'Solana Explorer is a vital tool for anyone interacting with the Solana blockchain. It allows users to track real-time transactions, accounts, and blocks, as well as explore the performance of validators. I contributed as a Frontend and Blockchain Developer to this highly trafficked and essential web application.',
    image: '/png/solana_explorer.png',
    url: 'https://laikachain.dog/',
    technologies: ['React', 'Next.js', 'Node.js', '@solana/web3.js', 'WebSockets', 'Solana JSON RPC', 'SSE'],
    features: [
      'Integrated Solana’s RPC API and web3.js for querying and interacting with the blockchain to display live data on the frontend.',
      'Developed functionality to reflect live updates on transaction confirmations and new block additions via WebSockets.',
      'Optimized the user interface for both desktop and mobile users, ensuring smooth, responsive behavior across all devices.',
      'Worked on data-fetching logic to handle large amounts of blockchain data without compromising performance, ensuring that pages load quickly even with millions of transactions.'
    ],
    role: 'Full-Stack | Blockchain | Cross-Chain, Ethereum, Solana, Node.js, Mongodb, OpenAI API, React, Chart',
    company: 'Solana Labs',
    period: '2023-2025'
  },
  {
    id: 2,
    title: '🌟 LibreHealth.io: Open-Source Health IT Platform',
    description: 'Scalable healthcare solution for an online health retailer serving customers across Europe with improved performance and personalized recommendations.',
    image: '/png/LibreHealth.png',
    url: 'https://librehealth.io/',
    technologies: [ 'React.js', 'Next.js', 'PHP', 'MySQL', 'Integration with HL7', 'OAuth', 'JWT', 'and HIPAA compliance'],
    features: [
      'Developed and tested initial blockchain features for secure health data exchange, ensuring privacy and decentralization for sensitive medical information.',
      'Built and optimized UI components for the patient management system, ensuring that healthcare professionals would have an intuitive interface to interact with health records and schedules.',
      'Worked on integrating FHIR and HL7 data standards to allow the platform to communicate seamlessly with other healthcare systems.',
    ],
    role: 'Frontend Architecture, Blockchain Integration, Data Interoperability',
    company: 'LibreHealth',
    period: '2023-2024'
  },
  {
    id: 3,
    title: 'Moralis Streams API - EVM',
    description: 'A real-time blockchain event streaming service that allows developers to listen to on-chain activities such as wallet transactions, smart contract events, and NFT transfers.',
    image: '/png/moralis.png',
    url: 'https://docs.moralis.com/streams-api/evm',
    technologies: ['JavaScript', 'TypeScript', 'Python', 'Ethereum', 'Polygon', 'BNB Chain', 'Avalanche', 'EVM-compatible chains'],
    features: [
      'Integrated Moralis Streams API to monitor real-time on-chain events across EVM-compatible networks like Ethereum and Polygon.',
      'Configured webhooks to capture wallet transactions, smart contract events, and NFT transfers, enabling responsive user interfaces and data dashboards.',
      'Implemented custom event filters to track specific contract interactions and reduce unnecessary backend load.',
      'Developed backend services using Node.js and Express to process incoming stream data and store it in MongoDB for analytics.'
    ],
    role: 'Blockchain developer',
    company: 'Moralis',
    period: '2021-2023'
  },
  {
    id: 4,
    title: 'Heroku – Cloud Application Platform',
    description: 'Heroku offers a managed container system with integrated data services, allowing developers to deploy and manage modern applications without the complexity of infrastructure management. It supports multiple programming languages, including Ruby, Java, Node.js, Python, PHP, Go, Scala, and Clojure, making it a versatile platform for various development needs .',
    image: '/png/heroku.png',
    url: 'https://www.heroku.com/',
    technologies: ['Ruby', 'Java', 'Node.js', 'Python', 'PHP', 'Go', 'Scala', 'Clojure'],
    features: [
      'Developed and deployed scalable web applications using Heroku`s PaaS environment.',
      'Integrated Heroku Postgres and Redis for efficient data management.',
      'Utilized Heroku`s Git-based deployment for continuous integration and delivery.',
      'Managed application scaling and performance optimization within Heroku`s infrastructure.'
    ],
    role: 'Full-Stack Developer',
    company: 'Heroku, Inc.',
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
    title: "Senior Full-Stack & Blockchain Developer",
    company: "Cymax Group Technologies",
    period: "2020 - present",
    location: "Burnaby, British Columbia",
    descriptions: [
      "Built and maintained cloud-based solutions using React, Node.js, NestJS, and AWS.",
      "Integrated Solana blockchain features for NFT-backed product ownership and digital asset tracking.",
      "Developed REST APIs and microservices to support high-traffic customer and vendor operations.",
      "Improved front-end performance and UI responsiveness for adminand customer dashboards.",
      "Automated internal processes using Python scripts, reducing repetitive tasks and saving dev time."
    ]
  },
  {
    title: "Full Stack Web Developer",
    company: "Yardstick Software Inc.",
    period: "2018 - 2020",
    location: "Edmonton, Alberta",
    descriptions: [
      "Designed and implemented interactive UI components using Angularand TypeScript.",
      "Developed backend logic and user workflows with Django, handling real-time exam scoring and reporting.",
      "Migrated legacy features to modern stacks, improving performance and maintainability.",
      "Collaborated with product teams to release new LMS modules on schedule."
    ]
  },
  {
    title: "Junior Web Developer",
    company: "Vog App Developers",
    period: "2015 - 2018",
    location: "Calgary, Alberta",
    descriptions: [
      "Built user interfaces with JavaScript, HTML/CSS, and contributed to mobile apps using React Native.",
      "Participated in client meetings to refine feature requirements and deliver working prototypes.",
      "Helped test, debug, and ship apps across various platforms and screen sizes.",
      "Learned industry best practices in source control, agile development, and UI implementation."
    ]
  }
];

// Contact section data
export const contactInfo = [
  {
    icon: "Phone",
    title: "Phone",
    value: "+1467953754592"
  },
  {
    icon: "Mail",
    title: "Email",
    value: "sunderberg786@gmail.com"
  },
  {
    icon: "MapPin",
    title: "Location",
    value: "Burnaby, British Columbia"
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
    url: "https://github.com/KnoxRyder999"
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
