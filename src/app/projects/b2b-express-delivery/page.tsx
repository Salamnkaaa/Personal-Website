import type { Metadata } from "next";
import { B2BExpressDeliveryCaseStudy } from "@/components/case-studies/B2BExpressDeliveryCaseStudy";

export const metadata: Metadata = {
  title: "B2B Express Delivery — 1-Hour Service",
  description:
    "Building a fast, on-demand B2B delivery solution for vendors, from 0 to 1 launch.",
};

export default function B2BExpressDeliveryPage() {
  return <B2BExpressDeliveryCaseStudy />;
}
