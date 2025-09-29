import { StoreHero } from '@/components/store/store-hero';
import { FeaturedProducts } from '@/components/store/featured-products';
import { WhySymbion } from '@/components/store/why-symbion';
import { Marketplace } from '@/components/marketplace';
import { PersonalizationFlow } from '@/components/store/personalization-flow';

export default function StorePage() {
  return (
    <>
      <StoreHero />
      <div className="space-y-24 md:space-y-32">
        <FeaturedProducts />
        <WhySymbion />
        <PersonalizationFlow />
        <Marketplace />
      </div>
    </>
  );
}
