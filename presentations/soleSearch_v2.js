/**
 * SOLE_SEARCH v2 — Sneaker marketplace pitch
 * Same branding, same hype — scaled to a 4-week MVP
 * Frontend: Vanilla JS | Backend: Node/Express | DB: MongoDB
 */

const soleSearchV2Pitch = {
    meta: {
        title: "SOLE_SEARCH v2",
        slug: "sole-search-v2-pitch",
        description:
            "Sneakermarketplace med drops, nedräkningar och orderhantering. Byggt för hypen, anpassat för fyra veckor.",
        tags: ["marketplace", "sneakers", "fullstack", "drops"],
    },

    options: {
        showProgress: true,
        showFullScreen: true,
        allowKeyboard: true,
        allowScroll: false,
        showNotes: false,
    },

    defaults: {
        theme: "cyber",
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
            name: "cyber",
            colors: {
                primary: "#22d3ee",
                background: "#08080b",
                text: "#e4e4e7",
                cardBackground: "#111114",
                cardText: "#e4e4e7",
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
                                src: "/images/pitches/sole_search/logo.png",
                                alt: "SOLE_SEARCH hero",
                            },
                            expand: true,
                        },
                        layer: {
                            type: "title",
                            content: {
                                title: "SOLE_SEARCH",
                                subtitle: "Catch the Drop. Own the Culture.",
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

        // ─── 2. The Concept ────────────────────────────────────────────────────────
        {
            title: "Inte en webshop. Ett drop-event.",
            subtitle: "Skillnaden sitter i klockan",
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
                                    src: "/images/pitches/sole_search/1.png",
                                    alt: "Sneaker drop culture",
                                    caption: "Begränsat antal. Exakt tid. Alla vet reglerna.",
                                    standing: true,
                                },
                            },
                        ],
                        right: [
                            {
                                type: "text",
                                content:
                                    "En vanlig webshop är alltid öppen. SOLE_SEARCH körs på drops — en produkt går live vid en bestämd tid, lagret är begränsat och när det är slut är det slut.",
                                size: "lg",
                            },
                            {
                                type: "list",
                                className: "text-xl",
                                content: {
                                    style: "bullet",
                                    items: [
                                        "Produkter har en status: Upcoming, Live eller Sold Out — och gränssnittet speglar det hela tiden.",
                                        "En nedräkning visas på varje produktsida tills droppet går live.",
                                        "I samma sekund lagret når noll inaktiveras Lägg i kundvagn. Ingen omladdning behövs.",
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 3. The Data Model ─────────────────────────────────────────────────────
        {
            title: "En sko. Många storlekar.",
            subtitle: "Datamodellen som får det att fungera",
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
                                    style: "bullet",
                                    items: [
                                        "Product vs. Variant — En Air Jordan-modell har många storlekar. Varje storlek har sitt eget lagerantal och kan sälja slut oberoende av de andra.",
                                        "Drop-statusfält — En produkt rör sig genom tillstånden: `upcoming → live → sold_out`. Både frontend och backend respekterar det här fältet.",
                                        "Ordern — Kopplar ihop en användare, en produkt och en specifik storlek. Enkel, otvetydig och sökbar.",
                                    ],
                                },
                            },
                        ],
                        right: [
                            {
                                type: "image",
                                content: {
                                    src: "/images/pitches/sole_search/5.png",
                                    alt: "Data model diagram",
                                    caption: "Product → Varianter → Ordrar. Tre collections, rena relationer.",
                                    standing: true,
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 4. Frontend Work ──────────────────────────────────────────────────────
        {
            title: "Vanilla JS på riktigt",
            subtitle: "Inget framework — bara DOM:en och en plan",
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
                                    src: "/images/pitches/sole_search/6.png",
                                    alt: "Countdown and dynamic UI",
                                    caption: "Nedräkning, storleksväljare, dynamiska tillstånd — allt i vanilla.",
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
                                        "Nedräkning — `setInterval` räknar ner mot drop-tiden hämtad från API:et. När den når noll övergår sidan till Live utan omladdning.",
                                        "Storleksväljare — Att välja en storlek kontrollerar tillgängligheten. Slutsålda storlekar är visuellt inaktiverade och inte klickbara.",
                                        "Dynamiskt kundvagnstillstånd — Lägg i kundvagn speglar lagret i realtid via `fetch()` vid sidladdning. Sold Out är ett UI-tillstånd, inte bara en etikett.",
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 5. The Purchase Flow ──────────────────────────────────────────────────
        {
            title: "Från drop till dörrsteg",
            subtitle: "Ett köpflöde som skapar förtroende",
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
                                        "Bläddra & vänta — Användare bläddrar bland kommande drops och ser nedräkningar. Inloggade användare kan spara en storlek i sin önskelista.",
                                        "Droppet går live — Statusen slår om, nedräkningen försvinner och Lägg i kundvagn aktiveras.",
                                        "Kassa — Användaren bekräftar storlek och leveransuppgifter. Lagret minskas vid orderbekräftelse.",
                                        "Order bekräftad — Användaren ser en ordersammanfattning. En post skapas i databasen, synlig i både användarprofilen och adminpanelen.",
                                    ],
                                },
                            },
                        ],
                        right: [
                            {
                                type: "image",
                                content: {
                                    src: "/images/pitches/sole_search/9.png",
                                    alt: "Purchase flow",
                                    caption: "Linjärt, snabbt, inga återvändsgränder.",
                                    standing: true,
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 6. Admin Panel ────────────────────────────────────────────────────────
        {
            title: "Bakom disken",
            subtitle: "Adminpanelen är halva produkten",
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
                                    src: "/images/pitches/sole_search/8.png",
                                    alt: "Admin panel overview",
                                    caption: "Ett ställe att driva hela verksamheten från.",
                                    standing: true,
                                },
                            },
                        ],
                        right: [
                            {
                                type: "text",
                                content: "The admin panel is protected by login and accessible only to staff. From here, the owner controls everything.",
                                size: "lg",
                            },
                            {
                                type: "list",
                                className: "text-xl",
                                content: {
                                    style: "bullet",
                                    items: [
                                        "Create and manage products — name, images, description, drop date and time.",
                                        "Manage variants — add sizes, set stock levels per size, update quantities.",
                                        "Control drop status — manually flip a product from Upcoming to Live, or mark it Sold Out.",
                                        "View all orders — filterable by product, status, and date. Printable order lists.",
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 7. Customer Management ────────────────────────────────────────────────
        {
            title: "Know Your Customer",
            subtitle: "Users are more than just a login",
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
                                    style: "bullet",
                                    items: [
                                        "Registration Required — All purchases require an account. Guest checkout is not supported.",
                                        "User Profile — Customers can view their full order history, current order status, and saved delivery details.",
                                        "Admin Customer View — Staff can browse all registered users, view their order history, and flag accounts if needed.",
                                        "Wishlist — Logged-in users can save a size on an upcoming drop to get a reminder when it goes live.",
                                    ],
                                },
                            },
                        ],
                        right: [
                            {
                                type: "image",
                                content: {
                                    src: "/images/pitches/sole_search/4.png",
                                    alt: "Customer profile view",
                                    caption: "Every order. Every drop. One profile.",
                                    standing: true,
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 8. Technical Requirements ─────────────────────────────────────────────
        {
            title: "What We're Building",
            subtitle: "The full backlog at a glance",
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
                                                    { text: "Product catalogue med drop-status", checked: false },
                                                    { text: "Variant-modell (storlek + lager per storlek)", checked: false },
                                                    { text: "Countdown till drop per produkt", checked: false },
                                                    { text: "Dynamisk Add to Cart (Vanilla JS)", checked: false },
                                                    { text: "Registrering & inloggning (JWT/session)", checked: false },
                                                    { text: "Checkout & orderbekräftelse", checked: false },
                                                    { text: "Lagerhantering vid köp (stock decrement)", checked: false },
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
                                                    { text: "Skyddad admin-panel (separat login)", checked: false },
                                                    { text: "CRUD för produkter och varianter", checked: false },
                                                    { text: "Manuell kontroll av drop-status", checked: false },
                                                    { text: "Orderöversikt med filter och utskrift", checked: false },
                                                    { text: "Kundlista med orderhistorik per kund", checked: false },
                                                    { text: "Wishlist — spara storlek på kommande drop", checked: false },
                                                    { text: "Responsiv design (mobil + desktop)", checked: false },
                                                    { text: "Sökbar produktkatalog", checked: false },
                                                    { text: "Orderstatushantering (pending/confirmed/shipped)", checked: false },
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

        // ─── 9. Success Metrics ────────────────────────────────────────────────────
        {
            title: "What Done Looks Like",
            subtitle: "Three non-negotiables for a successful MVP",
            showDivider: true,
            layout: "full",
            content: [
                {
                    type: "columns",
                    className: "slideskit-columns-centered",
                    content: {
                        left: [
                            {
                                type: "table",
                                className: "text-xl",
                                content: {
                                    headers: ["Krav", "Godkänt när..."],
                                    rows: [
                                        ["Drop-logik", "Status följer klockan. UI uppdateras utan reload."],
                                        ["Lagerhantering", "Köp av en storlek påverkar bara den storleken."],
                                        ["Admin-panel", "Ägaren kan skapa en drop och se alla ordrar utan att röra koden."],
                                    ],
                                },
                            },
                        ],
                        right: [
                            {
                                type: "image",
                                content: {
                                    src: "/images/pitches/sole_search/2.png",
                                    alt: "Finished product",
                                    caption: "En drop som funkar är bättre än tio features som halvfunkar.",
                                    standing: true,
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 10. Förväntad nivå ────────────────────────────────────────────────────
        {
            title: "Vad det här projektet tränar",
            subtitle: "Utmanande — men helt genomförbart på fyra veckor",
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
                                            content: "Det räcker inte att DOM:en ser bra ut — den måste reagera. Det är det här projektet tränar.",
                                            size: "md",
                                        },
                                        {
                                            type: "list",
                                            content: {
                                                style: "bullet",
                                                items: [
                                                    "Hämta data från ett API med `fetch()` och rendera det dynamiskt",
                                                    "Hantera UI-tillstånd — en knapp som är aktiv, inaktiv, eller gömd beroende på data",
                                                    "Bygga en countdown med `setInterval` som triggar en sidövergång",
                                                    "Skriva modulär, läsbar JS utan ett framework att luta sig mot",
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
                                            content: "Relationerna mellan Product, Variant och Order är enkla att rita — men kräver precision att implementera.",
                                            size: "md",
                                        },
                                        {
                                            type: "list",
                                            content: {
                                                style: "bullet",
                                                items: [
                                                    "Designa ett databasschema med relationer mellan tre collections",
                                                    "Bygga ett REST API med tydliga endpoints och felhantering",
                                                    "Hantera auth med skyddade routes för både användare och admin",
                                                    "Uppdatera lager korrekt vid köp — och returnera rätt statuskod",
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
                        text: "Det svåraste är inte att skriva koden — det är att få frontend och backend att prata samma språk från dag ett.",
                        attribution: "Tips",
                        role: "Bestäm er för API-kontraktet tidigt. Dokumentera det. Håll er till det.",
                    },
                },
            ],
        },

        // ─── 11. Closing ───────────────────────────────────────────────────────────
        {
            title: "SOLE_SEARCH",
            subtitle: "Catch the Drop. Own the Culture.",
            showDivider: true,
            layout: "full",
            alignVertically: "center",
            content: [
                {
                    type: "image",
                    content: {
                        src: "/images/pitches/sole_search/logo.png",
                        alt: "SOLE_SEARCH logo",
                        slanted: true,
                    },
                },
                {
                    type: "quote",
                    className: "text-xl",
                    content: {
                        text: "Det är inte en webshop. Det är ett evenemang med en kassa i slutet.",
                        attribution: "SOLE_SEARCH",
                        role: "MVP — 4 veckor",
                    },
                },
            ],
        },
    ],
};

export default soleSearchV2Pitch;