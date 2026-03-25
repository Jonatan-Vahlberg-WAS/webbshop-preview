import plotTwistPitch from "./plotTwist.js";
import soleSearch_v2 from "./soleSearch_v2.js";
import eventera from "./eventera.js";
import folioPitch from "./folio.js";

export const presentations = {
    "sole-search-v2": soleSearch_v2,
    "plot-twist": plotTwistPitch,
    "eventera": eventera,
    "folio": folioPitch,
};

/** Visas som länkar på startsidan under Gruppuppgifter */
export const presentationLinks = [
    {
        id: "sole-search-v2",
        title: "Sole Search",
        description: "Catch the Drop. Own the Culture.",
        levels: {
            backend: 5, //out of 5
            frontend: 5 //out of 5
        }
    },
    {
        id: "plot-twist",
        title: "Plot Twist",
        description: "Propagate the Neighborhood.",
        levels: {
            backend: 2, //out of 5
            frontend: 2, //out of 5
        }
    },
    {
        id: "eventera",
        title: "Eventera",
        description: "Boka din plats. Upplev något.",
        levels: {
            backend: 4, //out of 5
            frontend: 2, //out of 5
        }
    },
    {
        id: "folio",
        title: "Folio",
        description: "Din kod. Din karriär. Din sida.",
        levels: {
            backend: 2, //out of 5
            frontend: 4, //out of 5
        }
    }
];