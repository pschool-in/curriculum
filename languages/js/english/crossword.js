const crossword = {
  label: "Crossword",
  id: "crossword",
  img: "crossword",
  list: [
    {
      id: "animals",
      type: "crossword",
      label: "Animals",
      data: {
        title: "Solve the crossword. Please click on a cell to view the hint.",
        words: [
          {
            word: "whale",
            marker: {
              x: 0,
              y: 0,
            },
            hint: "the biggest animal",
            direction: "down",
          },
          {
            word: "horse",
            marker: {
              x: 0,
              y: 1,
            },
            hint: "a pet animal that can give you a ride",
            direction: "across",
          },
          {
            word: "zebra",
            marker: {
              x: 4,
              y: 0,
            },
            hint: "a black and white animal",
            direction: "down",
          },
          {
            word: "elephant",
            marker: {
              x: 0,
              y: 6,
            },
            hint: "the biggest animal on land",
            direction: "across",
          },
          {
            word: "lion",
            marker: {
              x: 6,
              y: 3,
            },
            hint: "king of the jungle",
            direction: "down",
          },
          {
            word: "monkey",
            marker: {
              x: 2,
              y: 2,
            },
            hint: "an animal that jumps from tree to tree",
            direction: "down",
          },
          {
            word: "cat",
            marker: {
              x: 5,
              y: 5,
            },
            hint: "a pet animal that likes milk",
            direction: "down",
          },
          {
            word: "dog",
            marker: {
              x: 1,
              y: 3,
            },
            hint: "man's best friend",
            direction: "across",
          },
          {
            word: "bear",
            marker: {
              x: 4,
              y: 2,
            },
            hint: "a fat animal that can stand on two feet",
            direction: "across",
          },
          {
            word: "frog",
            marker: {
              x: 7,
              y: 1,
            },
            hint: "a small hopping animal",
            direction: "down",
          },
        ],
        table: [
          ["W", "", "", "", "Z", "", "", ""],
          ["H", "O", "R", "S", "E", "", "", "F"],
          ["A", "", "M", "", "B", "E", "A", "R"],
          ["L", "D", "O", "G", "R", "", "L", "O"],
          ["E", "", "N", "", "A", "", "I", "G"],
          ["", "", "K", "", "", "C", "O", ""],
          ["E", "L", "E", "P", "H", "A", "N", "T"],
          ["", "", "Y", "", "", "T", "", ""],
        ],
        lang: "en",
      },
    },
    {
      id: "Vehicle",
      type: "crossword",
      label: "Vehicle",
      data: {
        title: "Solve the crossword. Please click on a cell to view the hint.",
        words: [
          {
            word: "train",
            marker: {
              x: 0,
              y: 0,
            },
            hint: "a long vehicle",
            direction: "across",
          },
          {
            word: "truck",
            marker: {
              x: 0,
              y: 0,
            },
            hint: "a vehicle to carry load",
            direction: "down",
          },
          {
            word: "crane",
            marker: {
              x: 2,
              y: 2,
            },
            hint: "a vehicle with the name of a bird",
            direction: "down",
          },
          {
            word: "car",
            marker: {
              x: 0,
              y: 3,
            },
            hint: "a small closed vehicle for a family",
            direction: "across",
          },
          {
            word: "coach",
            marker: {
              x: 2,
              y: 2,
            },
            hint: "a part of  a train",
            direction: "across",
          },
          {
            word: "wheel",
            marker: {
              x: 0,
              y: 6,
            },
            hint: "a circular part that helps vehicle move",
            direction: "across",
          },
          {
            word: "fuel",
            marker: {
              x: 3,
              y: 4,
            },
            hint: "essential liquid that makes vehicle move",
            direction: "down",
          },
          {
            word: "ship",
            marker: {
              x: 6,
              y: 1,
            },
            hint: "the biggest vehicle in earth",
            direction: "down",
          },
          {
            word: "bus",
            marker: {
              x: 4,
              y: 1,
            },
            hint: "a public transport on road",
            direction: "across",
          },
          {
            word: "boat",
            marker: {
              x: 4,
              y: 5,
            },
            hint: "a common vehicle on a  small lake",
            direction: "across",
          },
          {
            word: "tractor",
            marker: {
              x: 7,
              y: 1,
            },
            hint: "a vehicle used in farm",
            direction: "down",
          },
        ],
        table: [
          ["T", "R", "A", "I", "N", "", "", ""],
          ["R", "", "", "", "B", "U", "S", "T"],
          ["U", "", "C", "O", "A", "C", "H", "R"],
          ["C", "A", "R", "", "", "", "I", "A"],
          ["K", "", "A", "F", "", "", "P", "C"],
          ["", "", "N", "U", "B", "O", "A", "T"],
          ["W", "H", "E", "E", "L", "", "", "O"],
          ["", "", "", "L", "", "", "", "R"],
        ],
        lang: "en",
      },
    },
    {
      id: "ocean",
      type: "crossword",
      label: "Ocean",
      data: {
        title: "Solve the crossword. Please click on a cell to view the hint.",
        words: [
          {
            word: "pacific",
            marker: {
              x: 0,
              y: 0,
            },
            hint: "the biggest ocean",
            direction: "across",
          },
          {
            word: "china",
            marker: {
              x: 6,
              y: 0,
            },
            hint: "the biggest country by population",
            direction: "down",
          },
          {
            word: "atlantic",
            marker: {
              x: 0,
              y: 2,
            },
            hint: "the ocean between America and Africa",
            direction: "across",
          },
          {
            word: "blue",
            marker: {
              x: 2,
              y: 1,
            },
            hint: "the color of ocean",
            direction: "down",
          },
          {
            word: "anchor",
            marker: {
              x: 0,
              y: 2,
            },
            hint: "used to keep a ship in one place",
            direction: "down",
          },
          {
            word: "ocean",
            marker: {
              x: 0,
              y: 6,
            },
            hint: "the biggest water body on earth",
            direction: "across",
          },
          {
            word: "sea",
            marker: {
              x: 2,
              y: 5,
            },
            hint: "A big water body but smaller than a ocean",
            direction: "down",
          },
          {
            word: "salt",
            marker: {
              x: 2,
              y: 5,
            },
            hint: "the taste of ocean water",
            direction: "across",
          },
          {
            word: "whale",
            marker: {
              x: 7,
              y: 3,
            },
            hint: "the biggest animal in ocean",
            direction: "down",
          },
          {
            word: "shore",
            marker: {
              x: 3,
              y: 7,
            },
            hint: "the place where the ocean meets the land",
            direction: "across",
          },
        ],
        table: [
          ["P", "A", "C", "I", "F", "I", "C", ""],
          ["", "", "B", "", "", "", "H", ""],
          ["A", "T", "L", "A", "N", "T", "I", "C"],
          ["N", "", "U", "", "", "", "N", "W"],
          ["C", "", "E", "", "", "", "A", "H"],
          ["H", "", "S", "A", "L", "T", "", "A"],
          ["O", "C", "E", "A", "N", "", "", "L"],
          ["R", "", "A", "S", "H", "O", "R", "E"],
        ],
        lang: "en",
      },
    },
  ],
};

export default crossword;
