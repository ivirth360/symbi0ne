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

const themes = [
    { name: 'jal', icon: <Droplet className="h-4 w-4" /> },
    { name: 'agni', icon: <Flame className="h-4 w-4" /> },
    { name: 'vayu', icon: <Wind className="h-4 w-4" /> },
    { name: 'vriksha', icon: <Mountain className="h-4 w-4" /> },
    { name: 'sh00nya', icon: <CircleDot className="h-4 w-4" /> },
]

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = (newTheme: string) => {
    const currentMode = theme?.includes('dark') || theme?.includes('light') ? (theme.includes('dark') ? 'dark' : 'light') : 'dark';
    const baseTheme = themes.find(t => theme?.includes(t.name))?.name;

    if (newTheme === 'light' || newTheme === 'dark') {
      setTheme(baseTheme ? `theme-${baseTheme} ${newTheme}` : newTheme);
    } else {
        setTheme(`theme-${newTheme} ${currentMode}`);
    }
  };

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
                 {themes.map(({name, icon}) => (
                    <DropdownMenuItem key={name} onClick={() => handleThemeChange(name)}>
                        {icon}
                        <span className="capitalize ml-2">{name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleThemeChange('light')}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
