"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function FloridaBanner() {
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem("rba_popup_seen")) {
      setShowModal(true);
    }
  }, []);

  function closeModal() {
    setShowModal(false);
    sessionStorage.setItem("rba_popup_seen", "1");
  }

  if (!showBanner) return null;

  return (
    <>
      {/* Persistent top banner */}
      <div className="fixed top-0 left-0 right-0 z-[99998] bg-navy-deep text-cream text-sm flex items-center justify-center gap-3 px-4 py-2.5">
        <span className="text-cream/70">Now serving Florida!</span>
        <span className="hidden sm:block h-3.5 w-px bg-cream/20" />
        <a
          href="https://roaringbrookfl.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-navy-light hover:text-white transition-colors underline underline-offset-2"
        >
          Visit our Florida office →
        </a>
        <button
          onClick={() => setShowBanner(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-cream/40 hover:text-cream transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* One-per-session modal */}
      {showModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm">
          <div className="bg-cream rounded-[1.6rem] shadow-lift w-full max-w-md p-8 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy/10 mx-auto mb-5">
              <span className="text-2xl">🌴</span>
            </div>
            <h2 className="font-serif text-2xl text-ink tracking-tight mb-2">
              Are you in Florida?
            </h2>
            <p className="text-ink-soft text-sm leading-relaxed mb-7">
              Roaring Brook Abstract now has a Florida office serving Brevard County.
              If you need title services in Florida, visit our dedicated Florida site.
            </p>
            <a
              href="https://roaringbrookfl.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeModal}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-cream transition-all hover:bg-navy-dark mb-3"
            >
              Take me to the Florida office
            </a>
            <button
              onClick={closeModal}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-ink/[0.06] px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-ink/10"
            >
              No thanks — I want the Pennsylvania office
            </button>
          </div>
        </div>
      )}
    </>
  );
}
