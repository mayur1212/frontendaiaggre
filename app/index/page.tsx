// app/index/page.tsx
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import CTASection from "@/components/CTASection";
import WorkspaceFeature from "@/components/WorkspaceFeature";
import DashboardShowcase from "@/components/DashboardShowcase";
import FullPictureSection from "@/components/FullPictureSection";
import TeamSamePageSection from "@/components/TeamSamePageSection";
import WorkspaceTabs from "@/components/WorkspaceTabs";
import FeatureSlider from "@/components/FeatureSlider";
import OrganizeHighlight from "@/components/OrganizeHighlight";
import PromptToProjectSection from "@/components/PromptToProjectSection";
import PricingCTASection from "@/components/PricingCTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Banner />
      <CTASection />
      <DashboardShowcase />
      <WorkspaceFeature />
      <FullPictureSection />
      <TeamSamePageSection />
      <WorkspaceTabs />
      <FeatureSlider />
      <OrganizeHighlight />
      <PromptToProjectSection />
      <PricingCTASection />
    </main>
  );
}
