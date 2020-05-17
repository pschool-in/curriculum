const list = {  type: "tracing", label: "Cursive Writing", data: {type: "cursive"} },
        {  type: "tracing", label: "Capital Cursive Writing", data: {type: "cursiveCapital"} },
        {
          type: "sequence",
          label: "Order Word (3 letter words)",
          data: {
            text: `bad, hut, tin, try, owl, use, van, oil, bun, few, nut, has, jar, dig`
          },
        },
        {
          type: "sequence",
          label: "Order Word (3 letter words) - 2",
          data: {
            text: `him, ice, jam, jet, ran, fan, fat, dry, dip, aim, spy, you, pin, her`
          },
        },

        {
          type: "sequence",
          label: "Order Word (4 letter words)",
          data: { 
            text: `HOME, TIME, ROAD, KIND, GOLD, LION, GOAT, MILK, BIKE, LOVE, DUCK, STAR, FISH, HAND, BIRD`
           },
        },
        {
          type: "sequence",
          label: "Order Sentence",
          data: {
            text: `we are happy
            it is dark
            dog is hungry
            they are coming
            I am a boy
            I live in Trichy
            please come in line
            we are watching tv
            they are playing cricket
            I am reading poems`
          },
        },
        {
            type: "selectWord",
          label: "Identify Proper Noun",
          data: { type: "properNoun" },
        },
      {
            type: "selectWord",
          label: "Identify Common Noun",
          data: { type: "commonNoun" },
        },
        {
            type: "fillupOptions",
          label: "is/am/are",
          data: { type: "is-am-are" },
        },
        {
            type: "fillupOptions",
          label: "was/were",
          data: { type: "was-were" },
        },
        {
            type: "group",
          label: "Helping vs Main verbs",
          data: { type: "helpingVerbs" },
        },
        {
            type: "group",
          label: "Noun vs Verb",
          data: { type: "nounVsVerb" },
        },
      ]
