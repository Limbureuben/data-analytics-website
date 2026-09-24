import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "../components/MobileNav";
import ServiceFAQ from "./ServiceFAQ";

export const metadata: Metadata = {
  title: "Services | Digital Town Square",
  description: "Explore Digital Town Square's data, AI, media and venture services.",
};

const services: Array<{
  id: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
}> = [
  {
    id: "data-analytics",
    title: "Data & Analytics",
    tagline: "Insight. Evidence. Action.",
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
        <div className="utility-bar"><span>✉&nbsp;&nbsp; hello@digitaltownsquare.co.tz</span><span className="utility-divider">|</span><span>+255 744 111 221</span><nav className="utility-links"><Link href="/contact">Call</Link><span>/</span><Link href="/contact">Support</Link><span>/</span><Link href="/contact">Contact</Link></nav></div>
        <Logo useImage />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link className="active" href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/case-study">Case Study</Link>
        </nav>
        <Link className="header-cta" href="/contact">Get Solution</Link>
        <MobileNav />
      </header>

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
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <div>
              <Link href="/">HOME</Link>
              <Link href="/services">SERVICES</Link>
              <Link href="/about">ABOUT</Link>
            </div>
            <div>
              <Link href="/case-study">CASE STUDIES</Link>
              <Link href="/contact">CONTACT</Link>
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
