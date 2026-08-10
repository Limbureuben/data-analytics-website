"use client";

import { useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import amrefLogo from "../public/images/logo/amref.D_gciFgG_Z2lzEDA.webp";
import cocaColaLogo from "../public/images/logo/coca-cola.CfzaD0v2_Z1Qy61w.webp";
import codeForAfricaLogo from "../public/images/logo/code-for-africa.CJsdx67A_Z1Xqcp0.webp";
import gatesLogo from "../public/images/logo/gates.QI4kBQ6m_yUIuA.webp";
import girlEffectLogo from "../public/images/logo/girl-effect.DkP8gJTw_1I4USr.webp";
import googleLogo from "../public/images/logo/google.C_u1S10g_1yPGEK.webp";
import hatchingHopeLogo from "../public/images/logo/hatching-hope.D4t6hUJb_2f7gIM.webp";
import hdifLogo from "../public/images/logo/hdif.BY1JffnW_Z1F6m6r.webp";
import ilriLogo from "../public/images/logo/ilri.BbaZdSwj_Z1rB9i9.webp";
import twawezaLogo from "../public/images/logo/twaweza.DM6YyWFn_2mRe9c.webp";
import undpLogo from "../public/images/logo/undp.-hKkppJN_16WllA.webp";
import usaidLogo from "../public/images/logo/usaid.Coh413GZ_q0Lge.webp";
import venture37Logo from "../public/images/logo/venture37.DBRp6bAj_1X4vqr.webp";
import vodacomLogo from "../public/images/logo/vodacom.DDqwzXYW_Z3DoeG.webp";
import marketImage from "../public/images/market.png";
import peopleImage from "../public/images/people.png";
import qualityAssuranceImage from "../public/images/quality-assurance-team.png";
import societyImage from "../public/images/society.png";
import valueClientImage from "../public/images/value-client-first.png";
import valueCuriosityImage from "../public/images/value-curiosity.png";
import valueInnovationImage from "../public/images/value-innovation.png";

const navigation = ["Home", "Services", "About", "Case Study", "Blog"];
const serviceLinks = [
  { label: "Data & Analytics", href: "/services#data-analytics" },
  { label: "Technology & AI", href: "/services#technology-ai" },
  { label: "Digital Campaigns & Media", href: "/services#digital-media" },
  { label: "Innovation & Ventures", href: "/services#innovation-ventures" },
];
const SCRUB_DURATION_SECONDS = 5;
const CONTENT_REVEAL_TIME_SECONDS = 3;

const understandingCards: Array<{
  title: string;
  image: StaticImageData;
  alt: string;
}> = [
  {
    title: "Society",
    image: societyImage,
    alt: "A busy boulevard running through Jakarta's city center",
  },
  {
    title: "Market",
    image: marketImage,
    alt: "Black African women selecting produce at a vibrant open-air market",
  },
  {
    title: "People",
    image: peopleImage,
    alt: "Black African pedestrians walking across a graphic black-and-white crossing",
  },
];

const partners = [
  { name: "AMREF Health Africa", image: amrefLogo },
  { name: "Coca-Cola", image: cocaColaLogo },
  { name: "Code for Africa", image: codeForAfricaLogo },
  { name: "Gates Foundation", image: gatesLogo },
  { name: "Girl Effect", image: girlEffectLogo },
  { name: "Google", image: googleLogo },
  { name: "Hatching Hope Foundation", image: hatchingHopeLogo },
  { name: "Human Development Innovation Fund", image: hdifLogo },
  { name: "International Livestock Research Institute", image: ilriLogo },
  { name: "Twaweza", image: twawezaLogo },
  { name: "United Nations Development Programme", image: undpLogo },
  { name: "USAID", image: usaidLogo },
  { name: "Land O'Lakes Venture37", image: venture37Logo },
  { name: "Vodacom", image: vodacomLogo },
];

const values = [
  {
    title: "ANALYTICAL CURIOSITY",
    description:
      "We question every signal, explore every dataset and test assumptions to uncover patterns that turn complex information into clear, actionable insight.",
    image: valueCuriosityImage,
    alt: "Black African data analysts exploring charts together on a laptop",
  },
  {
    title: "BOLD EXPERIMENTATION",
    description:
      "We combine predictive analytics, statistical modelling and responsible AI to discover smarter approaches, validate ideas and improve every decision.",
    image: valueInnovationImage,
    alt: "Black African analytics leader surrounded by predictive data visualizations",
  },
  {
    title: "CLIENT-FIRST INTELLIGENCE",
    description:
      "We design dashboards, forecasts and data strategies around real client goals—delivering measurable outcomes, not analytics for analytics' sake.",
    image: valueClientImage,
    alt: "Black African data consultant presenting dashboard insights to clients",
  },
];

const capabilities = [
  {
    icon: "research",
    title: "SOCIAL INTELLIGENCE RESEARCH",
    description: (
      <>
        <strong>Two analytics centres of excellence</strong> coordinate data collection,
        verification and insight delivery across audience, market and behavioural research.
      </>
    ),
    detail: "Full-time research scientists, data auditors and field operations specialists.",
  },
  {
    icon: "engineering",
    title: "DATA ENGINEERING",
    description: (
      <>
        We use <strong>modern cloud data technology</strong> to build reliable pipelines,
        automate quality checks and accelerate analytics delivery at scale.
      </>
    ),
    detail: "Full-time data engineers, analytics engineers and business intelligence experts.",
  },
  {
    icon: "client",
    title: "CLIENT-FIRST ANALYTICS",
    description: (
      <>
        Our <strong>experienced analytics consultants</strong> transform social, market and
        operational data into clear recommendations tied to client objectives.
      </>
    ),
    detail: "Dedicated expertise in research, data science, forecasting and decision intelligence.",
  },
];

function CapabilityIcon({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      {type === "research" && (
        <>
          <path d="M5 25V12m7 13V7m7 18v-9" />
          <path d="M23.5 18.5 28 23m-2-9a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
        </>
      )}
      {type === "engineering" && (
        <>
          <path d="m16 4 10 5.8v12.4L16 28 6 22.2V9.8Z" />
          <path d="m6 10 10 6 10-6M16 16v12M11 7l10 6M21 7l-10 6M6 22l10-6 10 6" />
        </>
      )}
      {type === "client" && (
        <>
          <circle cx="12" cy="13" r="3" />
          <circle cx="21.5" cy="10" r="2.5" />
          <path d="M6 25c.4-5 2.4-7.5 6-7.5s5.6 2.5 6 7.5M18 15c4.6-.7 7.3 2 8 6" />
        </>
      )}
    </svg>
  );
}

const coreServices = [
  {
    number: "01",
    title: "Data & Analytics",
    description:
      "Turn complex data into clear direction through modern data platforms, business intelligence, predictive modelling and decision-ready dashboards.",
  },
  {
    number: "02",
    title: "Technology & AI",
    description:
      "Build intelligent digital products with scalable cloud architecture, responsible AI, automation and machine-learning solutions designed around real needs.",
  },
  {
    number: "03",
    title: "Digital Campaigns & Media",
    description:
      "Create measurable audience impact with research-led strategy, compelling content, precision media planning and continuous campaign optimisation.",
  },
  {
    number: "04",
    title: "Innovation & Ventures",
    description:
      "Move ambitious ideas from opportunity to market through venture design, rapid validation, product incubation and strategic growth partnerships.",
  },
];

function ServiceIcon({ number }: { number: string }) {
  const index = Number(number);
  return (
    <svg viewBox="0 0 56 56" aria-hidden="true">
      {index === 1 && <><rect x="7" y="10" width="42" height="31" rx="6" /><path d="M16 20v8m-4-4h8m21-2h-8M17 48h22" /></>}
      {index === 2 && <><rect x="8" y="9" width="34" height="39" rx="4" /><path d="m22 27 24-14 3 6-24 14-8 1Z" /></>}
      {index === 3 && <><path d="m28 5 16 7v13c0 11-6.5 19-16 25-9.5-6-16-14-16-25V12Z" /><circle cx="28" cy="26" r="8" /><path d="m34 32 6 6" /></>}
      {index === 4 && <><path d="M16 8v9H7m33-9v9h9M16 48v-9H7m33 9v-9h9" /><circle cx="28" cy="28" r="10" /></>}
      {index === 5 && <><rect x="10" y="6" width="36" height="44" rx="9" /><path d="M20 23h16M23 33h10" /></>}
      {index === 6 && <><path d="M8 44V34m12 10V27m12 17V20m12 24V11" /><path d="m8 27 12-11 10 6L45 7m-8 0h8v8" /></>}
    </svg>
  );
}

function CortexLogo({ useImage = false }: { useImage?: boolean }) {
  return (
    <a className="brand" href="#home" aria-label="Cortex Data Indonesia home">
      {useImage ? (
        <Image className="brand-logo-image" src="/images/logo3.png" alt="" width={112} height={45} priority />
      ) : (
        <svg className="brand-mark" viewBox="0 0 38 42" aria-hidden="true">
          <path d="M19 0 38 10.5 27.7 16 19 11.2 10 16.2v10.2l9 4.8 8.8-4.8L38 32 19 42 0 31.5v-21Z" />
        </svg>
      )}
      {!useImage && (
        <span className="brand-name">
          <span>CORTEX DATA</span>
          <span>INDONESIA</span>
        </span>
      )}
    </a>
  );
}

export default function Home() {
  const pageRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroScrollRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const scrollScene = heroScrollRef.current;
    if (!video || !scrollScene) return;

    let frameRequest = 0;
    let metadataReady = video.readyState >= 1;
    let targetTime = 0;
    let renderedTime = 0;
    let previousFrameTime = performance.now();
    let previousSeekTime = 0;

    video.pause();

    const calculateTargetTime = () => {
      if (!metadataReady || !Number.isFinite(video.duration)) return 0;
      const bounds = scrollScene.getBoundingClientRect();
      const scrollDistance = Math.max(bounds.height - window.innerHeight, 1);
      const progress = Math.min(Math.max(-bounds.top / scrollDistance, 0), 1);
      const scrubDuration = Math.min(SCRUB_DURATION_SECONDS, Math.max(video.duration - 0.04, 0));
      return progress * scrubDuration;
    };

    const renderVideoFrame = (timestamp: number) => {
      frameRequest = 0;
      if (!metadataReady) return;

      const elapsed = Math.min(timestamp - previousFrameTime, 50);
      previousFrameTime = timestamp;
      const distance = targetTime - renderedTime;

      if (Math.abs(distance) < 0.004) {
        renderedTime = targetTime;
      } else {
        // Time-based damping feels consistent on both 60 Hz and 120 Hz screens.
        const smoothing = 1 - Math.exp(-elapsed * 0.014);
        renderedTime += distance * smoothing;
      }

      // Decode at a cinematic 30 fps at most. Waiting for an active seek to
      // finish prevents queued decodes and visible frame stacking.
      const canRequestFrame = timestamp - previousSeekTime >= 33;
      if (
        canRequestFrame &&
        !video.seeking &&
        Math.abs(video.currentTime - renderedTime) > 0.006
      ) {
        video.currentTime = renderedTime;
        previousSeekTime = timestamp;
      }

      if (
        Math.abs(targetTime - renderedTime) >= 0.004 ||
        Math.abs(video.currentTime - targetTime) >= 0.006 ||
        video.seeking
      ) {
        frameRequest = window.requestAnimationFrame(renderVideoFrame);
      }
    };

    const handleViewportChange = () => {
      targetTime = calculateTargetTime();
      heroContentRef.current?.classList.toggle(
        "is-visible",
        targetTime >= CONTENT_REVEAL_TIME_SECONDS,
      );
      if (!frameRequest) {
        previousFrameTime = performance.now();
        frameRequest = window.requestAnimationFrame(renderVideoFrame);
      }
    };

    const handleMetadata = () => {
      metadataReady = true;
      video.pause();
      targetTime = calculateTargetTime();
      renderedTime = targetTime;
      video.currentTime = targetTime;
      heroContentRef.current?.classList.toggle(
        "is-visible",
        targetTime >= CONTENT_REVEAL_TIME_SECONDS,
      );
    };

    video.addEventListener("loadedmetadata", handleMetadata);
    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange, { passive: true });
    handleViewportChange();

    return () => {
      video.removeEventListener("loadedmetadata", handleMetadata);
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
      if (frameRequest) window.cancelAnimationFrame(frameRequest);
    };
  }, []);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const revealItems = Array.from(
      page.querySelectorAll<HTMLElement>("[data-scroll-reveal]"),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealItems.forEach((item) => item.classList.add("is-revealed"));
      return;
    }

    page.classList.add("scroll-effects-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={pageRef} className="site-shell" id="home">
      <header className="site-header">
        <CortexLogo useImage />

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item, index) => (
            <a
              key={item}
              className={index === 0 ? "active" : undefined}
              href={item === "Home" ? "#home" : item === "Services" ? "/services" : item === "About" ? "/about" : `#${item.toLowerCase().replace(" ", "-")}`}
            >
              {item}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="mailto:hello@cortexdata.id">
          Contact Us
        </a>
      </header>

      <section ref={heroScrollRef} className="hero-scroll" aria-label="Scroll-controlled introduction">
        <div className="hero" aria-labelledby="hero-title">
          <video
            ref={videoRef}
            className="hero-video"
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/videos/videodata-scrub.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />
          <div className="hero-effects" aria-hidden="true" />

          <div ref={heroContentRef} className="hero-content">
            <h1 id="hero-title">
              A SOCIAL INTELLIGENCE
              <br />
              ANALYTICS COMPANY
            </h1>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:hello@cortexdata.id">
                Contact Us
              </a>
              <a className="button button-secondary" href="#case-study">
                Check Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="partners" aria-labelledby="partners-title" data-scroll-reveal>
        <h2 className="sr-only" id="partners-title">Our partners</h2>
        <div className="partner-marquee">
          <div className="partner-track">
            {[...partners, ...partners].map((partner, index) => (
              <div
                className="partner-logo"
                key={`${partner.name}-${index}`}
                aria-hidden={index >= partners.length}
              >
                <Image
                  className="partner-logo-image"
                  src={partner.image}
                  alt={index < partners.length ? partner.name : ""}
                  sizes="196px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="understanding" aria-labelledby="understanding-title">
        <div className="understanding-intro" data-scroll-reveal>
          <h2 id="understanding-title">
            AT CORTEX, WE PROVIDE TRUE
            <br />
            UNDERSTANDING ABOUT
          </h2>
          <p>
            To help our clients make smarter, faster, cheaper and better
            <br />
            prediction, decision, monitoring and evaluation.
          </p>
        </div>

        <div className="understanding-grid">
          {understandingCards.map((card) => (
            <article className="understanding-card" key={card.title} data-scroll-reveal>
              <Image
                className="understanding-image"
                src={card.image}
                alt={card.alt}
                sizes="(max-width: 760px) 88vw, (max-width: 1100px) 29vw, 300px"
              />
              <span className="card-label">{card.title}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="values" id="about" aria-labelledby="values-title">
        <h2 id="values-title" data-scroll-reveal>OUR VALUES</h2>
        <div className="values-grid">
          {values.map((value) => (
            <article className="value-card" key={value.title} data-scroll-reveal>
              <div className="value-copy">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
              <div className="value-image-wrap">
                <Image
                  className="value-image"
                  src={value.image}
                  alt={value.alt}
                  sizes="(max-width: 760px) 84vw, (max-width: 1100px) 28vw, 270px"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quality" id="case-study" aria-labelledby="quality-title">
        <div className="quality-heading" data-scroll-reveal>
          <h2 id="quality-title">QUALITY ASSURANCE</h2>
          <p>OUR COMMITMENT TO TRUSTED, DECISION-READY DATA</p>
        </div>

        <div className="quality-banner" data-scroll-reveal>
          <Image
            className="quality-image"
            src={qualityAssuranceImage}
            alt="Black African analytics and quality engineering team celebrating a validated data release"
            sizes="(max-width: 760px) 94vw, 88vw"
          />
          <div className="quality-overlay" />
          <div className="quality-content">
            <h3>
              <span>INCORPORATING THE LATEST DATA TECHNOLOGIES</span>
              <span>FOR ANALYTICS QUALITY ASSURANCE</span>
            </h3>
            <a href="mailto:hello@cortexdata.id">Contact Us</a>
          </div>
        </div>
      </section>

      <section className="capabilities" aria-labelledby="capabilities-title">
        <h2 className="sr-only" id="capabilities-title">Our analytics capabilities</h2>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" key={capability.title} data-scroll-reveal>
              <div className="capability-icon">
                <CapabilityIcon type={capability.icon} />
              </div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <p>{capability.detail}</p>
            </article>
          ))}
        </div>

        <blockquote className="capability-quote" data-scroll-reveal>
          <span aria-hidden="true">“</span>
          <p>
            Through specialised data analytics services, our teams deliver accurate,
            relevant intelligence that helps you make smarter decisions—faster and more
            consistently across markets.
          </p>
          <span aria-hidden="true">”</span>
        </blockquote>
      </section>

      <section className="core-services" id="services" aria-labelledby="core-services-title">
        <div className="services-heading" data-scroll-reveal>
          <h2 id="core-services-title">SERVICES BUILT FOR WHAT’S NEXT</h2>
          <p>
            We bring data, technology, media and venture thinking together to help
            organisations find opportunities, build smarter and grow with confidence.
          </p>
        </div>
        <div className="core-services-grid">
          {coreServices.map((service) => (
            <article className="service-card" key={service.number} data-scroll-reveal>
              <div className="service-icon"><ServiceIcon number={service.number} /></div>
              <div className="service-copy">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={serviceLinks[Number(service.number) - 1].href} aria-label={`Explore ${service.title}`}>
                  Explore service <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner" data-scroll-reveal>
          <div className="footer-company">
            <CortexLogo />
            <address>
              Graha Surveyor Indonesia, Floor 15, Unit 1503,<br />
              Jl. Jenderal Gatot Subroto, Kav. 56,<br />
              Kuningan Timur, Setiabudi,<br />
              South Jakarta, Jakarta 12950
            </address>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <div>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="/about">About</a>
            </div>
            <div>
              <a href="#case-study">Case Study</a>
              <a href="#services">Products</a>
              <a href="mailto:hello@cortexdata.id">Contact</a>
            </div>
          </nav>

          <div className="footer-contact">
            <a href="mailto:hello@cortexdata.id">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
              <span>hello@cortexdata.id</span>
            </a>
            <a href="mailto:insights@cortexdata.id">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
              <span>insights@cortexdata.id</span>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
              <span>@cortex.data</span>
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3h5l11 18h-5ZM20 3 4 21" /></svg>
              <span>@cortexdataid</span>
            </a>
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
