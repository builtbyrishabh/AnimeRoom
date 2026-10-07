import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation } from "./content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <div>
            <Link href="/" className="site-brand" aria-label="AnimeRoom home">
              <span className="brand-icon">
                <Image
                  src="/website/logo-trimmed.png"
                  alt=""
                  width={28}
                  height={28}
                />
              </span>
              AnimeRoom<span className="brand-period">.</span>
            </Link>
            <p>
              A creative home for anime fans.
              <br />
              An idea today. A reel tomorrow.
            </p>
          </div>
          <nav aria-label="Product links">
            <span>Explore</span>
            {navigation.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Support and legal links">
            <span>Here to help</span>
            <Link href="/support">Support & contact</Link>
            <Link href="/legal/privacy">Privacy policy</Link>
            <Link href="/legal/terms">Terms of service</Link>
            <Link href="/legal/refund">Refund policy</Link>
          </nav>
          <div className="footer-contact">
            <span>LET&apos;S TALK</span>
            <a href="mailto:support@animeroom.space">
              Get in touch <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <p>
              Questions, feedback,
              <br />
              or a matchup we should try?
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AnimeRoom</p>
          <p>
            Independent and fan-made. Not affiliated with anime studios or
            rights holders.
          </p>
        </div>
      </div>
    </footer>
  );
}
