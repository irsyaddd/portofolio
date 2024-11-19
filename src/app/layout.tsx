import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { Gelasio } from "next/font/google";

const gelasio = Gelasio({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-gelasio",
});

export const metadata: Metadata = {
  title: "Irsyad Al Ghifary",
  description: "multidisciplinary engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`min-h-screen antialiased ${GeistSans.variable} ${GeistMono.variable} ${gelasio.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          storageKey="theme"
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main className="py-32">
            <div className="max-w-[90rem] mx-auto selection:bg-indigo-300 selection:text-indigo-900">
              {children}
            </div>
            <Toaster />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
