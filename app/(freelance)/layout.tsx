import { FreelanceFooter } from "@/components/freelance-footer";
import { FreelanceHeader } from "@/components/freelance-header";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-pt-[5rem] ">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased -z-10 ",
          inter.variable
        )}
      >
        <Providers>
          <div className="relative flex min-h-dvh flex-col bg-background  text-stone-700 ">
            <FreelanceHeader />
            <main className="">{children}</main>
            <FreelanceFooter />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
