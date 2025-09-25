'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
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

const elementalThemes = ['theme-vriksha', 'theme-jal', 'theme-agni', 'theme-vayu', 'theme-sh00nya'];

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  const handleElementalThemeChange = (newTheme: string) => {
    // Remove any existing elemental theme classes from the body
    document.body.classList.remove(...elementalThemes);
    
    // Add the new elemental theme class if one is selected
    if (newTheme) {
      document.body.classList.add(newTheme);
    }
  };

  React.useEffect(() => {
    // Set a default elemental theme on initial load
    handleElementalThemeChange('theme-vriksha');
  }, []);


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
                 <DropdownMenuItem onClick={() => handleElementalThemeChange('theme-vriksha')}>
                    <Mountain className="mr-2 h-4 w-4" />
                    <span className="capitalize ml-2">Vriksha</span>
                </DropdownMenuItem>
                 <DropdownMenuItem onClick={() => handleElementalThemeChange('theme-jal')}>
                    <Droplet className="mr-2 h-4 w-4" />
                    <span className="capitalize ml-2">Jal</span>
                </DropdownMenuItem>
                 <DropdownMenuItem onClick={() => handleElementalThemeChange('theme-agni')}>
                    <Flame className="mr-2 h-4 w-4" />
                    <span className="capitalize ml-2">Agni</span>
                </DropdownMenuItem>
                 <DropdownMenuItem onClick={() => handleElementalThemeChange('theme-vayu')}>
                    <Wind className="mr-2 h-4 w-4" />
                    <span className="capitalize ml-2">Vayu</span>
                </DropdownMenuItem>
                 <DropdownMenuItem onClick={() => handleElementalThemeChange('theme-sh00nya')}>
                    <CircleDot className="mr-2 h-4 w-4" />
                    <span className="capitalize ml-2">Sh00nya</span>
                </DropdownMenuItem>
                 <DropdownMenuItem onClick={() => handleElementalThemeChange('')}>
                    <CircleDot className="mr-2 h-4 w-4" />
                    <span className="capitalize ml-2">Default</span>
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
