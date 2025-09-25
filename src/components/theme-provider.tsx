"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

// --- Elemental Theme Provider ---
const elementalThemes = ['theme-vriksha', 'theme-jal', 'theme-agni', 'theme-vayu', 'theme-sh00nya'];

type ElementalThemeContextType = {
  elementalTheme: string;
  setElementalTheme: (theme: string) => void;
};

const ElementalThemeContext = React.createContext<ElementalThemeContextType | undefined>(undefined);

export function ElementalThemeProvider({ children }: { children: React.ReactNode }) {
  const [elementalTheme, setElementalThemeState] = React.useState('theme-vriksha');

  React.useEffect(() => {
    document.body.classList.remove(...elementalThemes);
    if (elementalTheme) {
      document.body.classList.add(elementalTheme);
    }
  }, [elementalTheme]);

  const setElementalTheme = (theme: string) => {
    setElementalThemeState(theme);
  };

  return (
    <ElementalThemeContext.Provider value={{ elementalTheme, setElementalTheme }}>
      {children}
    </ElementalThemeContext.Provider>
  );
}

export const useTheme = () => {
  const nextThemeContext = useNextTheme();
  const elementalThemeContext = React.useContext(ElementalThemeContext);

  if (elementalThemeContext === undefined) {
    throw new Error("useTheme must be used within an ElementalThemeProvider");
  }

  return {
    ...nextThemeContext,
    ...elementalThemeContext,
  };
};
