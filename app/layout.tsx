import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Topbar } from "@/components/Topbar";
import { Footer } from "@/components/Footer";

// Optimisation de la police Inter
const inter = Inter({ subsets: ["latin"] });

// Métadonnées SEO globales
export const metadata: Metadata = {
  title: "Théophile Sauffisseau | Data & AI Product Builder",
  description: "Portfolio of Théophile Sauffisseau - Data Analyst & AI Product Builder. Projects, Posters, Resume, Personal Creations.",
  icons: {
    icon: "/assets/favicon.svg",
    apple: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Topbar />
          
          {/* Conteneur principal qui grandira pour pousser le footer en bas */}
          <main className="flex-1">
            {children}
          </main>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}