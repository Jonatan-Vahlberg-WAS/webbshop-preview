export const NAV_ITEMS = [
  { label: "Översikt", id: "overview" },
  { label: "Backend", id: "backend" },
  { label: "Frontend", id: "frontend" },
  { label: "Deploy", id: "deploy" },
  { label: "Verktyg", id: "verktyg" },
  { label: "Information", id: "information" },
  { label: "Grupper", id: "groups" },
  { label: "Gruppuppgifter", id: "group-assignments" },
];

export const STACK_ITEMS = [
  { letter: "V", name: "Vanilla", desc: "inga ramverk, ren JavaScript/HTML/CSS" },
  { letter: "M", name: "MongoDB", desc: "NoSQL-databas" },
  { letter: "E", name: "Express", desc: "webbramverk för Node" },
  { letter: "N", name: "Node", desc: "JavaScript-runtime" },
];

export const TOOLS = [
  { name: "Vercel", desc: "Hosting för backend och frontend.", span: 1 },
  { name: "Postman", desc: "API-testning och dokumentation.", span: 1 },
  { name: "Trello", desc: "Kanban-stil planering och uppgiftshantering.", span: 1 },
  { name: "Discord", desc: "Kommunikation mellan grupper och klasser.", span: 1 },
  {
    name: "MongoDB Compass",
    desc: "Databasvisualisering. Används eftersom Atlas endast har ett säte per grupp – Compass låter alla i gruppen granska datan lokalt.",
    span: 2,
  },
];

export const SCHEDULE = [
  {
    title: "Projektstart & Kick-off",
    date: "2026-03-27",
    description: "Genomgång av projektet, krav och grupperna får träffas.",
    classroom: "Sal C201",
  },
  {
    title: "Första \"sprintplanering\" för grupperna (GX)",
    date: "2026-04-08",
    description: "Gruppen presenterar sin MVP för projektledaren. Feedback och justeringar av backlog.",
    classroom: "-",
  },
  {
    title: "Första \"sprintplanering\" för grupperna (GY)",
    date: "2026-04-09",
    description: "Gruppen presenterar sin MVP för projektledaren. Feedback och justeringar av backlog.",
    classroom: "-",
  },
  // {
  //   title: "Andra sprintplanering för grupp (GX)",
  //   date: "2026-04-07",
  //   description: "Grupp GX presenterar sin progress för projektledaren. Feedback och justeringar av backlog.",
  //   classroom: "Sal A1",
  // },
  {
    title: "Inlämning & Presentation",
    date: "2026-04-24",
    description: "Slutpresentation av webbshopen för klassen och projektledaren.",
    classroom: "Sal C201",
  },
];

export const INSTRUCTORS = [
  {
    name: "Brandon",
    email: "brandon.duartetsegai@utb.nackademin.se",
    class: "Frontend-klassen",
    days: "Onsdagar och fredagar",
  },
  {
    name: "Jonatan",
    email: "jonatan.vahlberg@utb.nackademin.se",
    class: "Backend-klassen",
    days: "Måndagar och tisdagar",
  },
];
