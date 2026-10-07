import Image from "next/image";
import Link from "next/link";
import { Apple, ArrowRight, Smartphone, Sparkles } from "lucide-react";

export function AppPlatforms() {
  return (
    <div className="app-platforms">
      <div>
        <Apple size={22} aria-hidden="true" />
        <span>
          <strong>iOS app</strong>
          <small>Coming soon</small>
        </span>
      </div>
      <div>
        <Smartphone size={22} aria-hidden="true" />
        <span>
          <strong>Android app</strong>
          <small>Coming soon</small>
        </span>
      </div>
    </div>
  );
}

export function AppConcept() {
  return (
    <figure className="app-concept">
      <div className="concept-phone">
        <div className="phone-camera" aria-hidden="true" />
        <div className="concept-screen">
          <div className="concept-screen-header">
            <span>AnimeRoom.</span>
            <Sparkles size={14} aria-hidden="true" />
          </div>
          <div className="concept-screen-copy">
            <small>YOUR IMAGINATION, ON THE GO</small>
            <strong>
              Your next
              <br />
              great reel.
            </strong>
          </div>
          <div className="concept-screen-art">
            <Image
              src="/website/anime/ember.webp"
              alt="Original anime artwork in a concept for the upcoming AnimeRoom mobile app"
              fill
              sizes="210px"
            />
            <span>Made for the fans.</span>
          </div>
          <div className="concept-screen-bottom">
            <span>iOS & Android</span>
            <strong>
              Coming soon <ArrowRight size={12} aria-hidden="true" />
            </strong>
          </div>
        </div>
      </div>
      <figcaption>App concept. Mobile experience in development.</figcaption>
    </figure>
  );
}

export function MobileLaunch() {
  return (
    <section className="mobile-launch-section">
      <div className="site-container mobile-launch-inner">
        <div className="section-heading">
          <p className="eyebrow">THE NEXT CHAPTER IS MOBILE</p>
          <h2>
            Your anime studio.
            <br />
            Soon, in your pocket.
          </h2>
          <p>
            We&apos;re preparing AnimeRoom for iOS and Android. A new home for
            your character-led reels, on the phone you already use to watch and
            share them.
          </p>
          <AppPlatforms />
          <Link className="site-text-link" href="/mobile">
            Explore the upcoming apps{" "}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <p className="mobile-web-note">
            The web studio is available to try today.
          </p>
        </div>
        <AppConcept />
      </div>
    </section>
  );
}
