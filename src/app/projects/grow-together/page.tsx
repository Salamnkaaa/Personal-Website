import type { Metadata } from "next";
import { GrowTogetherCaseStudy } from "@/components/case-studies/GrowTogetherCaseStudy";

export const metadata: Metadata = {
  title: "Grow Together (Nangah Sawa) — Case Study",
  description:
    "End-to-end growth execution: marketplace incentives, retention, and scalable order volume growth.",
};

export default function GrowTogetherPage() {
  return <GrowTogetherCaseStudy />;
}
