const list = [
  {
  label: "Map - Continents",
  type: "dragAndDrop",
  data: {
    img:
      "https://s3.ap-south-1.amazonaws.com/pschool.in/assets/social/worldContinents.jpg",
    title: `Drag and drop the continents at appropriate places.`,
    width: 352,
    height: 260,
    wordWidth: 75,
    words: [
      { word: "N America", x: 40, y: 80 },
      { word: "S America", x: 75, y: 176 },
      { word: "Europe", x: 160, y: 70 },
      { word: "Africa", x: 140, y: 150 },
      { word: "Asia", x: 210, y: 100 },
      { word: "Australia", x: 256, y: 200 },
    ],
  },
},
{
  label: "Map - Oceans",
  type: "dragAndDrop",
  data: {
    img:
      "https://s3.ap-south-1.amazonaws.com/pschool.in/assets/social/worldContinents.jpg",
    title: `Drag and drop the Oceans at appropriate places.`,
    width: 352,
    height: 260,
    wordWidth: 70,
    words: [
      { word: "Indian", x: 210, y: 160 },
      { word: "Pacific", x: 15, y: 176 },
      { word: "Atlantic", x: 120, y: 180 },
      { word: "Arctic", x: 270, y: 10 },
      { word: "Southern", x: 150, y: 230 },
    ],
  },
},
{
  label: "Water bodies - MCQ",
  type: "mcq",
  data: {
    title: "Multiple Choice Question",
    questions: [
      {
        qText: `What is the biggest water source?`,
        options: `Ocean, Sea, River, Lake`,
      },
      {
        qText: `What is the biggest ocean?`,
        options: `Pacific, Atlantic, Indian, Artic`,
      },
      {
        qText: `What is the usual starting point of rivers?`,
        options: `Mountains, Lake, Sea, Water Falls`,
      },
      {
        qText: `Which source of water, human beings majorly depend upon?`,
        options: `River, Ocean, Sea, Lake`,
      },
      {
        qText: `What is the major threat to water bodies?`,
        options: `Water pollution, Evaporation, Animals that drinks water, Fishes`,
      },
    ],
  },
},
{
  label: 'Our Government - Reading',
  type: "passage",
  data: {
    title: `Our Government`,
    text: `We need different facilities like roads, water, electricity, transport, schools and hostipals. A lot of people have to work together to provide these facilities. And we have lot of rules to follow for the facilities to work properly. Government makes common rules into laws. It is the responsibility of the govenment to make laws and ensure the laws are followed by people. The service what the goverment provides is known as governance.
India follows a democratic form of governance. It means, the people of the country cast their vote and select their representatives. There are different levels of governance. India is the largest democratic country in the world.
At country level, we select our Member of Parliament (MP), who goes to Parliament present in New Delhi to represent us. The selected MPs again vote among themselves and elect the Prime Minister. And the elected Prime Minister will pick other ministers.
Though the President is considered as the head of the government, Prime Minister is the most important person in running the government.
At state level, the people vote for their Member of Legislative Assembly (MLA), who goes to the Assembly present in their state capital to represent them. Just like how MPs select the Prime Minister of the country, MLAs select the Cheif Minister of the state.
We also have Local Body election to select our representative at locality level. Children are not allowed to vote. Only people who are above 18 years are allowed to vote. `,
  },
},
{
  label: "Our Government - MCQ",
  type: "mcq",
  data: {
    title: "Multiple Choice Question",
    questions: [
      {
        qText: `Which is the largest democracy in the world?`,
        options: `India, China, Russia, USA`,
      },
      {
        qText: `Who is the head of the government?`,
        options: `President, Prime Minister, Chief Minister , Governer`,
      },
      {
        qText: `The Prime Minster is elected by __________.`,
        options: `Members of Parliament, President, People of the country`,
      },
      {
        qText: `We are a democratic country because ________.`,
        options: `we select our representive, we select our Governer, we select our President`,
      },
      {
        qText: `Who can vote in election?`,
        options: `above 18 years old, everyone, who have passport`,
      },
    ],
  },
},
{
  label: "Responsibility of Government",
  type: "group",
  data: {
    title: "Classify whether the government is responsible or not responsible for the below.",
    types: [
      {
        name: "Responsible",
        text: `school, hospital, roads, electricity`,
      },
      {
        name: "Not responsible",
        text: `breakfast, homework, garden, picnic`,
      },
    ],
  },
},
]