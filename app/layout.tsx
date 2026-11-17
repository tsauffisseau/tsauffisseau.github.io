import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Topbar } from "@/components/Topbar";
import { Footer } from "@/components/Footer";
import { PROFILE } from "@/lib/content";

const inter = Inter({ subsets: ["latin"] });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" });

const DESCRIPTION =
  "Théophile Sauffisseau, ingénieur Télécom SudParis (IP Paris), Consultant Data et Product Data Analyst. Modélisation OLTP/OLAP, pipelines, SQL, Power BI. Disponible en janvier 2027 à Paris.";

export const metadata: Metadata = {
  metadataBase: new URL(PROFILE.siteUrl),
  title: {
    default: `${PROFILE.name} | ${PROFILE.title}`,
    template: `%s | ${PROFILE.name}`,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: `${PROFILE.name} | ${PROFILE.title}`,
    description: DESCRIPTION,
  },
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={serif.variable} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Topbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
