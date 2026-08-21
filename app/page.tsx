"use client";

import { useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import MobileNav from "./components/MobileNav";
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
import marketImage from "../public/images/market-card.png";
import peopleImage from "../public/images/people.png";
import societyImage from "../public/images/society-posta.png";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Case Study", href: "/case-study" },
];
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

function DigitalTownSquareLogo({
  useImage = false,
  footer = false,
}: {
  useImage?: boolean;
  footer?: boolean;
}) {
  return (
    <a className="brand" href="#home" aria-label="Digital Town Square home">
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
      {!useImage && (
        <span className="brand-name">
          <span>DIGITAL TOWN</span>
          <span>SQUARE</span>
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
        <DigitalTownSquareLogo useImage />

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item, index) => (
            <a
              key={item.label}
              className={index === 0 ? "active" : undefined}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="/contact">
          Contact Us
        </a>
        <MobileNav />
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
              WE TURN DATA INTO INTELLIGENCE.
              <br />
              AND INTELLIGENCE INTO ACTION.
            </h1>
            <div className="hero-actions">
              <a className="button button-primary" href="/contact">
                Contact Us
              </a>
              <a className="button button-secondary" href="/case-study">
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
            BUILT FOR ORGANIZATIONS THAT NEED TO
            <br />
            UNDERSTAND PEOPLE, NOT JUST DATA.
          </h2>
          <p>
            We combine audience intelligence, data, AI and digital execution to help
            <br />
            organisations understand what is happening, why it matters, and what to do next.
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

      <section className="impact" aria-labelledby="impact-title">
        <div className="impact-inner">
          <div className="impact-heading" data-scroll-reveal>
            <h2 id="impact-title">Measurable results across Africa.</h2>
          </div>
          <dl className="impact-stats" aria-label="Digital Town Square impact statistics">
            <div data-scroll-reveal>
              <dd>10M+</dd>
              <dt>People Reached</dt>
            </div>
            <div data-scroll-reveal>
              <dd>500K+</dd>
              <dt>Meaningful Engagements</dt>
            </div>
            <div data-scroll-reveal>
              <dd>25+</dd>
              <dt>Projects Delivered</dt>
            </div>
            <div data-scroll-reveal>
              <dd>9+</dd>
              <dt>Organizations Served</dt>
            </div>
          </dl>
        </div>
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
            <DigitalTownSquareLogo useImage footer />
            <address>
              Palm Street-Mbezi Beach, Dar es Salaam, Tanzania
            </address>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <div>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="/about">About</a>
            </div>
            <div>
              <a href="/case-study">Case Study</a>
              <a href="#services">Products</a>
              <a href="/contact">Contact</a>
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
