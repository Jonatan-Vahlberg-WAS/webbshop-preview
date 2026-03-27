/**
 * Kickoff — Webbprojekt V-MEN
 * Nackademin 2026
 */

const kickoffPresentation = {
    meta: {
        title: "Kickoff — Webbprojekt V-MEN",
        slug: "kickoff-2026",
        description: "Kickoff-presentation för webbprojektet. Nackademin 2026.",
        tags: ["kickoff", "vmen", "nackademin", "2026"],
    },

    options: {
        showProgress: true,
        showFullScreen: true,
        allowKeyboard: true,
        allowScroll: false,
        showNotes: false,
    },

    defaults: {
        theme: "kickoff",
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
            name: "kickoff",
            colors: {
                primary: "#38bdf8",
                background: "#0a0f1e",
                text: "#e8eaf0",
                cardBackground: "#0f1829",
                cardText: "#e8eaf0",
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
                    type: "title",
                    content: {
                        title: "Webbprojekt",
                        subtitle: "Kickoff · Nackademin 2026",
                        showDivider: true,
                    },
                },
            ],
        },

        // ─── 2. Vad är projektet? ──────────────────────────────────────────────────
        {
            title: "Vad är det här projektet?",
            subtitle: "En beställare. Ett problem. En MVP.",
            showDivider: true,
            layout: "full",
            content: [
                {
                    type: "columns",
                    className: "slideskit-columns-centered",
                    content: {
                        left: [
                            {
                                type: "text",
                                content: "Uppgiften är att ta fram en MVP utifrån en kundförväntan. Ni får en beställare med ett verkligt behov — er grupp löser det med kod, planering och samarbete.",
                                size: "lg",
                            },
                            {
                                type: "list",
                                className: "text-xl",
                                content: {
                                    style: "bullet",
                                    items: [
                                        "Backend ansvarar för API, databas och autentisering.",
                                        "Frontend bygger det användaren faktiskt ser och interagerar med.",
                                        "Ni möts i API-kontraktet — det är där samarbetet avgörs.",
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
                                                title: "MVP",
                                                subtitle: "Minimum Viable Product",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "text",
                                            content: "Inte ett halvfärdigt projekt — utan ett genomtänkt och fungerande projekt med ett avgränsat scope. Bättre att göra lite rätt än mycket halvdant.",
                                            size: "md",
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 3. V-MEN-stacken ─────────────────────────────────────────────────────
        {
            title: "V-MEN-stacken",
            subtitle: "Tekniken ni bygger med",
            showDivider: true,
            layout: "full",
            content: [
                {
                    type: "table",
                    className: "text-xl",
                    content: {
                        headers: ["Bokstav", "Teknik", "Roll"],
                        rows: [
                            ["V", "Vanilla JS / HTML / CSS", "Frontend — inga ramverk, ren JavaScript"],
                            ["M", "MongoDB", "Databas — NoSQL, dokumentbaserad"],
                            ["E", "Express", "Webbramverk som körs ovanpå Node"],
                            ["N", "Node.js", "JavaScript-runtime på servern"],
                        ],
                    },
                },
                {
                    type: "quote",
                    content: {
                        text: "Varför ingen React? För att ni ska förstå vad ramverk faktiskt löser — innan ni använder ett.",
                        attribution: "V-MEN",
                        role: "Vanilla first.",
                    },
                },
            ],
        },

        // ─── 4. Agenda ────────────────────────────────────────────────────────────
        {
            title: "Vad ska vi hinna med idag?",
            subtitle: "Kickoff · 27 mars",
            showDivider: true,
            layout: "full",
            alignVertically: "top",
            content: [
                {
                    type: "columns",
                    content: {
                        left: [
                            {
                                type: "list",
                                content: {
                                    style: "number",
                                    items: [
                                        "Introduktion — den här genomgången",
                                        "Grupperna träffas och sätter upp ett gruppkontrakt med förhållningsregler",
                                        "Grupperna väljer projekt",
                                        "Databas uppsatt i Atlas · Backend deployad på Vercel *(kom till Jonatan)*",
                                    ],
                                },
                            },
                        ],
                        right: [
                            {
                                type: "list",
                                content: {
                                    style: "number",
                                    items: [
                                        "Miljöer uppsatta på allas datorer — Node installerat, MongoDB Compass konfigurerat",
                                        "Postman collection delad inom gruppen",
                                        "Backlog påbörjad i Trello *(i mån av tid)*",
                                        "✓ Godkännande av projektledare — prickning innan avslut",
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 5. Tre datum ─────────────────────────────────────────────────────────
        {
            title: "Tre datum att hålla koll på",
            showDivider: true,
            layout: "full",
            content: [
                {
                    type: "table",
                    className: "text-xl",
                    content: {
                        headers: ["Datum", "Händelse", "Plats"],
                        rows: [
                            ["27 mars", "Kickoff — idag", "Sal C201"],
                            ["8–9 april", "Sprintplanering — presentera er MVP-plan för projektledaren", "—"],
                            ["24 april", "Inlämning & slutpresentation", "Sal C201"],
                        ],
                    },
                },
            ],
        },

        // ─── 6. Kanban & Trello ───────────────────────────────────────────────────
        {
            title: "Kanban & Trello",
            subtitle: "Planering är också en del av projektet",
            showDivider: true,
            layout: "full",
            content: [
                {
                    type: "columns",
                    className: "slideskit-columns-centered",
                    content: {
                        left: [
                            {
                                type: "text",
                                content: "Kanban är ett sätt att visualisera arbetsflödet. Varje kort representerar en uppgift — och kortet ska alltid spegla var ni faktiskt befinner er, inte var ni hoppas befinna er.",
                                size: "lg",
                            },
                            {
                                type: "list",
                                className: "text-xl",
                                content: {
                                    style: "bullet",
                                    items: [
                                        "Kolumner: Backlog → Pågående → Review → Klart",
                                        "Aldrig mer än 1–2 kort per person i Pågående",
                                        "Trello är er gemensamma sanning — håll det uppdaterat",
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
                                                title: "Dagbok",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "text",
                                            content: "Håll en egen dagbok dels för egen del men också för individuella uppgifter. Projektledaren ser er process — inte bara slutresultatet. Ett välskött board berättar en historia om hur ni arbetat.",
                                            size: "md",
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 7. Git & branches ────────────────────────────────────────────────────
        {
            title: "Git & branches",
            subtitle: "En branch per kort — inte en branch per person",
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
                                        "Namnge branchen efter kortet ni sitter på — `add-authentication-middleware` eller `add-product-detail-page`",
                                        "Jobba med Pull Requests — kod som inte granskats ska inte in i main",
                                        "Minst en annan i gruppen godkänner innan merge",
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
                                                title: "Ansvar per klass",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "list",
                                            content: {
                                                style: "bullet",
                                                items: [
                                                    "Backend — lansera hel och komplett kod som uppfyller ett krav. Postman-testad eller enhetstestad.",
                                                    "Frontend — lansera MVP-kod. Aldrig ofärdig kod eller kod som leder till ett dött läge.",
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

        // ─── 8. API-verktyg & databas ─────────────────────────────────────────────
        {
            title: "API-verktyg & databas",
            subtitle: "Postman och MongoDB Compass",
            showDivider: true,
            layout: "full",
            content: [
                {
                    type: "columns",
                    className: "slideskit-columns-centered",
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
                                                title: "Postman",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "text",
                                            content: "Testa och dokumentera era endpoints. Dela collection inom gruppen via fil eller gemensam mail — alla ska kunna testa alla endpoints från dag ett.",
                                            size: "md",
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
                                                title: "MongoDB Compass",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "text",
                                            content: "Atlas har ett säte per grupp. Compass låter alla granska och redigera datan lokalt — utan att dela inloggning. Installera det idag.",
                                            size: "md",
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 9. Kommunikation & förhållningsregler ────────────────────────────────
        {
            title: "Kommunikation & förhållningsregler",
            subtitle: "Sätt reglerna tillsammans — innan problem uppstår",
            showDivider: true,
            layout: "full",
            content: [
                {
                    type: "columns",
                    className: "slideskit-columns-centered",
                    content: {
                        left: [
                            {
                                type: "text",
                                content: "Discord är primär kanal under projektet. Sikta på 16–20 timmar i veckan — men respektera varandras lediga tid. Vad som förväntas av alla i gruppen bestämmer ni tillsammans idag.",
                                size: "lg",
                            },
                            {
                                type: "list",
                                className: "text-xl",
                                content: {
                                    style: "bullet",
                                    items: [
                                        "Svara inom rimlig tid under arbetstid",
                                        "Flagga tidigt om något inte funkar — tekniskt eller socialt",
                                        "Personkonflikter tas privat med lärare eller utbildningsledare, inte i gruppen",
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
                                                title: "Vanliga fallgropar",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "list",
                                            content: {
                                                style: "bullet",
                                                items: [
                                                    "Tystnad — ingen vet vad de andra jobbar med",
                                                    "Ojämn arbetsbelastning — en person bär hela projektet",
                                                    "För sena problem — något som kunde lösas på dag tre löses på dag tjugo",
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

        // ─── 10. Incheckning ──────────────────────────────────────────────────────
        {
            title: "Incheckning",
            subtitle: "Vad som förväntas — 8–9 april",
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
                                        "Träffas som grupp innan — prata ihop er om vad ni visar upp",
                                        "Presentera vad ni har byggt som MVP — var redo att visa det live",
                                        "Presentera nästkommande steg — vad är nästa naturliga prioritet?",
                                        "Projektledaren kan ställa frågor och styra om — det är en del av processen, inte ett misslyckande",
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
                                                title: "Lyft problem tidigt",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "text",
                                            content: "Kodproblem — kontakta rätt utbildare. Personkonflikter — privat med lärare eller utbildningsledare. Incheckningen är inte rätt forum för varken det ena eller det andra.",
                                            size: "md",
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 11. Utbildarna ───────────────────────────────────────────────────────
        {
            title: "Utbildarna",
            subtitle: "Rätt fråga till rätt person",
            showDivider: true,
            layout: "full",
            content: [
                {
                    type: "columns",
                    className: "slideskit-columns-centered",
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
                                                title: "Brandon",
                                                subtitle: "Frontend-klassen",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "text",
                                            content: "brandon.duartetsegai@utb.nackademin.se",
                                            size: "md",
                                        },
                                        {
                                            type: "list",
                                            content: {
                                                style: "bullet",
                                                items: [
                                                    "31 mars - På plats om man behöver hjälp C205",
                                                    "1 april - På plats om man behöver hjälp C205",
                                                    "8 april - Första inchcekningen (G7-G11)",
                                                    "10 april - På plats om man behöver hjälp C205",
                                                    "17 april - Andra inchcekningen (G7-G11)",
                                                    "22 april - På plats om man behöver hjälp eftermiddag C201",
                                                    "23 april - Presentationer (C201)",
                                                ],
                                            },
                                            size: "md",
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
                                                title: "Jonatan",
                                                subtitle: "Backend-klassen",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "text",
                                            content: "jonatan.vahlberg@utb.nackademin.se",
                                            size: "md",
                                        },
                                        {
                                            type: "list",
                                            content: {
                                                style: "bullet",
                                                items: [
                                                    "30 mars - På plats om man behöver hjälp B404",
                                                    "9 april - Första inchcekningen (G1-G6) A215",
                                                    "10 april - På plats om man behöver hjälp A215",
                                                    "16 april - Lektion Testning (Unit & Integration), tillgänglig halva dagen A215",
                                                    "17 april - Andra inchcekningen (G1-G6) A215",
                                                    "20 april - På plats om man behöver hjälp A218",
                                                    "23 april - På plats om man behöver hjälp A215",
                                                    "24 april - Presentationer (C201)",
                                                ],
                                            },
                                            size: "md",
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

        // ─── 12. Hur ni väljer projekt ────────────────────────────────────────────
        {
            title: "Hur ni väljer projekt",
            subtitle: "Välj ärligt — utifrån er tid och erfarenhet",
            showDivider: true,
            layout: "full",
            content: [
                {
                    type: "columns",
                    className: "slideskit-columns-centered",
                    content: {
                        left: [
                            {
                                type: "text",
                                content: "Projekten är placerade i ett rutnät med två axlar. Välj utifrån var gruppen faktiskt befinner sig — inte var ni vill befinna er.",
                                size: "lg",
                            },
                            {
                                type: "table",
                                content: {
                                    headers: ["Axel", "Låg", "Hög"],
                                    rows: [
                                        ["Frontend-tyngd", "Enkla vyer, lite JS-logik", "Dynamiska tillstånd, komplex rendering"],
                                        ["Backendkomplexitet", "CRUD och auth", "Relationer, statuslogik, validering"],
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
                                                title: "Nivåskalan",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "text",
                                            content: "Varje projekt har ett BE- och FE-betyg i prickar — ●●○○○ till ●●●●○. Det är en vägledning för val, inte ett betyg på er.",
                                            size: "md",
                                        },
                                        {
                                            type: "quote",
                                            content: {
                                                text: "Ett enkelt projekt gjort ordentligt slår ett svårt projekt halvklart — varje gång.",
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

        // ─── 13. Projekten ────────────────────────────────────────────────────────
        {
            title: "Projekten",
            subtitle: "Välj ett — och äg det",
            showDivider: true,
            layout: "full",
            alignVertically: "top",
            content: [
                {
                    type: "grid",
                    content: {
                        rows: 2,
                        columns: 2,
                        cells: [
                            [
                                {
                                    type: "card",
                                    content: {
                                        opaque: true,
                                        blocks: [
                                            {
                                                type: "title",
                                                content: {
                                                    title: "EVENTERA",
                                                    subtitle: "Boka din plats. Upplev något.",
                                                    showDivider: true,
                                                },
                                            },
                                            {
                                                type: "text",
                                                content: "Bokningsplattform för lokala event med adminpanel.",
                                                size: "sm",
                                            },
                                            {
                                                type: "text",
                                                content: "BE ●●○○○  ·  FE ●●○○○",
                                                size: "sm",
                                            },
                                        ],
                                    },
                                },
                            ],
                            [
                                {
                                    type: "card",
                                    content: {
                                        opaque: true,
                                        blocks: [
                                            {
                                                type: "title",
                                                content: {
                                                    title: "PLOT TWIST",
                                                    subtitle: "Propagate the Neighborhood.",
                                                    showDivider: true,
                                                },
                                            },
                                            {
                                                type: "text",
                                                content: "Hyperlokal växtdelningsapp med karta och bytesflöde.",
                                                size: "sm",
                                            },
                                            {
                                                type: "text",
                                                content: "BE ●●○○○  ·  FE ●●●○○",
                                                size: "sm",
                                            },
                                        ],
                                    },
                                },
                            ],
                            [
                                {
                                    type: "card",
                                    content: {
                                        opaque: true,
                                        blocks: [
                                            {
                                                type: "title",
                                                content: {
                                                    title: "FOLIO",
                                                    subtitle: "Din kod. Din karriär. Din sida.",
                                                    showDivider: true,
                                                },
                                            },
                                            {
                                                type: "text",
                                                content: "Portfoliobyggare med publik URL och Premium-läge.",
                                                size: "sm",
                                            },
                                            {
                                                type: "text",
                                                content: "BE ●●○○○  ·  FE ●●●●○",
                                                size: "sm",
                                            },
                                        ],
                                    },
                                },
                            ],
                            [
                                {
                                    type: "card",
                                    content: {
                                        opaque: true,
                                        blocks: [
                                            {
                                                type: "title",
                                                content: {
                                                    title: "SOLE_SEARCH",
                                                    subtitle: "Catch the Drop. Own the Culture.",
                                                    showDivider: true,
                                                },
                                            },
                                            {
                                                type: "text",
                                                content: "Sneakermarketplace med drops, nedräkning och orderhantering.",
                                                size: "sm",
                                            },
                                            {
                                                type: "text",
                                                content: "BE ●●●○○  ·  FE ●●●●○",
                                                size: "sm",
                                            },
                                        ],
                                    },
                                },
                            ],
                        ],
                    },
                },
            ],
        },

        // ─── 14. Nästa steg ───────────────────────────────────────────────────────
        {
            title: "Nästa steg",
            subtitle: "Klart innan 8–9 april",
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
                                                title: "Idag",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "list",
                                            content: {
                                                style: "check",
                                                items: [
                                                    { text: "Projekt valt och kommunicerat till utbildare", checked: false },
                                                    { text: "Gruppkontrakt klart — förhållningsregler satta", checked: false },
                                                    { text: "Databas uppe i Atlas, backend deployad på Vercel", checked: false },
                                                    { text: "Miljöer fungerar på allas datorer", checked: false },
                                                    { text: "Postman collection delad inom gruppen", checked: false },
                                                    { text: "✓ Godkännande av projektledare", checked: false },
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
                                                title: "Innan 8–9 april",
                                                showDivider: true,
                                            },
                                        },
                                        {
                                            type: "list",
                                            content: {
                                                style: "check",
                                                items: [
                                                    { text: "Repo uppsatt med feature branch-struktur", checked: false },
                                                    { text: "Trello-board med initial backlog", checked: false },
                                                    { text: "Träffas som grupp innan incheckningen", checked: false },
                                                    { text: "Redo att visa MVP-status live", checked: false },
                                                    { text: "Redo att presentera nästkommande steg", checked: false },
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

    ],
};

export default kickoffPresentation;