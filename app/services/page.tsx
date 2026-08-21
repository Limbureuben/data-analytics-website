import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "../components/MobileNav";
import ServiceFAQ from "./ServiceFAQ";
import servicesHeroImage from "../../public/images/girl3.png";
import dataTeamImage from "../../public/images/value-curiosity.png";
import innovationTeamImage from "../../public/images/value-innovation.png";
import partnershipImage from "../../public/images/quality-assurance-team.png";

export const metadata: Metadata = {
  title: "Services | Digital Town Square",
  description: "Explore Digital Town Square's data, AI, media and venture services.",
};

const services: Array<{
  id: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  capabilities: string[];
}> = [
  {
    id: "data-analytics",
    title: "Data & Analytics",
    tagline: "Insight. Evidence. Action.",
    summary: "Turn complex data into clear insights, trusted dashboards and better decisions.",
    description: "We design and build data infrastructure, research frameworks, and interactive dashboards that help organizations understand their context and make better decisions.",
    capabilities: [
      "Research design & surveys",
      "Dashboards & visualization",
      "Monitoring & evaluation systems",
      "Market & audience analytics",
      "Predictive analytics",
    ],
  },
  {
    id: "technology-ai",
    title: "Technology & AI",
    tagline: "Systems that scale.",
    summary: "Build intelligent products, automation and scalable platforms around real needs.",
    description: "We build digital tools, automation workflows, and AI-powered solutions that make organizations more efficient and effective.",
    capabilities: [
      "Custom web & mobile platforms",
      "AI tools & automation",
      "SMS & USSD systems",
      "Data pipelines & APIs",
      "Custom ML models",
    ],
  },
  {
    id: "digital-media",
    title: "Digital Campaigns & Media",
    tagline: "Stories that move people.",
    summary: "Connect audience insight, creative content and media to deliver measurable impact.",
    description: "We produce and distribute campaigns across radio, digital, and community channels. Our approach blends behavioral science with creative storytelling.",
    capabilities: [
      "Behavior change campaigns",
      "Social media strategy & content",
      "Radio & podcast production",
      "Community engagement programs",
    ],
  },
  {
    id: "innovation-ventures",
    title: "Innovation & Ventures",
    tagline: "Ideas into products.",
    summary: "Validate bold ideas quickly and build new ventures designed for sustainable growth.",
    description: "We co-develop new products, support incubation, and help organizations move from concept to market-ready solutions.",
    capabilities: [
      "Product discovery & prototyping",
      "Innovation sprints",
      "Startup incubation support",
      "Go-to-market strategy",
      "MVP development",
    ],
  },
];

