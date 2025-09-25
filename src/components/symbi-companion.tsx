'use client';

import { useState, useTransition, useRef, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { personalizedSYMBICompanion } from '@/ai/flows/personalized-symbi-companion';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { SectionWrapper } from './section-wrapper';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export function SymbiCompanion() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content:
        'Ask me about your symbolic identity or assets.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    startTransition(async () => {
      const result = await personalizedSYMBICompanion({ query: input });
      if (result.response) {
        const botMessage: Message = { role: 'bot', content: result.response };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        toast({
          title: 'Companion Error',
          description: 'Could not get a response. Please try again.',
          variant: 'destructive',
        });
        setMessages((prev) =>
          prev.filter((msg) => msg.content !== userMessage.content)
        );
      }
    });
  };

  return (
    <SectionWrapper id="companion">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-headline text-4xl font-bold md:text-5xl">
          Your Personal SYMBI Companion
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Engage with your AI-powered companion for personalized insights,
          guidance, and support throughout your journey in the Symbi0n
          ecosystem.
        </p>
      </div>

      <Card className="mx-auto mt-12 max-w-3xl border-primary/20 bg-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <span>Chat with SYMBI</span>
          </CardTitle>
          <CardDescription>
            Your AI guide to the symbolic universe.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea
            className="h-[400px] w-full rounded-md border border-input p-4"
            ref={scrollAreaRef}
          >
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-start gap-3',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {message.role === 'bot' && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Bot className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      'max-w-sm rounded-lg px-4 py-2 text-sm md:max-w-md',
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    )}
                  >
                    {message.content}
                  </div>
                  {message.role === 'user' && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isPending && (
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex items-center space-x-2 rounded-lg bg-secondary px-4 py-2 text-sm text-secondary-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Thinking...</span>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <div className="mt-4 flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="Ask your companion..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={isPending}
              className="h-11"
            />
            <Button
              type="submit"
              size="icon"
              onClick={handleSend}
              disabled={isPending || !input.trim()}
              className="h-11 w-11 flex-shrink-0"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
