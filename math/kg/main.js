const list = [
        {  type: "tracing", label: "Numbers (1 - 5)", data: {type: "numbers", repeatCount: 3, chars: "12345"} },
        {  type: "tracing", label: "Numbers (6 - 9)", data: {type: "numbers", repeatCount: 3, chars: "67890"} },
        { type: "shapeSize", label: "Order Shape by Size" },
        { type: "counter", label: "Count Objects", data: { level: 1 } },
        {
          type: "addition",
          label: "After Number",
          data: { type: "after~xx" },
        },
        {
            type: "addition",
          label: "Before Number",
          data: { type: "before~xx" },
        },
        {
          type: "compare",
        label: "Compare Numbers",
        data: { level: 1 },
      },
        {
            type: "biggestNumber",
          label: "Biggest Number",
          data: { totalNos: 4, isBiggest: true, level: 1 },
        },
        {
            type: "biggestNumber",
          label: "Smallest Number",
          data: { totalNos: 4, isBiggest: false, level: 1 },
        },
        {type: "match", label: "Number Names", data: {
          qText: 'Match Number names',
          list: [['1', 'One'], ['2', 'Two'], ['3', 'Three'], ['4', 'Four'], ['5', 'Five'], ['6', 'Six']]
        }},
      ]
