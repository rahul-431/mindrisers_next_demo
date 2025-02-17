import Card from "@/components/Card";
import FixedSectionImage from "@/components/FixedSectionImage";
import LearnMore from "@/components/LearnMore";
import LogoSection from "@/components/LogoSection";
import Section from "@/components/Section";
import SectionDown from "@/components/SectionDown";
import SectionDown1 from "@/components/SectionDown1";
import SocialMediaSection from "@/components/SocialMediaSection";
import Image from "next/image";


export default function Home() {
  return (
   <div>
    <Section />
    <SectionDown />
    <SectionDown1 />
    <Card />
    <FixedSectionImage />
    <LearnMore />
    <LogoSection />
    <SocialMediaSection />

   </div>
  );
}
