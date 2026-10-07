import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CallToAction, PageIntro } from "../_components/site-sections";
import { milestones } from "../_components/content";

export const metadata: Metadata = {
  title: "Our story | AnimeRoom",
  description:
    "Meet AnimeRoom, an independent AI anime video studio founded by Rishabh, and learn why we're building a creative home for anime fans.",
};

export default function OurStoryPage() {
  return (
    <>
      <div className="site-container">
        <PageIntro
          eyebrow="OUR STORY"
          title="For the fans with a story to tell."
          description="We're building AnimeRoom to make it easier to turn a favourite character, an unexpected matchup, or a funny idea into a video."
        />
        <div className="story-banner">
          <Image
            src="/website/anime/social-cover.webp"
            alt="Original anime characters in emerald, sunset, and violet scenes"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <span>
            IMAGINATION
            <br />
            BELONGS TO EVERYONE.
          </span>
        </div>
        <p className="art-credit">Original concept artwork for AnimeRoom.</p>
        <div className="story-body">
          <aside>
            <p className="eyebrow">A NOTE FROM THE FOUNDER</p>
            <strong>Rishabh</strong>
            <p>Founder, AnimeRoom</p>
            <a className="site-text-link" href="mailto:support@animeroom.space">
              Get in touch <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </aside>
          <article>
            <h2>Make the idea easier to create.</h2>
            <p>
              Anime gives fans plenty to talk about. Favourite characters,
              rivalries, unexpected matchups. AnimeRoom takes one of those ideas
              and turns it into something you can watch.
            </p>
            <p>
              The goal is to make video creation accessible to people who have a
              good idea but don&apos;t have the time or experience to produce
              every part themselves.
            </p>
            <h2>A prompt is the starting point.</h2>
            <p>
              We&apos;re starting with anime roast battles. Pick two characters,
              describe the matchup, and the studio creates the dialogue,
              character images, voices, and a vertical video. You can watch
              scenes appear as they become ready, then export the finished reel.
            </p>
            <p>
              AI handles the production work. The fan decides what to create.
            </p>
            <h2>Early momentum. A clear direction.</h2>
            <p>
              AnimeRoom secured funding in May 2026 and now has 1,000 active
              users. That gives us a foundation to keep developing the studio
              and learning from the people who use it.
            </p>
            <p>
              Our ambition is to give anime fans more ways to create
              character-led short videos. The focus today is on making the
              roast-battle experience useful, enjoyable, and easy to follow.
            </p>
            <h2>Next, a studio in your pocket.</h2>
            <p>
              We&apos;re preparing AnimeRoom apps for iOS and Android. Both are
              coming soon, bringing our next chapter to the phone where fans
              watch and share their favourite reels.
            </p>
            <p>
              The web studio is available today. Check our mobile launch page
              for updates as the apps get closer to release.
            </p>
            <Link className="site-text-link" href="/mobile">
              iOS and Android, coming soon{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link className="site-text-link" href="/how-it-works">
              See how the studio works{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </article>
        </div>
        <div className="story-milestones">
          {milestones.map((milestone) => (
            <div key={milestone.label}>
              <strong>{milestone.value}</strong>
              <span>{milestone.label}</span>
            </div>
          ))}
        </div>
      </div>
      <CallToAction />
    </>
  );
}
