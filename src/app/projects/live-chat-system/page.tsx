import type { Metadata } from "next";
import { LiveChatSystemCaseStudy } from "@/components/case-studies/LiveChatSystemCaseStudy";

export const metadata: Metadata = {
  title: "In-House Live Chat System — Case Study",
  description:
    "Replacing Intercom with a scalable internal solution: routing, agent dashboard, and operational control.",
};

export default function LiveChatSystemPage() {
  return <LiveChatSystemCaseStudy />;
}
