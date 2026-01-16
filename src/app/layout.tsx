import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenus";
import { ThemeProvider } from "@/context/ThemeContext";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

export const metadata: Metadata = {
  title: "Poorav Desai | Software Engineer",
  description:
    "Software engineer building full-stack and AI-enabled products. View my projects, experience, leadership, and involvement.",
  openGraph: {
    title: "Poorav Desai | Software Engineer",
    description:
      "Projects, experience, leadership, and involvement. Built with Next.js.",
    url: "https://pooravdesai.com",
    siteName: "Poorav Desai Portfolio",
    images: [
      {
        url: "https://pooravdesai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Poorav Desai Portfolio",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      url: "/favicon_io_1/favicon.ico",
      rel: "icon",
      sizes: "16x16",
      type: "image/x-icon",
    },
    {
      url: "/favicon_io_1/favicon.ico",
      rel: "icon",
      sizes: "32x32",
      type: "image/x-icon",
    },
    {
      url: "/favicon_io_1/favicon.ico",
      rel: "icon",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      url: "/favicon_io_work/favicon.ico",
      rel: "icon",
      sizes: "64x64",
      type: "image/x-icon",
    },
  ],
  keywords: [
    "poorav desai",
    "poorav",
    "pooravdesai",
    "poorav-desai",
    "desai poorav",
    "software engineer",
    "full stack developer",
    "full stack engineer",
    "ai developer",
    "machine learning engineer",
    "web developer",
    "pooravdesai github",
  ],
};

const GoogleAnalytics = dynamic(
  () => import("@/components/common/GoogleAnalytics"),
  { ssr: false }
);
const WebVitals = dynamic(() => import("@/components/common/WebVitals"), {
  ssr: false,
});
const FloatingNavbar = dynamic(
  () => import("@/components/navbar/FloatingNavbar")
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const isDebug = process.env.NODE_ENV === "development";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={`${poppins.className} scroll-pt-16 sm:scroll-pt-14`}>
      {isDebug ? null : <GoogleAnalytics />}

      <body className={isDebug ? "debug-screens" : ""}>
        {isDebug ? <WebVitals /> : null}
        <ThemeProvider>
          <FloatingNavbar className="app_nav" navItems={navMenus} />
          <main>{children}</main>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
