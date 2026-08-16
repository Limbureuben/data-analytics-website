import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "../components/MobileNav";

export const metadata: Metadata = {
  title: "Contact | digitalocean",
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
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/case-study">Case Study</Link>
          <Link href="/#blog">Blog</Link>
        </nav>
        <Link className="header-cta" href="/contact" aria-current="page">Contact Us</Link>
        <MobileNav />
      </header>

      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="contact-hero-inner">
          <div className="contact-hero-copy">
            <h1 id="contact-title"><span>Start a</span><span>conversation.</span></h1>
            <p>Tell us what you are building, researching, or trying to solve. We will help you identify the right next step.</p>
          </div>
          <div className="contact-hero-mark" aria-hidden="true">
            <span>Let&apos;s</span>
            <strong>talk.</strong>
          </div>
        </div>
      </section>

      <section className="contact-details" aria-label="Contact details">
        <div className="contact-details-intro">
          <h2>Reach us directly.</h2>
          <p>Choose the channel that works best for you. We will make sure your message reaches the right person.</p>
        </div>
        <dl>
          <div>
            <dt>Email</dt>
            <dd><a href="mailto:hello@digitaltownsquare.co.tz">hello@digitaltownsquare.co.tz <span aria-hidden="true">↗</span></a></dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd><a href="tel:+255744111221">+255 744 111 221 <span aria-hidden="true">↗</span></a></dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd><address>Palm Street, Mbezi Beach<br />Dar es Salaam, Tanzania</address></dd>
          </div>
          <div>
            <dt>Website</dt>
            <dd><a href="https://digitaltownsquare.co.tz">digitaltownsquare.co.tz <span aria-hidden="true">↗</span></a></dd>
          </div>
        </dl>
      </section>

      <section className="contact-context" aria-labelledby="contact-context-title">
        <h2 id="contact-context-title">Looking for more context first?</h2>
        <div>
          <p>Explore what we do or see how our work has helped organisations turn complex questions into measurable progress.</p>
          <nav aria-label="Explore more">
            <Link href="/services">Explore services <span aria-hidden="true">→</span></Link>
            <Link href="/case-study">View case studies <span aria-hidden="true">→</span></Link>
          </nav>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-company">
            <Logo footer />
            <address>Dar es Salaam, Tanzania</address>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <div>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
            </div>
            <div>
              <Link href="/case-study">Case Study</Link>
              <Link href="/#blog">Blog</Link>
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
              <span>Dar es Salaam, Tanzania</span>
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Cortex Data Indonesia</span>
          <span>Data intelligence for better decisions.</span>
        </div>
      </footer>
    </main>
  );
}
