const list = [
  {
    type: "compare",
    label: "Compare Numbers - 1",
    data: { level: 5 },
  },
  {
    type: "compare",
    label: "Compare Numbers - 2",
    data: { level: 6 },
  },
  {
    type: "biggestNumber",
    label: "Biggest Number",
    data: { totalNos: 4, isBiggest: true, level: 5 },
  },
  {
    type: "biggestNumber",
    label: "Smallest Number",
    data: { totalNos: 4, isBiggest: false, level: 5 },
  },
  {
    type: "biggestNumber",
    label: "Biggest Number - 2",
    data: { totalNos: 4, isBiggest: true, level: 6 },
  },
  {
    type: "biggestNumber",
    label: "Smallest Number - 2",
    data: { totalNos: 4, isBiggest: false, level: 6 },
  },
  {
    type: "ascendingOrder",
    label: "Ascending Order",
    data: { totalNos: 4, isAscending: true, level: 4 },
  },
  { type: "picturePuzzle", label: "Picture Puzzle", data: {} },
  {
    type: "ascendingOrder",
    label: "Descending Order",
    data: { totalNos: 4, isAscending: false, level: 4 },
  },
  {
    type: "addition",
    label: "Multiplication",
    data: { type: "mul~xx~x" },
  },
  { type: "addition", label: "Division", data: { type: "div~xx~x" } },
  { type: "wordProblemType", label: "Word Problems" },
  ...(() =>
    [...Array(3)].map((dummy, i) => ({
      type: "matchByDragDrop",
      label: `Tables - ${i + 13}`,
      data: { type: "tables", number: i + 13 },
    })))(),
];
