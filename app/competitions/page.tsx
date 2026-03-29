import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";
import Competitions from "@/components/Competitions";

export const metadata: Metadata = {
  title: "Competitions - Ashwin S Deshpande",
};

export default function CompetitionsPage() {
  return (
    <SectionLayout title="Competitions">
      <Competitions />
    </SectionLayout>
  );
}
