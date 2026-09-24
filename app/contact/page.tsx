import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "../components/MobileNav";
import AsyncMap from "./AsyncMap";

export const metadata: Metadata = {
  title: "Contact | Digital Town Square",
  description: "Start a conversation with the Digital Town Square team.",
};

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="Digital Town Square home">
      <Image
        className="brand-logo-image"
        src={footer ? "/images/logo2.png" : "/images/logo3.png"}
        alt=""
        width={112}
        height={45}
        priority={!footer}
      />
    </Link>
  );
}

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="site-header">
        <div className="utility-bar"><span>✉&nbsp;&nbsp; hello@digitaltownsquare.co.tz</span><span className="utility-divider">|</span><span>+255 744 111 221</span><nav className="utility-links"><Link href="/contact">Call</Link><span>/</span><Link href="/contact">Support</Link><span>/</span><Link href="/contact">Contact</Link></nav></div>
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/case-study">Case Study</Link>
        </nav>
        <Link className="header-cta" href="/contact" aria-current="page">Get Solution</Link>
        <MobileNav />
      </header>

      <section className="contact-hero" aria-labelledby="contact-title">
        <Image
          className="contact-hero-image"
          src="/images/contact-dar-skyline.png"
          alt="Dar es Salaam skyline viewed from the waterfront"
          fill
          sizes="100vw"
          priority
        />
        <div className="contact-hero-overlay" aria-hidden="true" />
        <div className="contact-hero-inner">
          <h1 id="contact-title">Contact us</h1>
          <span className="contact-hero-rule" aria-hidden="true"><i /><i /><i /><i /><i /></span>
          <p>Tell us what you are building, researching, or trying to solve. We will help you identify the right next step.</p>
        </div>
      </section>

      <section className="contact-details" aria-label="Contact details">
        <div className="contact-details-heading">
          <span>Reach us directly</span>
          <h2>Choose the channel that works for you.</h2>
        </div>
        <div className="contact-channel-grid">
          <article className="contact-channel-card">
            <span className="contact-channel-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32"><path d="M5 14.5 16 5l11 9.5" /><path d="M8 13v13h16V13M13 26v-8h6v8" /></svg>
            </span>
            <h3>Visit us</h3>
            <p>Come and meet our team in Dar es Salaam.</p>
            <address>Palm Street-Mbezi Beach,<br />Dar es Salaam, Tanzania</address>
          </article>

          <article className="contact-channel-card">
            <span className="contact-channel-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32"><path d="M8.5 5h5l2.4 7.2-3.3 2.4a20.5 20.5 0 0 0 5 5l2.3-3.4L27 18.7v4.8a3.5 3.5 0 0 1-3.5 3.5C13.3 27 5 18.7 5 8.5A3.5 3.5 0 0 1 8.5 5Z" /></svg>
            </span>
            <h3>Call us</h3>
            <p>Speak directly with our team during business hours.</p>
            <a href="tel:+255744111221">+255 744 111 221</a>
          </article>

          <article className="contact-channel-card">
            <span className="contact-channel-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32"><rect x="4" y="7" width="24" height="18" rx="2" /><path d="m5 9 11 9 11-9" /></svg>
            </span>
            <h3>Email us</h3>
            <p>Send us the context and we will connect you with the right person.</p>
            <a href="mailto:hello@digitaltownsquare.co.tz">hello@digitaltownsquare.co.tz</a>
            <a className="contact-website" href="https://digitaltownsquare.co.tz">digitaltownsquare.co.tz <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section className="contact-location" aria-labelledby="contact-location-title">
        <div className="contact-location-map">
          <AsyncMap />
        </div>
        <div className="contact-location-copy">
          <span className="contact-location-kicker">Dar es Salaam · Tanzania</span>
          <h2 id="contact-location-title">Find us in Dar es Salaam.</h2>
          <p>Looking for more context first? Explore our capabilities or see how our work turns complex questions into measurable progress.</p>
          <nav aria-label="Explore more">
            <a href="https://www.google.com/maps/search/?api=1&amp;query=Palm%20Street-Mbezi%20Beach%2C%20Dar%20es%20Salaam%2C%20Tanzania" target="_blank" rel="noreferrer">Open full map <span aria-hidden="true">↗</span></a>
            <Link href="/services">Explore services <span aria-hidden="true">→</span></Link>
            <Link href="/case-study">View case studies <span aria-hidden="true">→</span></Link>
          </nav>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-company">
            <Logo footer />
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <div>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
            </div>
            <div>
              <Link href="/case-study">Case Study</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
          <div className="footer-contact">
            <a href="mailto:hello@digitaltownsquare.co.tz">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
              <span>hello@digitaltownsquare.co.tz</span>
            </a>
            <a href="tel:+255744111221">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h3l1.5 5-2 1.5a15 15 0 0 0 5 5L16 12.5l5 1.5v3c0 2.2-1.8 4-4 4C9.3 21 3 14.7 3 7c0-2.2 1.8-4 4-4Z" /></svg>
              <span>+255 744 111 221</span>
            </a>
            <span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
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
