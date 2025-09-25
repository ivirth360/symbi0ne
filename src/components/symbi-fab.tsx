'use client';

import { useState, useTransition, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { symbi } from '@/ai/flows/symbi';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface Message {
  role: 'user' | 'bot';
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  imageHint?: string;
}

export function SymbiFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: 'Welcome to the Symbi0n Ecosystem. Ask me for a symbolic analysis, or enter your name to generate your HELIX glyph.',
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
    const currentInput = input;
    setInput('');

    startTransition(async () => {
      try {
        const result = await symbi({ query: currentInput });
        if (result.response) {
          const botMessage: Message = { 
            role: 'bot', 
            content: result.response,
            imageUrl: result.imageUrl,
            imageAlt: result.imageAlt,
            imageHint: result.imageHint,
          };
          setMessages((prev) => [...prev, botMessage]);
        } else {
          throw new Error('No response from companion.');
        }
      } catch (error) {
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
    <>
      <Button
        className="animate-subtle-pulse fixed bottom-6 right-6 h-16 w-16 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-2xl shadow-accent/40"
        onClick={() => setIsOpen(true)}
      >
        <Sparkles className="h-8 w-8" />
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-headline text-2xl text-gradient">
              <Bot className="h-8 w-8" />
              <span>Chat with SYMBI</span>
            </DialogTitle>
            <DialogDescription>
              Your AI guide to the symbolic universe. Ask for a symbolic
              analysis or anything else.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-4">
            <ScrollArea className="h-[50vh] w-full rounded-md border p-4" ref={scrollAreaRef}>
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
                          ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      )}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      {message.imageUrl && (
                         <motion.div
                            key="generated"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mt-4"
                        >
                            <Image
                            src={message.imageUrl}
                            alt={message.imageAlt || 'Generated Glyph'}
                            data-ai-hint={message.imageHint || ''}
                            width={300}
                            height={300}
                            className="mx-auto rounded-full object-cover shadow-2xl shadow-primary/20 animate-in fade-in zoom-in-75 duration-700"
                            />
                        </motion.div>
                      )}
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
                    <div className="flex items-center space-x-2 rounded-lg bg-muted px-4 py-2 text-sm text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <div className="flex w-full items-center space-x-2">
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
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
