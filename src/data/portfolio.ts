export type Metric = {
  value: string
  label: string
  context: string
}

export type Project = {
  title: string
  type: string
  period: string
  summary: string
  outcomes: string[]
  stack: string[]
  href?: string
}

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  description: string
  stack: string[]
}

export const metrics: Metric[] = [
  { value: '100+', label: 'projects delivered', context: 'AI, web, and hardware-integrated work' },
  { value: '1M+', label: 'generated outputs', context: 'produced in campaign environments' },
  { value: '40%', label: 'lower latency', context: 'after backend and workflow refinements' },
  { value: '6', label: 'engineers led', context: 'through high-pressure delivery cycles' },
]

export const projects: Project[] = [
  {
    title: 'Production AI media platform',
    type: 'Platform engineering',
    period: '2023–2025',
    summary:
      'Backend services and generation workflows for high-volume voice, video, and image campaigns at Tagglabs Experiential.',
    outcomes: [
      'Supported more than one million generated media outputs in live campaign environments.',
      'Reduced system latency by 40% through service and workflow refinements.',
      'Scaled delivery across a team of six engineers and more than 100 projects.',
    ],
    stack: ['Python', 'FastAPI', 'Docker', 'AWS', 'Redis', 'MongoDB'],
  },
  {
    title: 'Genyx fitness AI trainer',
    type: 'Open source',
    period: '2025',
    summary:
      'A containerized computer-vision system that recognizes exercises, counts repetitions, and compares form against reference motion.',
    outcomes: [
      'Combined pose estimation and an LSTM classifier with phase-aware biomechanical analysis.',
      'Exposed video and frame analysis through documented FastAPI endpoints.',
      'Added reference normalization and severity-ranked feedback for four core exercises.',
    ],
    stack: ['Python', 'FastAPI', 'TensorFlow', 'MediaPipe', 'Docker', 'uv'],
    href: 'https://github.com/0Aditya-Singhal0/AI_trainer',
  },
  {
    title: 'Autonomous PRT software',
    type: 'Systems engineering',
    period: '2025–present',
    summary:
      'Planning and architecture work for a Personal Rapid Transit system at IIT Madras Research Park.',
    outcomes: [
      'Designed trajectory-planning and routing workflows around real engineering constraints.',
      'Used simulation-backed validation to connect software decisions with vehicle behavior.',
      'Led architecture discussions across software, mechanical, civil, and electrical teams.',
    ],
    stack: ['Python', 'SUMO', 'CARLA', 'MongoDB', 'System architecture'],
  },
]

export const experience: Experience[] = [
  {
    company: 'ITEL Foundation · IIT Madras Research Park',
    role: 'Project Associate',
    period: 'May 2025–present',
    location: 'Chennai, India',
    description:
      'Designing autonomous-transit software, simulation workflows, and SaaS retrieval systems while guiding engineers and translating multidisciplinary constraints into implementable architecture.',
    stack: ['Autonomous systems', 'RAG', 'Backend architecture', 'Simulation'],
  },
  {
    company: 'Tagglabs Experiential',
    role: 'AI Solutions Engineer',
    period: 'Jun 2023–Feb 2025',
    location: 'Gurugram, India',
    description:
      'Built production AI and backend systems, led six engineers, and delivered more than 100 projects. Also created a hiring workflow that processed 750+ applications and cut turnaround time by 85%.',
    stack: ['FastAPI', 'Docker', 'AWS', 'Redis', 'MongoDB', 'n8n'],
  },
  {
    company: 'Centre for Artificial Intelligence & Robotics · DRDO',
    role: 'Project Intern',
    period: 'Feb–Apr 2023',
    location: 'Bengaluru, India',
    description:
      'Worked in an applied AI and robotics research setting on perception and intelligent-system experimentation.',
    stack: ['Computer vision', 'Robotics', 'Applied research'],
  },
  {
    company: 'e-Yantra · IIT Bombay',
    role: 'eYSIP Intern',
    period: 'Jun–Jul 2022',
    location: 'Mumbai, India',
    description:
      'Implemented reinforcement-learning workflows for obstacle avoidance and swarm control using LiDAR-backed simulation.',
    stack: ['ROS', 'Gazebo', 'Reinforcement learning', 'LiDAR'],
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    lead: 'The core tools I reach for.',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java'],
  },
  {
    title: 'Backend & systems',
    lead: 'Services designed for production.',
    items: ['FastAPI', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ'],
  },
  {
    title: 'AI & data',
    lead: 'Models connected to useful products.',
    items: ['PyTorch', 'TensorFlow', 'Transformers', 'RAG', 'Computer vision', 'Pandas'],
  },
  {
    title: 'Infrastructure',
    lead: 'The layer that keeps it running.',
    items: ['Docker', 'AWS', 'Linux', 'Celery', 'Microservices', 'CI/CD'],
  },
] as const
