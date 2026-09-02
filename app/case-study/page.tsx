import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "../components/MobileNav";
import CaseStudyMotion from "./CaseStudyMotion";

export const metadata: Metadata = {
  title: "Case Studies | Digital Town Square",
  description:
    "Explore how Digital Town Square turns research, data and technology into measurable impact across East Africa.",
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
      ["930,000+", "People reached"],
      ["50,000+", "Farmers engaged directly"],
      ["5K–10K", "Advance chick orders"],
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
    logos: [
      ["/images/logo/shujaaz-logo.png", "Shujaaz Inc"],
    ],
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
    logos: [
      ["/images/logo/bbc-logo.jpeg", "BBC Media Action"],
    ],
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
  {
    id: "youth-livelihoods-informal-economy",
    number: "06",
    category: "Youth Livelihoods & Informal Economy",
    title: "Youth Livelihoods & Informal Economy",
    summary:
      "Using campaign data and audience analytics to understand how young people engage with livelihood and entrepreneurship content.",
    details: [
      ["Delivered through", "Shujaaz Inc."],
      ["Partners", "Kays Foundation · Agency Fund · Umsizi"],
      [
        "DTS role",
        "Campaign data analysis, audience analytics and performance reporting.",
      ],
    ],
    description:
      "DTS analysed campaign and audience data to understand reach, engagement and content performance, helping identify what young people were responding to and where campaigns could be improved. The analysis supported evidence-based decisions around youth-focused media, digital engagement and livelihood programming.",
    metrics: [],
    logos: [["/images/logo/shujaaz-logo.png", "Shujaaz Inc."]],
    tone: "green",
  },
  {
    id: "gender-norms-social-change",
    number: "07",
    category: "Gender Norms & Social Change",
    title: "Gender Norms & Social Change",
    summary:
      "Using data and audience intelligence to measure how effectively gender-norms campaigns connect with young people across comics, TV shows and digital video content.",
    details: [
      ["Delivered through", "Shujaaz Inc."],
      ["Partners", "MTV Staying Alive Foundation · PATH Kenya"],
      [
        "Funders",
        "Co-Impact · Imaginable Futures · Wellspring Philanthropic Fund · Echidna Giving",
      ],
      ["Audience", "Young Kenyans, 15–24"],
      ["Duration", "2024–2028"],
      ["Status", "Active"],
      [
        "DTS role",
        "Campaign measurement, audience analytics, content performance tracking and data-driven learning.",
      ],
    ],
    description: [
      "DTS measures the performance and audience response to campaign content across comics, TV shows and digital video formats, combining platform and audience data to understand what reaches young people, what keeps them engaged and which stories perform best.",
      "The analysis provides evidence on reach, engagement, content performance and audience behaviour, helping the campaign team understand how different formats and stories are performing and where content can be improved.",
      "By connecting campaign data with audience insights, DTS supports a continuous measure → learn → adapt process, helping strengthen the effectiveness of storytelling and inform the wider gender-norms change strategy.",
    ],
    metrics: [],
    logos: [["/images/logo/shujaaz-logo.png", "Shujaaz Inc."]],
    tone: "gold",
  },
  {
    id: "coca-cola-tanzania",
    number: "08",
    category: "National PR & Media Campaign",
    title: "Coca-Cola Tanzania",
    summary: "National PR & Media Campaign",
    details: [
      ["Delivered through", "Calla PR (T) Limited, Kenya"],
      [
        "DTS role",
        "Tanzania media coordination, PR execution & campaign reporting",
      ],
      ["Duration", "June 2026 – December 2026"],
    ],
    description: [
      "DTS is supporting the delivery of Coca-Cola Tanzania’s national PR campaign through Calla PR’s regional relationship with Coca-Cola.",
      "Our role is to turn the campaign strategy into coordinated media execution across Tanzania, connecting campaign messages with national and regional audiences through television, radio and print.",
    ],
    deliverables: [
      [
        "National Media Outreach",
        "Coordinating engagement with leading national and regional media across television, radio and print.",
      ],
      [
        "PR & Media Materials",
        "Supporting campaign messaging, press materials and media kits to maintain clear and consistent communication across media channels.",
      ],
      [
        "Event Media Coordination",
        "Managing media engagement around campaign events, including outreach, coordination and same-day distribution of approved campaign materials.",
      ],
      [
        "Campaign Measurement & Reporting",
        "Tracking media activity, earned coverage and delivery against agreed campaign targets, with ongoing reporting throughout the engagement.",
      ],
    ],
    metrics: [
      ["20+", "Earned media placements per month"],
      ["2+", "TV interviews per month"],
      ["5+", "Regional media placements per month"],
      ["Full", "Event-day media coordination and coverage"],
    ],
    status: [
      "The campaign is currently active and runs through December 2026.",
      "Performance results will be added following campaign completion and final reporting.",
    ],
    closingRole:
      "Media intelligence, coordination and execution that connects national campaigns with audiences across Tanzania.",
    logos: [
      ["/images/logo/coca-cola.CfzaD0v2_Z1Qy61w.webp", "Coca-Cola"],
    ],
    tone: "coke",
  },
] as const;

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="Digital Town Square home">
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
        </nav>
        <Link className="header-cta" href="/contact">Contact Us</Link>
        <MobileNav />
      </header>

      <section className="case-study-hero case-study-hero-intro" aria-labelledby="case-study-title">
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
      </section>

      <section className="impact case-study-impact" aria-labelledby="case-study-impact-title" data-case-reveal="fade">
        <div className="impact-inner">
          <div className="impact-heading is-revealed">
            <h2 id="case-study-impact-title">Measurable results across Africa.</h2>
          </div>
          <dl className="impact-stats" aria-label="Digital Town Square impact statistics">
            <div>
              <dd>10M+</dd>
              <dt>People Reached</dt>
            </div>
            <div>
              <dd>500K+</dd>
              <dt>Meaningful Engagements</dt>
            </div>
            <div>
              <dd>25+</dd>
              <dt>Projects Delivered</dt>
            </div>
            <div>
              <dd>9+</dd>
              <dt>Organizations Served</dt>
            </div>
          </dl>
        </div>
      </section>

      <section className={`case-feature case-tone-${featured.tone}`} id={featured.id} aria-labelledby={`${featured.id}-title`} data-case-reveal="scale">
        <div className="case-feature-heading">
          <div>
            <h2 id={`${featured.id}-title`}>{featured.title}</h2>
          </div>
          <div className="case-client-logos" aria-label="Project partners">
            {featured.logos.map(([src, alt]) => (
              <Image key={src} src={src} alt={alt} width={220} height={80} />
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
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
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
                      <Image key={src} src={src} alt={alt} width={190} height={70} />
                    ))}
                  </div>
                )}
              </div>
              {"details" in project ? (
                <div className="case-card-body case-card-body-profile">
                  <p className="case-card-summary">{project.summary}</p>
                  <div className="case-card-facts">
                    {project.details.map(([label, value]) => (
                      <div key={label}><strong>{label}</strong><p>{value}</p></div>
                    ))}
                  </div>
                  {typeof project.description === "string" ? (
                    <p className="case-card-description">{project.description}</p>
                  ) : (
                    <div className="case-card-description-group">
                      {project.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                  {"deliverables" in project && (
                    <section className="case-card-section" aria-labelledby={`${project.id}-deliverables`}>
                      <h4 id={`${project.id}-deliverables`}>What DTS delivers</h4>
                      <div className="case-card-deliverables">
                        {project.deliverables.map(([title, description]) => (
                          <article key={title}>
                            <strong>{title}</strong>
                            <p>{description}</p>
                          </article>
                        ))}
                      </div>
                    </section>
                  )}
                  {project.metrics.length > 0 && (
                    <section className="case-card-section" aria-labelledby={`${project.id}-targets`}>
                      <h4 id={`${project.id}-targets`}>Campaign delivery targets</h4>
                      <div className="case-metrics case-editorial-metrics">
                        {project.metrics.map(([value, label]) => (
                          <div key={label}><strong>{value}</strong><span>{label}</span></div>
                        ))}
                      </div>
                    </section>
                  )}
                  {"status" in project && (
                    <section className="case-card-status" aria-labelledby={`${project.id}-status`}>
                      <h4 id={`${project.id}-status`}>Status</h4>
                      {project.status.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      <p className="case-card-closing-role">
                        <strong>DTS role:</strong> {project.closingRole}
                      </p>
                    </section>
                  )}
                </div>
              ) : (
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
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="case-study-cta" aria-labelledby="case-cta-title" data-case-reveal="fade">
        <h2 id="case-cta-title">Let&apos;s create impact we can measure.</h2>
        <p>Bring us the outcome you need. We will connect the research, technology and delivery required to move it forward.</p>
        <Link href="/contact">Start a conversation <span aria-hidden="true">→</span></Link>
      </section>

      <footer className="site-footer">
        <div className="footer-inner" data-case-reveal="up">
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
