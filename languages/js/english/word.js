const vocabulary = {
  label: "Vocabulary",
  id: "word",
  img: "word",
  list: [
    {
      type: "sequence",
      id: "order-3-letter-words",
      label: "Order Word (3 letter words)",
      data: {
        text: `COW, KEY, BED, FAT, SAD, SUN, MAP, PAY, RUN, PEN, MAY, HIT, ANT, BAG, SIT`,
      },
    },
    {
      type: "sequence",
      id: "order-4-letter-words",
      label: "Order Word (4 letter words)",
      data: {
        text: `HOME, TIME, ROAD, KIND, GOLD, LION, GOAT, MILK, BIKE, LOVE, DUCK, STAR, FISH, HAND, BIRD`,
      },
    },
    {
      label: "Plural Form",
      id: "plural",
      type: "completePuzzle",
      data: {
        type: "rightOpen",
        title: "Drag and drop the correct plural form.",
        text: `woman, women, womans
        ox, oxen, oxes
        tomato, tomatoes, tomatos
        onion, onions,	oniones
        boy, boys,	boies
        story, stories,	storys
        key, keys,	keies
        party, parties, partys
        mouse, mice, mouses
        house, houses, home`,
      },
    },
    {
      label: "Prefix: dis- vs un-",
      id: "prefix",
      type: "completePuzzle",
      data: {
        type: "leftOpen",
        title: "Drag and drop the correct prefix.",
        text: `kind, un, dis
        appear, dis, un
        agree, dis, un
        fit, un, dis
        obey, dis, un
        fair, un, dis
        honest, dis, un
        loyal, dis, un
        happy, un, dis
        well, un, dis`,
      },
    },
    {
      id: "200",
      label: "Fill up",
      type: "fillupOptions",
      data: {
        editable: true,
        title: "Click on the blanks and fill it with the right word.",
        text: `Students have *access (excess)* to the library on holidays.
          My friends eat to *excess(access)*.
          In the forest, I saw a small house *among (between)* the trees.
          There was a big stone *between(among)* the two wheels.
          His hair was so soft. It was just *like (as)* silk.
          She is working *as (like)* a doctor.
          They got a set of 12 *knives (knifes)* and forks for their wedding.`,
      },
    },
    {
      type: "rightOne",
      label: "Pick Correct Spelling",
      id: "correct-spelling",
      data: {
        text: `CAT, KAT
            APPLE, APLE
            BOX, BOK
            CAN, CAAN
            BALL, BAL
            EGG, EG
            GRAPES,	GRAPS
            HOME,	HOM
            ICE,	ICC
            ZEBRA,	ZIBRA`,
      },
    },
    {
      type: "match",
      label: "Match Antonyms",
      id: "antonyms",
      data: {
        title: "Match words with opposite meaning.",
        text: `yes, no
      you, I
      yesterday, tomorrow
      young, old
      early, late 
      cry, laugh `,
      },
    },
    {
      type: "match",
      label: "Match Synonyms",
      id: "synonyms",
      data: {
        title: "Match words with same meaning.",
        text: `huge, large
      quick, fast
      ill, sick
      friendly, kind
      silent, quiet
      speak, talk
      rest, relax`,
      },
    },
  ],
};

export default vocabulary;
