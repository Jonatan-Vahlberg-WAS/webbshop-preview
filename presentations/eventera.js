/**
 * EVENTERA — Bokningsplattform för lokala event
 * Tagline: Boka din plats. Upplev något.
 * Frontend: Vanilla JS | Backend: Node/Express | DB: MongoDB
 */

const eventeraPitch = {
    meta: {
        title: "EVENTERA",
        slug: "eventera-pitch",
        description:
            "En enkel bokningsplattform för lokala event. Kunden ser vad som händer, bokar sin plats och får en bekräftelse. Ägaren sköter allt från adminpanelen.",
        tags: ["events", "booking", "community", "fullstack"],
    },

    options: {
        showProgress: true,
        showFullScreen: true,
        allowKeyboard: true,
        allowScroll: false,
        showNotes: false,
    },

    defaults: {
        theme: "eventera",
        alignVertically: "center",
        sizes: {
            texts: {
                md: "1.125rem",
                lg: "1.375rem",
                xl: "1.625rem",
                xxl: "2rem",
            },
        },
    },

    themes: [
        {
            name: "eventera",
            colors: {
                primary: "#f4a261",
                background: "#1a1a2e",
                text: "#eaeaea",
                cardBackground: "#16213e",
                cardText: "#eaeaea",
            },
            fonts: {
                headline: "var(--font-geist-sans), system-ui, sans-serif",
                body: "var(--font-geist-sans), system-ui, sans-serif",
            },
        },
    ],

    slides: [

        // ─── 1. Hero ────────────────────────────────────────────────────────────────
        {
            layout: "full",
            alignVertically: "center",
            content: [
                {
                    type: "layered",
                    content: {
                        content: {
                            type: "image",
                            content: {
                                src: "/images/pitches/eventera/logo.png",
                                alt: "EVENTERA hero",
                            },
                            expand: true,
                        },
                        layer: {
                            type: "title",
                            content: {
                                title: "EVENTERA",
                                subtitle: "Boka din plats. Upplev något.",
                                showDivider: true,
                            },
                        },
                        layerPosition: "bottom",
                        layerClassName:
                            "!w-full !max-w-none flex flex-col items-center pb-16 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white px-8",
                    },
                },
            ],
        },

        // ─── 2. Problemet ──────────────────────────────────────────────────────────
        {
            title: "Idag sköts allt via mejl och telefon.",
            subtitle: "Det finns ett bättre sätt",
            showDivider: true,
            layout: "full",
            content: [
                {
                    type: "columns",
                    className: "slideskit-columns-centered",
                    content: {
                        left: [
                            {
                                type: "image",
                                content: {
                                    src: "/images/pitches/eventera/1.jpg",
                                    alt: "Lokalt event",
                                    caption: "Yogaklass, spelkväll, företagsmiddag — alla behöver en bokning.",
                                    standing: true,
                                },
                            },
                        ],
                        right: [
                            {
                                type: "text",
                                content:
                                    "Ett litet eventföretag arrangerar allt från företagsmiddagar till spelkvällar. Platserna är begränsade. Bokningarna hanteras manuellt. Det är onödigt krångligt — för både kunden och personalen.",
                                size: "lg",
                            },
                            {
                                type: "list",
                                className: "text-xl",
                                content: {
                                    style: "bullet",
                                    items: [
                                        "Kunder vet inte vilka event som finns eller om det finns platser kvar.",
                                        "Personalen lägger tid på att svara på frågor som en webbplats kunde besvara.",
                                        "Dubbelbokningar händer. En databas löser det.",
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 3. Lösningen ──────────────────────────────────────────────────────────
        {
            title: "En eventkalender med inbyggd bokning",
            subtitle: "Enkelt för kunden. Enkelt för personalen.",
            showDivider: true,
            layout: "full",
            content: [
                {
                    type: "columns",
                    className: "slideskit-columns-centered",
                    content: {
                        left: [
                            {
                                type: "list",
                                className: "text-xl",
                                content: {
                                    style: "number",
                                    items: [
                                        "Kunden bläddrar bland kommande event — datum, beskrivning och antal platser kvar visas tydligt.",
                                        "Kunden väljer ett event och fyller i namn och kontaktuppgifter. En plats reserveras direkt.",
                                        "Bokningsbekräftelse visas på skärmen. Platsen är registeradei databasen.",
                                        "Är eventet fullt syns det direkt — Boka-knappen inaktiveras automatiskt.",
                                    ],
                                },
                            },
                        ],
                        right: [
                            {
                                type: "image",
                                content: {
                                    src: "/images/pitches/eventera/2.png",
                                    alt: "Bokningsflöde",
                                    caption: "Se. Välj. Boka. Klart.",
                                    standing: true,
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 4. Datamodellen ───────────────────────────────────────────────────────
        {
            title: "En datamodell man förstår på fem minuter",
            subtitle: "Två collections. En relation.",
            showDivider: true,
            layout: "full",
            content: [
                {
                    type: "columns",
                    className: "slideskit-columns-centered",
                    content: {
                        left: [
                            {
                                type: "image",
                                content: {
                                    src: "/images/pitches/eventera/3.png",
                                    alt: "Datamodell",
                                    caption: "Events och Bookings. Det är allt.",
                                    standing: true,
                                },
                            },
                        ],
                        right: [
                            {
                                type: "list",
                                className: "text-xl",
                                content: {
                                    style: "bullet",
                                    items: [
                                        "Events — titel, beskrivning, datum, plats, maxantal och en bild. Skapas och redigeras av admin.",
                                        "Bookings — kopplar ett namn och en e-postadress till ett event. Varje bokning minskar antalet lediga platser med ett.",
                                        "Fullbokat? — backend kontrollerar att `bookings.length < event.maxCapacity` innan en bokning sparas. Ingen dubbelbokning är möjlig.",
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 5. Adminpanelen ───────────────────────────────────────────────────────
        {
            title: "Adminpanelen",
            subtitle: "Allt personal behöver — ingenting de inte behöver",
            showDivider: true,
            layout: "full",
            content: [
                {
                    type: "columns",
                    className: "slideskit-columns-centered",
                    content: {
                        left: [
                            {
                                type: "image",
                                content: {
                                    src: "/images/pitches/eventera/4.png",
                                    alt: "Adminpanel",
                                    caption: "Skapa ett event på tre minuter. Se vem som bokat på tre sekunder.",
                                    standing: true,
                                },
                            },
                        ],
                        right: [
                            {
                                type: "text",
                                content: "Adminpanelen är skyddad av inloggning och tillgänglig endast för personal.",
                                size: "lg",
                            },
                            {
                                type: "list",
                                className: "text-xl",
                                content: {
                                    style: "bullet",
                                    items: [
                                        "Skapa, redigera och ta bort event — titel, datum, plats, maxantal och bild.",
                                        "Se alla bokningar per event — namn, kontaktuppgifter och antal bokade platser.",
                                        "Avboka en deltagare vid behov — platsen frigörs automatiskt.",
                                        "Utskriftsvänlig deltagarlista per event.",
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 6. Tekniska krav ──────────────────────────────────────────────────────
        {
            title: "Vad vi bygger",
            subtitle: "Hela backlogen i korthet",
            showDivider: true,
            layout: "full",
            alignVertically: "top",
            content: [
                {
                    type: "columns",
                    content: {
                        left: [
                            {
                                type: "card",
                                content: {
                                    opaque: true,
                                    blocks: [
                                        {
                                            type: "title",
                                            content: {
                                                title: "Core",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "list",
                                            content: {
                                                style: "check",
                                                items: [
                                                    { text: "Eventlista med datum, beskrivning och platser kvar", checked: false },
                                                    { text: "Bokningsformulär kopplat till ett specifikt event", checked: false },
                                                    { text: "Platskontroll — max antal bokningar per event", checked: false },
                                                    { text: "Inaktivera bokning när eventet är fullt", checked: false },
                                                    { text: "Bokningsbekräftelse visas efter genomförd bokning", checked: false },
                                                    { text: "Adminlogin med skyddade routes", checked: false },
                                                    { text: "CRUD för event i adminpanelen", checked: false },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                        right: [
                            {
                                type: "card",
                                content: {
                                    opaque: true,
                                    blocks: [
                                        {
                                            type: "title",
                                            content: {
                                                title: "Admin & Utökade krav",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "list",
                                            content: {
                                                style: "check",
                                                items: [
                                                    { text: "Deltagarlistor per event med utskriftsstöd", checked: false },
                                                    { text: "Avboka deltagare från adminpanelen", checked: false },
                                                    { text: "Filtrera event på kategori (t.ex. mat, sport, kultur)", checked: false },
                                                    { text: "Sökfunktion i eventlistan", checked: false },
                                                    { text: "Arkivvy för avslutade event", checked: false },
                                                    { text: "Responsiv design (mobil + desktop)", checked: false },
                                                    { text: "Enkel startsida med nästa event highlighted", checked: false },
                                                    { text: "Bekräftelsemejl till deltagare (Nodemailer)", checked: false },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 7. Förväntad nivå ─────────────────────────────────────────────────────
        {
            title: "Vad det här projektet tränar",
            subtitle: "Ett bra första projekt — tydligt scope, riktiga problem",
            showDivider: true,
            layout: "full",
            alignVertically: "top",
            content: [
                {
                    type: "columns",
                    content: {
                        left: [
                            {
                                type: "card",
                                content: {
                                    opaque: true,
                                    blocks: [
                                        {
                                            type: "title",
                                            content: {
                                                title: "Frontend",
                                                subtitle: "Vanilla JS",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "text",
                                            content: "Inga avancerade UI-tillstånd — men gränssnittet måste reagera på data. Det är grunderna, gjorda ordentligt.",
                                            size: "md",
                                        },
                                        {
                                            type: "list",
                                            content: {
                                                style: "bullet",
                                                items: [
                                                    "Hämta och rendera en eventlista dynamiskt med `fetch()`",
                                                    "Hantera ett formulär och skicka data till ett API",
                                                    "Inaktivera en knapp baserat på data från servern",
                                                    "Visa ett bekräftelsemeddelande utan sidladdning",
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                        right: [
                            {
                                type: "card",
                                content: {
                                    opaque: true,
                                    blocks: [
                                        {
                                            type: "title",
                                            content: {
                                                title: "Backend",
                                                subtitle: "Node / Express / MongoDB",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "text",
                                            content: "Datamodellen är avsiktligt enkel — fokus ligger på att bygga ett komplett och korrekt API, inte ett komplext ett.",
                                            size: "md",
                                        },
                                        {
                                            type: "list",
                                            content: {
                                                style: "bullet",
                                                items: [
                                                    "Bygga CRUD-endpoints för events och bokningar",
                                                    "Validera kapacitet innan en bokning sparas",
                                                    "Skydda adminroutes med autentisering",
                                                    "Returnera meningsfulla felmeddelanden och statuskoder",
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    type: "quote",
                    content: {
                        text: "Det här projektet har inga dolda svårigheter — men det kräver att varje del är genomtänkt och färdig.",
                        attribution: "Tips",
                        role: "Ett enkelt projekt gjort halvdant imponerar inte. Ett enkelt projekt gjort ordentligt gör det.",
                    },
                },
            ],
        },

        // ─── 8. Avslutning ─────────────────────────────────────────────────────────
        {
            title: "EVENTERA",
            subtitle: "Boka din plats. Upplev något.",
            showDivider: true,
            layout: "full",
            alignVertically: "center",
            content: [
                {
                    type: "image",
                    content: {
                        src: "/images/pitches/eventera/logo.png",
                        alt: "EVENTERA logo",
                        slanted: true,
                    },
                },
                {
                    type: "quote",
                    className: "text-xl",
                    content: {
                        text: "Inte det mest tekniskt avancerade projektet — men ett som faktiskt kan användas av ett riktigt företag från dag ett.",
                        attribution: "EVENTERA",
                        role: "MVP — 4 veckor",
                    },
                },
            ],
        },
    ],
};

export default eventeraPitch;