import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b0c10",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://autoservice-mario.hr"),
  title: "AutoService Mario d.o.o. — Automehaničarski servis Vinkovci",
  description:
    "AutoService Mario d.o.o. u Vinkovcima. Brzi servis, automehanika, autoelektrika, vulkanizacija, kompjuterska dijagnostika i kočioni sustavi. Radno vrijeme po dogovoru. Nazovite 099 432 43 92.",
  keywords: [
    "autoservis Vinkovci",
    "automehaničar Vinkovci",
    "AutoService Mario",
    "brzi servis automobila",
    "izmjena ulja",
    "vulkanizacija Vinkovci",
    "auto dijagnostika",
    "autoelektrika",
    "servis kočnica",
  ],
  authors: [{ name: "AutoService Mario d.o.o." }],
  creator: "AutoService Mario d.o.o.",
  publisher: "AutoService Mario d.o.o.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://autoservice-mario.hr",
    siteName: "AutoService Mario d.o.o.",
    title: "AutoService Mario d.o.o. — Automehaničarski servis Vinkovci",
    description:
      "Vrhunsko održavanje, brza dijagnostika i pouzdan popravak vozila u Vinkovcima. Radno vrijeme po dogovoru.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "AutoService Mario d.o.o. Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoService Mario d.o.o. — Automehaničarski servis Vinkovci",
    description: "Brzi i pouzdani popravak i održavanje vozila. Radno vrijeme po dogovoru.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr" className={`${barlow.variable} ${barlowCondensed.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#0b0c10] text-zinc-100 antialiased font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
