'use client';

import * as React from 'react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu';
import { Moon, Sun, Palette, Droplet, Flame, Wind, Mountain, CircleDot, Asterisk } from 'lucide-react';

export function ThemeSwitcher() {
  const { setTheme, setElementalTheme } = useTheme();

  return (
    <div className="fixed bottom-20 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
              variant="outline"
              size="icon"
              className="h-16 w-16 rounded-full border-border/50 bg-background/80 shadow-lg backdrop-blur-sm"
          >
            <Palette className="h-8 w-8" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                  <Palette className="mr-2 h-4 w-4" />
                  <span>Elemental Themes</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                   <DropdownMenuItem onClick={() => setElementalTheme('theme-vriksha')}>
                      <Mountain className="mr-2 h-4 w-4" />
                      <span>Vriksha</span>
                  </DropdownMenuItem>
                   <DropdownMenuItem onClick={() => setElementalTheme('theme-jal')}>
                      <Droplet className="mr-2 h-4 w-4" />
                      <span>Jal</span>
                  </DropdownMenuItem>
                   <DropdownMenuItem onClick={() => setElementalTheme('theme-agni')}>
                      <Flame className="mr-2 h-4 w-4" />
                      <span>Agni</span>
                  </DropdownMenuItem>
                   <DropdownMenuItem onClick={() => setElementalTheme('theme-vayu')}>
                      <Wind className="mr-2 h-4 w-4" />
                      <span>Vayu</span>
                  </DropdownMenuItem>
                   <DropdownMenuItem onClick={() => setElementalTheme('theme-sh00nya')}>
                      <CircleDot className="mr-2 h-4 w-4" />
                      <span>Sh00nya</span>
                  </DropdownMenuItem>
                   <DropdownMenuItem onClick={() => setElementalTheme('default')}>
                      <Asterisk className="mr-2 h-4 w-4" />
                      <span>Default</span>
                  </DropdownMenuItem>
              </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setTheme('light')}>
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
