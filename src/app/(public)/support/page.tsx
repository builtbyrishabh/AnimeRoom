import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { PageIntro } from "../_components/site-sections";

export const metadata: Metadata = {
  title: "Support & contact | AnimeRoom",
  description:
    "Contact AnimeRoom for help with video generation, billing, refunds, or content concerns.",
};

const links = [
  {
    title: "Common questions",
    description: "Get answers about generation, previews, and video exports.",
    href: "/faq",
  },
  {
    title: "Pricing & credits",
    description: "Understand signup credits and one-time credit packs.",
    href: "/pricing",
  },
  {
    title: "Refund policy",
    description: "See how failed generations and purchase refunds work.",
    href: "/legal/refund",
  },
];

export default function SupportPage() {
  return (
    <div className="site-container narrow-page">
      <PageIntro
        eyebrow="SUPPORT & CONTACT"
        title="A little help for your next reel."
        description="Need a hand with the studio, a purchase, or a video? Get in touch with the AnimeRoom team."
      />
      <div className="support-email">
        <div>
          <Mail size={25} aria-hidden="true" />
          <div>
            <span>EMAIL THE TEAM</span>
            <a href="mailto:support@animeroom.space">
              support@animeroom.space{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <p>
          Include the email on your account and a link to the video or purchase
          details, if relevant.
        </p>
      </div>
      <nav className="support-links" aria-label="Help resources">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <h2>
              {link.title}
              <ArrowUpRight size={16} aria-hidden="true" />
            </h2>
            <p>{link.description}</p>
          </Link>
        ))}
      </nav>
      <div className="support-details">
        <section>
          <h2>Found a bug?</h2>
          <p>
            Tell us what you were trying to do, what happened, and any error
            message you saw. A screenshot can help us understand the issue.
          </p>
        </section>
        <section>
          <h2>Have a content concern?</h2>
          <p>
            Send the video link and a description of your concern, including any
            relevant rights information. We&apos;ll review your report.
          </p>
        </section>
      </div>
    </div>
  );
}
