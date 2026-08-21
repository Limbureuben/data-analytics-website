type DifferentiatorIcon = "data" | "context" | "impact" | "partnership";

const differentiators: Array<{
  title: string;
  description: string;
  icon: DifferentiatorIcon;
}> = [
  {
    title: "Data-first",
    icon: "data",
    description:
      "We start every project with a dataset, not a hunch. Strategy comes after the evidence, not before it.",
  },
  {
    title: "African context",
    icon: "context",
    description:
      "We build for how people actually communicate here — the local languages, the channels they trust, radio and SMS as much as social. Not a US or Europe playbook adapted after the fact.",
  },
  {
    title: "Impact over output",
    icon: "impact",
    description:
      "We track behavior change and real-world outcomes. A dashboard nobody uses is not a result, whatever the invoice says.",
  },
  {
    title: "Long-term partnerships",
    icon: "partnership",
    description:
      "Most of our clients come back for the next project. We build for that, not for a single deliverable.",
  },
];

function DifferentiatorIcon({ name }: { name: DifferentiatorIcon }) {
  if (name === "data") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    );
  }

  if (name === "context") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21M12 3c-2.4 2.5-3.6 5.5-3.6 9S9.6 18.5 12 21" />
      </svg>
    );
  }

  if (name === "impact") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="m14.2 9.8 6-6M16 4h4v4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.5 14.5 7 17a3.5 3.5 0 0 1-5-5l3-3a3.5 3.5 0 0 1 5 0M14.5 9.5 17 7a3.5 3.5 0 0 1 5 5l-3 3a3.5 3.5 0 0 1-5 0M8.5 15.5l7-7" />
    </svg>
  );
}

type FactIcon = "calendar" | "location" | "expertise" | "reach";

const facts: Array<{ label: string; value: string; icon: FactIcon }> = [
  { label: "Founded", value: "2023", icon: "calendar" },
  {
    label: "Headquartered",
    value: "Dar es Salaam, Tanzania",
    icon: "location",
  },
  {
    label: "Expertise",
    value: "Data · AI · Media Systems",
    icon: "expertise",
  },
  { label: "Reach", value: "Across Africa", icon: "reach" },
];

function FactIcon({ name }: { name: FactIcon }) {
  if (name === "calendar") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3 10h18M8 14h3M8 17h6" />
      </svg>
    );
  }

  if (name === "location") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (name === "expertise") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="7" height="7" rx="1.5" />
        <rect x="14" y="4" width="7" height="7" rx="1.5" />
        <rect x="8.5" y="15" width="7" height="6" rx="1.5" />
        <path d="M6.5 11v2h11v-2M12 13v2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21M12 3c-2.4 2.5-3.6 5.5-3.6 9S9.6 18.5 12 21" />
    </svg>
  );
}

const leaders = [
  {
    name: "Socrates Mtoba",
    role: "Founder & Director",
    biography:
      "Ten years of experience in data-driven campaigns, audience research, and digital strategy across East Africa — from national youth media platforms to election monitoring. Founded DTS to turn that experience into practical data, AI, and digital systems that clients can use.",
  },
  {
    name: "Benjamin Buganzi",
    role: "Chief Data Officer",
    biography:
      "Leads DTS’s technical work across data pipelines, analytics, dashboards, and machine learning. He builds the systems behind our audience intelligence products and makes sure what DTS ships is technically sound and useful.",
  },
  {
    name: "Leonce Godfrey",
    role: "Director of Creative & Production",
    biography:
      "Leads DTS’s creative and production work, from campaign concepts and visual direction to studio production and content execution. He brings ideas to life and oversees the creative systems behind campaigns, including the production of ads and digital content.",
  },
  {
    name: "Susan Shangali",
    role: "Director of Marketing",
    biography:
      "Leads client campaigns and DTS’s own market presence. Her work spans digital marketing, audience engagement, brand positioning, and campaign execution across Tanzania and regional markets.",
  },
];

export default function WhoWeAreSection() {
  return (
    <section className="who-we-are" aria-labelledby="who-we-are-title">
      <header className="who-we-are-intro">
        <span>About Digital Town Square</span>
        <h2 id="who-we-are-title">Who we are</h2>
        <p>
          Digital Town Square is a Tanzania-based company working at the intersection
          of data, technology, media, and innovation.
        </p>
      </header>

      <section className="who-we-are-story" aria-labelledby="who-story-title">
        <div className="who-section-heading">
          <h3 id="who-story-title">Our story</h3>
        </div>
        <div className="who-story-copy">
          <p className="who-story-lead">
            Digital Town Square was built on a simple observation: organizations generate
            more data than they can turn into meaningful decisions.
          </p>
          <div>
            <p>
              We created a different kind of company by bringing data scientists,
              software engineers, researchers, and creative storytellers into one team.
              Together, we help organizations understand people, build better systems,
              and design campaigns that create measurable change.
            </p>
            <p>
              Since then, our work has supported national health campaigns, digital public
              engagement, election monitoring, agricultural development, and audience
              intelligence across Africa. Our projects have reached millions of people,
              helping partners make smarter decisions and deliver stronger results.
            </p>
          </div>
        </div>
      </section>

      <section className="who-mission" aria-labelledby="who-mission-title">
        <h3 id="who-mission-title">Our mission</h3>
        <p>Turn data into decisions that create impact.</p>
      </section>

      <section className="who-difference" aria-labelledby="who-difference-title">
        <div className="who-section-heading">
          <h3 id="who-difference-title">What sets us apart</h3>
        </div>
        <div className="who-difference-grid">
          {differentiators.map((item) => (
            <article key={item.title}>
              <div className="who-difference-icon">
                <DifferentiatorIcon name={item.icon} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <dl className="who-facts" aria-label="Digital Town Square at a glance">
        {facts.map((fact) => (
          <div key={fact.label}>
            <div className="who-fact-icon">
              <FactIcon name={fact.icon} />
            </div>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <section className="who-leadership" aria-labelledby="who-leadership-title">
        <div className="who-section-heading">
          <h3 id="who-leadership-title">Our leadership</h3>
        </div>
        <div className="who-leadership-grid">
          {leaders.map((leader) => (
            <article key={leader.name}>
              <h4>{leader.name}</h4>
              <p className="who-leader-role">{leader.role}</p>
              <p>{leader.biography}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
