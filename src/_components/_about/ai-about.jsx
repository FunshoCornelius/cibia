import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import AboutHero from "./about-hero";
import MissionAndVision from "./mission-and-vission";
import WhyJoinUs from "./why-join-us";
import MembershipValues from "./membership-values";
import Link from "next/link";
import Objectives from "./objectives";

export default function AboutSection() {
  return (
    <main className="w-full pt-28 md:pt-40 bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero Heading */}
      <AboutHero />

      {/* Mission and Vision */}
      <MissionAndVision />

      {/* Objectives */}
      <Objectives />

      {/* Why Join Us */}
      <WhyJoinUs />

      {/* Membership Values */}
      <MembershipValues />

      {/* Final CTA */}
      <div className="mt-20 bg-black-200 px-4 py-8 text-white text-center">
        <h3 className="text-2xl font-bold ">
          Chart Your Path with CIBIA Today
        </h3>
        <Link href="/membership">
          <Button variant={"secondary"} className="mt-4 text-base px-6 py-3">
            Become a Member
          </Button>
        </Link>
      </div>
    </main>
  );
}
