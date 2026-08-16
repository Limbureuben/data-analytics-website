import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "../components/MobileNav";
import CaseStudyMotion from "./CaseStudyMotion";

export const metadata: Metadata = {
  title: "Case Studies | digitalocean",
  description:
    "Explore how Cortex turns research, data and technology into measurable impact across East Africa.",
};

const projects = [
  {
    id: "hatching-hope",
    number: "01",
    category: "Agriculture · Radio Behavior Change",
    title: "Hatching Hope Poultry Promotion Campaign",
    problem:
      "Low awareness and adoption of improved poultry practices among smallholder farmers in Dodoma and neighbouring regions.",
    solution:
      "A radio-led behaviour change campaign combined with SMS and call-in engagement, delivered for Land O'Lakes Venture37 with support from Hatching Hope Foundation.",
    impact:
      "Reach targets were exceeded. Listeners placed advance orders for SASSO chicks—a trackable purchase behaviour, not a proxy metric.",
    metrics: [
      ["45000+", "People reached"],
      ["5000+", "Farmers engaged directly"],
      ["5K+", "Advance chick orders"],
      ["600+", "Calls & SMS interactions"],
    ],
    logos: [
      ["/images/logo/venture37.DBRp6bAj_1X4vqr.webp", "Land O'Lakes Venture37"],
      ["/images/logo/hatching-hope.D4t6hUJb_2f7gIM.webp", "Hatching Hope Foundation"],
    ],
    tone: "amber",
  },
  {
    id: "undp-election-monitoring",
    number: "02",
    category: "Governance · Elections",
    title: "UNDP Kenya × Code for Africa",
    problem:
      "Kenya's 2022 general election carried a high risk of misinformation and hate speech spreading faster than it could be tracked.",
    solution:
      "A real-time election monitoring system with youth engagement analytics, detecting misinformation and hate speech as it emerged.",
    impact:
      "Reached 3,961,823 young Kenyans with counter-narratives and civic content during the election period.",
    metrics: [
      ["3.9M", "Young Kenyans reached"],
    ],
    logos: [
      ["/images/logo/undp.-hKkppJN_16WllA.webp", "United Nations Development Programme"],
      ["/images/logo/code-for-africa.CJsdx67A_Z1Xqcp0.webp", "Code for Africa"],
    ],
    tone: "blue",
  },
  {
    id: "youth-dashboard",
    number: "03",
    category: "DTS Product · Audience Intelligence",
    title: "AI Youth Behaviour Dashboard",
    problem:
      "Programmes targeting young people in East Africa lacked timely, structured insight into what youth were actually saying online.",
    solution:
      "An AI-powered analytics dashboard monitoring youth conversations across Kenya and Tanzania—bringing sentiment, trends and campaign effectiveness into one live view.",
    impact:
      "Ongoing decision-ready intelligence now feeds campaign design, media strategy and programme iteration.",
    metrics: [
      ["2 markets", "Kenya & Tanzania"],
      ["Live", "Sentiment & trend tracking"],
    ],
    logos: [],
    tone: "violet",
  },
  {
    id: "bbc-media-action",
    number: "04",
    category: "Research & Insights",
    title: "BBC Media Action Study",
    problem:
      "Limited understanding of audience behaviour and communication impact in key markets.",
    solution:
      "A comprehensive research and audience insights study mapping communication patterns and media consumption.",
    impact:
      "Actionable findings were used to inform and optimise communication strategies across programmes.",
    metrics: [
      ["Audience-led", "Research approach"],
      ["Actionable", "Strategy output"],
    ],
    logos: [],
    tone: "slate",
  },
  {
    id: "tujibebe-gavi",
    number: "05",
    category: "Girl Effect Tanzania · Health Communication",
    title: "Tujibebe × GAVI Toolkit",
    problem:
      "Youth-focused health programmes needed structured engagement and messaging tools for consistent implementation.",
    solution:
      "A comprehensive communication toolkit designed for youth-focused health campaigns and programme rollout.",
    impact:
      "The structured toolkit was adopted for ongoing programme implementation and scale across Tanzania.",
    metrics: [
      ["Youth-first", "Communication design"],
      ["Scale-ready", "Programme toolkit"],
    ],
    logos: [
      ["/images/logo/girl-effect.DkP8gJTw_1I4USr.webp", "Girl Effect"],
    ],
    tone: "rose",
  },
] as const;

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="Cortex Data Indonesia home">
      <Image
        className="brand-logo-image"
        src={footer ? "/images/logo2.png" : "/images/logo3.png"}
        alt=""
        width={112}
        height={45}
        priority
      />
    </Link>
  );
}

