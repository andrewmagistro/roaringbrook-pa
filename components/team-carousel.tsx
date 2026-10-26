"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Scale, Landmark, MapPin, Award, ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_ADVANCE_MS = 20000;

const attorneys = [
  {
    name: "Christopher R. Kimler",
    photo: "/chris-kimler.jpg",
    title: "Founder · Attorney",
    credentials: [
      { icon: Scale, label: "Attorney & title agent", sub: "Real estate and title insurance" },
      { icon: MapPin, label: "Licensed in four states", sub: "FL · NJ · NY · PA" },
      { icon: Landmark, label: "30 years of experience", sub: "$1.5B+ in transactions" },
      { icon: Award, label: "BBB A+ accredited", sub: "Accredited business" },
    ],
    bio: [
      "Chris Kimler founded Roaring Brook Abstract in Milford, Pennsylvania, building it into a trusted name across Pike County over three decades of title and closing work.",
      "Chris is an attorney and title agent now based in Melbourne, Florida, where he leads Roaring Brook Abstract's Florida operation. He remains licensed to close in Florida, New Jersey, New York, and Pennsylvania.",
      "The Pike County business he built carries his name forward, now owned and run day-to-day by Jason Ohliger and Nick McIntyre — the same hands-on, attorney-led approach Chris established from the start.",
    ],
  },
  {
    name: "Jason R. Ohliger",
    photo: "/jason-ohliger.jpg",
    title: "Owner · Attorney",
    credentials: [
      { icon: Scale, label: "Trial attorney", sub: "20+ years of practice" },
      { icon: MapPin, label: "Licensed in three states", sub: "PA · NJ · NY" },
      { icon: Landmark, label: "$35M+ recovered", sub: "For clients, career-wide" },
      { icon: Award, label: "Pike County record", sub: "County's first 7-figure verdict" },
    ],
    bio: [
      "Jason is a graduate of Temple University's Beasley School of Law, where he earned his degree in 2005. He began his career clerking for the Honorable Joseph F. Kameen before building a trial practice based in Milford, Pennsylvania.",
      "He's licensed to practice in Pennsylvania, New Jersey, and New York, along with several federal courts across those states and Washington, D.C. Over the course of his career he's recovered more than $35 million from insurance companies and corporations on behalf of his clients, including two of Pike County's highest injury verdicts — among them the county's first jury verdict over one million dollars.",
      "Jason is active in the Pennsylvania Association for Justice, the Northeastern Pennsylvania Trial Lawyers Association, and the New York State Trial Lawyers Association.",
    ],
  },
  {
    name: "Nicholas J. McIntyre",
    photo: "/nick-mcintyre.jpg",
    title: "Owner · Attorney",
    credentials: [
      { icon: Scale, label: "Attorney", sub: "Admitted to PA Bar, 2019" },
      { icon: MapPin, label: "Pike County native", sub: "Delaware Valley HS, '13" },
      { icon: Landmark, label: "J.D., Akron Law", sub: "University of Akron, 2019" },
      { icon: Award, label: "B.A. Political Science", sub: "Ursinus College, 2017" },
    ],
    bio: [
      "Nick grew up in Pike County, graduating from Delaware Valley High School before earning his bachelor's degree in Political Science from Ursinus College in 2017.",
      "He went on to earn his Juris Doctorate from the University of Akron School of Law in 2019 and was admitted to the Pennsylvania Bar that same year. His practice has covered personal injury, criminal defense, general litigation, and estate planning throughout Pike County and the surrounding tri-state area.",
      "As a lifelong local, Nick brings the same hands-on, answer-the-phone approach to title work that clients already know him for in the courtroom.",
    ],
  },
];

export default function TeamCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex(((i % attorneys.length) + attorneys.length) % attorneys.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % attorneys.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, paused]);

  const pause = useCallback(() => setPaused(true), []);
  const resume = useCallback(() => setPaused(false), []);

  return (
    <div
      className="space-y-10"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      {/* Slides */}
      <div className="relative">
        {attorneys.map((a, i) => (
          <div
            key={a.name}
            className={i === index ? "block animate-in fade-in-0 duration-500" : "hidden"}
            aria-hidden={i !== index}
          >
            <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Photo */}
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-[1.8rem] border border-border bg-card p-2.5">
                  <img
                    src={a.photo}
                    alt={`${a.name}, attorney and Roaring Brook Abstract owner`}
                    className="w-full rounded-inner object-cover object-top"
                    style={{ aspectRatio: "4/5" }}
                  />
                </div>
                <div className="mt-4 grid gap-px overflow-hidden rounded-[1.4rem] border border-border bg-border">
                  {a.credentials.map(({ icon: Icon, label, sub }) => (
                    <div key={label} className="flex items-center gap-4 bg-card px-5 py-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/[0.07]">
                        <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-ink">{label}</span>
                        <span className="block text-xs text-ink-soft">{sub}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Copy */}
              <div className="lg:col-span-7">
                <h2 className="font-serif text-3xl leading-tight tracking-tight text-ink md:text-4xl">
                  {a.name}
                </h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                  {a.title}
                </p>

                <div className="mt-8 space-y-6 text-[17px] leading-relaxed text-ink-soft">
                  {a.bio.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Show previous person"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-ink transition-colors hover:border-brand hover:text-brand"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2.5">
          {attorneys.map((a, i) => (
            <button
              key={a.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show ${a.name}`}
              aria-current={i === index}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? "bg-brand" : "bg-border hover:bg-brand/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Show next person"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-ink transition-colors hover:border-brand hover:text-brand"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
