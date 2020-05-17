const list = [
  {
    label: "Domestic vs Wild Animals",
    type: "group",
    data: {
      title: "Domestic vs Wild Animals",
      imageType: 'animals',
      types: [
        {
          name: "Domestic",
          text: `cat, dog, goat, horse, pig, sheep`,
        },
        {
          name: "Wild Animals",
          text: `elephant, lion, monkey, rhino, tiger, zebra`,
        },
      ],
    },
  },
  {
    type: "dragAndDrop",
    label: "Parts of Plant",
    data:  { type: "plant", isPractice: false },
  },
  {
    type: "dragAndDrop",
    label: "Parts of Dog",
    data: { type: "dog" } ,
  },
  {
    type: "dragAndDrop",
    label: "Parts of Face",
    data: { type: "face" },
  },
  {
    type: "dragAndDrop",
    label: "Parts of Human Being",
    data: { type: "human" },
  },
  {type: "match", label: "Animals and Houses", data: {
    qText: 'Match Animals with their house.',
    list: [['Cow', 'Shed'], ['Monkey', 'Tree'], ['Dog', 'Kennel'], ['Bee', 'Hive'], ['Spider', 'Web'], ['Bird', 'Nest']]
  }},
  {
    type: "dragAndDrop",
    label: "Parts of Computer",
    data: {
      img: "https://s3.ap-south-1.amazonaws.com/pschool.in/assets/science/computer.jpg",
      width: 299,
      height: 270,
      wordWidth: 70,
      words: [
        { word: "monitor", x: 70, y: 20 },
        { word: "CPU", x: 210, y: 25 },
        { word: "mouse", x: 30, y: 215 },
        { word: "keyboard", x: 140, y: 230 },
        { word: "printer", x: 225, y: 72 }
      ],
    },
  },
];
