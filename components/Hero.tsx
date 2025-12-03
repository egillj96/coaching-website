// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full border-b border-neutral-800 bg-neutral-950 text-neutral-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
        {/* Text */}
        <div className="flex-1 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-medium text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Online coaching · Reykjavík · For men
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Build an aesthetic, strong body{" "}
              <span className="text-emerald-400">without burning out.</span>
            </h1>
            <p className="max-w-xl text-sm text-neutral-300 md:text-base">
              I help ordinary guys get leaner, stronger and more confident
              with simple training, high-quality food and intentional habits.
              No extreme bulks, no crash diets—just sustainable progress.
            </p>
          </div>

          {/* Bullets */}
          <ul className="grid gap-2 text-sm text-neutral-300 md:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Custom lifting plan focused on aesthetics & joint health</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Simple nutrition guidance for energy and lightness</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Weekly check-ins and honest accountability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Holistic approach: body, mind, lifestyle</span>
            </li>
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/apply"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-emerald-400 text-neutral-950 hover:bg-emerald-300 transition"
            >
              Apply for coaching
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-neutral-300 hover:text-neutral-100"
            >
              Learn more about my approach →
            </a>
          </div>

          {/* Tiny note */}
          <p className="text-xs text-neutral-500">
            Taking a limited number of online clients in 2026.
          </p>
        </div>

        {/* Image / visual */}
        <div className="flex-1">
          <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 md:h-72 md:w-72">
            {/* Replace src with your real photo when you have it */}
            <Image
              src="/egill-placeholder.jpg"
              alt="Coach Egill Þór"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
