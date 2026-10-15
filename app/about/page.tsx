import type { Metadata } from "next";
import { Scale, Landmark, MapPin, Award } from "lucide-react";
import PageHero from "@/components/page-hero";
import StatBar from "@/components/stat-bar";

export const metadata: Metadata = {
  title: "Meet Jason & Nick | Roaring Brook Abstract",
  description:
    "Roaring Brook Abstract is owned and operated by Jason Ohliger and Nick McIntyre, Pike County attorneys who handle your title work and closing directly.",
};

const attorneys = [
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

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet Jason & Nick"
        title="Local Attorneys"
        italic="with Proven Results."
      />

      {/* Bios */}
      <section className="bg-background py-24">
        <div className="container mx-auto max-w-7xl px-6 space-y-20">
          {attorneys.map((a, i) => (
            <div
              key={a.name}
              className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16"
            >
              {/* Photo */}
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
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
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
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
          ))}

          {/* Shared firm note */}
          <div className="rounded-[1.6rem] border border-border bg-cream p-8 lg:ml-[calc(41.6667%+4rem)]">
            <h3 className="font-serif text-2xl tracking-tight text-ink">
              One name, new ownership
            </h3>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Roaring Brook Abstract has served Pike County for years. Jason
              and Nick — partners at{" "}
              <span className="font-medium text-ink">Ohliger &amp; McIntyre, LLC</span>{" "}
              — now own and run the company, bringing the same hands-on,
              attorney-led approach to title work that their clients already
              expect from them in the courtroom.
            </p>
          </div>
        </div>
      </section>

      <StatBar />
    </>
  );
}
