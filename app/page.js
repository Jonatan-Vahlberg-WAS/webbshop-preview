import Link from "next/link";

import { presentationLinks } from "@/presentations";

const LEVEL_MAX = 5;

function LevelDots({ label, value, max = LEVEL_MAX }) {
  const n = Math.min(Math.max(Number(value) || 0, 0), max);
  return (
    <div className="flex items-center gap-2 min-w-0">
      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 shrink-0 w-24">
        {label}
      </span>
      <div
        className="flex gap-1.5"
        role="img"
        aria-label={`${label}: ${n} av ${max}`}
      >
        {Array.from({ length: max }, (_, i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 rounded-full shrink-0 transition-colors ${
              i < n
                ? "bg-teal-500 shadow-[0_0_0_1px] shadow-teal-500/40"
                : "bg-slate-200 dark:bg-slate-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <article className="min-h-screen font-sans" lang="sv">
      <header className="relative border-b-2 border-teal-200 dark:border-teal-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500" />
        <div className="max-w-3xl mx-auto py-16 px-6 pl-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Teknisk dokumentation
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Webbshop V-MEN · Nackademin 2026</p>
        </div>
      </header>

      <nav className="max-w-3xl mx-auto py-10 px-6 border-b border-slate-200 dark:border-slate-700">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">
          Innehåll
        </h2>
        <ol className="flex flex-wrap gap-2">
          {[
            { label: "Översikt", id: "overview" },
            { label: "Backend", id: "backend" },
            { label: "Frontend", id: "frontend" },
            { label: "Deploy", id: "deploy" },
            { label: "Verktyg", id: "verktyg" },
            { label: "Information", id: "information" },
            { label: "Grupper", id: "groups" },
            { label: "Gruppuppgifter", id: "group-assignments" },
          ].map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="inline-block px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-600 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <main className="max-w-3xl mx-auto py-10 px-6 space-y-10">
        <section id="overview" className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <span className="flex h-10 w-1 rounded-full bg-teal-500" />
            Översikt
          </h2>
          <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p className="text-lg">
              Ett gemensamt projekt mellan två klasser – backend och frontend. Uppgiften är att tillsammans sätta upp en fungerande webbshop enligt V-MEN-stacken. Varje klass har sina specifika ansvarsområden som måste samverka för att projektet ska fungera.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">V-MEN-stacken</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { letter: "V", name: "Vanilla", desc: "inga ramverk, ren JavaScript/HTML/CSS" },
                  { letter: "M", name: "MongoDB", desc: "NoSQL-databas" },
                  { letter: "E", name: "Express", desc: "webbramverk för Node" },
                  { letter: "N", name: "Node", desc: "JavaScript-runtime" },
                ].map(({ letter, name, desc }) => (
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
              <p>Backend-klassen ansvarar för servern, API:t och databasen. Frontend-klassen bygger användargränssnittet som kommunicerar med backend. Tillsammans realiseras en fullstack webbshop.</p>
            </div>
          </div>
        </section>

        <section id="backend" className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <span className="flex h-10 w-1 rounded-full bg-teal-500" />
            Backend
          </h2>
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
              <a href="https://github.com/Jonatan-Vahlberg-WAS/webbshop-2026-be" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-teal-600 dark:text-teal-400 font-medium hover:bg-teal-500 hover:text-white dark:hover:bg-teal-600 transition-colors">
                github.com/Jonatan-Vahlberg-WAS/webbshop-2026-be
              </a>
            </div>
          </div>
        </section>

        <section id="frontend" className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <span className="flex h-10 w-1 rounded-full bg-teal-500" />
            Frontend
          </h2>
          <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Ansvar</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vanilla JavaScript – inga ramverk eller bibliotek</li>
                <li>HTML/CSS för layout och styling</li>
                <li>Anrop till backend-API:t via <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-sm">fetch</code></li>
                <li>Produktlistor, kundvagn, kassan och inloggning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Struktur</h3>
              <p className="text-slate-600 dark:text-slate-400">[Beskriv fil- och mappstruktur här]</p>
            </div>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Grundkod</h3>
              <p className="mb-2">Forka repot för att komma igång:</p>
              <a href="https://github.com/Jonatan-Vahlberg-WAS/webbshop-2026-fe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-teal-600 dark:text-teal-400 font-medium hover:bg-teal-500 hover:text-white dark:hover:bg-teal-600 transition-colors">
                github.com/Jonatan-Vahlberg-WAS/webbshop-2026-fe
              </a>
            </div>
          </div>
        </section>

        <section id="deploy" className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <span className="flex h-10 w-1 rounded-full bg-teal-500" />
            Deploy
          </h2>
          <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Hosting</h3>
              <p className="mb-4">Var och hur projektet körs i produktion:</p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-700">
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Backend</p>
                  <p className="text-teal-600 dark:text-teal-400">Vercel</p>
                </div>
                <div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-700">
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Frontend</p>
                  <p className="text-teal-600 dark:text-teal-400">Vercel</p>
                </div>
                <div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-700">
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Databas</p>
                  <p className="text-teal-600 dark:text-teal-400">MongoDB Atlas</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Miljövariabler</h3>
              <p className="mb-2 text-slate-600 dark:text-slate-400 text-sm">För lokal utveckling:</p>
              <pre className="bg-slate-100 dark:bg-slate-800 border border-teal-200 dark:border-teal-800 p-5 rounded-lg overflow-x-auto text-sm font-mono text-slate-800 dark:text-slate-200 leading-relaxed">
{`PORT=3000
MONGODB_URI=mongodb://localhost:27017/webshop`}
              </pre>
              <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">För produktion: använd Atlas-connection string i Vercel.</p>
            </div>
          </div>
        </section>

        <section id="verktyg" className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <span className="flex h-10 w-1 rounded-full bg-teal-500" />
            Verktyg
          </h2>
          <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>Verktyg som används i projektet:</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <p className="font-semibold text-slate-800 dark:text-slate-200">Vercel</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Hosting för backend och frontend.</p>
              </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <p className="font-semibold text-slate-800 dark:text-slate-200">Postman</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">API-testning och dokumentation.</p>
              </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <p className="font-semibold text-slate-800 dark:text-slate-200">Trello</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Kanban-stil planering och uppgiftshantering.</p>
              </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <p className="font-semibold text-slate-800 dark:text-slate-200">Discord</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Kommunikation mellan grupper och klasser.</p>
              </div>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4 sm:col-span-2">
                <p className="font-semibold text-slate-800 dark:text-slate-200">MongoDB Compass</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Databasvisualisering. Används eftersom Atlas endast har ett säte per grupp – Compass låter alla i gruppen granska datan lokalt.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="information" className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <span className="flex h-10 w-1 rounded-full bg-teal-500" />
            Information
          </h2>
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
                <div className="rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 p-5">
                  <p className="font-bold text-slate-900 dark:text-slate-100">Brandon</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Frontend-klassen</p>
                  <p className="mt-2 text-teal-600 dark:text-teal-400 font-medium">Onsdagar och fredagar</p>
                </div>
                <div className="rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 p-5">
                  <p className="font-bold text-slate-900 dark:text-slate-100">Jonatan</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Backend-klassen</p>
                  <p className="mt-2 text-teal-600 dark:text-teal-400 font-medium">Måndagar och tisdagar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="groups" className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <span className="flex h-10 w-1 rounded-full bg-teal-500" />
            Grupper
          </h2>
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
        </section>

        <section id="group-assignments" className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
            <span className="flex h-10 w-1 rounded-full bg-teal-500" />
            Gruppuppgifter
          </h2>
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
                  Uppskattad omfattning och komplexitet för <strong className="text-slate-800 dark:text-slate-200">backend</strong> respektive <strong className="text-slate-800 dark:text-slate-200">frontend</strong> i varje pitch – så att gruppen kan välja utifrån tid och erfarenhet.
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {presentationLinks.map(({ id, title, description, levels }) => (
                  <li key={id}>
                    <Link
                      href={`/presentations/${id}`}
                      className="group flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-linear-to-r from-teal-50/80 to-slate-50/50 dark:from-teal-950/40 dark:to-slate-900/40 px-5 py-4 shadow-sm transition-all hover:border-teal-400 dark:hover:border-teal-600 hover:shadow-md hover:from-teal-100/90 dark:hover:from-teal-900/50 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold text-slate-800 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                          {title}
                        </span>
                        {description ? (
                          <span className="mt-0.5 block text-sm text-slate-600 dark:text-slate-400">
                            {description}
                          </span>
                        ) : null}
                        {levels ? (
                          <div className="mt-3 flex flex-col gap-1.5">
                            <LevelDots label="Backend" value={levels.backend} />
                            <LevelDots label="Frontend" value={levels.frontend} />
                          </div>
                        ) : null}
                      </span>
                      <span
                        className="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/15 text-teal-600 dark:bg-teal-400/15 dark:text-teal-400 group-hover:bg-teal-500 group-hover:text-white dark:group-hover:bg-teal-500 transition-colors self-end sm:self-center"
                        aria-hidden
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-3xl mx-auto py-8 px-6 mt-12 border-t border-slate-200 dark:border-slate-700">
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
          Webbshop V-MEN · Nackademin 2026
        </p>
      </footer>
    </article>
  );
}
