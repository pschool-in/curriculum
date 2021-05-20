const writing = {
  label: "Picture",
  id: "picture",
  img: "image",
  list: [
    {
      type: "completeWord",
      id: "complete-word-fruits",
      label: "Complete Word - Fruits",
      data: {
        lang: "en",
        images: "fruits",
        questions: [
          {
            word: "APPLE",
            display: "A_P_E",
            hint: "apple",
          },
          {
            word: "GRAPES",
            display: "_R_P_S",
            hint: "grapes",
          },
          {
            word: "BANANA",
            display: "_A_A_A",
            hint: "banana",
          },
          {
            word: "CHERRY",
            display: "C_E_R_",
            hint: "cherry",
          },
          {
            word: "AVOCADO",
            display: "A_O_A_O",
            hint: "avocado",
          },
          {
            word: "STRAWBERRY",
            display: "S_RA_B_R_Y",
            hint: "strawberry",
          },
        ],
      },
    },
    {
      type: "completeWord",
      id: "complete-word-animals",
      label: "Complete Word - Animals",
      data: {
        lang: "en",
        images: "animals",
        questions: [
          {
            word: "CAT",
            display: "C__",
            hint: "cat",
          },
          {
            word: "DOG",
            display: "__G",
            hint: "dog",
          },
          {
            word: "ELEPHANT",
            display: "E_E_H_N_",
            hint: "elephant",
          },
          {
            word: "GOAT",
            display: "___T",
            hint: "goat",
          },
          {
            word: "HORSE",
            display: "_O__E",
            hint: "horse",
          },
          {
            word: "LION",
            display: "___N",
            hint: "lion",
          },
          {
            word: "MONKEY",
            display: "M__K__",
            hint: "monkey",
          },
          {
            word: "PIG",
            display: "__G",
            hint: "pig",
          },
          {
            word: "RHINO",
            display: "R___O",
            hint: "rhino",
          },
          {
            word: "SHEEP",
            display: "__EE_",
            hint: "sheep",
          },
          {
            word: "TIGER",
            display: "_I_E_",
            hint: "tiger",
          },
          {
            word: "ZEBRA",
            display: "_EB__",
            hint: "zebra",
          },
        ],
      },
    },
    {
      type: "completeWord",
      id: "complete-word",
      label: "Complete Word - Hint",
      data: {
        lang: "en",
        questions: [
          {
            word: "BOAT",
            display: "B__T",
            hint: "A small vehicle that moves in water.",
          },
          {
            word: "AXE",
            display: "A_E",
            hint: "The tool of a wood cutter",
          },
          {
            word: "BIRD",
            display: "B__D",
            hint: "A living thing that can fly.",
          },
          {
            word: "TIGER",
            display: "_I_E_",
            hint: "A wild animal with stripes",
          },
          {
            word: "EARTH",
            display: "E_R_H",
            hint: "The only home for man.",
          },
        ],
      },
    },
    {
      type: "connectLetters",
      label: "Connect Letters to form word",
      id: "connect-letters",
      data: {
        title: "Connect the blocks from left to right to form meaningful word.",
        printTitle: "Form the word using the letters.",
        type: "image",
        text:
          "train, house, table, chair, candle, shelf, apple, grapes, banana, cherry",
      },
    },
  ],
};

export default writing;
