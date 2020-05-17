const list = [
  {
    label: `Living vs Non-living things`,
    type: "group",
    data: {
      title: "Living vs Non-living things",
      types: [
        {
          name: "Living",
          text: ` parrot, tree, girl, fox, lion, owl`,
        },
        {
          name: "Non-living",
          text: `pen, ring, stone,toy, paper,box`,
        },
      ],
    },
  },
  {
    label: 'Vegetables - Below or Above ground',
    type: "group",
    data: {
      title: 'Vegetables - Below or Above ground',
      types: [
        {
          name: "Below ground",
          text: `carrot, beetroot, potato, onion, radish`,
        },
        {
          name: "Above ground",
          text: `tomato, cucumber, ladies finger, brinjal, cabbage`,
        },
      ],
    }
  },
  {
    label: 'Healthy vs Unhealthy foods',
    type: "group",
    data: {
      title: 'Healthy vs Unhealthy foods',
      types: [
        {
          name: "Healthy",
          text: `milk, egg, banana, grapes, cabbage, cashew nuts, rice `,
        },
        {
          name: "Unhealthy",
          text: `burger, pizza, potato chips, french fries, soda`,
        },
      ],
    }
  },
  {
    label: "The Five Senses",
    type: "matchByDragDrop",
    data: {
      isPractice: false,
      title: "Drag and drop to complete the below sentences.",
      styles: {
        fontSize: "1rem",
        dashWidth: 50,
      },
      text: `We ~smell~ with our nose.
      We ~see~ with our eyes.
      We ~hear~ with our ears.
      We ~taste~ with our tongue.
      We ~touch~ with our hands.`,
    },
  },
  {type: "match", label: "Regions and animals", data: {
    qText: 'Match Animals with their dwelling regions.',
    list: [['Desert', 'Camel'], ['Farm', 'Cow'], ['Ocean', 'Whale'], ['Pond', 'Fish'], ['Forest', 'Lion'], ['Iceland', 'Penguin']]
  }},
  {
    label: `Natural vs Man-made`,
    type: "group",
    data: {
      title: "Classify the below as Natural and Man-made",
      types: [
        {
          name: "Natural",
          text: `Tree, Stone, Rain, Fruits, Pet Dog`,
        },
        {
          name: "Man-made",
          text: `House, Ice-cream, Flower Vase, Candy, Notebook`,
        },
      ],
    },
  },
]