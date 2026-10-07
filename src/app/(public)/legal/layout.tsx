import Link from "next/link";
import type { ReactNode } from "react";

const tabs = [
  { title: "Terms of service", href: "/legal/terms" },
  { title: "Privacy policy", href: "/legal/privacy" },
  { title: "Refund policy", href: "/legal/refund" },
];

export default function LegalLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="site-container legal-page">
      <nav className="legal-tabs" aria-label="Legal policies">
        {tabs.map((tab) => (
          <Link href={tab.href} key={tab.href}>
            {tab.title}
          </Link>
        ))}
      </nav>
      <article className="legal-article">{children}</article>
    </div>
  );
}
