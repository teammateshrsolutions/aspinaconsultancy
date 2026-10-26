import type { Metadata } from "next";
import CollegeDirectory from "@/components/CollegeDirectory";

export const metadata: Metadata = {
  title: "College Directory",
  description: "Explore a growing selection of colleges across Karnataka by study area, location, courses and fee details with ASPIN.",
};

export default function CollegesPage() { return <CollegeDirectory />; }
