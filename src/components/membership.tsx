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
    price: '₹5,000',
    period: '/ year',
    features: ['UID', 'HELIX', 'SYMBI Companion'],
    cta: 'Subscribe Now',
    isPopular: false,
  },
  {
    name: 'Individual Pro',
    price: '₹15,000',
    period: '/ year',
    features: ['UID', 'Asset Management', 'Auction Access'],
    cta: 'Subscribe Now',
    isPopular: true,
  },
  {
    name: 'Brand Basic',
    price: '₹50,000',
    period: '/ year',
    features: ['Identity', 'SYMBI Integration'],
    cta: 'Subscribe Now',
    isPopular: false,
  },
  {
    name: 'Brand Pro',
    price: '₹2,50,000',
    period: '/ year',
    features: ['Full Identity', 'AI', 'Assets', 'Auction'],
    cta: 'Subscribe Now',
    isPopular: false,
  },
  {
    name: 'Enterprise',
    price: '₹10,00,000+',
    period: '',
    features: ['Custom AI', 'Modeling', 'Research'],
    cta: 'Book Consultation',
    isPopular: false,
  },
];

export function Membership() {
  return (
    <SectionWrapper id="membership">
      <div className="text-center">
        <h2 className="font-headline text-4xl font-bold md:text-5xl">
          Join the Awakening
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Choose the plan that aligns with your journey into the symbolic
          ecosystem. Unlock more features as you grow.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
