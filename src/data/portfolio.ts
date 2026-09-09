export type ProjectVisualKind = 'pipeline' | 'transit' | 'queue' | 'product' | 'fitness' | 'swarm' | 'health'

export type Project = {
  slug: string
  title: string
  eyebrow: string
  period: string
  status: string
  visibility: 'Public' | 'Private' | 'Client-confidential' | 'Portfolio-safe summary'
  role: string
  summary: string
  description: string
  category: 'Systems' | 'AI' | 'Product'
  stack: string[]
  visual: ProjectVisualKind
  accent: string
  metrics: { value: string; label: string }[]
  challenge: string
  approach: string[]
  results: string[]
  repo?: string
}

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  summary: string
  narrative: string
  metrics: { value: string; label: string }[]
  moments: { title: string; body: string }[]
  stack: string[]
}

export const projects: Project[] = [
  {
    slug: 'learning-media-compiler',
    title: 'Document-to-learning-media compiler',
    eyebrow: 'Applied AI · private repository',
    period: '2026',
    status: 'In development',
    visibility: 'Private',
    role: 'Product architect and full-stack engineer',
    summary: 'A deterministic compiler that turns dense source documents into structured lessons, narrated video, slide decks, transcripts, and QA reports.',
    description: 'The system keeps language models inside bounded planning stages while deterministic services handle parsing, state, synchronization, rendering, and validation. Human review gates make the pipeline inspectable instead of magical.',
    category: 'AI',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Remotion', 'Docling', 'uv'],
    visual: 'pipeline',
    accent: '#e7ff70',
    metrics: [
      { value: '11', label: 'pipeline layers' },
      { value: '2', label: 'human review gates' },
      { value: '4', label: 'typed workspaces' },
    ],
    challenge: 'Long academic documents lose structure when they are sent through a single generative prompt. Failures are hard to diagnose, partial work cannot be replayed, and visual outputs drift from the source.',
    approach: [
      'Separated ingestion, hierarchy recovery, pedagogy, media preparation, synthesis, rendering, and QA into replayable stages.',
      'Defined typed contracts and one persisted job state so every handoff is inspectable.',
      'Added review screens for hierarchy, module boundaries, direction, and final outputs.',
    ],
    results: [
      'A working monorepo with a FastAPI service, React review interface, Remotion renderer, and shared generated contracts.',
      'Stage-level retries and human overrides avoid restarting an entire job when one output needs correction.',
      'Private source remains private; the portfolio explains the system without exposing code or credentials.',
    ],
  },
  {
    slug: 'hashtic-autonomous-transit',
    title: 'HASHTIC autonomous transit stack',
    eyebrow: 'Autonomous systems · private and organization repositories',
    period: '2025–present',
    status: 'Research and prototype',
    visibility: 'Private',
    role: 'Software architecture and motion-planning lead',
    summary: 'Software architecture for a Personal Rapid Transit research program, spanning routing, motion planning, scheduling, telemetry, and embedded integration.',
    description: 'The work translates physical constraints and safety requirements into simulation-backed software decisions across a multidisciplinary engineering program.',
    category: 'Systems',
    stack: ['Python', 'FastAPI', 'SUMO', 'CARLA', 'MQTT', 'MongoDB', 'STM32'],
    visual: 'transit',
    accent: '#70e1ff',
    metrics: [
      { value: '5', label: 'system domains connected' },
      { value: '6', label: 'engineers coordinated' },
      { value: 'R&D', label: 'current stage' },
    ],
    challenge: 'Translate a constrained mechanical system into software that can book shared track segments, produce comfortable trajectories, and keep simulation, backend, and embedded teams aligned.',
    approach: [
      'Modelled routes as bookable time-domain segments around stations, merges, turns, and braking zones.',
      'Developed trajectory planning around position, velocity, acceleration, time, and jerk constraints.',
      'Connected scheduling, telemetry, simulation, and pod control through explicit service contracts.',
    ],
    results: [
      'Implemented simulation-backed trajectory and routing experiments across dedicated private repositories.',
      'Defined the end-to-end server architecture and contributed research toward trajectory and scheduling methods.',
      'Created a shared technical language across software, mechanical, civil, and electrical teams.',
    ],
  },
  {
    slug: 'production-ai-media',
    title: 'Production AI media platform',
    eyebrow: 'Platform engineering · selected client work',
    period: '2023–2025',
    status: 'Shipped across live campaigns',
    visibility: 'Portfolio-safe summary',
    role: 'AI solutions engineer and engineering lead',
    summary: 'Reusable AI generation and delivery services for live campaigns, designed to survive unreliable venues, crowd spikes, changing creative requirements, and hard deadlines.',
    description: 'A high-volume customized-media campaign grew into a reusable backend and deployment toolkit. This case study shares only approved, non-client-specific engineering patterns.',
    category: 'Systems',
    stack: ['Python', 'FastAPI', 'RabbitMQ', 'Celery', 'Docker', 'AWS', 'MongoDB'],
    visual: 'queue',
    accent: '#ffb86b',
    metrics: [
      { value: '1M+', label: 'platform outputs supported' },
      { value: '100+', label: 'client projects contributed to' },
      { value: '40%', label: 'latency reduction' },
    ],
    challenge: 'AI demos that work in an office can break at an event with weak internet, limited GPUs, noisy microphones, unfamiliar displays, and a queue of real users.',
    approach: [
      'Standardized FastAPI services and configurable deployment tooling so a campaign backend could be prepared in minutes.',
      'Moved premium workloads toward RabbitMQ and Celery workers for cleaner scaling, retry handling, and service separation.',
      'Containerized offline-capable event deployments and trained ground teams to recover without developer intervention.',
    ],
    results: [
      'Platforms I worked on supported more than one million media outputs across campaign environments.',
      'Reduced latency by 40% and led six engineers through high-pressure delivery cycles.',
      'Automated hiring for 750+ applications and cut the screening-to-offer cycle by 85%.',
    ],
  },
  {
    slug: 'eysip-research-archive',
    title: 'eYSIP robotics research archive',
    eyebrow: 'Robotics research · private repositories',
    period: '2022',
    status: 'Research archive',
    visibility: 'Private',
    role: 'Robotics and simulation engineer',
    summary: 'A candid archive of the e-Yantra Summer Internship work: swarm coordination, ROS and Gazebo worlds, RL experiments, and prototypes that remained incomplete.',
    description: 'The value is the record of engineering judgment: explore ambitious multi-agent learning, preserve what was learned, and deliver a dependable classical demonstration when the research path is not ready.',
    category: 'AI',
    stack: ['Python', 'ROS', 'Gazebo', 'TensorFlow', 'LiDAR', 'Docker'],
    visual: 'swarm',
    accent: '#57d5c0',
    metrics: [
      { value: '2', label: 'robots in hardware demo' },
      { value: '1 week', label: 'ROS ramp-up' },
      { value: 'Open', label: 'unfinished research threads' },
    ],
    challenge: 'Build a reliable multi-robot demonstration while reconciling a short internship timeline with legacy research code and ambitious reinforcement-learning goals.',
    approach: [
      'Built and maintained ROS descriptions, maps, Gazebo worlds, policies, and hardware-facing prediction scripts in one workspace.',
      'Tested classical leader-follower control alongside TD3, PPO, DQN, and custom multi-agent experiment paths.',
      'Kept unfinished experiments visible as research evidence rather than relabeling them as completed products.',
    ],
    results: [
      'A working simulated swarm demonstration for the e-Yantra Summer Internship Program.',
      'A limited two-robot hardware demonstration and a recoverable archive for future revival.',
      'A clear example of choosing a dependable fallback when a research direction misses the delivery window.',
    ],
  },
  {
    slug: 'genyx-fitness-trainer',
    title: 'Genyx fitness AI trainer',
    eyebrow: 'Computer vision · public repository',
    period: '2025',
    status: 'Working prototype',
    visibility: 'Public',
    role: 'ML and backend engineer',
    summary: 'A video-analysis API that recognizes exercises, counts repetitions, and compares form against reference motion.',
    description: 'The system combines pose landmarks, temporal classification, phase-aware rep logic, and reference normalization. It turns raw video into feedback a user can act on.',
    category: 'AI',
    stack: ['Python', 'FastAPI', 'TensorFlow', 'MediaPipe', 'Docker', 'uv'],
    visual: 'fitness',
    accent: '#a98bff',
    metrics: [
      { value: '4', label: 'reference exercises' },
      { value: '33', label: 'pose landmarks' },
      { value: 'API', label: 'frame and video analysis' },
    ],
    challenge: 'A useful trainer must recognize motion over time and explain form errors, not merely classify a single pose.',
    approach: [
      'Combined MediaPipe landmarks with a bidirectional LSTM exercise classifier.',
      'Normalized reference and user motion before phase-level comparison.',
      'Exposed both frame and video analysis through documented FastAPI endpoints.',
    ],
    results: [
      'Counts repetitions and produces severity-ranked form feedback.',
      'Runs as a containerized API with example media and documented response contracts.',
      'Source and setup are available publicly for technical review.',
    ],
    repo: 'https://github.com/0Aditya-Singhal0/AI_trainer',
  },
  {
    slug: 'multi-agent-td3pg',
    title: 'Multi-Agent TD3PG experiments',
    eyebrow: 'Reinforcement learning · private repository',
    period: '2022–2025',
    status: 'Research archive and revival',
    visibility: 'Private',
    role: 'AI and simulation engineer',
    summary: 'A focused experiment track for multi-agent path planning, predator-prey environments, TD3 variants, and swarm-control comparisons.',
    description: 'This is an incomplete research branch, presented honestly. It preserves experiments, environment design, and lessons from trying to move single-agent learning ideas into a multi-agent setting.',
    category: 'AI',
    stack: ['Python', 'TensorFlow', 'ROS Noetic', 'Gazebo', 'LiDAR', 'Docker'],
    visual: 'swarm',
    accent: '#8df0c7',
    metrics: [
      { value: '3+', label: 'agent families explored' },
      { value: 'ROS', label: 'simulation and hardware bridge' },
      { value: '2', label: 'robots in hardware demo' },
    ],
    challenge: 'Modernize and compare multi-agent control approaches in an ecosystem constrained by ROS Noetic, older Python versions, and research code written against incompatible ML stacks.',
    approach: [
      'Built custom simulation environments and tested DQN, PPO, TD3, and classical control paths.',
      'Maintained robot descriptions, maps, Gazebo worlds, policies, and hardware prediction scripts together.',
      'Used a classical multi-robot approach when the target reinforcement-learning implementation could not be completed reliably.',
    ],
    results: [
      'A preserved comparison set across learned and classical control strategies.',
      'Reusable environments and experiment notes for a modern revival of the research track.',
      'A candid record of what remained incomplete and why.',
    ],
  },
  {
    slug: 'moveit-manipulation-studies',
    title: 'MoveIt manipulation studies',
    eyebrow: 'Robotics simulation · research archive',
    period: '2023',
    status: 'Simulation study',
    visibility: 'Private',
    role: 'Robotics simulation engineer',
    summary: 'A simulation-focused study of robotic pick-and-place planning with ROS Noetic and MoveIt.',
    description: 'The work centers on planning a safe, repeatable manipulation sequence in simulation and learning how motion-planning constraints shape the software interface around a robot.',
    category: 'Systems',
    stack: ['ROS Noetic', 'MoveIt', 'Python', 'RViz', 'Robotics simulation'],
    visual: 'product',
    accent: '#f49a48',
    metrics: [
      { value: 'ROS 1', label: 'manipulation environment' },
      { value: 'Pick + place', label: 'simulation task' },
      { value: 'R&D', label: 'study format' },
    ],
    challenge: 'Turn a high-level pick-and-place goal into a sequence that respects motion planning, collision constraints, and the limits of a simulated environment.',
    approach: [
      'Configured a ROS Noetic and MoveIt environment for simulated manipulation experiments.',
      'Worked through planning, pose goals, and pick-and-drop execution rather than presenting simulation as field deployment.',
      'Documented the setup as a learning archive that complements the multi-agent research work.',
    ],
    results: [
      'A reproducible simulated manipulation workflow.',
      'A clearer foundation for reasoning about motion planning and robot software interfaces.',
      'A deliberately scoped research study, not a claim of deployed autonomous manipulation.',
    ],
  },
  {
    slug: 'safe-opd-assistant',
    title: 'Safety-first OPD assistant',
    eyebrow: 'Health AI · private repository',
    period: '2025',
    status: 'Architecture and research plan',
    visibility: 'Private',
    role: 'System and evaluation designer',
    summary: 'A grounded plan for an Indian outpatient assistant with retrieval, deterministic red-flag overrides, multilingual voice access, and clinician review.',
    description: 'This is intentionally presented as a research plan, not a shipped medical product. Its value is the safety architecture, evaluation criteria, and deployment thinking.',
    category: 'AI',
    stack: ['RAG', 'FAISS', 'FastAPI', 'PEFT', 'ASR', 'Clinical evaluation'],
    visual: 'health',
    accent: '#ff8a7a',
    metrics: [
      { value: '0', label: 'autonomous prescribing' },
      { value: '100%', label: 'red-flag test target' },
      { value: '2', label: 'clinician review loops' },
    ],
    challenge: 'A medical assistant can sound confident while being wrong. The architecture must make escalation deterministic and keep every answer tied to approved evidence.',
    approach: [
      'Scoped the MVP to common, non-emergency OPD complaints and defined explicit non-goals.',
      'Designed hybrid retrieval, hard red-flag overrides, source citations, and clinician-facing notes.',
      'Set measurable exit criteria for retrieval recall, unsafe responses, readability, and clinician acceptance.',
    ],
    results: [
      'A phased, safety-first implementation and evaluation plan.',
      'Clear separation between patient communication, clinician notes, and deterministic emergency handling.',
      'A candid concept-stage case study rather than an inflated product claim.',
    ],
  },
]

