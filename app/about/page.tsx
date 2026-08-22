import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "../components/MobileNav";
import WhoWeAreSection from "./WhoWeAreSection";

export const metadata: Metadata = {
  title: "About Us | Digital Town Square",
  description:
    "Meet Digital Town Square, a social intelligence analytics company turning complex signals into trusted, decision-ready insight.",
};

function Logo({ image = false, footer = false }: { image?: boolean; footer?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="Digital Town Square home">
      {image ? (
        <Image
          className="brand-logo-image"
          src={footer ? "/images/logo2.png" : "/images/logo3.png"}
          alt=""
          width={112}
          height={45}
          priority
        />
      ) : (
        <>
          <svg className="brand-mark" viewBox="0 0 38 42" aria-hidden="true">
            <path d="M19 0 38 10.5 27.7 16 19 11.2 10 16.2v10.2l9 4.8 8.8-4.8L38 32 19 42 0 31.5v-21Z" />
          </svg>
          <span className="brand-name">
            <span>DIGITAL TOWN</span>
            <span>SQUARE</span>
          </span>
        </>
      )}
    </Link>
  );
}

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="site-header">
        <Logo image />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link className="active" href="/about" aria-current="page">
            About
          </Link>
          <Link href="/case-study">Case Study</Link>
        </nav>
        <Link className="header-cta" href="/contact">
          Contact Us
        </Link>
        <MobileNav />
      </header>

      <WhoWeAreSection />

      <section className="about-cta" aria-labelledby="about-cta-title">
        <h2 id="about-cta-title">Bring us the decision you need to make.</h2>
        <p>We will help you find the evidence, structure the question and build a clear way forward.</p>
        <Link href="/contact">
          Start a conversation <span aria-hidden="true">→</span>
        </Link>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-company">
            <Logo image footer />
            <address>Palm Street-Mbezi Beach, Dar es Salaam, Tanzania</address>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <div>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
            </div>
            <div>
              <Link href="/case-study">Case Study</Link>
              <Link href="/services">Products</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
          <div className="footer-contact">
            <a href="mailto:hello@digitaltownsquare.co.tz">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              <span>hello@digitaltownsquare.co.tz</span>
            </a>
            <a href="tel:+255744111221">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 3h3l1.5 5-2 1.5a15 15 0 0 0 5 5L16 12.5l5 1.5v3c0 2.2-1.8 4-4 4C9.3 21 3 14.7 3 7c0-2.2 1.8-4 4-4Z" />
              </svg>
              <span>+255 744 111 221</span>
            </a>
            <span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>Palm Street-Mbezi Beach, Dar es Salaam, Tanzania</span>
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Digital Town Square</span>
          <span>Data intelligence for better decisions.</span>
        </div>
      </footer>
    </main>
  );
}
