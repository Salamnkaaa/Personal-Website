import type { Metadata } from "next";
import { BikePoweredCarWashMvpCaseStudy } from "@/components/case-studies/BikePoweredCarWashMvpCaseStudy";

export const metadata: Metadata = {
  title: "Bike-Powered Car Wash — MVP Build",
  description:
    "Reimagining car wash logistics with bike-based micro-operations, mobile booking, and operator dashboards.",
};

export default function BikePoweredCarWashMvpPage() {
  return <BikePoweredCarWashMvpCaseStudy />;
}
