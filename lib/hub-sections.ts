import {
  User,
  Hammer,
  Briefcase,
  Microscope,
  Trophy,
  Mail,
  type LucideIcon,
} from "lucide-react";

export type HubSection = {
  id: string;
  label: string;
  icon: LucideIcon;
  angle: number;
  href: string;
};

export const HUB_SECTIONS: HubSection[] = [
  { id: "about", label: "About", icon: User, angle: 0, href: "/about" },
  {
    id: "experience",
    label: "Experience",
    icon: Briefcase,
    angle: 60,
    href: "/experience",
  },
  {
    id: "competitions",
    label: "Competitions",
    icon: Trophy,
    angle: 120,
    href: "/competitions",
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
    angle: 180,
    href: "/contact",
  },
  {
    id: "research",
    label: "Research",
    icon: Microscope,
    angle: 240,
    href: "/research",
  },
  {
    id: "projects",
    label: "Projects",
    icon: Hammer,
    angle: 300,
    href: "/projects",
  },
];
