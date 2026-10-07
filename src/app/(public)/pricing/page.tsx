import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { CREDIT_PACKAGE } from "~/config/credits/package";
import { SIGNUP_BONUS_CREDITS } from "~/config/credits/welcome";
import { CallToAction, PageIntro } from "../_components/site-sections";

export const metadata: Metadata = {
  title: "Pricing | AnimeRoom",
  description:
    "Try AnimeRoom with free signup credits, then buy one-time credit packs. No subscription or recurring renewal.",
};

const included = [
  "AI-written roast-battle dialogue",
  "Generated character visuals and voices",
  "Live preview as scenes become ready",
  "Vertical video with MP4 export",
];

export default function PricingPage() {
  return (
    <>
      <div className="site-container">
        <PageIntro
          eyebrow="SIMPLE, ONE-TIME PRICING"
          title="Start with an idea. Keep creating at your pace."
          description="Try the studio with free signup credits. Top up when you're ready for more. No subscription or recurring renewal."
        />
        <div className="pricing-grid">
          <article className="price-card">
            <span className="eyebrow">YOUR FIRST REELS</span>
            <h2>Welcome credits</h2>
            <div className="price-amount">Free</div>
            <p>{SIGNUP_BONUS_CREDITS} credits when you create an account</p>
            <ul>
              {included.map((feature) => (
                <li key={feature}>
                  <Check size={16} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link className="site-button site-button-outline" href="/create">
              Try the studio <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <small>Signup credits are granted once per account.</small>
          </article>
          {CREDIT_PACKAGE.map((pack) => (
            <article className="price-card price-card-featured" key={pack.id}>
              <span className="price-badge">
                <Sparkles size={13} aria-hidden="true" /> KEEP THE IDEAS COMING
              </span>
              <span className="eyebrow">ONE-TIME CREDIT PACK</span>
              <h2 className="capitalize">{pack.id} pack</h2>
              <div className="price-amount">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 2,
                }).format(pack.priceInCents / 100)}
                <span>one time</span>
              </div>
              <p>{pack.credits} credits to create more reels</p>
              <ul>
                {included.map((feature) => (
                  <li key={feature}>
                    <Check size={16} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link className="site-button" href="/billing">
                Get {pack.credits} credits{" "}
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <small>Sign in to buy credits. Payments handled by Stripe.</small>
            </article>
          ))}
        </div>
        <div className="pricing-notes">
          <article>
            <h3>One generation, one credit.</h3>
            <p>
              A credit is used when you start generating a video. You can check
              your balance in the studio.
            </p>
          </article>
          <article>
            <h3>Failed generations are refunded.</h3>
            <p>
              If generation fails because of a technical error, the credit is
              returned automatically.{" "}
              <Link href="/legal/refund">Read the refund policy.</Link>
            </p>
          </article>
        </div>
        <p className="pricing-legal">
          Purchases are subject to our{" "}
          <Link href="/legal/terms">terms of service</Link> and{" "}
          <Link href="/legal/refund">refund policy</Link>.
        </p>
      </div>
      <CallToAction />
    </>
  );
}
