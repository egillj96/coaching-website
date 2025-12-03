export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full space-y-10">
        {/* Logo / Name */}
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Online coaching · Reykjavík
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Egill Þór – Holistic Strength & Aesthetics Coaching
          </h1>
        </header>

        {/* Hero / Promise */}
        <section className="space-y-4">
          <p className="text-lg text-slate-300">
            I help ordinary guys build an aesthetic, strong and healthy body 
            through simple training, better food and intentional living.
          </p>
          <p className="text-sm text-slate-400">
            No crash diets. No extreme bulk-cut cycles. Just sustainable habits, 
            muscle, and more energy for real life.
          </p>
        </section>

        {/* Who it’s for */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Who this is for</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            <li>Men who want to start lifting but feel lost in the gym</li>
            <li>Guys who want an aesthetic body without destroying their health</li>
            <li>Those who care about strength, energy, sleep and long-term wellbeing</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Work with me</h2>
          <p className="text-slate-300">
            Tell me about your current situation and your goals. I&apos;ll reply 
            personally with next steps and if my coaching is a good fit.
          </p>
          <a
            href="mailto:egill@example.com?subject=Coaching%20Application"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium bg-slate-100 text-slate-900 hover:bg-slate-200 transition"
          >
            Email me to apply
          </a>
          <p className="text-xs text-slate-500">
            Prefer Instagram? DM me on @egillthorjo
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-4 border-t border-slate-800 text-xs text-slate-500">
          © {new Date().getFullYear()} Egill Þór Coaching · Reykjavík, Iceland
        </footer>
      </div>
    </main>
  );
}
