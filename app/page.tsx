import { CtaBand } from "./components/cta-band";
import { Hero } from "./components/hero";
import { PhotoBreak } from "./components/photo-break";
import { PlanSection } from "./components/plan-section";
import { UnitShowcase } from "./components/unit-showcase";

export default function Home() {
  return (
    <main>
      <Hero />
      <UnitShowcase />
      <PhotoBreak />
      <PlanSection />
      <CtaBand />
    </main>
  );
}
