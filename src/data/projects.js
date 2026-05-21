export const projects = [
  {
    id: 1,
    title: "EMS Transcript Grading with NPD",
    type: "Web App · AI",
    year: "2025",
    description:
      "QA pipeline built with the Norman Police Department to grade 911 dispatcher transcripts against EMS protocol requirements. Built a dual-grader architecture: a deterministic rule-based engine for traceable scoring, and a local LLM (Ollama + FAISS embeddings) for paraphrase detection — all on-premise, no PHI leaves the machine. Handled protocol CSV parsing, AI model selection, and docs.",
    tech: ["REACT", "TYPESCRIPT", "FASTAPI", "POSTGRES", "OLLAMA", "FAISS"],
    image: "/src/assets/images/capstone.png",
    link: "https://github.com/777natalie/GroupG_CS4273Capstone",
    locked: false,
  },
  {
    id: 2,
    title: "MDP & Reinforcement Learning Agent",
    type: "Artificial Intelligence",
    year: "2025",
    description:
      "Implemented value iteration and Q-learning from scratch in Python across three environments: GridWorld, a simulated Crawler robot, and Pacman AI. Tuned exploration vs. exploitation tradeoffs, analyzed policy convergence, and compared model-based vs. model-free approaches across state spaces of varying complexity.",
    tech: ["PYTHON", "Q-LEARNING", "VALUE ITERATION", "MDP"],
    image: "",
    link: "https://github.com/777natalie/AI_Project3",
    locked: false,
  },
  {
    id: 3,
    title: "P2P Secure Messenger",
    type: "Systems / Cryptography",
    year: "2026",
    description:
      "End-to-end encrypted peer-to-peer messaging application built from scratch in Python. Implements AES-256 symmetric encryption, PBKDF2 key derivation, raw socket networking, and Diffie-Hellman key exchange.",
    tech: ["PYTHON", "AES-256", "DIFFIE-HELLMAN", "SOCKETS"],
    image: "/src/assets/images/secondproject.png",
    link: "https://github.com/777natalie/P2PMessaging",
    locked: false,
  },
  {
    id: 4,
    title: "Civic Tech Platform",
    type: "Civic Tech · In Progress",
    year: "2026",
    description:
      "Inspired by running for OKCPS District 7 school board in 2026 — knocking thousands of doors revealed how disconnected families were from the decisions made about their schools. This platform is being built to close that gap: bilingual civic engagement tools, board agenda translation, rep profiles, and a social action feed for communities usually left out of the room.",
    tech: ["NEXT.JS", "SUPABASE", "ANTHROPIC API", "TYPESCRIPT"],
    image: "",
    link: "",
    locked: true,
  },
]