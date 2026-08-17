import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "../components/MobileNav";
import teamImage from "../../public/images/quality-assurance-team.png";
import analystsImage from "../../public/images/value-curiosity.png";
import leaderImage from "../../public/images/value-innovation.png";
import TeamCarousel from "./TeamCarousel";

export const metadata: Metadata = {
  title: "About Us | digitalocean",
  description:
    "Meet Cortex Data Indonesia, a social intelligence analytics company turning complex signals into trusted, decision-ready insight.",
};

const principles = [
  {
    number: "01",
    title: "Start with the real question",
    description:
      "We look beyond the brief to understand the decision, the people it affects and the evidence needed to move forward.",
  },
  {
    number: "02",
    title: "Make complexity useful",
    description:
      "We connect research, data engineering and analytics so complex information becomes clear direction, not another dashboard.",
  },
  {
    number: "03",
    title: "Build trust into the work",
    description:
      "We treat quality, context and responsible technology as part of every solution from the first signal to the final recommendation.",
  },
];

function Logo({ image = false }: { image?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="Cortex Data Indonesia home">
      {image ? (
        <Image
          className="brand-logo-image"
          src="/images/logo3.png"
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
            <span>CORTEX DATA</span>
            <span>INDONESIA</span>
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
          <Link href="/#blog">Blog</Link>
        </nav>
        <Link className="header-cta" href="/contact">
          Contact Us
        </Link>
        <MobileNav />
      </header>

      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero-copy">
          <h1 id="about-title">
            <span>Intelligence built for</span>
            <span>decisions that</span>
            <span>matter.</span>
          </h1>
          <p>
            We are a social intelligence analytics company helping organisations
            understand people, markets and society through trusted data, technology
            and human insight.
          </p>
          <a className="about-text-link" href="#our-story">
            Discover our story <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="about-hero-visual">
          <Image
            src={teamImage}
            alt="Black African analytics team collaborating in a data operations room"
            priority
            sizes="(max-width: 760px) 100vw, 58vw"
          />
          <div className="about-hero-card">
            <strong>Human context.</strong>
            <span>Decision-ready intelligence.</span>
          </div>
        </div>
      </section>

      <section className="about-story" id="our-story" aria-labelledby="story-title">
        <div className="about-story-copy">
          <h2 id="story-title">
            <span>Better decisions begin with a deeper</span>
            <span>understanding of the world behind the data.</span>
          </h2>
          <div className="about-story-columns">
            <p>
              Cortex brings social research, modern data platforms and analytical
              thinking together. We study the signals people leave behind, test them
              against real context and turn them into intelligence leaders can trust.
            </p>
            <p>
              Our work connects strategy with execution. From research design and data
              engineering to forecasting and digital products, one integrated team
              stays focused on the decision our client needs to make.
            </p>
          </div>
        </div>
      </section>

      <section className="about-facts" aria-label="Cortex at a glance">
        <article>
          <strong>4</strong>
          <span>Connected capabilities</span>
        </article>
        <article>
          <strong>2</strong>
          <span>Analytics centres of excellence</span>
        </article>
        <article>
          <strong>1</strong>
          <span>Integrated, client-first team</span>
        </article>
      </section>

      <section className="about-purpose" aria-labelledby="purpose-title">
        <div className="about-purpose-image">
          <Image
            src={leaderImage}
            alt="Black African analytics leader surrounded by blue data visualizations"
            sizes="(max-width: 760px) 100vw, 48vw"
          />
        </div>
        <div className="about-purpose-copy">
          <h2 id="purpose-title">
            <span>Make intelligence clearer,</span>
            <span>more useful and more human.</span>
          </h2>
          <p>
            Technology can reveal patterns at extraordinary speed. Human context makes
            those patterns meaningful. We combine both so organisations can act with
            confidence and create progress that lasts.
          </p>
          <div className="about-purpose-points">
            <div>
              <span>Understand</span>
              <p>See society, markets and behaviour with greater clarity.</p>
            </div>
            <div>
              <span>Decide</span>
              <p>Turn evidence into focused, practical choices.</p>
            </div>
            <div>
              <span>Improve</span>
              <p>Measure outcomes and keep learning from every action.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-principles" aria-labelledby="principles-title">
        <div className="about-principles-heading">
          <h2 id="principles-title">Principles that guide every engagement.</h2>
        </div>
        <div className="about-principles-grid">
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-team" aria-labelledby="team-title">
        <div className="about-team-copy">
          <h2 id="team-title">
            <span>Different disciplines.</span>
            <span>One shared</span>
            <span>standard.</span>
          </h2>
          <p>
            Researchers, data engineers, analysts, strategists and product thinkers
            work side by side. That combination helps us examine a challenge from every
            angle while giving clients one clear path forward.
          </p>
          <Link href="/services">Explore our capabilities <span aria-hidden="true">→</span></Link>
        </div>
        <div className="about-team-image">
          <Image
            src={analystsImage}
            alt="Two Black African data specialists reviewing analytics on a laptop"
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
      </section>

      <TeamCarousel />

      <section className="about-cta" aria-labelledby="about-cta-title">
        <h2 id="about-cta-title">Bring us the decision you need to make.</h2>
        <p>We will help you find the evidence, structure the question and build a clear way forward.</p>
        <a href="mailto:hello@cortexdata.id">Start a conversation <span aria-hidden="true">→</span></a>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-company">
            <Logo image />
            <address>
              Dar es Salaam, Tanzania
            </address>
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
