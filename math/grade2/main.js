const list = [
        { type: "counter", label: "Find the value (10s and 1s)", data: { level: 2 } },
        { type: "counter", label: "Find the value (100s, 10s and 1s)", data: { level: 3 } },
        {
            type: "biggestNumber",
          label: "Biggest Number",
          data: { totalNos: 4, isBiggest: true, level: 3 },
        },
        {
            type: "biggestNumber",
          label: "Smallest Number",
          data: { totalNos: 4, isBiggest: false, level: 3 },
        },
        {
          type: "ascendingOrder",
          label: "Ascending Order",
          data: { totalNos: 4, isAscending: true, level: 2 },
        },
        {
          type: "ascendingOrder",
          label: "Descending Order",
          data: { totalNos: 4, isAscending: false, level: 2 },
        },
        { type: "addition", label: "Addition", data: { type: "add~xxx~x" } },
        {
          type: "addition",
          label: "Subtraction",
          data: { type: "sub~xxx~x" },
        },
        ...(() =>
          [...Array(5)].map((dummy, i) => ({
            type: "matchByDragDrop",
            label: `Tables - ${i + 6}`,
            data: { type: "tables", number: i + 6 },
          })))(),
      ]
