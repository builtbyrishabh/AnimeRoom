import Link from "next/link";
import { ArrowRight, Plus, Sparkles } from "lucide-react";
import { faqs } from "./content";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export function FaqList({ limit = faqs.length }: { limit?: number }) {
  return (
    <div className="faq-list">
      {faqs.slice(0, limit).map((faq) => (
        <details key={faq.question}>
          <summary>
            {faq.question}
            <Plus size={19} aria-hidden="true" />
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function CallToAction() {
  return (
    <section className="site-container cta-section">
      <div className="cta-panel">
        <div>
          <p className="eyebrow">
            <Sparkles size={14} aria-hidden="true" /> YOUR IMAGINATION HAS A NEW
            HOME
          </p>
          <h2>
            You&apos;ve got a matchup in mind.
            <br />
            Let&apos;s make a reel.
          </h2>
          <p>
            Start with a prompt. See what your favourite characters have to say.
          </p>
        </div>
        <Link className="site-button site-button-lime" href="/create">
          Start creating <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
