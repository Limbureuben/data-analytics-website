"use client";

import { useState } from "react";

export default function AsyncMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`async-map-shell${loaded ? " is-loaded" : ""}`}>
      <div className="async-map-skeleton" role="status" aria-live="polite">
        <span className="sr-only">Loading location map</span>
        <i /><i /><i />
      </div>
      <iframe
        title="Satellite map of Palm Street-Mbezi Beach, Dar es Salaam"
        src="https://maps.google.com/maps?q=Palm%20Street-Mbezi%20Beach%2C%20Dar%20es%20Salaam%2C%20Tanzania&amp;t=k&amp;z=16&amp;output=embed"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
