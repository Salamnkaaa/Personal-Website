import type { Metadata } from "next";
import TalqaOperationsCaseStudy from "@/components/case-studies/TalqaOperationsCaseStudy";

export const metadata: Metadata = {
  title: "Talqa Operations Case Study — Abdelsalam Muhammed",
  description:
    "Delivery operations optimization case study across Saudi Arabia with a structured, data-driven model.",
};

/** Read `public/images/project1` at request time so new assets show without rebuilding. */
export const dynamic = "force-dynamic";

export default function TalqaOperationsPage() {
  return <TalqaOperationsCaseStudy />;
}
