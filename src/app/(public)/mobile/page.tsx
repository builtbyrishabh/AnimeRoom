import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AppConcept, AppPlatforms } from "../_components/mobile-launch";

export const metadata: Metadata = {
  title: "iOS & Android apps coming soon | AnimeRoom",
  description:
    "AnimeRoom's iOS and Android apps are coming soon. Discover our next chapter on mobile and start creating anime roast-battle reels in the web studio today.",
};

export default function MobilePage() {
  return (
    <div className="site-container">
      <section className="mobile-page-hero">
        <div>
          <p className="eyebrow">
            <span className="status-dot" /> IOS & ANDROID APPS COMING SOON
          </p>
          <h1>
            Your favourite characters.
            <br />
            <span>Soon, in your pocket.</span>
          </h1>
          <p className="mobile-page-description">
            AnimeRoom is coming to iOS and Android. We&apos;re building the next
            chapter of our anime reel studio for the place where you watch,
            discover, and share.
          </p>
          <AppPlatforms />
          <div className="hero-actions">
            <Link className="site-button" href="/create">
              Create on the web today{" "}
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <p className="hero-note">
            Mobile apps are in development. Launch dates are still to be
            announced.
          </p>
        </div>
        <AppConcept />
      </section>
      <section className="mobile-launch-details">
        <article>
          <p className="eyebrow">AVAILABLE TODAY</p>
          <h2>The web studio is ready for your ideas.</h2>
          <p>
            Create anime roast-battle reels from a prompt, follow the live
            preview, and export your video as an MP4. You can try it with free
            signup credits while the mobile apps are on their way.
          </p>
          <Link className="site-text-link" href="/how-it-works">
            See how it works <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </article>
        <article>
          <p className="eyebrow">ON THE WAY</p>
          <h2>Two platforms. One love of anime.</h2>
          <p>
            We&apos;re preparing apps for both iOS and Android. Store links and
            launch details will appear here when they&apos;re ready.
          </p>
          <p>
            Have a question about the mobile launch? Reach us at{" "}
            <a href="mailto:support@animeroom.space">
              support@animeroom.space{" "}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            .
          </p>
        </article>
      </section>
    </div>
  );
}
