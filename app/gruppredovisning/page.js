import Link from "next/link";
import SectionCard from "../_components/SectionCard";

export const metadata = {
  title: "Gruppredovisning · Teknisk dokumentation",
  description:
    "Vad ni ska visa när ni redovisar webbshopen: live-demo, innehåll, vad som gör er butik unik, hur ni jobbat i gruppen och med agila arbetssätt.",
};

export default function GruppredovisningPage() {
  return (
    <article className="min-h-screen font-sans" lang="sv">
      <header className="relative border-b-2 border-teal-200 dark:border-teal-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500" />
        <div className="max-w-3xl mx-auto py-14 px-6 pl-8">
          <p className="mb-3">
            <Link
              href="/"
              className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline"
            >
              ← Tillbaka till teknisk dokumentation
            </Link>
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Gruppredovisning
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Så här kan ni tänka när ni förbereder er — ungefär 15 minuter per grupp, om inget annat sägs.
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-10 px-6 space-y-10 pb-16">
        <SectionCard id="syfte" title="Vad handlar redovisningen om?">
          <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              Ni ska visa den <strong>första riktigt användbara versionen</strong> av er webbshop — den
              version ni faktiskt kan visa upp för någon som ska handla eller testa. Den ska finnas{" "}
              <strong>på riktigt online</strong> (se nedan), med texter och produkter som känns som en
              riktig butik, inte som utfyllnad.
            </p>
            <p>
              Visa också <strong>vad som gör just er butik intressant</strong> jämfört med en helt
              generisk lösning — alltså inte bara att ni följt kraven, utan vad ni valt att satsa
              extra på (tema, känsla, en funktion ni är stolta över …).
            </p>
            <p>
              Utöver själva sidan vill vi höra <strong>hur ni jobbat tillsammans i gruppen</strong>{" "}
              och <strong>hur ni använt agila idéer</strong> i praktiken (till exempel tavla med
              uppgifter, korta avstämningar, hur ni delade upp arbetet). Om ni har en
              partnergrupp — berätta kort hur ni pratade ihop er kring API eller gränssnitt.
            </p>
          </div>
        </SectionCard>

        <SectionCard id="innehall" title="Vad ni kan gå igenom">
          <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Ordningen spelar ingen roll — viktigare att allt finns med på ett sätt som känns naturligt
              för er.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                1. Kort intro
              </h3>
              <p>Vilka är ni i gruppen och vad tänker ni visa?</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                2. Live-demo av webbshopen
              </h3>
              <p className="mb-3">
                Öppna den <strong>publikt nåbara</strong> sidan — den som ligger deployad, alltså inte
                bara på någons dator lokalt (om kursen inte sagt något annat). Gå igenom det som är
                kärnan i uppgiften och det ni valt att lägga tid på.
              </p>
              <p className="mb-3">
                Allt som syns på skärmen (produktnamn, beskrivningar, kategorier …) ska kännas{" "}
                <strong>som en riktig butik</strong>. Undvik platshållartexter som <em>Lorem ipsum</em>,{" "}
                meningslösa strängar eller uppenbart skämtinnehåll — det blir svårt att se vad ni
                faktiskt byggt.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Om ni vill kan ni nämna något som fortfarande strular eller som ni medvetet lämnat —
                det är valfritt och ska inte ta fokus från att visa att det mesta fungerar.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                3. Vad som gör er butik er egen
              </h3>
              <p>
                I samband med demon: <strong>vad skiljer er webbshop från någon annan grupps?</strong>{" "}
                Det kan vara tema, målgrupp, utseende, en funktion, hur text och bilder hänger ihop …
                Namnge minst <strong>en sak</strong> ni är extra nöjda med och som syns (eller hörs) i
                det ni visar.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                4. Hur ni jobbat med agila arbetssätt
              </h3>
              <p>
                Berätta med <strong>exempel från ert projekt</strong>, inte bara ord från boken: hur
                skrev ni ner uppgifter, hur synkade ni (tavla, möten, chat …), hur hanterade ni om
                något ändrades? Ni behöver inte nämna varje begrepp — det som räknas är hur det såg ut
                för er i vardagen.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                5. Hur gruppen fungerade
              </h3>
              <p className="mb-3">
                Roller (om ni hade sådana), hur ni fattade beslut, hur ni höll kontakten med
                partnergruppen om det finns. En kort reflektion: vad funkade bra, vad hade ni kunnat göra
                annorlunda — gärna med <strong>ett konkret exempel</strong> (utan att hänga ut
                enskilda).
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                6. Avslut
              </h3>
              <p>
                Sammanfatta gärna med ett par tydliga punkter. Vill ni kan ni ta med en eller två av
                frågorna längre ned.
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="krav" title="Det här är bra att checka av">
          <ul className="list-disc pl-6 space-y-3 text-slate-700 dark:text-slate-300 leading-relaxed">
            <li>
              <strong>Live-sida:</strong> en adress som funkar för alla i rummet. Om ni av någon
              anledning bara kan visa lokalt och kursen tillåter det — säg varför, så alla förstår.
            </li>
            <li>
              <strong>Innehåll:</strong> texter och produkter ska kännas äkta för en butik, inte som
              tillfällig utfyllnad.
            </li>
            <li>
              <strong>Länkar:</strong> ha deploy-länken och repot redo om läraren frågar. Testa i
              samma webbläsare/miljö som när ni redovisar.
            </li>
            <li>
              <strong>Gruppexempel:</strong> minst ett exempel på hur ni löste något tillsammans
              (prioritet, missförstånd, stress inför deadline …).
            </li>
            <li>
              <strong>Vad som gör er unika:</strong> minst en tydlig punkt som kopplar till det ni visar.
            </li>
            <li>
              <strong>Tid:</strong> håll er ungefär inom den tid som gäller för er grupp (ofta runt{" "}
              15 minuter totalt).
            </li>
          </ul>
        </SectionCard>

        <SectionCard id="fragor" title="Frågor ni kan välja (en eller två)">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-5">
            Ni behöver inte ta upp alla — plocka det som passar er. Ni kan också bara diskutera dem i
            gruppen innan så att ni har svar om någon frågar.
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-slate-700 dark:text-slate-300 leading-relaxed">
            <li>Om ni hade en vecka till: vad skulle ni förbättra först, och varför?</li>
            <li>Vilken vana (t.ex. korta möten, tavla, avstämning) hjälpte er mest — och vad var svårast?</li>
            <li>Vad var knepigast med att få ihop frontend och backend — eller med partnergruppen?</li>
            <li>Finns det något kring säkerhet eller personuppgifter som ni medvetet valt att göra eller inte göra?</li>
            <li>Vad tar ni med er till nästa gång ni jobbar i grupp?</li>
            <li>Ett teknikval ni är glada över och ett ni skulle göra annorlunda?</li>
            <li>Vilket flöde för användaren var svårast — hur testade ni det?</li>
            <li>Vad var ni mest oroliga för att inte hinna — vad gjorde ni åt det?</li>
          </ol>
        </SectionCard>

        <SectionCard id="dagen-fore" title="Dagen före redovisningen">
          <ul className="list-disc pl-6 space-y-3 text-slate-700 dark:text-slate-300 leading-relaxed">
            <li>
              <strong>Öva in:</strong> kör igenom presentationen tillsammans — helst samma demo och samma
              ordning som på riktigt — så att ni vet ungefär hur lång tid det tar och att alla hänger med.
            </li>
            <li>
              <strong>Kodstopp:</strong> bestäm gärna att större ändringar i kod och deploy ska vara
              klara <strong>dagen innan</strong>. Sista dygnet är till småfix och att dubbelkolla — inte
              till att bygga om halva sidan.
            </li>
            <li>
              <strong>Allt på plats:</strong> innan kodstopp — se till att rätt version ligger ute,
              att texterna och datan ser bra ut i den miljön, och att alla vet vem som gör vad under
              redovisningen.
            </li>
          </ul>
        </SectionCard>

        <SectionCard id="checklista" title="Innan ni går in i salen">
          <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
            <li>Live-adressen funkar och ni har gått igenom samma flöde som ni tänker visa</li>
            <li>Ni kan säga i en mening vad som gör er butik särskild</li>
            <li>Inga platshållartexter i det ni visar</li>
            <li>Inloggning testad (gärna i privat/inkognito-fönster om det behövs)</li>
            <li>Alla vet ungefär vem som säger vad</li>
            <li>Någon håller koll på tiden</li>
          </ul>
        </SectionCard>
      </main>

      <footer className="max-w-3xl mx-auto py-8 px-6 border-t border-slate-200 dark:border-slate-700">
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
          Webbshop V-MEN · Nackademin 2026
        </p>
      </footer>
    </article>
  );
}
