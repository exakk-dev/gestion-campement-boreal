import { CtaBand } from "./components/cta-band";
import { HeroLac } from "./components/hero-lac";
import { PhotoBreak } from "./components/photo-break";
import { PlanSection } from "./components/plan-section";
import { UnitShowcase } from "./components/unit-showcase";

export default function Home() {
  return (
    <main>
      <HeroLac />
      <UnitShowcase />
      <PhotoBreak />
      <PlanSection />
      <CtaBand />
    </main>
  );
}
