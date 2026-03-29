import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";
import Contact from "@/components/Contact";

export const metadata: Metadata = { title: "Contact - Ashwin S Deshpande" };

export default function ContactPage() {
  return (
    <SectionLayout title="Contact">
      <Contact />
    </SectionLayout>
  );
}
