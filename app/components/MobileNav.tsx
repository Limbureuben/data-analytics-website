"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const subscribeToClient = () => () => {};

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/case-study", label: "Case Study" },
  { href: "/#blog", label: "Blog" },
];

export default function MobileNav() {
  const pathname = usePathname();
  const drawerId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const mounted = useSyncExternalStore(subscribeToClient, () => true, () => false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mobileViewport = window.matchMedia("(max-width: 760px)");
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (!event.matches) setOpen(false);
    };

    mobileViewport.addEventListener("change", handleViewportChange);
    return () => mobileViewport.removeEventListener("change", handleViewportChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>("a, button:not([disabled])"),
      );
      const first = focusable[0];
      const last = focusable.at(-1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const closeDrawer = () => setOpen(false);

  return (
    <>
      <button
        ref={triggerRef}
        className="mobile-nav-trigger"
        type="button"
        aria-label="Open navigation"
        aria-expanded={open}
        aria-controls={drawerId}
        onClick={() => setOpen(true)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      {mounted && createPortal(
        <div className={`mobile-nav-portal${open ? " is-open" : ""}`} aria-hidden={!open}>
          <button className="mobile-nav-backdrop" type="button" aria-label="Close navigation" onClick={closeDrawer} />
          <aside ref={drawerRef} className="mobile-nav-drawer" id={drawerId} aria-label="Mobile navigation">
            <div className="mobile-nav-drawer-header">
              <span>Navigation</span>
              <button ref={closeRef} type="button" aria-label="Close navigation" onClick={closeDrawer}>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile navigation links">
              {links.map((link, index) => {
                const active = link.href === "/" ? pathname === "/" : pathname === link.href;
                return (
                  <Link
                    className={active ? "active" : undefined}
                    href={link.href}
                    key={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={closeDrawer}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mobile-nav-drawer-footer">
              <Link href="/contact" onClick={closeDrawer}>Contact Us <span aria-hidden="true">→</span></Link>
              <p>Dar es Salaam, Tanzania</p>
            </div>
          </aside>
        </div>,
        document.body,
      )}
    </>
  );
}
