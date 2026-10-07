import type { Metadata } from "next";
import type { ReactNode } from "react";
import { env } from "~/env";
import SiteHeader from "./_components/site-header";
import SiteFooter from "./_components/site-footer";
import "./marketing.css";

const description =
  "Create cinematic anime roast-battle reels from a single prompt. AnimeRoom brings character dialogue, visuals, and voices together in an exportable vertical video.";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  openGraph: {
    title: "AnimeRoom | Your favourite characters. Your next great reel.",
    description,
    siteName: "AnimeRoom",
    type: "website",
    images: [
      {
        url: "/website/anime/social-cover.webp",
        width: 1200,
        height: 800,
        alt: "Original anime character artwork for AnimeRoom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnimeRoom | Create standout anime reels",
    description,
    images: ["/website/anime/social-cover.webp"],
  },
};

export default function PublicLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="marketing-site">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
