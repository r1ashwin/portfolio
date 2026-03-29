/**
 * Public GitHub repositories for r1ashwin — shown on the Projects page.
 * Private repos are omitted.
 */
export type GitHubRepo = {
  name: string;
  description: string;
  language?: string;
  /** Draw a subtle accent ring */
  highlight?: boolean;
};

export const GITHUB_REPOS: GitHubRepo[] = [
  {
    name: "portfolio",
    description: "This site — Next.js, TypeScript, digital twin chat.",
    language: "TypeScript",
    highlight: true,
  },
  {
    name: "autonomous_agent_factory",
    description: "Python tooling for autonomous agents.",
    language: "Python",
  },
  {
    name: "ai_debate",
    description: "AI debate experiments and demos.",
  },
  {
    name: "multi_agent_system_MCP",
    description: "Multi-agent system with MCP integration.",
  },
  {
    name: "RAG_QA_system",
    description: "RAG-based question answering system.",
  },
  {
    name: "XOLO_Windows_Voice_Assistant",
    description:
      "XOLO — Windows voice assistant; Cortana-era successor direction with Python.",
    language: "Python",
  },
  {
    name: "DAT",
    description: "C++ project (see repo for details).",
    language: "C++",
  },
  {
    name: "Flame_Kaiser",
    description: "Project repository — see GitHub README.",
  },
  {
    name: "AI_HR_Tech",
    description: "HR tech / AI exploration.",
  },
  {
    name: "Colorimetry",
    description: "Colorimetry notebooks and analysis.",
    language: "Jupyter Notebook",
  },
  {
    name: "AgenticAI",
    description:
      "Autonomous multi-agent system collaborating with models for deals and bargain alerts.",
    language: "Python",
  },
  {
    name: "CodeSuite",
    description: "Code utilities and suite experiments.",
  },
  {
    name: "llm_engineering",
    description: "Learning LLM engineering — notebooks and exercises.",
    language: "Jupyter Notebook",
  },
  {
    name: "sidebarAI",
    description: "Work-specific AI features on your fingertips.",
  },
  {
    name: "roll_dice",
    description: "Dice / game logic in C++.",
    language: "C++",
  },
  {
    name: "OS",
    description: "Operating system concepts with C++.",
    language: "C++",
  },
  {
    name: "expensetracker",
    description: "Expense tracker built with Flutter and Dart.",
    language: "Dart",
  },
  {
    name: "HUNT",
    description: "Project repository — see GitHub.",
  },
  {
    name: "RESONANCE",
    description: "Project repository — see GitHub.",
  },
  {
    name: "DELHI_METRO_NAVIGATION_SYSTEM",
    description: "DMRC navigation using DSA — C++ project.",
    language: "C++",
  },
  {
    name: "GENAI_FASHION_OUTFIT_GENERATOR",
    description:
      "Built in 8 days for Flipkart GRID 5.0 (2023) national round — generative AI fashion outfits.",
    language: "JavaScript",
    highlight: true,
  },
  {
    name: "Banking_Operations_Console",
    description: "CLI bank management system in C — minor project.",
    language: "C",
  },
  {
    name: "HEALTHCARE_ADMIN_SYSTEM",
    description: "Patient and staff management with role-specific interfaces — C++.",
    language: "C++",
  },
];

export function githubRepoUrl(repoName: string): string {
  return `https://github.com/r1ashwin/${repoName}`;
}
