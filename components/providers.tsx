"use client";

import { ThemeProvider } from "next-themes"; //bibliothèque qui simplifie la gestion des thèmes (dark, light, system)
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
