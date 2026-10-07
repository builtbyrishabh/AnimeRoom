import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CallToAction, FaqList, PageIntro } from "../_components/site-sections";

export const metadata: Metadata = {
  title: "Frequently asked questions | AnimeRoom",
  description:
    "Answers about AnimeRoom's anime roast-battle videos, signup credits, pricing, live generation, MP4 exports, and support.",
};

export default function FaqPage() {
  return (
    <>
      <div className="site-container narrow-page">
        <PageIntro
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="A little clarity before you create."
          description="Here's what to expect from the studio, how credits work, and where to find help."
        />
        <FaqList />
        <div className="help-panel">
          <div>
            <h2>Have another question?</h2>
            <p>Send us the details and we&apos;ll help you find an answer.</p>
          </div>
          <Link className="site-text-link" href="/support">
            Contact support <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <CallToAction />
    </>
  );
}
