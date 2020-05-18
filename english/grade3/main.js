const list = [
        {
          type: "sequence",
          label: "Order Word (3 letter words)",
          data: {
            text: `low, gum, pen, axe, set, key, sin, for, own, can, ape, cot, law, gun, had`
          },
        },
        {
          type: "sequence",
          label: "Order Word (3 letter words) - 2",
          data: {
            text: `ant, sky, but, ask, lap, pay, wet, wig, fur, lot, log, rug, run, pet`
          },
        },
        {
          type: "sequence",
          label: "Order Word (5 letter words)",
          data: { 
            text: `SMILE, DREAM, SUGAR, WORLD, MONTH, MUSIC, WATER, MOUTH, LAUGH, TIGER, MOVIE, MONEY, HOUSE,WOMAN, AFTER`
           },
        },
        {
          type: "sequence",
          label: "Order Sentence",
          data: {
            text: `we have holiday tomorrow
            I am drinking water
            I am going to chennai
            I am sitting in sofa
            Siva is sleeping in bed
            the cat is drinking milk
            I am thinking of icecream
            sun rises in the east
            I am playing with my friends
            I have not done my homework
            I saw a very beautiful puppy
            Ravi is very good in math
            english is not my favorite subject`
          },
        },
        {
          type: "classifySentence",
        label: "Identify Tense",
        data: { type: "simpleTense" },
      },
      {
          type: "classifySentence",
        label: "Identify Noun Type",
        data: { type: "nounType" },
      },
      {
        label: "Collective Nouns",
        type: "matchByDragDrop",
        data: {
          isPractice: false,
          title: "Drag and drop the collective nouns at proper places.",
          styles: {
            fontSize: "1rem",
            dashWidth: 70,
          },
          text: `A ~herd~ of cattle
          A ~flock~ of birds
          A ~school~ of fish
          A ~pack~ of wolves
          A ~ swarm~ of bees
          A ~choir~ of singers
          A ~troupe~ of dancers`,
        },
      },
        {
          type: "matchByDragDrop",
          label: "Match Antonyms",
          data: { type: "antonyms", level: 0 },
        },
        {
          type: "matchByDragDrop",
          label: "Match Synonyms",
          data: { type: "synonyms", level: 0 },
        },
        {
          type: "matchByDragDrop",
          label: "Match Antonyms - 2",
          data: { type: "antonyms", level: 1 },
        },
        {
          type: "matchByDragDrop",
          label: "Match Synonyms - 2",
          data: { type: "synonyms", level: 1 },
        },
      ]
