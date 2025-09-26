import { LandingHero } from '@/components/landing-hero';
import { Membership } from '@/components/membership';
import { Marketplace } from '@/components/marketplace';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Modules } from '@/components/modules';

export default function Home() {
  return (
    <>
      <LandingHero />
      <div className="space-y-24 md:space-y-32">
        <About />
        <Services />
        <Modules />
        <Marketplace />
        <Membership />
      </div>
    </>
  );
}