export const experiences: Experience[] = [
  {
    company: 'ITEL Foundation · IIT Madras Research Park',
    role: 'Project Associate',
    period: 'May 2025–present',
    location: 'Chennai, India',
    summary: 'Owns software architecture across autonomous transit and education-focused AI products.',
    narrative: 'The role sits between research, product, and physical engineering. Aditya translates constraints from Professor Ashok Jhunjhunwala and multidisciplinary teams into software architecture, simulations, control logic, and implementable interfaces.',
    metrics: [
      { value: '6', label: 'engineers across PRT and SaaS' },
      { value: '4', label: 'education AI initiatives supported' },
      { value: '2', label: 'research tracks contributed to' },
    ],
    moments: [
      { title: 'Designed inside physical limits', body: 'Worked with real vehicle, infrastructure, compute, and comfort constraints instead of treating routing as a clean software-only problem.' },
      { title: 'Made the architecture legible', body: 'Defined what runs on pods, what belongs on the server, which data is exchanged, and how simulation validates the decisions.' },
      { title: 'Built beyond the title', body: 'Contributed to trajectory planning, time-slot scheduling, embedded interfaces, routing, SaaS delivery, and team direction under one Project Associate title.' },
    ],
    stack: ['Python', 'FastAPI', 'SUMO', 'CARLA', 'MQTT', 'MongoDB', 'Control theory'],
  },
  {
    company: 'Tagglabs Experiential',
    role: 'AI Solutions Engineer',
    period: 'Jun 2023–Feb 2025',
    location: 'Gurugram, India',
    summary: 'Grew from AI research into backend ownership, infrastructure, client translation, and a six-person engineering lead role.',
    narrative: 'Tagglabs is where fast experiments became production judgment. The work ran in live venues, so success meant handling weak networks, limited hardware, crowd spikes, creative changes, and clients who needed honest technical trade-offs.',
    metrics: [
      { value: '1M+', label: 'platform outputs supported' },
      { value: '100+', label: 'client projects contributed to' },
      { value: '85%', label: 'faster hiring cycle' },
    ],
    moments: [
      { title: 'Earned trust through delivery', body: 'Built a reputation for giving realistic deadlines and shipping before them, which expanded the role from model research into architecture, budgets, hiring, and client-facing decisions.' },
      { title: 'Designed for the venue', body: 'Containerized a retail event deployment to run locally and taught the ground team to recover it without developer intervention.' },
      { title: 'Found the deliverable in the impossible ask', body: 'Helped translate one-week requirements for three automotive brands into shippable media, queue, and reporting workflows.' },
    ],
    stack: ['Python', 'FastAPI', 'Docker', 'AWS', 'RabbitMQ', 'Celery', 'n8n'],
  },
  {
    company: 'Centre for Artificial Intelligence & Robotics · DRDO',
    role: 'Project Intern',
    period: 'Feb–Apr 2023',
    location: 'Bengaluru, India',
    summary: 'Explored robotic manipulation in a strict applied-research environment.',
    narrative: 'Worked with ROS Noetic and MoveIt on pick-and-place manipulation in simulation. The role added a formal research setting to earlier experimentation in drones and swarm robotics.',
    metrics: [{ value: 'ROS 1', label: 'manipulation environment' }],
    moments: [
      { title: 'Manipulation over buzzwords', body: 'Focused on motion planning and a simulated pick-and-drop task rather than overstating the work as a deployed robot.' },
      { title: 'Adapted to a formal environment', body: 'Learned to work inside stricter processes and technical constraints than earlier startup and university teams.' },
    ],
    stack: ['ROS Noetic', 'MoveIt', 'Python', 'Robotics simulation'],
  },
  {
    company: 'e-Yantra · IIT Bombay',
    role: 'eYSIP Intern',
    period: 'Jun–Jul 2022',
    location: 'Mumbai, India',
    summary: 'Worked on swarm control, reinforcement learning, and ROS-based multi-robot simulation.',
    narrative: 'The team explored ambitious multi-agent reinforcement learning, but old research code and framework incompatibilities made the full TD3 direction unreliable. They delivered a classical multi-robot solution and demonstrated two physical robots.',
    metrics: [
      { value: '2', label: 'robots in hardware demo' },
      { value: '1 week', label: 'ROS ramp-up' },
    ],
    moments: [
      { title: 'Learned the stack quickly', body: 'Moved from limited ROS exposure to productive simulation work after an intensive one-week course.' },
      { title: 'Chose delivery over theatre', body: 'Used a classical fallback for the multi-agent demonstration while preserving single-agent reinforcement-learning experiments.' },
    ],
    stack: ['ROS', 'Gazebo', 'TensorFlow', 'Reinforcement learning', 'LiDAR'],
  },
]

