/**
 * Central portfolio data — Rabindra Kumar (AI/ML Engineer).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Rabindra Kumar',
  displayName: 'Rabindra Kumar',
  firstName: 'RABINDRA',
  seriesTag: 'THE AI ENGINEER',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'R SERIES',
  role: 'AI/ML Engineer',
  tagline: ['AI/ML Engineer', 'Generative AI', 'LLMs & RAG'],
  intro:
    'I am an AI/ML Engineer focused on building practical machine learning systems, Generative AI applications, LLM-powered solutions, and intelligent automation. I work across model development, retrieval-augmented generation, backend APIs, and deployment to turn complex technical ideas into useful applications.',
  location: 'Noida, India',
  email: 'rabindrakumar80834@gmail.com',
  phone: '+91-8083984097',
  links: {
    linkedin: 'https://linkedin.com/in/rabindra-kumar-0b7231318',
    github: 'https://github.com/rabindra1x',
  },
  resumePdf: '/assets/Rabindra_Kumar_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Rabindra Kumar',
  },
  interests: ['Machine Learning', 'Generative AI', 'LLMs & RAG', 'Autonomous AI Agents', 'Backend APIs'],
};

export const education = [
  {
    school: 'Indian Institute of Technology Patna',
    place: 'IIT Patna',
    degree: 'B.Sc. in Computer Science and Engineering',
    period: '2023 – 2026',
    score: 'CGPA 8.3/10',
  },
];

export const experience = [
  {
    company: 'WebMobril Technologies',
    role: 'AI/ML Engineer Intern',
    place: 'Noida, India',
    period: 'March 2026 – September 2026',
    points: [
      'Designed, developed, and optimized Machine Learning and Deep Learning models in Python for AI-driven applications.',
      'Built end-to-end ML pipelines covering data preprocessing, feature engineering, model training, hyperparameter tuning, and performance evaluation.',
      'Developed AI solutions using TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, and SQL.',
      'Collaborated with development teams to integrate, test, and deploy ML models following software engineering best practices.',
    ],
  },
  {
    company: 'NASSCOM – BSDM AI RTD 2025 · Orbique Technologies',
    role: 'AI DevOps Engineer Training',
    place: 'Noida, India',
    period: 'September 2025 – January 2026',
    points: [
      'Completed training focused on AI-driven DevOps automation and cloud deployment.',
      'Gained practical exposure to configuration management, automated testing, version control, and CI/CD pipelines.',
      'Worked with Jenkins, Ansible, AWS, Linux, Git/GitHub, Docker, Nginx, Terraform, and Kubernetes.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'cyber-threat-analysis',
    title: 'AI Cyber Threat Analysis',
    year: '2026',
    genre: 'GENERATIVE AI · CYBERSECURITY · MACHINE LEARNING',
    logline:
      'A security-focused AI platform that classifies URLs, images, SMS messages, and emails into safe, suspicious, or dangerous threat levels using machine learning and LLM-powered analysis.',
    stack: ['Python', 'FastAPI', 'Bi-LSTM', 'Random Forest', 'PaddleOCR-VL', 'RAG', 'OpenAI GPT-4o', 'FAISS', 'PostgreSQL'],
    build: [
      'Developed ML and LLM pipelines for threat classification across URLs, images, SMS messages, and emails.',
      'Implemented phishing, smishing, visual threat detection, and QR-code analysis with confidence scores and threat indicators.',
      'Built a RAG pipeline using OpenAI GPT-4o, FAISS, and PostgreSQL for contextual analysis and security recommendations.',
    ],
    features: [
      'Multi-modal threat classification (URL, image, SMS, email)',
      'Phishing and smishing detection',
      'Visual threat detection and QR-code analysis',
      'Confidence scores and threat indicators',
      'RAG pipeline with OpenAI GPT-4o and FAISS',
    ],
    metrics: [
      { value: 'ML+LLM', label: 'hybrid pipeline' },
      { value: 'GPT-4o', label: 'powered RAG' },
      { value: 'FAISS', label: 'vector retrieval' },
      { value: '4 modalities', label: 'URL, image, SMS, email' },
    ],
    github: 'https://github.com/rabindra1x/AI-Powered-Cyber-security-analysis',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'autonomous-ai-agent',
    title: 'Autonomous AI Engineer Agent',
    year: '2026',
    genre: 'AI AGENTS · LANGGRAPH · RAG · DEVELOPER AUTOMATION',
    logline:
      'An autonomous AI software engineering agent that transforms natural-language requirements and documentation into implementation plans, repository-aware code changes, testing, debugging, and code-review workflows.',
    stack: ['Python', 'LangGraph', 'LLMs', 'RAG', 'Git', 'Docker'],
    build: [
      'Converts natural-language requirements and documentation into implementation plans using repository- and Wiki-aware RAG.',
      'Supports automated testing, failure analysis, and iterative self-debugging with bounded retries and human approval gates.',
      'Uses Git worktree isolation, command and path validation, security scanning, audit logging, checkpoint/resume, and Docker sandboxing.',
    ],
    features: [
      'Natural-language to implementation plan conversion',
      'Repository- and Wiki-aware RAG for document understanding',
      'Automated testing, failure analysis, and iterative self-debugging',
      'Git worktree isolation and Docker sandboxing',
      'Human approval gates and security scanning',
    ],
    metrics: [
      { value: 'LangGraph', label: 'agentic workflow' },
      { value: 'RAG', label: 'repo-aware context' },
      { value: 'Docker', label: 'sandboxed execution' },
      { value: 'End-to-end', label: 'code gen & review' },
    ],
    github: 'https://github.com/rabindra1x/Autonomous-software-engineering-agent',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
];

export type AchievementCategory = 'CERTIFICATION' | 'PROFESSIONAL EXPERIENCE' | 'PROFESSIONAL TRAINING';

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  category: AchievementCategory;
  location?: string;
  stack?: string[];
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'ml-course',
    title: 'Complete Machine Learning Course',
    org: 'Simplilearn',
    detail: 'Completed the comprehensive Machine Learning course covering supervised, unsupervised, and reinforcement learning.',
    laurel: 'Certification · 2025',
    category: 'CERTIFICATION',
  },
  {
    id: 'deloitte-forage',
    title: 'Deloitte Australia Data Analytics Job Simulation',
    org: 'Deloitte Australia · Forage',
    detail: 'Deloitte Australia Data Analytics Job Simulation — covering data analysis and forensic technology.',
    laurel: 'June 2025',
    category: 'CERTIFICATION',
  },
  {
    id: 'infosys-ai',
    title: 'Artificial Intelligence Certification',
    org: 'Infosys Springboard',
    detail: 'Artificial Intelligence Certification covering ML, DL, NLP, Computer Vision, and AI Ethics.',
    laurel: 'Certification · 2025',
    category: 'CERTIFICATION',
  },
  {
    id: 'webmobril-internship',
    title: 'AI/ML Engineer Internship',
    org: 'WebMobril Technologies',
    detail:
      'Designed and developed Machine Learning and Deep Learning models in Python for AI-driven applications. Built end-to-end ML pipelines covering data preprocessing, feature engineering, model training, hyperparameter tuning, and evaluation. Collaborated with development teams to integrate, test, and deploy ML models using software engineering best practices.',
    laurel: 'March 2026 – September 2026',
    category: 'PROFESSIONAL EXPERIENCE',
    location: 'Noida, India',
    stack: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'SQL'],
  },
  {
    id: 'ai-devops-training',
    title: 'AI DevOps Engineer Training',
    org: 'NASSCOM – BSDM AI RTD 2025 · Orbique Technologies',
    detail:
      'Completed training focused on AI-driven DevOps automation and cloud deployment, gaining practical exposure to configuration management, automated testing, version control, and CI/CD pipelines through team-based AI–DevOps projects.',
    laurel: 'September 2025 – January 2026',
    category: 'PROFESSIONAL TRAINING',
    location: 'Noida, India',
    stack: ['Jenkins', 'Ansible', 'AWS', 'Linux', 'Git/GitHub', 'Docker', 'Nginx', 'Terraform', 'Kubernetes'],
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Simplilearn', name: 'Complete Machine Learning Course', link: '#' },
  { issuer: 'Deloitte · Forage', name: 'Deloitte Australia Data Analytics Job Simulation', link: '#' },
  { issuer: 'Infosys Springboard', name: 'Artificial Intelligence Certification', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Python-first engineering',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    subtitle: 'Classical ML & data science',
    skills: [
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'Matplotlib', mono: 'Mt' },
    ],
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    subtitle: 'Neural network frameworks',
    skills: [
      { name: 'PyTorch', mono: 'Pt' },
      { name: 'TensorFlow', mono: 'Tf' },
    ],
  },
  {
    id: 'genai',
    title: 'Generative AI',
    subtitle: 'LLMs, RAG & agents',
    skills: [
      { name: 'LLMs', mono: 'Lm', note: 'Core' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'LangGraph', mono: 'Lg' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'Embeddings', mono: 'Em' },
      { name: 'Vector Databases', mono: 'Vd' },
      { name: 'Fine-tuning', mono: 'Ft' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Production-grade APIs',
    skills: [
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'SQLAlchemy', mono: 'Sa' },
      { name: 'Async Programming', mono: 'As' },
      { name: 'Webhooks', mono: 'Wh' },
      { name: 'API Authentication', mono: 'Au' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'SQL & NoSQL',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MySQL', mono: 'My' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    subtitle: 'Deployment & infrastructure',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'AWS', mono: 'Aw' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'CI/CD', mono: 'Ci' },
      { name: 'Kubernetes', mono: 'K8' },
      { name: 'Terraform', mono: 'Tf' },
      { name: 'Jenkins', mono: 'Jk' },
      { name: 'Ansible', mono: 'An' },
      { name: 'Nginx', mono: 'Nx' },
      { name: 'Linux', mono: 'Lx' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['AI Cyber Threat Analysis', 'Autonomous AI Engineer Agent', 'WebMobril Internship'],
  SQL: ['AI Cyber Threat Analysis (PostgreSQL)', 'WebMobril Internship'],
  'Scikit-learn': ['WebMobril ML Pipelines'],
  NumPy: ['WebMobril ML Pipelines'],
  Pandas: ['WebMobril ML Pipelines'],
  PyTorch: ['WebMobril Deep Learning'],
  TensorFlow: ['WebMobril Deep Learning'],
  LLMs: ['Autonomous AI Engineer Agent', 'AI Cyber Threat Analysis'],
  RAG: ['Autonomous AI Engineer Agent', 'AI Cyber Threat Analysis'],
  LangChain: ['Autonomous AI Engineer Agent'],
  LangGraph: ['Autonomous AI Engineer Agent'],
  FastAPI: ['AI Cyber Threat Analysis'],
  'REST APIs': ['AI Cyber Threat Analysis', 'WebMobril Internship'],
  PostgreSQL: ['AI Cyber Threat Analysis'],
  Docker: ['Autonomous AI Engineer Agent', 'AI DevOps Training'],
  AWS: ['AI DevOps Training'],
  Kubernetes: ['AI DevOps Training'],
  Terraform: ['AI DevOps Training'],
  Jenkins: ['AI DevOps Training'],
  Ansible: ['AI DevOps Training'],
  'Git / GitHub': ['Autonomous AI Engineer Agent'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2023 – 2026',
    synopsis: 'B.Sc. in Computer Science and Engineering at Indian Institute of Technology Patna (IIT Patna) — building the academic foundation for AI/ML.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'IIT Patna',
        description: 'B.Sc. in Computer Science and Engineering at IIT Patna — CGPA 8.3/10.',
        tags: ['B.Sc. CSE', 'IIT Patna', 'CGPA 8.3'],
        runtime: '2023 – 2026',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'AI DevOps Training',
    period: 'Sep 2025 – Jan 2026',
    synopsis: 'AI DevOps Engineer Training at NASSCOM – BSDM AI RTD 2025 and Orbique Technologies, Noida.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The DevOps Arc',
        description: 'AI-driven DevOps automation training — CI/CD, configuration management, and cloud deployment.',
        tags: ['Jenkins', 'Ansible', 'AWS', 'Docker'],
        runtime: 'Sep 2025 – Jan 2026',
        palette: amber,
      },
      {
        code: 'S02 E02',
        title: 'Cloud & Infrastructure',
        description: 'Worked with Kubernetes, Terraform, Nginx, Linux, and Git/GitHub for production-grade deployments.',
        tags: ['Kubernetes', 'Terraform', 'Nginx', 'Linux'],
        runtime: 'NASSCOM · Orbique',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'AI/ML Engineer Internship',
    period: 'Mar 2026 – Sep 2026',
    synopsis: 'WebMobril Technologies · Noida, India — AI/ML Engineer Intern (March 2026 – September 2026). Designing, developing, and optimizing ML/DL pipelines and deploying AI solutions.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'ML Pipeline Development',
        description: 'Designed, developed, and optimized Machine Learning and Deep Learning models in Python for AI-driven applications. Built end-to-end ML pipelines covering data preprocessing, feature engineering, model training, hyperparameter tuning, and performance evaluation.',
        tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'SQL'],
        runtime: 'Mar 2026 – Sep 2026',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'AI Model Integration and Deployment',
        description: 'Developed AI solutions using TensorFlow and PyTorch, and collaborated with development teams to integrate, test, and deploy ML models following software engineering best practices.',
        tags: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'SQL'],
        runtime: 'WebMobril Technologies',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building AI Systems',
    period: '2026',
    synopsis: 'Designing, developing, and optimizing production-grade Machine Learning and deep learning architectures.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The ML Engineer',
        description: 'Designed and optimized ML and deep learning models in Python using TensorFlow, PyTorch, and Scikit-learn.',
        tags: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Pipeline Builder',
        description: 'Built end-to-end ML pipelines — data preprocessing, feature engineering, training, tuning, and evaluation.',
        tags: ['Pandas', 'NumPy', 'SQL', 'Python'],
        runtime: 'End-to-end ML',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'The Deployer',
        description: 'Integrated and deployed ML models following software engineering best practices with team collaboration.',
        tags: ['Model Deployment', 'Integration', 'Testing'],
        runtime: 'Production',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: 'Originals',
    period: '2026',
    synopsis: 'Two flagship AI projects — a cybersecurity threat analysis platform and an autonomous AI software engineering agent.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Threat Analyst',
        description: 'AI-Powered Cyber Threat Analysis Platform — ML + LLM pipelines for URL, image, SMS, and email threat classification.',
        tags: ['FastAPI', 'Bi-LSTM', 'RAG', 'GPT-4o'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S05 E02',
        title: 'The AI Agent',
        description: 'Autonomous AI Software Engineering Agent — LangGraph-powered agentic workflows with repo-aware RAG and Docker sandboxing.',
        tags: ['LangGraph', 'LLMs', 'RAG', 'Docker'],
        runtime: '2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 6,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Continuing to push the frontier of AI/ML engineering — scaling LLM systems, RAG pipelines, and autonomous agents.',
    episodes: [
      {
        code: 'S06 E01',
        title: 'The Next Chapter',
        description: 'Exploring advanced LLM architectures, multi-agent systems, and production MLOps at scale.',
        tags: ['LLMs', 'Multi-Agent', 'MLOps', 'GenAI'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Python', detail: 'AI/ML engineering · LLM development', palette: amber },
  { label: 'The AI Original', title: 'Cyber Threat AI', detail: 'GPT-4o · RAG · Bi-LSTM', palette: crimson },
  { label: 'Agentic AI', title: 'Autonomous Agent', detail: 'LangGraph · RAG · Docker sandbox', palette: ocean },
  { label: 'Generative AI', title: 'LLMs & RAG', detail: 'LangChain · LangGraph · FAISS', palette: violet },
  { label: 'AI Internship', title: 'WebMobril', detail: 'AI/ML Engineer Intern', palette: jade },
  { label: 'DevOps training', title: 'NASSCOM AI', detail: 'Jenkins · Kubernetes · Terraform', palette: amber },
  { label: 'Deep Learning', title: 'PyTorch & TF', detail: 'TensorFlow · PyTorch · Scikit-learn', palette: crimson },
  { label: 'Education', title: 'IIT Patna', detail: 'B.Sc. CSE · CGPA 8.3/10', palette: ocean },
  { label: 'Cloud & DevOps', title: 'AWS & Docker', detail: 'CI/CD · Kubernetes · Terraform', palette: jade },
  { label: 'Current focus', title: 'Generative AI', detail: 'Autonomous agents & LLM systems', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'IIT Patna',
    lines: ['B.Sc. in Computer Science and Engineering', '2023 – 2026'],
    chips: ['CGPA 8.3/10'],
  },
  {
    kicker: 'Skills',
    title: 'AI-first stack.',
    lines: ['Python · PyTorch · TensorFlow · Scikit-learn', 'LangChain · LangGraph · RAG · FastAPI · Docker'],
    chips: ['Python', 'LLMs', 'RAG', 'FastAPI', 'Docker', 'AWS'],
  },
  {
    kicker: 'Experience',
    title: 'The AI Arc',
    lines: ['AI/ML Engineer Intern · WebMobril Technologies · 2026', 'AI DevOps Training · NASSCOM · Orbique · 2025–2026'],
  },
  {
    kicker: 'Projects',
    title: 'Two Originals',
    lines: ['AI Cyber Threat Analysis — GPT-4o · RAG · Bi-LSTM', 'Autonomous AI Agent — LangGraph · RAG · Docker sandbox'],
  },
  {
    kicker: 'Generative AI',
    title: 'LLMs & RAG',
    lines: ['LangChain · LangGraph · Prompt Engineering', 'Embeddings · Vector Databases · Fine-tuning'],
  },
  {
    kicker: 'Certified',
    title: '3 Certifications',
    lines: ['Simplilearn · Machine Learning', 'Deloitte Australia · Data Analytics · Forage', 'Infosys Springboard · AI Certification'],
  },
  {
    kicker: 'Current mission',
    title: 'Now streaming',
    lines: ['Building scalable AI systems · LLM-powered automation', 'Generative AI applications · Autonomous AI agents'],
  },
];

export type ProfileId = 'rabindra' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'rabindra',
    name: 'Rabindra',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Achievements', card: 'Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
