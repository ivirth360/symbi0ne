import { LandingHero } from '@/components/landing-hero';
import { HelixDemo } from '@/components/helix-demo';
import { Membership } from '@/components/membership';
import { Marketplace } from '@/components/marketplace';
import { SymbolicAnalysis } from '@/components/symbolic-analysis';
import { SymbiCompanion } from '@/components/symbi-companion';

export default function Home() {
  return (
    <>
      <LandingHero />
      <div className="space-y-24 md:space-y-32">
        <HelixDemo />
        <Marketplace />
        <SymbolicAnalysis />
        <SymbiCompanion />
        <Membership />
      </div>
    </>
  );
}
