/**
 * FOLIO — Portfoliobyggare för yrkesskolestudenter
 * Tagline: Din kod. Din karriär. Din sida.
 * Frontend: Vanilla JS | Backend: Node/Express | DB: MongoDB
 *
 * Nivå:
 * Backend:  ●●○○○  (2/5)
 * Frontend: ●●●●○  (4/5)
 */

const folioPitch = {
    meta: {
        title: "FOLIO",
        slug: "folio-pitch",
        description:
            "En portfoliobyggare för yrkesskolestudenter. Logga in, fyll i dina projekt och kompetenser — och få en publik portfoliosida med en egen URL. Ingen kod behövs av eleven.",
        tags: ["portfolio", "students", "profile", "fullstack"],
    },

    options: {
        showProgress: true,
        showFullScreen: true,
        allowKeyboard: true,
        allowScroll: false,
        showNotes: false,
    },

    defaults: {
        theme: "folio",
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
            name: "folio",
            colors: {
                primary: "#a78bfa",
                background: "#0f0f13",
                text: "#f1f0f5",
                cardBackground: "#18181f",
                cardText: "#f1f0f5",
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
                                src: "/images/pitches/folio/logo.png",
                                alt: "FOLIO hero",
                            },
                            expand: true,
                        },
                        layer: {
                            type: "title",
                            content: {
                                title: "FOLIO",
                                subtitle: "Din kod. Din karriär. Din sida.",
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
            title: "Du har byggt grejer. Ingen vet om det.",
            subtitle: "Problemet med att söka jobb som nyexaminerad",
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
                                    src: "/images/pitches/folio/1.jpg",
                                    alt: "Student med projekt",
                                    caption: "Tre terminers projekt. Ingen länk att skicka till en arbetsgivare.",
                                    standing: true,
                                },
                            },
                        ],
                        right: [
                            {
                                type: "text",
                                content:
                                    "En nyexaminerad student har gjort projekt, lärt sig verktyg och skrivit kod. Men utan en portfoliosida är det svårt att visa upp. GitHub räcker inte för alla. Ett CV är för statiskt.",
                                size: "lg",
                            },
                            {
                                type: "list",
                                className: "text-xl",
                                content: {
                                    style: "bullet",
                                    items: [
                                        "Arbetsgivare vill se vad du kan — inte bara läsa om det.",
                                        "Att bygga en egen portfoliosida tar tid och kräver kunskap man kanske inte har ännu.",
                                        "FOLIO löser det: logga in, fyll i dina grejer, dela länken.",
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 3. Hur det fungerar ───────────────────────────────────────────────────
        {
            title: "Tre steg. En sida.",
            subtitle: "Så enkelt ska det vara",
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
                                        "Registrera dig — namn, kort bio, profilbild och kontaktuppgifter. Det tar två minuter.",
                                        "Lägg till projekt — titel, beskrivning, bild och länk till GitHub eller liveversion.",
                                        "Dela din URL — varje användare får en publik sida på folio.app/dittnamn. Ingen inloggning krävs för besökaren.",
                                    ],
                                },
                            },
                        ],
                        right: [
                            {
                                type: "image",
                                content: {
                                    src: "/images/pitches/folio/2.jpg",
                                    alt: "Portfolioflöde",
                                    caption: "Registrera. Fyll i. Dela. Klart.",
                                    standing: true,
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 4. Den publika sidan ──────────────────────────────────────────────────
        {
            title: "Den publika sidan är produkten",
            subtitle: "Det här är frontend-utmaningen",
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
                                    src: "/images/pitches/folio/3.jpg",
                                    alt: "Publik portfoliosida",
                                    caption: "En sida som ser ut som om eleven designat den själv — fast ingen kod behövdes.",
                                    standing: true,
                                },
                            },
                        ],
                        right: [
                            {
                                type: "text",
                                content:
                                    "Den publika portfoliosidan är det som arbetsgivaren ser. Den ska vara snygg, snabb och fungera utan inloggning.",
                                size: "lg",
                            },
                            {
                                type: "list",
                                className: "text-xl",
                                content: {
                                    style: "bullet",
                                    items: [
                                        "Sidan renderas från API-data via `fetch()` — ingen server-side rendering behövs.",
                                        "URL:en baseras på användarens valda slug, t.ex. `/u/anna-svensson`.",
                                        "Projektkort med bild, beskrivning och länk — renderade dynamiskt från databasen.",
                                        "Taggar för kompetenser visas som klickbara etiketter — t.ex. JavaScript, Node, CSS.",
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 5. Premium Mode ───────────────────────────────────────────────────────
        {
            title: "Premium Mode",
            subtitle: "Önskvärd utökning — för grupper som vill ta det ett steg längre",
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
                                    src: "/images/pitches/folio/4.jpg",
                                    alt: "Premium portfoliosida",
                                    caption: "Samma data. Ett helt annat intryck.",
                                    standing: true,
                                },
                            },
                        ],
                        right: [
                            {
                                type: "text",
                                content:
                                    "En gratis FOLIO-sida ser bra ut. En Premium-sida ser professionell ut. Skillnaden ligger i vad användaren kan välja.",
                                size: "lg",
                            },
                            {
                                type: "list",
                                className: "text-xl",
                                content: {
                                    style: "bullet",
                                    items: [
                                        "Välj tema — ett urval av layouter och färgpaletter att applicera på sin publika sida.",
                                        "Custom slug — välj en personlig URL istället för den autogenererade.",
                                        "Framhävda projekt — markera ett eller två projekt som visas extra prominent.",
                                        "Premium-flagga i databasen — ett booleskt fält på användaren som låser upp dessa alternativ. Ingen betalningslösning behövs i MVP.",
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 6. Datamodellen ───────────────────────────────────────────────────────
        {
            title: "En datamodell som växer med er",
            subtitle: "Enkel kärna. Tydliga utbyggnadspunkter.",
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
                                    src: "/images/pitches/folio/5.jpg",
                                    alt: "Datamodell",
                                    caption: "Users och Projects. Premium är bara ett fält.",
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
                                        "Users — namn, bio, slug, profilbild, kontaktuppgifter, kompetenstaggar och ett `isPremium`-fält.",
                                        "Projects — titel, beskrivning, bild-URL, GitHub-länk, live-länk och ett `featured`-fält för Premium-användare.",
                                        "Slug-validering — backend kontrollerar att slugen är unik och bara innehåller tillåtna tecken innan den sparas.",
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 7. Tekniska krav ──────────────────────────────────────────────────────
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
                                                    { text: "Redigera profil — bio, bild, kontaktuppgifter", checked: false },
                                                    { text: "Lägg till, redigera och ta bort projekt", checked: false },
                                                    { text: "Publik portfoliosida på /u/[slug]", checked: false },
                                                    { text: "Slug-validering och unikhetskontroll", checked: false },
                                                    { text: "Kompetenstaggar på profilen", checked: false },
                                                    { text: "Projektkort med bild, beskrivning och länk", checked: false },
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
                                                    { text: "Adminvy över alla registrerade användare", checked: false },
                                                    { text: "Aktivera/inaktivera Premium per användare", checked: false },
                                                    { text: "Premium: temval för publik sida", checked: false },
                                                    { text: "Premium: custom slug", checked: false },
                                                    { text: "Premium: markera framhävda projekt", checked: false },
                                                    { text: "Responsiv design (mobil + desktop)", checked: false },
                                                    { text: "404-sida för ogiltiga slugs", checked: false },
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

        // ─── 8. Förväntad nivå ─────────────────────────────────────────────────────
        {
            title: "Vad det här projektet tränar",
            subtitle: "Enkel backend — men frontend kräver omsorg",
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
                                                subtitle: "Vanilla JS  ●●●●○",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "text",
                                            content: "Den publika sidan är det arbetsgivaren ser — den måste se bra ut på alla skärmstorlekar och kännas genomarbetad.",
                                            size: "md",
                                        },
                                        {
                                            type: "list",
                                            content: {
                                                style: "bullet",
                                                items: [
                                                    "Rendera en hel portfoliosida dynamiskt från API-data",
                                                    "Hantera en redigeringsvy med formulär för profil och flera projekt",
                                                    "Slug-baserad routing utan ett ramverk",
                                                    "Premium-teman innebär att samma data kan renderas i olika layouter — det kräver planering",
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
                                                subtitle: "Node / Express / MongoDB  ●●○○○",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "text",
                                            content: "Datamodellen är bland de enklaste i den här kursen — men det är fortfarande ett komplett API med auth och validering.",
                                            size: "md",
                                        },
                                        {
                                            type: "list",
                                            content: {
                                                style: "bullet",
                                                items: [
                                                    "CRUD för användare och projekt",
                                                    "Skydda redigeringsroutes — en användare ska bara kunna ändra sin egen profil",
                                                    "Slug-validering: unik, URL-säker och sökbar",
                                                    "Premium-logik är ett enda fält — men det måste respekteras i alla relevanta endpoints",
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
                        text: "Backend är gjord på en dag. Det är den publika sidan som tar tid — och det är den som räknas.",
                        attribution: "Tips",
                        role: "Börja med den publika sidan. Resten är CRUD.",
                    },
                },
            ],
        },

        // ─── 9. Avslutning ─────────────────────────────────────────────────────────
        {
            title: "FOLIO",
            subtitle: "Din kod. Din karriär. Din sida.",
            showDivider: true,
            layout: "full",
            alignVertically: "center",
            content: [
                {
                    type: "image",
                    content: {
                        src: "/images/pitches/folio/logo.png",
                        alt: "FOLIO logo",
                        slanted: true,
                    },
                },
                {
                    type: "quote",
                    className: "text-xl",
                    content: {
                        text: "Det bästa sättet att visa att du kan bygga en portfoliosida är att faktiskt bygga en.",
                        attribution: "FOLIO",
                        role: "MVP — 4 veckor",
                    },
                },
            ],
        },
    ],
};

export default folioPitch;