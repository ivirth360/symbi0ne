
import { SectionWrapper } from './section-wrapper';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { User, Building, Store, Search } from 'lucide-react';
import { Button } from './ui/button';

const individualServices = [
    { icon: <User />, title: 'HELIX Identity Creation & Management' },
    { icon: <Search />, title: 'Personalized SYMBI Companion' },
    { icon: <Store />, title: 'Symbolic Asset Management' },
    { icon: <Search />, title: 'Personalized Symbolic Research' },
]

const brandServices = [
    { icon: <Building/>, title: 'Brand Identity & Symbolic Branding' },
    { icon: <Store />, title: 'Brand Asset Management & Monetization' },
    { icon: <User />, title: 'Symbolic Audience Insights' },
    { icon: <Search />, title: 'SYMBI AI as a Service (AIaaS)' },
]


export function Services() {
  return (
    <SectionWrapper id="services">
      <div className="text-center">
        <h2 className="font-headline text-4xl font-bold md:text-5xl">
          Our Offerings
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Explore a range of services designed for individuals and brands to thrive in the symbolic economy, with personalization at the core.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                    <User />
                    <span>For Individuals</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {individualServices.map(service => (
                    <div key={service.title} className="flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            {service.icon}
                        </div>
                        <p className="text-muted-foreground">{service.title}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-secondary">
                    <Building />
                    <span>For Brands & Public Figures</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {brandServices.map(service => (
                    <div key={service.title} className="flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                            {service.icon}
                        </div>
                        <p className="text-muted-foreground">{service.title}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>
      <div className="mt-12 flex justify-center gap-4">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">Explore Services</Button>
        <Button size="lg" variant="outline">
            <Store className="mr-2" /> Join Auction
        </Button>
      </div>
    </SectionWrapper>
  );
}
