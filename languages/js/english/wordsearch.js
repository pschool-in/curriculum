const wordsearch = {
  label: "Word Search",
  id: "wordsearch",
  img: "wordsearch",
  list: [
    {
      id: "fruits",
      type: "wordsearch",
      label: "Fruits",
      data: {
        title: "Find the given words from the table.",
        words: [
          {
            word: ["T", "O", "M", "A", "T", "O"],
            marker: [1, 0, 6, 0],
          },
          {
            word: ["O", "R", "A", "N", "G", "E"],
            marker: [2, 0, 2, 5],
          },
          {
            word: ["A", "P", "P", "L", "E"],
            marker: [2, 2, 6, 2],
          },
          {
            word: ["G", "R", "A", "P", "E", "S"],
            marker: [2, 4, 7, 4],
          },
          {
            word: ["B", "A", "N", "A", "N", "A"],
            marker: [1, 1, 6, 6],
          },
          {
            word: ["G", "U", "A", "V", "A"],
            marker: [2, 4, 6, 8],
          },
          {
            word: ["P", "E", "A", "R", "S"],
            marker: [7, 0, 7, 4],
          },
          {
            word: ["P", "A", "P", "A", "Y", "A"],
            marker: [1, 8, 6, 8],
          },
          {
            word: ["M", "E", "L", "O", "N"],
            marker: [0, 5, 0, 9],
          },
          {
            word: ["M", "A", "N", "G", "O"],
            marker: [1, 2, 1, 6],
          },
        ],
        table: [
          ["M", "T", "O", "M", "A", "T", "O", "P"],
          ["N", "B", "R", "H", "P", "U", "Q", "E"],
          ["Q", "M", "A", "P", "P", "L", "E", "A"],
          ["P", "A", "N", "N", "J", "H", "X", "R"],
          ["Y", "N", "G", "R", "A", "P", "E", "S"],
          ["M", "G", "E", "U", "Q", "N", "W", "D"],
          ["E", "O", "D", "M", "A", "Y", "A", "T"],
          ["L", "L", "K", "I", "H", "V", "B", "S"],
          ["O", "P", "A", "P", "A", "Y", "A", "H"],
          ["N", "X", "Y", "L", "I", "W", "A", "I"],
        ],
        lang: "en",
        showWords: true,
      },
    },
    {
      id: "kitchen",
      type: "wordsearch",
      label: "Kitchen",
      locked: true,
      data: {
        title: "Find the given words from the table.",
        words: [
          {
            word: ["S", "P", "O", "O", "N"],
            marker: [1, 1, 5, 1],
          },
          {
            word: ["S", "T", "O", "V", "E"],
            marker: [1, 1, 5, 5],
          },
          {
            word: ["F", "O", "R", "K"],
            marker: [4, 0, 4, 3],
          },
          {
            word: ["K", "N", "I", "F", "E"],
            marker: [1, 5, 5, 5],
          },
          {
            word: ["P", "O", "T"],
            marker: [3, 2, 3, 4],
          },
          {
            word: ["P", "A", "N"],
            marker: [2, 3, 2, 5],
          },
          {
            word: ["F", "R", "I", "D", "G", "E"],
            marker: [2, 7, 7, 7],
          },
          {
            word: ["C", "O", "O", "K", "I", "N", "G"],
            marker: [6, 1, 6, 7],
          },
          {
            word: ["B", "A", "K", "E"],
            marker: [5, 2, 5, 5],
          },
          {
            word: ["P", "L", "A", "T", "E"],
            marker: [7, 3, 7, 7],
          },
        ],
        table: [
          ["M", "U", "B", "R", "F", "U", "C", "R"],
          ["U", "S", "P", "O", "O", "N", "C", "N"],
          ["L", "N", "T", "P", "R", "B", "O", "A"],
          ["F", "X", "P", "O", "K", "A", "O", "P"],
          ["Y", "L", "A", "T", "V", "K", "K", "L"],
          ["B", "K", "N", "I", "F", "E", "I", "A"],
          ["M", "G", "S", "J", "D", "U", "N", "T"],
          ["J", "D", "F", "R", "I", "D", "G", "E"],
        ],
        lang: "en",
        showWords: true,
      },
    },
    {
      id: "vegetables",
      type: "wordsearch",
      label: "Vegetables",
      locked: true,
      data: {
        title: "Find the given words from the table.",
        words: [
          {
            word: ["C", "A", "R", "R", "O", "T"],
            marker: [1, 1, 6, 6],
          },
          {
            word: ["C", "O", "R", "N"],
            marker: [1, 1, 4, 1],
          },
          {
            word: ["O", "N", "I", "O", "N"],
            marker: [2, 1, 6, 5],
          },
          {
            word: ["G", "I", "N", "G", "E", "R"],
            marker: [0, 0, 0, 5],
          },
          {
            word: ["G", "A", "R", "L", "I", "C"],
            marker: [0, 0, 5, 0],
          },
          {
            word: ["P", "O", "T", "A", "T", "O"],
            marker: [2, 6, 7, 6],
          },
          {
            word: ["P", "E", "A", "S"],
            marker: [3, 4, 6, 7],
          },
          {
            word: ["N", "U", "T", "S"],
            marker: [3, 2, 6, 2],
          },
          {
            word: ["C", "A", "B", "B", "A", "G", "E"],
            marker: [1, 1, 1, 7],
          },
          {
            word: ["B", "E", "A", "N", "S"],
            marker: [2, 7, 6, 7],
          },
        ],
        table: [
          ["G", "A", "R", "L", "I", "C", "C", "S"],
          ["I", "C", "O", "R", "N", "Z", "K", "O"],
          ["N", "A", "A", "N", "U", "T", "S", "R"],
          ["G", "B", "V", "R", "I", "Z", "D", "L"],
          ["E", "B", "E", "P", "R", "O", "E", "P"],
          ["R", "A", "O", "N", "E", "O", "N", "N"],
          ["G", "G", "P", "O", "T", "A", "T", "O"],
          ["U", "E", "B", "E", "A", "N", "S", "T"],
        ],
        lang: "en",
        showWords: true,
      },
    },
  ],
};

export default wordsearch;
