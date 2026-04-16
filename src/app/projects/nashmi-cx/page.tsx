import type { Metadata } from "next";
import { NashmiCxCaseStudy } from "@/components/case-studies/NashmiCxCaseStudy";

export const metadata: Metadata = {
  title: "Nashmi CX — Case Study",
  description:
    "Building a BPO arm from zero to monetize operational capacity through customer experience, sales, and scalable execution.",
};

export default function NashmiCxPage() {
  return <NashmiCxCaseStudy />;
}
