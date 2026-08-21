"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelector = [
  "main:not(.site-shell):not(.case-study-page) > section:not(.contact-hero)",
  ".services-page-card",
  ".services-feature-card",
  ".service-line",
  ".how-we-work-steps > li",
  ".contact-channel-card",
  ".who-difference-grid > article",
  ".who-leadership-grid > article",
].join(",");

export default function SiteEnhancements() {
  const pathname = usePathname();

  useEffect(() => {
    const headers = Array.from(document.querySelectorAll<HTMLElement>(".site-header"));
    const updateHeader = () => {
      headers.forEach((header) => header.classList.toggle("is-scrolled", window.scrollY > 12));
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    targets.forEach((target, index) => {
      target.dataset.modernReveal = "";
      target.style.setProperty("--reveal-order", String(index % 4));
      if (reducedMotion || target.getBoundingClientRect().top < window.innerHeight * 0.92) {
        target.classList.add("is-modern-visible");
      }
    });

    document.body.classList.add("modern-motion-ready");

    const observer = reducedMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-modern-visible");
              observer?.unobserve(entry.target);
            });
          },
          { rootMargin: "0px 0px -7%", threshold: 0.08 },
        );

    targets.forEach((target) => {
      if (!target.classList.contains("is-modern-visible")) observer?.observe(target);
    });

    return () => {
      window.removeEventListener("scroll", updateHeader);
      observer?.disconnect();
      document.body.classList.remove("modern-motion-ready");
    };
  }, [pathname]);

  return (
    <a
      className="whatsapp-fab"
      href="https://wa.me/255744111221"
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp at +255 744 111 221"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
        <path d="M8.2 7.8c.2-.5.5-.5.8-.5h.4c.2 0 .4 0 .5.4l.8 1.9c.1.3 0 .5-.1.7l-.6.7c-.2.2-.1.4 0 .6.7 1.2 1.7 2.2 3 2.8.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.5.2.5.4 0 .2-.1 1.1-.6 1.6-.5.6-1.3.9-2.1.9-.6 0-1.4-.2-2.5-.7-1.4-.6-2.5-1.5-3.4-2.6-.7-.9-1.6-2.2-1.6-3.7 0-1 .4-1.7 1-2.1Z" />
      </svg>
    </a>
  );
}