export const workingPrinciples = [
  { title: 'Ownership with room to think', body: 'The best work happens when the problem is clear, the conversation is open, and engineers have space to test a better route.' },
  { title: 'Translate before building', body: 'A vague business promise, a mechanical constraint, and an API requirement rarely mean the same thing. Aditya likes being the person who gets them into one shared model.' },
  { title: 'Honest delivery', body: 'Confidence comes from saying what is possible, committing to a date, and showing the result. If a research path misses, use the dependable fallback and explain why.' },
  { title: 'Useful systems over isolated models', body: 'The recurring interest is the layer around AI: queues, APIs, review gates, deployment, monitoring, and the humans who operate it.' },
]

export const skillGroups = [
  { label: 'Primary', items: ['Python', 'TypeScript', 'FastAPI', 'React', 'System architecture'] },
  { label: 'Distributed systems', items: ['RabbitMQ', 'Celery', 'Redis', 'MongoDB', 'PostgreSQL', 'MQTT'] },
  { label: 'Applied AI', items: ['RAG', 'Computer vision', 'TensorFlow', 'PyTorch', 'MediaPipe', 'LLM evaluation'] },
  { label: 'Simulation and delivery', items: ['SUMO', 'CARLA', 'ROS', 'Docker', 'AWS', 'Cloudflare'] },
]
