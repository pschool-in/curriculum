const list =  [
      {
        type: "sequence",
        label: "Order Word (3 letter words)",
        data: {
          text: `rat, fly, bed, fox, hat, jug, big, map, red, run, man`
        },
      },
      {
        type: "sequence",
        label: "Order Word (3 letter words) - 2",
        data: {
          text: `cow, may, sad, bag, met, men, the, and, hug, pig, she, bit, let, son, hen`
        },
      },
      {
        type: "sequence",
        label: "Order Word (3 letter words) - 3",
        data: {
          text: `day, cap, sit, one, joy, hit, cat, mat, two, cry, old, sun`
        },
      },
      {
        type: "rightOne",
        label: "Pick Correct Spelling",
        data: {
          text: `CAT KAT
          APPLE APLE
          BOX BOK
          CAN CAAN
          BALL BAL
          EGG EG
          GRAPES	GRAPS
          HOME	HOM
          ICE	ICC
          ZEBRA	ZIBRA`
        },
      },
      {
        type: "selectWord",
        label: "Identify action word (Verb)",
        data: { type: "actionWord" },
      },
      {
        type: "fillupOptions",
        label: "What / Why/ Where",
        data: { type: "question1" },
      },
    ]
