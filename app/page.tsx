"use client";

import { useState } from "react";

type Lang = "is" | "en";

export default function Home() {
  const [lang, setLang] = useState<Lang>("is");

  const t = {
    is: {
      tag: "Nettþjálfun · Reykjavík",
      title: "Egill Þór – Heildræn styrktar- og líkamsmótunarþjálfun",
      hero1:
        "Ég hjálpa venjulegum strákum að byggja upp fagran, sterkan og heilbrigðan líkama með einfaldri þjálfun, betra fæði og meðvitaðri lifnaðarhætti.",
      hero2:
        "Engar krass-djamm megrunar, engar öfgafullar bulk–cut lotur. Bara sjálfbærar venjur, vöðvar og meiri orka fyrir raunverulegt líf.",
      whoTitle: "Fyrir hvern er þetta?",
      who1: "Fyrir menn sem vilja byrja að lyfta en finna sig týnda í ræktinni",
      who2: "Fyrir þá sem vilja fagran líkama án þess að rústa heilsunni",
      who3: "Fyrir þá sem hugsa um styrk, orku, svefn og langtíma vellíðan",
      howTitle: "Svona virkar þjálfunin",
      how1Title: "1. Hafðu samband",
      how1Body:
        "Þú sendir mér stuttan tölvupóst eða skilaboð um stöðuna þína, þína reynslu og markmið.",
      how2Title: "2. Stutt spjall",
      how2Body:
        "Við eigum stutt netspjall eða símtal til að sjá hvort við pössum saman og hvað þú raunverulega þarft núna – þjálfun, næringu, vana eða allt í einu.",
      how3Title: "3. Persónuleg áætlun og stuðningur",
      how3Body:
        "Ég smíða einfalda, raunhæfa áætlun í kringum lífið þitt og styð þig með reglulegum eftirfylgnum, aðlögunum og ábyrgð.",
      aboutTitle: "Um Egil",
      about1:
        "Ég er Egill, þjálfari frá Reykjavík sem elti útlit á hvaða kostnað sem er. Ég æfði mikið, borðaði „fullkomið“ og þrýsti á sjálfan mig, en endaði líka uppbrunninn og fjarlægður frá eigin líkama.",
      about2:
        "Með tímanum færði ég mig yfir í heildrænni nálgun – með fókus á styrk, líkamsstöðu, svefn, streitu og langtíma heilsu, ekki bara spegilmyndina. Nú hjálpa ég öðrum körlum að byggja upp fagran líkama á þann hátt sem styður líf þeirra, vinnu og sambönd.",
      about3:
        "Þjálfunin mín er róleg, skýr og heiðarleg. Engin öskur, engin skömm – bara skýr leiðsögn, endurgjöf og venjur sem safnast upp með tímanum.",
      workTitle: "Viltu vinna með mér?",
      workBody:
        "Segðu mér frá stöðunni þinni og markmiðum. Ég svara persónulega með næstu skrefum og hvort þjálfunin mín henti þér akkúrat núna.",
      button: "Sækja um þjálfun",
      dm: "Viltu frekar Instagram? Sendu mér skilaboð á ",
      footer: "Egill Þór Þjálfun · Reykjavík, Ísland",
      langIs: "Íslenska",
      langEn: "English",
    },
    en: {
      tag: "Online coaching · Reykjavík",
      title: "Egill Þór – Holistic Strength & Aesthetics Coaching",
      hero1:
        "I help ordinary guys build an aesthetic, strong and healthy body through simple training, better food and intentional living.",
      hero2:
        "No crash diets. No extreme bulk–cut cycles. Just sustainable habits, muscle, and more energy for real life in and outside the gym.",
      whoTitle: "Who this is for",
      who1: "Men who want to start lifting but feel lost in the gym",
      who2: "Guys who want an aesthetic body without wrecking their health",
      who3: "Those who care about strength, energy, sleep and long-term wellbeing",
      howTitle: "How coaching works",
      how1Title: "1. Reach out",
      how1Body:
        "You email me or send a DM with a short description of where you are now, your training experience and your goals.",
      how2Title: "2. Clarity call",
      how2Body:
        "We have a short online chat or call to see if we’re a good fit and what you actually need right now – training, nutrition, habits or all three.",
      how3Title: "3. Personal plan & support",
      how3Body:
        "I build a simple, realistic plan around your life and support you with check-ins, adjustments and accountability as you build your new baseline.",
      aboutTitle: "About Egill",
      about1:
        "I’m Egill, a coach from Reykjavík who used to chase aesthetics at any cost. I trained hard, ate “perfectly” and pushed myself, but I also burned out and felt disconnected from my body.",
      about2:
        "Over time I shifted towards a more holistic approach – focusing on strength, posture, sleep, stress and long-term health, not just the mirror. Now I help other men build an aesthetic physique in a way that actually supports their life, work and relationships.",
      about3:
        "My coaching is calm, structured and honest. No screaming, no shame – just clear guidance, feedback and habits that compound over time.",
      workTitle: "Work with me",
      workBody:
        "Tell me about your current situation and your goals. I’ll reply personally with next steps and if my coaching is a good fit for you right now.",
      button: "Apply for coaching",
      dm: "Prefer Instagram? DM me on ",
      footer: "Egill Þór Coaching · Reykjavík, Iceland",
      langIs: "Íslenska",
      langEn: "English",
    },
  }[lang];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full space-y-12 py-12">
        {/* Top bar: language switch */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-slate-500">
            {lang === "is" ? "Tungumál" : "Language"}
          </span>
          <div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 p-1 text-xs">
            <button
              onClick={() => setLang("is")}
              className={`px-3 py-1 rounded-full transition ${
                lang === "is"
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-400 hover:text-slate-100"
              }`}
            >
              {t.langIs}
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full transition ${
                lang === "en"
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-400 hover:text-slate-100"
              }`}
            >
              {t.langEn}
            </button>
          </div>
        </div>

        {/* Logo / Name */}
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            {t.tag}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">{t.title}</h1>
        </header>

        {/* Hero / Promise */}
        <section className="space-y-4">
          <p className="text-lg text-slate-300">{t.hero1}</p>
          <p className="text-sm text-slate-400">{t.hero2}</p>
        </section>

        {/* Who it’s for */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">{t.whoTitle}</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            <li>{t.who1}</li>
            <li>{t.who2}</li>
            <li>{t.who3}</li>
          </ul>
        </section>

        {/* How coaching works */}
        <section className="space-y-4 border border-slate-800 rounded-2xl p-6 bg-slate-900/40">
          <h2 className="text-xl font-semibold">{t.howTitle}</h2>
          <ol className="space-y-3 text-slate-300">
            <li>
              <span className="font-semibold">{t.how1Title}</span>
              <br />
              {t.how1Body}
            </li>
            <li>
              <span className="font-semibold">{t.how2Title}</span>
              <br />
              {t.how2Body}
            </li>
            <li>
              <span className="font-semibold">{t.how3Title}</span>
              <br />
              {t.how3Body}
            </li>
          </ol>
        </section>

        {/* About Egill */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">{t.aboutTitle}</h2>
          <p className="text-slate-300">{t.about1}</p>
          <p className="text-slate-300">{t.about2}</p>
          <p className="text-slate-400 text-sm">{t.about3}</p>
        </section>

        {/* Work with me / CTA */}
        <section className="space-y-3 border-t border-slate-800 pt-6">
          <h2 className="text-xl font-semibold">{t.workTitle}</h2>
          <p className="text-slate-300">{t.workBody}</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="mailto:egill@example.com?subject=Coaching%20Application"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium bg-slate-100 text-slate-900 hover:bg-slate-200 transition"
            >
              {t.button}
            </a>
            <p className="text-xs text-slate-400">
              {t.dm}
              <span className="font-medium">@egillthorjo</span>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-4 border-t border-slate-800 text-xs text-slate-500">
          © {new Date().getFullYear()} {t.footer}
        </footer>
      </div>
    </main>
  );
}
