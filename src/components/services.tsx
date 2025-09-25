
import { SectionWrapper } from './section-wrapper';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './ui/card';
import { User, Building, Store, Search, BarChart, Settings } from 'lucide-react';
import { Button } from './ui/button';

const individualServices = [
    { icon: <User />, title: 'Identity Creation & Management' },
    { icon: <Settings />, title: 'Personalized SYMBI Companion' },
    { icon: <BarChart />, title: 'Asset Management: Digital & Physical Glyphs' },
    { icon: <Search />, title: 'Research & Symbolic Design' },
]

const brandServices = [
    { icon: <Building/>, title: 'Brand Identity & Symbolic Branding' },
    { icon: <BarChart />, title: 'Assets Management & Monetization' },
    { icon: <User />, title: 'Audience & Users Management' },
    { icon: <Settings />, title: 'AI as a Service (SYMBI-powered insights)' },
]


export function Services() {
  return (
    <SectionWrapper id="services">
      <div className="text-center">
        <h2 className="font-headline text-4xl font-bold md:text-5xl">
          Our Offerings
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Explore a range of services designed for individuals and brands to thrive in the symbolic economy.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="border-primary/20 bg-card/50">
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <User className="text-primary"/>
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
        <Card className="border-accent/20 bg-card/50">
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <Building className="text-accent"/>
                    <span>For Brands & Public Figures</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {brandServices.map(service => (
                    <div key={service.title} className="flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                            {service.icon}
                        </div>
                        <p className="text-muted-foreground">{service.title}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>
      <div className="mt-12 flex justify-center gap-4">
        <Button size="lg">Explore Services</Button>
        <Button size="lg" variant="outline">
            <Store className="mr-2" /> Join Auction
        </Button>
      </div>
    </SectionWrapper>
  );
}
