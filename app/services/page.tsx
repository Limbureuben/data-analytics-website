import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import servicesHeroImage from "../../public/images/girl3.png";
import dataTeamImage from "../../public/images/value-curiosity.png";
import innovationTeamImage from "../../public/images/value-innovation.png";

export const metadata: Metadata = {
  title: "Services | Cortex Data Indonesia",
  description: "Explore Cortex Data Indonesia's data, AI, media and venture services.",
};

const services: Array<{
  id: string;
  number: string;
  title: string;
  lead: string;
  description: string;
  capabilities: string[];
  deliverable: string;
}> = [
  {
    id: "data-analytics",
    number: "01",
    title: "Data & Analytics",
    lead: "From fragmented information to a trusted foundation for better decisions.",
    description: "Turn complex data into clear insights, trusted dashboards and better decisions.",
    capabilities: ["Data strategy & governance", "Cloud data platforms", "Business intelligence"],
    deliverable: "Reliable data products, clear dashboards and practical insight your teams can act on.",
  },
  {
    id: "technology-ai",
    number: "02",
    title: "Technology & AI",
    lead: "Useful, responsible technology designed around people and measurable outcomes.",
    description: "Build intelligent products, automation and scalable platforms around real needs.",
    capabilities: ["AI strategy & prototyping", "Product engineering", "Workflow automation"],
    deliverable: "Production-ready digital solutions that are secure, scalable and easy to use.",
  },
  {
    id: "digital-media",
    number: "03",
    title: "Digital Campaigns & Media",
    lead: "Campaigns that connect creative ideas with evidence and audience intelligence.",
    description: "Connect audience insight, creative content and media to deliver measurable impact.",
    capabilities: ["Audience intelligence", "Campaign strategy", "Content & creative"],
    deliverable: "Integrated campaigns with a clear message, measurable reach and transparent performance.",
  },
  {
    id: "innovation-ventures",
    number: "04",
    title: "Innovation & Ventures",
    lead: "A disciplined path from promising opportunity to validated new venture.",
    description: "Validate bold ideas quickly and build new ventures designed for sustainable growth.",
    capabilities: ["Opportunity discovery", "Venture design", "Rapid validation"],
    deliverable: "Validated concepts, investable business models and a practical roadmap to market.",
  },
];

function Logo({ useImage = false }: { useImage?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="Cortex Data Indonesia home">
      {useImage ? (
        <Image className="brand-logo-image" src="/images/logo3.png" alt="" width={112} height={45} priority />
      ) : (
        <svg className="brand-mark" viewBox="0 0 38 42" aria-hidden="true">
          <path d="M19 0 38 10.5 27.7 16 19 11.2 10 16.2v10.2l9 4.8 8.8-4.8L38 32 19 42 0 31.5v-21Z" />
        </svg>
      )}
      {!useImage && <span className="brand-name"><span>CORTEX DATA</span><span>INDONESIA</span></span>}
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
          <Link href="/#about">About</Link>
          <Link href="/#case-study">Case Study</Link>
          <Link href="/#blog">Blog</Link>
        </nav>
        <a className="header-cta" href="mailto:hello@cortexdata.id">Contact Us</a>
      </header>

      <section className="services-card-hero">
        <Image
          className="services-card-hero-image"
          src={servicesHeroImage}
          alt="Technology consultant seated with a laptop"
          priority
          sizes="100vw"
        />
        <div className="services-card-hero-copy">
          <span>CONNECTED EXPERTISE</span>
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
            <a href="mailto:hello@cortexdata.id">Build with us</a>
          </div>
          <Image src={dataTeamImage} alt="Data specialists collaborating" sizes="(max-width: 760px) 45vw, 240px" />
        </article>
        <article className="services-feature-card">
          <div className="services-feature-copy">
            <h2>For Innovators</h2>
            <p>Validate new ideas, create intelligent products and turn opportunities into scalable ventures.</p>
            <a href="mailto:hello@cortexdata.id">Start an idea</a>
          </div>
          <Image src={innovationTeamImage} alt="Innovator developing a new digital product" sizes="(max-width: 760px) 45vw, 240px" />
        </article>
      </section>

      <section className="services-card-grid" id="services-grid" aria-label="Our services">
        <div className="services-list-heading">
          <div><h2>Our services</h2><p>Four capabilities. One integrated team.</p></div>
          <a href="mailto:hello@cortexdata.id">Start a conversation</a>
        </div>
        <div className="services-card-row">
          {services.map((service) => (
            <article className="services-page-card" id={service.id} key={service.id}>
              <div className="service-card-symbol">{service.number}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul>{service.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <footer className="services-page-footer"><Logo /><span>© 2026 Cortex Data Indonesia</span><Link href="/">Back to home</Link></footer>
    </main>
  );
}
