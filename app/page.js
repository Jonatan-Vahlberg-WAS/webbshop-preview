"use client";

import { presentationLinks } from "@/presentations";

import NavPills from "./_components/NavPills";
import PresentationCard from "./_components/PresentationCard";
import ScheduleList from "./_components/ScheduleList";
import SectionCard from "./_components/SectionCard";
import { INSTRUCTORS, STACK_ITEMS, TOOLS } from "./_data/pageData";
import { Presentation } from "slideskit";
import { codeBlockRegistry } from "@slideskit/code";
import { videoBlockRegistry } from "@slideskit/video";
import "@slideskit/core/styles.css";
import "@slideskit/code/styles.css";
import "@slideskit/video/styles.css";
import kickoffPresentation from "@/presentations/kickoff";

const blockRegistry = { ...codeBlockRegistry, ...videoBlockRegistry };

export default function Home() {
  return (
    <article className="min-h-screen font-sans" lang="sv">

      {/* ── Header ── */}
      <header className="relative border-b-2 border-teal-200 dark:border-teal-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500" />
        <div className="max-w-3xl mx-auto py-16 px-6 pl-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Teknisk dokumentation
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Webbshop V-MEN · Nackademin 2026</p>
        </div>
      </header>

      {/* ── Hero presentation - Kickoff ── */}
      <div className="max-w-[1400px] mx-auto py-10 px-6">
        <Presentation presentation={kickoffPresentation} blockRegistry={blockRegistry} />
      </div>

      <NavPills />

      <main className="max-w-3xl mx-auto py-10 px-6 space-y-10">

        {/* ── Schema ── */}
        <SectionCard id="schedule" title="Schema">
          <ScheduleList />
        </SectionCard>

        {/* ── Översikt ── */}
        <SectionCard id="overview" title="Översikt">
          <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p className="text-lg">
              Ett gemensamt projekt mellan två klasser – backend och frontend. Uppgiften är att
              tillsammans sätta upp en fungerande webbshop enligt V-MEN-stacken. Varje klass har
              sina specifika ansvarsområden som måste samverka för att projektet ska fungera.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">V-MEN-stacken</h3>
              <div className="flex flex-wrap gap-3">
                {STACK_ITEMS.map(({ letter, name, desc }) => (
                  <span
                    key={letter}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800"
                  >
                    <span className="font-bold text-teal-600 dark:text-teal-400 text-lg">{letter}</span>
                    <span><strong>{name}</strong>{desc && ` – ${desc}`}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
              <p>
                Backend-klassen ansvarar för servern, API:t och databasen. Frontend-klassen bygger
                användargränssnittet som kommunicerar med backend. Tillsammans realiseras en
                fullstack webbshop.
              </p>
            </div>
          </div>
        </SectionCard>

        {/* ── Backend ── */}
        <SectionCard id="backend" title="Backend">
          <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Ansvar</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>REST API med slutpunkter för produkter, kundvagn, orders m.m.</li>
                <li>Databas – lagring av produkter, användare och beställningar</li>
                <li>Autentisering via JWT</li>
                <li>Lösenordshashing med bcrypt</li>
                <li>Middleware för hantering (auth, felhantering m.m.)</li>
                <li>Validering av inkommande data</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Tekniker</h3>
              <p>Node.js, Express, MongoDB</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Testing</h3>
              <p>Vitest och Supertest för integrationstester</p>
            </div>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Grundkod</h3>
              <p className="mb-2">Forka repot för att komma igång:</p>
              <a
                href="https://github.com/Jonatan-Vahlberg-WAS/webbshop-2026-be"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-teal-600 dark:text-teal-400 font-medium hover:bg-teal-500 hover:text-white dark:hover:bg-teal-600 transition-colors"
              >
                github.com/Jonatan-Vahlberg-WAS/webbshop-2026-be
              </a>
            </div>
          </div>
        </SectionCard>

        {/* ── Frontend ── */}
        <SectionCard id="frontend" title="Frontend">
          <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Ansvar</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vanilla JavaScript – inga ramverk eller bibliotek</li>
                <li>HTML/CSS för layout och styling</li>
                <li>
                  Anrop till backend-API:t via{" "}
                  <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-sm">fetch</code>
                </li>
                <li>Produktlistor, kundvagn, kassan och inloggning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Tekniker</h3>
              <p>Vanilla JavaScript, HTML, CSS – andra ramverk som t.ex. leaflet.js om projektet kräver det.</p>
            </div>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Grundkod</h3>
              <p className="mb-2">Forka repot för att komma igång:</p>
              <a
                href="https://github.com/Jonatan-Vahlberg-WAS/webbshop-2026-fe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-teal-600 dark:text-teal-400 font-medium hover:bg-teal-500 hover:text-white dark:hover:bg-teal-600 transition-colors"
              >
                github.com/Jonatan-Vahlberg-WAS/webbshop-2026-fe
              </a>
            </div>
          </div>
        </SectionCard>

        {/* ── Deploy ── */}
        <SectionCard id="deploy" title="Deploy">
          <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Hosting</h3>
              <p className="mb-4">Var och hur projektet körs i produktion:</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Backend", value: "Vercel" },
                  { label: "Frontend", value: "Vercel eller GitHub Pages eller annat hosting-provider" },
                  { label: "Databas", value: "MongoDB Atlas" },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-700">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">{label}</p>
                    <p className="text-teal-600 dark:text-teal-400">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Miljövariabler</h3>
              <p className="mb-2 text-slate-600 dark:text-slate-400 text-sm">För lokal utveckling:</p>
              <pre className="bg-slate-100 dark:bg-slate-800 border border-teal-200 dark:border-teal-800 p-5 rounded-lg overflow-x-auto text-sm font-mono text-slate-800 dark:text-slate-200 leading-relaxed">
{`PORT=3000
MONGODB_URI=mongodb://localhost:27017/webshop`}
              </pre>
              <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
                För produktion: använd Atlas-connection string i Vercel.
              </p>
            </div>
          </div>
        </SectionCard>

        {/* ── Verktyg ── */}
        <SectionCard id="verktyg" title="Verktyg">
          <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>Verktyg som används i projektet:</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {TOOLS.map(({ name, desc, span }) => (
                <div
                  key={name}
                  className={`rounded-lg border border-slate-200 dark:border-slate-700 p-4${span === 2 ? " sm:col-span-2" : ""}`}
                >
                  <p className="font-semibold text-slate-800 dark:text-slate-200">{name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        {/* ── Information ── */}
        <SectionCard id="information" title="Information">
          <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Primär kommunikation</h3>
              <p>Discord under vanliga arbetstider, eller de arbetstider som gruppen kan komma överens om.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Problem med kod</h3>
              <p>Kontakta någon av utbildarna.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Utbildare</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {INSTRUCTORS.map(({ name, email, class: cls, days }) => (
                  <div key={name} className="rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 p-5">
                    <p className="font-bold text-slate-900 dark:text-slate-100">{name}</p>
                    <a href={`mailto:${email}`} className="font-medium text-sm underline">{`Email ${name}`}</a>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{cls}</p>
                    <p className="mt-2 text-teal-600 dark:text-teal-400 font-medium">{days}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        {/* ── Grupper ── */}
        <SectionCard id="groups" title="Grupper">
          <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>Projektet organiseras i grupper – separata backend-grupper och frontend-grupper som sedan kopplas samman.</p>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Gruppindelning</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Backend-grupper ansvarar för API och databas</li>
                <li>Frontend-grupper bygger användargränssnittet</li>
                <li>Varje frontend-grupp kopplas till en specifik backend-grupp</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Kommunikation</h3>
              <p>Discord, Teams eller e-post enligt vad gruppen föredrar.</p>
            </div>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Grupplista</h3>
              <p className="text-slate-600 dark:text-slate-400">[Tabell eller lista med grupper och medlemmar]</p>
            </div>
          </div>
        </SectionCard>

        {/* ── Gruppuppgifter ── */}
        <SectionCard id="group-assignments" title="Gruppuppgifter">
          <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>Uppdelning av arbete och ansvarsområden mellan backend- och frontend-grupperna.</p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-5">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Backend</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>API-slutpunkter</li>
                  <li>Databasschema och modeller</li>
                  <li>Autentisering (JWT, bcrypt)</li>
                  <li>Validering och felhantering</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-5">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Frontend</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Sidor och vyer</li>
                  <li>Integration med API</li>
                  <li>Kundvagn och kassan</li>
                  <li>Inloggning och registrering</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Presentationer</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-3 text-sm">
                Slides och genomgångar kopplade till projektet. Jämför nivåerna innan ni väljer pitch.
              </p>
              <div className="mb-5 rounded-lg border border-dashed border-teal-300/80 dark:border-teal-700 bg-teal-50/50 dark:bg-teal-950/20 px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
                <p className="font-medium text-slate-700 dark:text-slate-300 mb-1">Nivåskala (1–5 prickar)</p>
                <p>
                  Uppskattad omfattning och komplexitet för{" "}
                  <strong className="text-slate-800 dark:text-slate-200">backend</strong> respektive{" "}
                  <strong className="text-slate-800 dark:text-slate-200">frontend</strong> i varje pitch – så
                  att gruppen kan välja utifrån tid och erfarenhet.
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {presentationLinks.map((p) => (
                  <li key={p.id}>
                    <PresentationCard {...p} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionCard>

      </main>

      <footer className="max-w-3xl mx-auto py-8 px-6 mt-12 border-t border-slate-200 dark:border-slate-700">
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
          Webbshop V-MEN · Nackademin 2026
        </p>
      </footer>
    </article>
  );
}
