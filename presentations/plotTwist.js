/**
 * PLOT TWIST — Hyper-local plant-sharing app
 * Tagline: Propagate the Neighborhood.
 * Frontend: Vanilla JS + Leaflet.js | Backend: Node/Express | DB: MongoDB
 */

const plotTwistPitch = {
    meta: {
        title: "PLOT TWIST",
        slug: "plot-twist-pitch",
        description:
            "En hyperlokal växtdelningsapp. Ersätt stormarknaden med en karta över dina grannars fönsterbrädor.",
        tags: ["plants", "sharing", "hyperlocal", "community"],
    },

    options: {
        showProgress: true,
        showFullScreen: true,
        allowKeyboard: true,
        allowScroll: false,
        showNotes: false,
    },

    defaults: {
        theme: "earth",
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
            name: "earth",
            colors: {
                primary: "#588157",
                background: "#344e41",
                text: "#f0f4ef",
                cardBackground: "#3d5a4a",
                cardText: "#f0f4ef",
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
                                src: "/images/pitches/plottwist/logo.png",
                                alt: "PLOT TWIST hero",
                            },
                            expand: true,
                        },
                        layer: {
                            type: "title",
                            content: {
                                title: "PLOT TWIST",
                                subtitle: "Propagate the Neighborhood.",
                                showDivider: true,
                            },
                        },
                        layerPosition: "bottom",
                        layerClassName:
                            "!w-full !max-w-none flex flex-col items-center pb-16 bg-gradient-to-t from-[#344e41]/95 via-[#344e41]/50 to-transparent text-[#f0f4ef] px-8",
                    },
                },
            ],
        },

        // ─── 2. Konceptet ──────────────────────────────────────────────────────────
        {
            title: "Glöm stormarknaden.",
            subtitle: "Dina grannar har redan det du söker",
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
                                    src: "/images/pitches/plottwist/1.png",
                                    alt: "Växter och sticklingar",
                                    caption: "Varje fönsterbräda är ett potentiellt utbyte.",
                                    standing: true,
                                },
                            },
                        ],
                        right: [
                            {
                                type: "text",
                                content:
                                    "PLOT TWIST är en hyperlokal app för att dela och byta växter med grannar. Ingen butik. Ingen frakt. Bara en karta, en stickling och en handskakning.",
                                size: "lg",
                            },
                            {
                                type: "list",
                                className: "text-xl",
                                content: {
                                    style: "bullet",
                                    items: [
                                        "Lägg upp en växt — foto, namn och plats. Den hamnar direkt som en nål på grannskapskartan.",
                                        "Hitta något du vill ha — skicka en bytesförfrågan med ett klick.",
                                        "Bekräfta och möts — ägaren godkänner, ni bestämmer var ni ses. Klart.",
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 3. Kartvy ─────────────────────────────────────────────────────────────
        {
            title: "Kartvyn",
            subtitle: "Frontend i fokus",
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
                                    src: "/images/pitches/plottwist/5.png",
                                    alt: "Kartnålar för växter",
                                    caption: "Varje nål är en växt. Varje växt är ett möjligt utbyte.",
                                    standing: true,
                                },
                            },
                        ],
                        right: [
                            {
                                type: "text",
                                content: "Inga tråkiga listor. En levande karta över din gata.",
                                size: "lg",
                            },
                            {
                                type: "list",
                                className: "text-xl",
                                content: {
                                    style: "bullet",
                                    items: [
                                        "Leaflet.js för interaktiva kartnålar — ett lättviktigt bibliotek som inte kräver ett framework.",
                                        "Snabbvy — tryck på en nål för att se foto och skicka en bytesförfrågan i ett steg.",
                                        "Kartan uppdateras dynamiskt när nya växter läggs till, utan omladdning.",
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 4. Bytesflödet ────────────────────────────────────────────────────────
        {
            title: "Det enkla bytet",
            subtitle: "Backend i fokus — ingen chatt, bara en handskakningslogik",
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
                                        "Förfrågan — Användare A skickar en bytesförfrågan kopplad till en specifik växt.",
                                        "Notifiering — Användare B ser förfrågan i sin profil och i en notifikation.",
                                        "Godkännande — Med ett klick bekräftar B bytet. Mötesplats och tid visas för båda parter.",
                                        "Avslutat — Bytet markeras som genomfört. Båda användares historik uppdateras.",
                                    ],
                                },
                            },
                        ],
                        right: [
                            {
                                type: "image",
                                content: {
                                    src: "/images/pitches/plottwist/6.png",
                                    alt: "Bytesflöde",
                                    caption: "Förfrågan. Godkänn. Möts.",
                                    standing: true,
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 5. Datamodellen ───────────────────────────────────────────────────────
        {
            title: "En lätt datamodell",
            subtitle: "Tre collections. Rena relationer.",
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
                                    src: "/images/pitches/plottwist/3.png",
                                    alt: "Växtprofil",
                                    caption: "Namn, bild, ljusnivå, koordinater — det är allt som behövs.",
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
                                        "Plants — namn, bild-URL, ljusnivå (1–3) och koordinater. Enkelt att skapa, enkelt att söka.",
                                        "Trades — kopplar ihop två användare och en Plant. Har en status: pending, approved eller completed.",
                                        "Users — registrering, inloggning och koppling till både uppladdade växter och byteshistorik.",
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
                                                    { text: "Registrering & inloggning (JWT/session)", checked: false },
                                                    { text: "Ladda upp växt med foto, namn och plats", checked: false },
                                                    { text: "Interaktiv karta med Leaflet.js", checked: false },
                                                    { text: "Kartnålar kopplade till växtposter i databasen", checked: false },
                                                    { text: "Skicka bytesförfrågan från kartvyn", checked: false },
                                                    { text: "Godkänn eller avvisa förfrågan", checked: false },
                                                    { text: "Byteshistorik i användarprofilen", checked: false },
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
                                                    { text: "Skyddad adminpanel (separat login)", checked: false },
                                                    { text: "Adminvy över alla användare och deras växter", checked: false },
                                                    { text: "Moderering — ta bort olämpliga växtposter", checked: false },
                                                    { text: "Översikt över alla pågående och avslutade byten", checked: false },
                                                    { text: "Filtrera kartan på växttyp eller ljusnivå", checked: false },
                                                    { text: "Sökfunktion i växtkatalogen", checked: false },
                                                    { text: "Notifikationer vid ny förfrågan eller godkännande", checked: false },
                                                    { text: "Responsiv design (mobil + desktop)", checked: false },
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
            subtitle: "Tillgängligt — men med riktiga tekniska utmaningar",
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
                                                subtitle: "Vanilla JS + Leaflet.js",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "text",
                                            content: "Det här är ett projekt där gränssnittet är produkten. Kartan måste kännas levande och responsiv.",
                                            size: "md",
                                        },
                                        {
                                            type: "list",
                                            content: {
                                                style: "bullet",
                                                items: [
                                                    "Integrera ett externt JS-bibliotek (Leaflet) utan ett framework",
                                                    "Rendera kartnålar dynamiskt från API-data med `fetch()`",
                                                    "Hantera formulär för uppladdning av växter med bild-URL och koordinater",
                                                    "Bygga ett flöde med flera UI-tillstånd — pending, approved, completed",
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
                                            content: "Datamodellen är lättare än SOLE_SEARCH — men byteslogiken kräver att man tänker igenom relationer och statusflöden.",
                                            size: "md",
                                        },
                                        {
                                            type: "list",
                                            content: {
                                                style: "bullet",
                                                items: [
                                                    "Designa tre collections med tydliga relationer: Users, Plants, Trades",
                                                    "Bygga endpoints för att skapa, godkänna och avvisa bytesförfrågningar",
                                                    "Hantera auth och se till att en användare bara kan hantera sina egna växter",
                                                    "Returnera geokoordinater på ett format som Leaflet kan konsumera direkt",
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
                        text: "Kartan är enkel att få upp — svårigheten är att hålla datan i sync när byten godkänns och växter försvinner.",
                        attribution: "Tips",
                        role: "Bestäm er för statusflödet i Trades-modellen innan ni skriver en rad kod.",
                    },
                },
            ],
        },

        // ─── 8. Avslutning ─────────────────────────────────────────────────────────
        {
            title: "PLOT TWIST",
            subtitle: "Propagate the Neighborhood.",
            showDivider: true,
            layout: "full",
            alignVertically: "center",
            content: [
                {
                    type: "image",
                    content: {
                        src: "/images/pitches/plottwist/logo.png",
                        alt: "PLOT TWIST logo",
                        slanted: true,
                    },
                },
                {
                    type: "quote",
                    className: "text-xl",
                    content: {
                        text: "Varje gata. Ett gemensamt växthus.",
                        attribution: "PLOT TWIST",
                        role: "MVP — 4 veckor",
                    },
                },
            ],
        },
    ],
};

export default plotTwistPitch;