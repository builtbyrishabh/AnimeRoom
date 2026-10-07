import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  Clapperboard,
  Film,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { CallToAction, FaqList } from "./_components/site-sections";
import { creationSteps, milestones } from "./_components/content";
import { MobileLaunch } from "./_components/mobile-launch";

export const metadata: Metadata = {
  title: "AnimeRoom | Create standout anime reels with AI",
  description:
    "Turn your favourite anime matchups into cinematic roast-battle reels. AI-generated dialogue, character visuals, and voices in a vertical video you can export.",
};

const features = [
  {
    icon: WandSparkles,
    title: "A story with personality",
    description:
      "Give us a matchup. AI writes the introductions and roast-battle dialogue, with each character taking their turn.",
  },
  {
    icon: AudioLines,
    title: "Let the characters speak",
    description:
      "Generated voices bring the dialogue to life. Character artwork gives every round its own expression.",
  },
  {
    icon: Film,
    title: "Made for the vertical feed",
    description:
      "Character intros, stat screens, and battle rounds come together in a 9:16 video. Export an MP4 when it's ready.",
  },
];

function ReelArtwork() {
  return (
    <figure className="hero-artwork">
      <div className="artwork-orbit" aria-hidden="true" />
      <div className="artwork-label">
        <Sparkles size={14} aria-hidden="true" /> A little anime. A lot of
        imagination.
      </div>
      <div className="reel-cards">
        <div className="reel-card reel-card-left">
          <Image
            src="/website/anime/emerald.webp"
            alt="Original silver-haired anime swordsman surrounded by emerald light"
            fill
            sizes="(max-width: 600px) 32vw, 220px"
            priority
          />
          <div className="reel-card-caption">
            <span>THE CHALLENGER</span>
            <strong>Main character energy.</strong>
          </div>
        </div>
        <div className="reel-card reel-card-middle">
          <Image
            src="/website/anime/ember.webp"
            alt="Original anime warrior against a glowing sunset"
            fill
            sizes="(max-width: 600px) 39vw, 240px"
            priority
          />
          <span className="reel-format">
            <Clapperboard size={13} aria-hidden="true" /> 9:16
          </span>
          <div className="reel-card-caption">
            <span>YOUR NEXT REEL</span>
            <strong>Make it unforgettable.</strong>
          </div>
        </div>
        <div className="reel-card reel-card-right">
          <Image
            src="/website/anime/violet.webp"
            alt="Original dark-haired anime rival surrounded by violet energy"
            fill
            sizes="(max-width: 600px) 32vw, 220px"
            priority
          />
          <div className="reel-card-caption">
            <span>THE RIVAL</span>
            <strong>Ready for a comeback.</strong>
          </div>
        </div>
      </div>
      <div className="artwork-prompt">
        <span className="prompt-icon">
          <WandSparkles size={19} aria-hidden="true" />
        </span>
        <div>
          <span>IT STARTS WITH AN IDEA</span>
          <p>&quot;Naruto vs Sasuke. Make it a roast battle.&quot;</p>
        </div>
        <ArrowRight size={19} aria-hidden="true" />
      </div>
      <figcaption>
        Concept artwork with original characters.{" "}
        <Link href="/videos/discover">
          See community videos <ArrowRight size={12} aria-hidden="true" />
        </Link>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <>
      <section className="site-container home-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> THE CREATIVE STUDIO FOR ANIME FANS
          </p>
          <Link className="mobile-coming-badge" href="/mobile">
            iOS & Android apps coming soon{" "}
            <ArrowRight size={13} aria-hidden="true" />
          </Link>
          <h1>
            Your favourite characters.
            <br />
            <span>
              Your next
              <br className="desktop-break" /> great reel.
            </span>
          </h1>
          <p className="hero-description">
            Turn the anime matchups in your imagination into cinematic
            roast-battle reels. One prompt brings the dialogue, visuals, and
            voices together.
          </p>
          <div className="hero-actions">
            <Link className="site-button" href="/create">
              Create your first reel <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="site-text-link" href="/videos/discover">
              Explore community videos{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <p className="hero-note">
            Free signup credits. Your idea is all you need to begin.
          </p>
        </div>
        <ReelArtwork />
      </section>

      <section className="milestone-strip" aria-label="AnimeRoom milestones">
        <div className="site-container milestone-grid">
          {milestones.map((milestone) => (
            <div key={milestone.label}>
              <strong>{milestone.value}</strong>
              <span>{milestone.label}</span>
            </div>
          ))}
          <div className="milestone-story">
            <p>
              Built for the fans
              <br />
              with a story to tell.
            </p>
            <Link href="/our-story">
              Meet AnimeRoom <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="site-container site-section" id="the-studio">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">
              FROM &quot;WHAT IF&quot; TO &quot;WATCH THIS&quot;
            </p>
            <h2>
              The idea is yours.
              <br />
              The production is on us.
            </h2>
          </div>
          <p>
            You choose the characters and the premise. AnimeRoom handles the
            pieces that turn an idea into a video.
          </p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, description }, index) => (
            <article className="feature-card" key={title}>
              <div className={`feature-icon feature-icon-${index}`}>
                <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section">
        <div className="site-container site-section">
          <div className="section-heading">
            <p className="eyebrow">A SMALL PROMPT. A WHOLE PRODUCTION.</p>
            <h2>Bring your matchup to life.</h2>
            <p>Start with two characters and let the battle unfold.</p>
          </div>
          <div className="workflow-grid">
            {creationSteps.map((step) => (
              <article key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <Link className="site-text-link" href="/how-it-works">
            Take a closer look <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <MobileLaunch />

      <section className="site-container site-section story-teaser">
        <div className="story-art">
          <Image
            src="/website/anime/emerald.webp"
            alt="Original anime character artwork in emerald tones"
            fill
            sizes="(max-width: 700px) 90vw, 440px"
          />
          <span>
            FOR THE LOVE
            <br />
            OF ANIME.
          </span>
        </div>
        <div className="section-heading">
          <p className="eyebrow">OUR STORY</p>
          <h2>
            A creative home
            <br />
            for anime fans.
          </h2>
          <p>
            AnimeRoom is built around a simple idea: fans should be able to
            create videos about the characters they love, even when they
            don&apos;t have an editing setup.
          </p>
          <p>
            We&apos;re starting with roast battles and building more ways for
            fans to bring their anime ideas to life.
          </p>
          <Link className="site-text-link" href="/our-story">
            Read our story <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="site-container site-section home-faq">
        <div className="section-heading">
          <p className="eyebrow">BEFORE YOU HIT CREATE</p>
          <h2>
            A few things
            <br />
            you might be wondering.
          </h2>
          <Link className="site-text-link" href="/faq">
            All questions <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <FaqList limit={4} />
      </section>
      <CallToAction />
    </>
  );
}
