import { redirect } from "next/navigation";
import { PROJECTS_FEATURED_PATH } from "@/lib/project-routes";

export default function ProjectsIndexPage() {
  redirect(PROJECTS_FEATURED_PATH);
}