function Logo({ useImage = false, footer = false }: { useImage?: boolean; footer?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="Digital Town Square home">
      {useImage ? (
        <Image
          className="brand-logo-image"
          src={footer ? "/images/logo2.png" : "/images/logo3.png"}
          alt=""
          width={112}
          height={45}
          priority
        />
      ) : (
        <svg className="brand-mark" viewBox="0 0 38 42" aria-hidden="true">
          <path d="M19 0 38 10.5 27.7 16 19 11.2 10 16.2v10.2l9 4.8 8.8-4.8L38 32 19 42 0 31.5v-21Z" />
        </svg>
      )}
      {!useImage && <span className="brand-name"><span>DIGITAL TOWN</span><span>SQUARE</span></span>}
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <main className="services-page">
      <header className="site-header">
        <Logo useImage />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link className="active" href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/case-study">Case Study</Link>
        </nav>
        <Link className="header-cta" href="/contact">Contact Us</Link>
        <MobileNav />
      </header>

      <section className="services-card-hero">
        <Image
          className="services-card-hero-image"
          src={servicesHeroImage}
          alt="Black African technology consultant seated with a laptop"
          priority
          sizes="100vw"
        />
        <div className="services-card-hero-copy">
          <h1>Great ideas.<br />Real opportunity.</h1>
          <p>Data, technology, media and venture expertise working together to create measurable progress.</p>
          <a href="#services-grid">Explore services <span aria-hidden="true">→</span></a>
        </div>
        <div className="services-hero-note services-hero-note-top"><span>✦</span> Strategy meets execution</div>
        <div className="services-hero-note services-hero-note-bottom"><strong>4</strong> connected capabilities</div>
      </section>

      <section className="services-feature-row" aria-label="Featured ways to work with us">
        <article className="services-feature-card">
          <div className="services-feature-copy">
            <h2>For Organisations</h2>
            <p>Transform complex challenges with an integrated team of data, technology and media experts.</p>
            <Link href="/contact">Build with us</Link>
          </div>
          <Image src={dataTeamImage} alt="Black African data specialists collaborating" sizes="(max-width: 760px) 45vw, 240px" />
        </article>
        <article className="services-feature-card">
          <div className="services-feature-copy">
            <h2>For Innovators</h2>
            <p>Validate new ideas, create intelligent products and turn opportunities into scalable ventures.</p>
            <Link href="/contact">Start an idea</Link>
          </div>
          <Image src={innovationTeamImage} alt="Black African innovator developing a new digital product" sizes="(max-width: 760px) 45vw, 240px" />
        </article>
      </section>

      <section className="services-card-grid" id="services-grid" aria-label="Our services">
        <div className="services-list-heading">
          <div><h2>Our services</h2><p>Four capabilities. One integrated team.</p></div>
          <Link href="/contact">Start a conversation</Link>
        </div>
        <div className="services-card-row">
          {services.map((service) => (
            <article className="services-page-card" id={service.id} key={service.id}>
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <ul>{service.capabilities.slice(0, 3).map((capability) => <li key={capability}>{capability}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="service-lines" aria-labelledby="service-lines-title">
        <header className="service-lines-intro">
          <h2 id="service-lines-title">OUR SERVICE</h2>
          <p>We work at the intersection of data, technology, and media to deliver solutions that create real impact.</p>
        </header>

        <div className="service-lines-list">
          {services.map((service) => (
            <article className="service-line" key={`${service.id}-details`}>
              <div className="service-line-heading">
                <h3>{service.title}</h3>
                <p>{service.tagline}</p>
              </div>
              <div className="service-line-body">
                <p>{service.description}</p>
                <h4>Capabilities</h4>
                <ul>
                  {service.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="how-we-work" aria-labelledby="how-we-work-title">
        <header className="how-we-work-heading">
          <p>How We Work</p>
          <h2 id="how-we-work-title">A clear process, every time.</h2>
        </header>

        <ol className="how-we-work-steps">
          <li>
            <span>01</span>
            <h3>Research</h3>
            <p>We listen, analyze, and understand the problem space before anything else.</p>
          </li>
          <li>
            <span>02</span>
            <h3>Design</h3>
            <p>We shape strategies and solutions that are grounded in evidence and insight.</p>
          </li>
          <li>
            <span>03</span>
            <h3>Build</h3>
            <p>We develop systems, campaigns, and platforms with precision and craft.</p>
          </li>
          <li>
            <span>04</span>
            <h3>Scale</h3>
            <p>We measure impact and iterate to drive sustainable, scalable results.</p>
          </li>
        </ol>
      </section>

      <section className="services-partnership" aria-labelledby="services-partnership-title">
        <div className="services-partnership-inner">
          <div className="services-partnership-copy">
            <h2 id="services-partnership-title">Good work happens <em>together.</em></h2>
            <p>We work alongside your people, bring the right specialists into the room and keep every decision focused on meaningful progress.</p>
          </div>
          <div className="services-partnership-image">
            <Image
              src={partnershipImage}
              alt="A collaborative technology team celebrating progress together"
              sizes="(max-width: 760px) calc(100vw - 48px), 34vw"
            />
            <div className="services-partnership-stamp"><strong>ONE TEAM</strong><span>Shared momentum</span></div>
          </div>
          <ol className="services-partnership-principles">
            <li><span>01</span><strong>Senior attention</strong><p>Experienced people stay close to the work from start to finish.</p></li>
            <li><span>02</span><strong>Built together</strong><p>Your team is part of the process, building confidence and lasting capability.</p></li>
            <li><span>03</span><strong>Visible progress</strong><p>Clear priorities, open communication and outcomes that can be measured.</p></li>
          </ol>
        </div>
      </section>

      <ServiceFAQ />

      <section className="services-next-step" aria-labelledby="services-next-step-title">
        <div className="services-next-step-inner">
          <h2 id="services-next-step-title"><span>Bring us the</span><span>hard question.</span></h2>
          <div className="services-next-step-copy">
            <p>Whether you are starting with an ambitious idea or a challenge that needs a fresh perspective, we are ready to explore what comes next.</p>
            <div>
              <Link href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
              <Link href="/case-study">View our work</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-company">
            <Logo useImage footer />
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
