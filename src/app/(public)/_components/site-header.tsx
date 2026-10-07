"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "./content";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link
          href="/"
          className="site-brand"
          aria-label="AnimeRoom home"
          onClick={() => setMenuOpen(false)}
        >
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
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="sign-in-link" href="/login">
            Sign in
          </Link>
          <Link className="site-button site-button-small" href="/create">
            Open studio <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
      <nav
        className="mobile-nav"
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        {navigation.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        ))}
        <Link href="/support" onClick={() => setMenuOpen(false)}>
          Support <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <Link href="/login" onClick={() => setMenuOpen(false)}>
          Sign in <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}
