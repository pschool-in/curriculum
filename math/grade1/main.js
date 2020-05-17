const list = [
      {
        type: "biggestNumber",
        label: "Biggest Number",
        data: { totalNos: 4, isBiggest: true, level: 2 },
      },
      {
        type: "biggestNumber",
        label: "Smallest Number",
        data: { totalNos: 4, isBiggest: false, level: 2 },
      },
      {
        type: "ascendingOrder",
        label: "Ascending Order",
        data: { totalNos: 4, isAscending: true, level: 1 },
      },
      {
        type: "ascendingOrder",
        label: "Descending Order",
        data: { totalNos: 4, isAscending: false, level: 1 },
      },
      ...(() =>
        [...Array(4)].map((dummy, i) => ({
          type: "matchByDragDrop",
          label: `Tables - ${i + 2}`,
          data: { type: "tables", number: i + 2 },
        })))(),
      {
        type: "compare",
        label: "Compare Numbers",
        data: { level: 2 },
      },
      { type: "addition", label: "Addition", data: { type: "add~xx~x" } },
      {
        type: "addition",
        label: "Subtraction",
        data: { type: "sub~xx~x" },
      },
    ]
