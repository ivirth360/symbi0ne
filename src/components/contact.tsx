'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SectionWrapper } from './section-wrapper';
import { Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast({
            title: "Identity Reserved!",
            description: "Thank you for joining the Symbi0n Ecosystem. We will be in touch.",
        });
        (e.target as HTMLFormElement).reset();
    }

  return (
    <SectionWrapper id="contact">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="flex flex-col justify-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">
            Step Into the Age of Symbolic Intelligence
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Create your SYMBI0N identity, manage your assets, and join the community of innovators, creators, and visionaries. Fill out the form to reserve your identity or book a consultation.
          </p>
        </div>
        <Card className="border-primary/20 bg-card/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span>Reserve Your Identity</span>
            </CardTitle>
            <CardDescription>
              Join the waitlist and secure your place in the ecosystem.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand">Brand (Optional)</Label>
                <Input id="brand" placeholder="Your brand or company" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select required>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="non-binary">Non-binary</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Your phone number" required/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" required />
              </div>
               <div className="space-y-2">
                <Label htmlFor="tob">Time of Birth</Label>
                <Input id="tob" type="time" required/>
              </div>
               <div className="space-y-2">
                <Label htmlFor="pob">Place of Birth</Label>
                <Input id="pob" placeholder="City, Country" required/>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="purpose">Purpose</Label>
                 <Select required>
                  <SelectTrigger id="purpose">
                    <SelectValue placeholder="What brings you to Symbi0n?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual Identity</SelectItem>
                    <SelectItem value="brand">Brand Identity</SelectItem>
                    <SelectItem value="auction">Auction & Marketplace</SelectItem>
                    <SelectItem value="research">Research & Collaboration</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Button type="submit" size="lg" className="w-full animate-subtle-pulse bg-accent text-accent-foreground hover:bg-accent/90">
                  Reserve Identity
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