export default function CaseStudyPage() {
  const featured = projects[0];
  const remaining = projects.slice(1);

  return (
    <main className="case-study-page">
      <CaseStudyMotion />
      <header className="site-header">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link className="active" href="/case-study" aria-current="page">Case Study</Link>
          <Link href="/#blog">Blog</Link>
        </nav>
        <Link className="header-cta" href="/contact">Contact Us</Link>
        <MobileNav />
      </header>

      <section className="case-study-hero" aria-labelledby="case-study-title">
        <div className="case-study-hero-copy" data-case-reveal="left">
          <h1 id="case-study-title">
            <span>Projects that</span>
            <span>moved the needle.</span>
          </h1>
          <p>
            From behaviour change campaigns to national data systems, here is how
            we have created impact.
          </p>
        </div>
        <div className="case-study-hero-proof" aria-label="Portfolio highlights" data-case-reveal="right">
          <div><strong>5</strong><span>Case studies</span></div>
          <div><strong>2</strong><span>East African countries</span></div>
          <div><strong>3.9M+</strong><span>Young Kenyans reached</span></div>
        </div>
      </section>

      <section className={`case-feature case-tone-${featured.tone}`} id={featured.id} aria-labelledby={`${featured.id}-title`} data-case-reveal="scale">
        <div className="case-feature-heading">
          <div>
            <h2 id={`${featured.id}-title`}>{featured.title}</h2>
          </div>
          <div className="case-client-logos" aria-label="Project partners">
            {featured.logos.map(([src, alt]) => (
              <Image key={src} src={src} alt={alt} width={150} height={52} />
            ))}
          </div>
        </div>
        <div className="case-narrative">
          <article data-case-detail><span>Problem</span><p>{featured.problem}</p></article>
          <article data-case-detail><span>Solution</span><p>{featured.solution}</p></article>
          <article data-case-detail><span>Impact</span><p>{featured.impact}</p></article>
        </div>
      </section>

      <div className={`case-feature-metrics case-tone-${featured.tone}`} aria-label={`${featured.title} results`} data-case-reveal="up">
        <div className="case-metrics">
          {featured.metrics.map(([value, label]) => (
            <div key={label}><strong data-case-count={value}>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </div>

      <section className="case-study-collection" aria-label="More case studies">
        <div className="case-study-stack">
          {remaining.map((project) => (
            <article className={`case-study-card case-tone-${project.tone}`} id={project.id} key={project.id} aria-labelledby={`${project.id}-title`} data-case-reveal="card" data-case-tilt>
              <div className="case-study-card-topline case-study-card-topline-title">
                <h3 id={`${project.id}-title`}>{project.title}</h3>
                {project.logos.length > 0 && (
                  <div className="case-client-logos">
                    {project.logos.map(([src, alt]) => (
                      <Image key={src} src={src} alt={alt} width={130} height={44} />
                    ))}
                  </div>
                )}
              </div>
              <div className="case-card-body">
                <div className="case-card-narrative">
                  <div><strong>Problem</strong><p>{project.problem}</p></div>
                  <div><strong>Solution</strong><p>{project.solution}</p></div>
                  <div><strong>Impact</strong><p>{project.impact}</p></div>
                </div>
                <div className={`case-card-metrics${project.metrics.length === 1 ? " case-card-metrics-single" : ""}`}>
                  {project.metrics.map(([value, label]) => (
                    <div key={label}><strong>{value}</strong><span>{label}</span></div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-study-cta" aria-labelledby="case-cta-title" data-case-reveal="fade">
        <h2 id="case-cta-title">Let&apos;s create impact we can measure.</h2>
        <p>Bring us the outcome you need. We will connect the research, technology and delivery required to move it forward.</p>
        <a href="mailto:hello@digitaltownsquare.co.tz">Start a conversation <span aria-hidden="true">→</span></a>
      </section>

      <footer className="site-footer">
        <div className="footer-inner" data-case-reveal="up">
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
