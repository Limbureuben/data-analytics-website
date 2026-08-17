"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const teamMembers = [
  { id: 1, name: "Neema Mushi", title: "Research Lead" },
  { id: 2, name: "Baraka Mollel", title: "Data Engineer" },
  { id: 3, name: "Asha Mrema", title: "AI Analyst" },
  { id: 4, name: "Kelvin Msuya", title: "Strategy Lead" },
  { id: 5, name: "Rehema Mbise", title: "Product Designer" },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={direction === "left" ? "m14.5 5-7 7 7 7" : "m9.5 5 7 7-7 7"}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <span className="about-team-linkedin-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M6.5 8.25H3.25V19H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.9 6.75 1.88 1.88 0 0 0 4.88 3ZM19.75 12.83c0-3.24-1.73-4.75-4.04-4.75a3.5 3.5 0 0 0-3.18 1.75V8.25H9.28V19h3.25v-5.32c0-1.4.27-2.76 2-2.76 1.7 0 1.72 1.6 1.72 2.85V19h3.25l.25-6.17Z"
        />
      </svg>
    </span>
  );
}

export default function TeamCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateControls = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const maxScrollLeft = viewport.scrollWidth - viewport.clientWidth;
    setCanScrollLeft(viewport.scrollLeft > 2);
    setCanScrollRight(viewport.scrollLeft < maxScrollLeft - 2);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    updateControls();
    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(viewport);

    return () => resizeObserver.disconnect();
  }, [updateControls]);

  const scrollCards = (direction: -1 | 1) => {
    const viewport = viewportRef.current;
    const track = viewport?.querySelector<HTMLElement>(".about-team-carousel-track");
    const card = track?.querySelector<HTMLElement>(".about-team-carousel-card");
    if (!viewport || !track || !card) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    viewport.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="about-team-showcase" aria-labelledby="team-showcase-title">
      <div className="about-team-carousel-header">
        <div className="about-team-showcase-heading">
          <span>Our people</span>
          <h2 id="team-showcase-title">Built to work as one.</h2>
          <p>Research, technology, strategy and creativity—one connected team.</p>
        </div>

        <div className="about-team-carousel-controls" aria-label="Team carousel controls">
          <button
            type="button"
            aria-label="Show previous team member"
            disabled={!canScrollLeft}
            onClick={() => scrollCards(-1)}
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            aria-label="Show next team member"
            disabled={!canScrollRight}
            onClick={() => scrollCards(1)}
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>

      <div
        className="about-team-carousel-viewport"
        ref={viewportRef}
        onScroll={updateControls}
        tabIndex={0}
        aria-label="Team members"
      >
        <div className="about-team-carousel-track">
          {teamMembers.map((member) => (
            <article className="about-team-carousel-card" key={member.id}>
              <div
                className="about-team-carousel-photo"
                role="img"
                aria-label={`Portrait of ${member.name}, ${member.title}`}
              />
              <div className="about-team-name-tag">
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.title}</p>
                </div>
                <LinkedInIcon />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
