import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { SectionWrapper } from './section-wrapper';

const tiers = [
  {
    name: 'Individual Basic',
    price: '$9',
    period: '/ month',
    features: [
      'Reserve SYMBI0N Identity',
      'Create 1 HELIX',
      'Basic Asset Management',
      'Marketplace Access',
    ],
    cta: 'Choose Basic',
    isPopular: false,
  },
  {
    name: 'Individual Pro',
    price: '$29',
    period: '/ month',
    features: [
      'All Basic Features',
      'Create up to 5 HELIXs',
      'Advanced Asset Management',
      'SYMBI Companion Pro',
      'Symbolic Analysis Tool',
    ],
    cta: 'Go Pro',
    isPopular: true,
  },
  {
    name: 'Brand & Enterprise',
    price: 'Custom',
    period: '',
    features: [
      'All Pro Features',
      'Unlimited HELIXs',
      'Brand Identity Management',
      'Dedicated Support',
      'Enterprise Integrations',
    ],
    cta: 'Contact Us',
    isPopular: false,
  },
];

export function Membership() {
  return (
    <SectionWrapper id="membership">
      <div className="text-center">
        <h2 className="font-headline text-4xl font-bold md:text-5xl">
          Membership Tiers
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Choose the plan that aligns with your journey into the symbolic
          ecosystem. Unlock more features as you grow.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`flex flex-col border-primary/20 bg-card/50 ${
              tier.isPopular ? 'border-2 border-accent shadow-2xl shadow-accent/20' : ''
            }`}
          >
            <CardHeader>
              {tier.isPopular && (
                <div className="mb-2 text-center text-sm font-semibold text-accent">
                  Most Popular
                </div>
              )}
              <CardTitle className="text-center text-2xl">{tier.name}</CardTitle>
              <CardDescription className="text-center text-4xl font-bold text-foreground">
                {tier.price}
                <span className="text-base font-normal text-muted-foreground">
                  {tier.period}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="mr-3 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${
                  tier.isPopular ? 'bg-accent hover:bg-accent/90' : ''
                }`}
                variant={tier.isPopular ? 'default' : 'outline'}
              >
                {tier.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
