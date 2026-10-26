import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CollegeProfile from "@/components/CollegeProfile";
import { addedCollegeProfiles } from "@/lib/college-profiles";

export function generateStaticParams() {
  return addedCollegeProfiles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const college = addedCollegeProfiles.find((profile) => profile.slug === slug);
  return college ? { title: college.name, description: `Explore ${college.name} courses and ${college.feeYear} fee details with ASPIN.` } : {};
}

export default async function CollegeProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const college = addedCollegeProfiles.find((profile) => profile.slug === slug);
  if (!college) notFound();
  return <CollegeProfile college={college} />;
}
