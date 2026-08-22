"use client";

import { useEffect } from "react";

export default function CaseStudyMotion() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".case-study-page");
    if (!page) return;

    const revealItems = Array.from(
      page.querySelectorAll<HTMLElement>("[data-case-reveal]"),
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      revealItems.forEach((item) => item.classList.add("is-case-visible"));
      return;
    }

    page.classList.add("case-motion-ready");
    const counterFrames = new Map<HTMLElement, number>();

    const resetCounters = (container: Element) => {
      const counters = container.querySelectorAll<HTMLElement>("[data-case-count]");

      counters.forEach((counter) => {
        const activeFrame = counterFrames.get(counter);
        if (activeFrame !== undefined) window.cancelAnimationFrame(activeFrame);
        counterFrames.delete(counter);

        const finalValue = counter.dataset.caseCount ?? counter.textContent ?? "";
        const match = finalValue.match(/^([\d,]+)(.*)$/);
        if (match) counter.textContent = `0${match[2]}`;
      });
    };

    const animateCounters = (container: Element) => {
      const counters = container.querySelectorAll<HTMLElement>("[data-case-count]");

      counters.forEach((counter) => {
        const activeFrame = counterFrames.get(counter);
        if (activeFrame !== undefined) window.cancelAnimationFrame(activeFrame);

        const finalValue = counter.dataset.caseCount ?? counter.textContent ?? "";
        const match = finalValue.match(/^([\d,]+)(.*)$/);
        if (!match) return;

        const target = Number(match[1].replaceAll(",", ""));
        const suffix = match[2];
        const usesThousandsSeparators = match[1].includes(",");
        const formatValue = (value: number) =>
          usesThousandsSeparators ? value.toLocaleString("en-US") : String(value);
        const duration = 460;
        let startTime: number | undefined;

        counter.textContent = `0${suffix}`;

        const tick = (time: number) => {
          startTime ??= time;
          const progress = Math.min((time - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = `${formatValue(Math.round(target * eased))}${suffix}`;

          if (progress < 1) {
            const frame = window.requestAnimationFrame(tick);
            counterFrames.set(counter, frame);
          } else {
            counter.textContent = finalValue;
            counterFrames.delete(counter);
          }
        };

        const frame = window.requestAnimationFrame(tick);
        counterFrames.set(counter, frame);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-case-visible");
            animateCounters(entry.target);
            return;
          }

          entry.target.classList.remove("is-case-visible");
          resetCounters(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    const tiltCards = Array.from(
      page.querySelectorAll<HTMLElement>("[data-case-tilt]"),
    );
    const canTilt = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    if (canTilt) {
      tiltCards.forEach((card) => {
        const handlePointerMove = (event: PointerEvent) => {
          const bounds = card.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;

          card.style.setProperty("--case-tilt-x", `${(-y * 2.4).toFixed(2)}deg`);
          card.style.setProperty("--case-tilt-y", `${(x * 2.8).toFixed(2)}deg`);
          card.classList.add("is-case-tilting");
        };

        const handlePointerLeave = () => {
          card.classList.remove("is-case-tilting");
          card.style.removeProperty("--case-tilt-x");
          card.style.removeProperty("--case-tilt-y");
        };

        card.addEventListener("pointermove", handlePointerMove);
        card.addEventListener("pointerleave", handlePointerLeave);
        cleanups.push(() => {
          card.removeEventListener("pointermove", handlePointerMove);
          card.removeEventListener("pointerleave", handlePointerLeave);
        });
      });
    }

    return () => {
      observer.disconnect();
      counterFrames.forEach((frame) => window.cancelAnimationFrame(frame));
      cleanups.forEach((cleanup) => cleanup());
      page.classList.remove("case-motion-ready");
    };
  }, []);

  return null;
}
