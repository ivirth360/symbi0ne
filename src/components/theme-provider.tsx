"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export const useTheme = () => {
  const { theme, setTheme, systemTheme } = useNextTheme();

  const handleThemeChange = (newTheme: string) => {
    const currentMode = theme?.includes('dark') || theme?.includes('light') 
      ? (theme.endsWith('dark') ? 'dark' : 'light') 
      : systemTheme || 'dark';
    
    const baseTheme = themes.find(t => theme?.startsWith(t.name))?.name;

    if (newTheme === 'light' || newTheme === 'dark') {
      const finalTheme = baseTheme ? `${baseTheme}-${newTheme}` : newTheme;
      setTheme(finalTheme);
    } else {
      const finalTheme = `${newTheme}-${currentMode}`;
      setTheme(finalTheme);
    }
  };

  return { theme, setTheme: handleThemeChange };
}

export const themes = [
    { name: 'jal' },
    { name: 'agni' },
    { name: 'vayu' },
    { name: 'vriksha' },
    { name: 'sh00nya' },
]
