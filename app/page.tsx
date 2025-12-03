export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full space-y-12 py-12">
        {/* Logo / Name */}
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Online coaching · Reykjavík
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Egill Þór – Holistic Strength &amp; Aesthetics Coaching
          </h1>
        </header>

        {/* Hero / Promise */}
        <section className="space-y-4">
          <p className="text-lg text-slate-300">
            I help ordinary guys build an aesthetic, strong and healthy body
            through simple training, better food and intentional living.
          </p>
          <p className="text-sm text-slate-400">
            No crash diets. No extreme bulk–cut cycles. Just sustainable habits,
            muscle, and more energy for real life in and outside the gym.
          </p>
        </section>

        {/* Who it’s for */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Who this is for</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            <li>Men who want to start lifting but feel lost in the gym</li>
            <li>Guys who want an aesthetic body without wrecking their health</li>
            <li>
              Those who care about strength, energy, sleep and long-term
              wellbeing
            </li>
          </ul>
        </section>

        {/* How coaching works */}
        <section className="space-y-4 border border-slate-800 rounded-2xl p-6 bg-slate-900/40">
          <h2 className="text-xl font-semibold">How coaching works</h2>
          <ol className="space-y-3 text-slate-300">
            <li>
              <span className="font-semibold">1. Reach out</span>
              <br />
              You email me or send a DM with a short description of where you
              are now, your training experience and your goals.
            </li>
            <li>
              <span className="font-semibold">2. Clarity call</span>
              <br />
              We have a short online chat or call to see if we&apos;re a good
              fit and what you actually need right now – training, nutrition,
              habits or all three.
            </li>
            <li>
              <span className="font-semibold">3. Personal plan &amp; support</span>
              <br />
              I build a simple, realistic plan around your life and support you
              with check-ins, adjustments and accountability as you build your
              new baseline.
            </li>
          </ol>
        </section>

        {/* About Egill */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">About Egill</h2>
          <p className="text-slate-300">
            I&apos;m Egill, a coach from Reykjavík who used to chase aesthetics
            at any cost. I trained hard, ate &quot;perfectly&quot; and pushed
            myself, but I also burned myself out and felt disconnected from my
            body.
          </p>
          <p className="text-slate-300">
            Over time I shifted towards a more holistic approach – focusing on
            strength, posture, sleep, stress and long-term health, not just the
            mirror. Now I help other men build an aesthetic physique in a way
            that actually supports their life, work and relationships.
          </p>
          <p className="text-slate-400 text-sm">
            My coaching is calm, structured and honest. No screaming, no shame –
            just clear guidance, feedback and habits that compound over time.
          </p>
        </section>

        {/* Work with me / CTA */}
        <section className="space-y-3 border-t border-slate-800 pt-6">
          <h2 className="text-xl font-semibold">Work with me</h2>
          <p className="text-slate-300">
            Tell me about your current situation and your goals. I&apos;ll reply
            personally with next steps and if my coaching is a good fit for you
            right now.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="mailto:egillthor123@gmail.com?subject=Coaching%20Application"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium bg-slate-100 text-slate-900 hover:bg-slate-200 transition"
            >
              Apply for coaching
            </a>
            <p className="text-xs text-slate-400">
              Prefer Instagram? DM me on <span className="font-medium">@egillthorjo</span>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-4 border-t border-slate-800 text-xs text-slate-500">
          © {new Date().getFullYear()} Egill Þór Coaching · Reykjavík, Iceland
        </footer>
      </div>
    </main>
  );
}
