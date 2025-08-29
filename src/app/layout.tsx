
import "./globals.css";
import { ThemeProvider } from "./provider/theme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omnia Abdelnasser | Frontend Developer",
  description: "Portfolio showcasing projects built with React, Next.js, and modern web technologies.",
  keywords: ["Frontend Developer", "React", "Next.js", "Portfolio", "Omnia Abdelnasser"],
  openGraph: {
    title: "Omnia Abdelnasser | Frontend Developer",
    description: "Explore projects in React, Next.js, Zustand, Tailwind, and more.",
    url: "https://your-portfolio.vercel.app",
    siteName: "Omnia Portfolio",
    images: [
      {
        url: "/my-img.png",
        width: 1200,
        height: 630,
        alt: "Omnia Abdelnasser | Frontend Developer",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
