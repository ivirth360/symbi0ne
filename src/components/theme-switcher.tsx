'use client';

import * as React from 'react';
import { useTheme as useNextTheme } from 'next-themes';
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
import { Moon, Sun, Palette, Droplet, Flame, Wind, Mountain, CircleDot } from 'lucide-react';
import { themes as themeConfig } from './theme-provider';


export function ThemeSwitcher() {
  const { setTheme } = useNextTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>
                <Palette className="mr-2 h-4 w-4" />
                <span>Themes</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
                 <DropdownMenuItem onClick={() => setTheme('vriksha')}>
                    <Mountain className="mr-2 h-4 w-4" />
                    <span className="capitalize ml-2">Vriksha</span>
                </DropdownMenuItem>
                 <DropdownMenuItem onClick={() => setTheme('jal')}>
                    <Droplet className="mr-2 h-4 w-4" />
                    <span className="capitalize ml-2">Jal</span>
                </DropdownMenuItem>
                 <DropdownMenuItem onClick={() => setTheme('agni')}>
                    <Flame className="mr-2 h-4 w-4" />
                    <span className="capitalize ml-2">Agni</span>
                </DropdownMenuItem>
                 <DropdownMenuItem onClick={() => setTheme('vayu')}>
                    <Wind className="mr-2 h-4 w-4" />
                    <span className="capitalize ml-2">Vayu</span>
                </DropdownMenuItem>
                 <DropdownMenuItem onClick={() => setTheme('sh00nya')}>
                    <CircleDot className="mr-2 h-4 w-4" />
                    <span className="capitalize ml-2">Sh00nya</span>
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
  );
}
