import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  Clapperboard,
  Image as ImageIcon,
  MessageSquareText,
} from "lucide-react";
import { CallToAction, PageIntro } from "../_components/site-sections";
import { creationSteps } from "../_components/content";

export const metadata: Metadata = {
  title: "How it works | AnimeRoom",
  description:
    "Choose an anime matchup, preview your AI-generated roast battle, and export a vertical MP4. See how AnimeRoom turns a prompt into a reel.",
};

const production = [
  {
    icon: MessageSquareText,
    title: "The script",
    description:
      "Introductions and roast-battle dialogue built around your character matchup.",
  },
  {
    icon: ImageIcon,
    title: "The visuals",
    description:
      "Generated character poses and expressions for the battle scenes.",
  },
  {
    icon: AudioLines,
    title: "The voices",
    description: "Generated character dialogue and announcer audio.",
  },
  {
    icon: Clapperboard,
    title: "The video",
    description:
      "Intros, stat screens, and voiced rounds assembled into a vertical reel.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <div className="site-container">
        <PageIntro
          eyebrow="HOW IT WORKS"
          title="Your idea, with the production taken care of."
          description="The current studio creates anime roast-battle reels. Start with a matchup, watch the scenes come together, and download your finished video."
        />
        <div className="detailed-steps">
          {creationSteps.map((step, index) => (
            <section key={step.number} className="detailed-step">
              <span className="step-number">{step.number}</span>
              <div>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
                {index === 0 && (
                  <div className="prompt-example">
                    <span>TRY A PROMPT LIKE</span>
                    <p>
                      &quot;Naruto vs Sasuke in a roast battle. Keep the rivalry
                      playful.&quot;
                    </p>
                  </div>
                )}
                {index === 1 && (
                  <p className="step-note">
                    The preview grows as scenes finish. Generation time varies,
                    so you can follow progress in the studio.
                  </p>
                )}
                {index === 2 && (
                  <p className="step-note">
                    Export starts after generation completes. When rendering
                    finishes, your MP4 is ready to download.
                  </p>
                )}
              </div>
            </section>
          ))}
        </div>
        <section className="site-section">
          <div className="section-heading">
            <p className="eyebrow">WHAT ANIMEROOM CREATES</p>
            <h2>
              Every reel has a few moving parts.
              <br />
              We bring them together.
            </h2>
          </div>
          <div className="production-grid">
            {production.map(({ icon: Icon, title, description }) => (
              <article className="feature-card" key={title}>
                <Icon size={25} strokeWidth={1.6} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="good-to-know">
          <div>
            <p className="eyebrow">GOOD TO KNOW</p>
            <h2>Start simple. See what works.</h2>
          </div>
          <div>
            <p>
              A clear matchup helps the studio understand your idea. Generated
              results can vary, so review your reel before sharing it.
            </p>
            <p>
              New accounts receive free signup credits. Extra credits are
              available as one-time packs.
            </p>
            <Link className="site-text-link" href="/pricing">
              See pricing <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
      <CallToAction />
    </>
  );
}
