export default {
  label: 'Hydrosphere',
  id: 'hydrosphere',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Hydrosphere - Notes',
      data: {
        title: 'Hydrosphere',
        text: `Hydrosphere is the total amount of water present on a planet. The hydrosphere includes water that is present on the surface of the planet, underground, and in the air. Therefore, a planet’s hydrosphere can be in the form of liquid, vapour, or solid in the form of ice.
        Hydrosphere covers about 71% of the planet Earth. This includes water in liquid and frozen forms. 97% of our Earth's water is salt water and only 3% is fresh water. Water can be found in ground, lakes, rivers and also frozen as ice in the form of glaciers and icebergs.
        # Importance of Hydrosphere
        We need water to carry out many activities in our daily lives. We need water to drink, take bath, cook food etc. Animals and plants also need water for their survival. If there is no water, it cannot evaporate and form clouds. So there will not be any rain.
        # Oceans:
        Oceans are vast water bodies that usually separate continents from one another. The water is salty in nature. There are five oceans on earth. They are: Pacific Ocean, Atlantic Ocean, Indian Ocean, Southern Ocean, and Arctic Ocean.
        #  Sea:
        Seas are also vast water bodies but smaller than oceans in size. They are partly closed by land and opens up to the ocean. Sea water is salty in nature. 
        Example: Arabian Sea, Bay of Bengal, Dead Sea. There is no aquatic life in Dead Sea because it is too salty.
        # Rivers:
        Rivers are large streams that flow over the land. Rivers are fresh water bodies which generally begin at mountainous areas. They usually drain in oceans or seas.
        Some of the longest flowing rivers in India are the Ganges, Yamuna, Godavari, Krishna and Cauvery.
        # Lakes:
        A lake is a water body surrounded by land on all sides. Lakes can have salt or fresh water.
        Vembanad Lake is the largest lake in India which is present in Kerala, near the Arabian Sea. Wular Lake is the largest fresh water lake in India. 
        # Gulf:
        A gulf is a large area of an ocean or a sea that is surrounded by land. Example: Gulf of kutch.
        # Bay:
        A bay is a body of water, which is partially enclosed by land. It has a wide mouthed opening of land, and is joined to the sea or other large water bodies.  Example: Bay of Bengal.
        # Lagoon:
        A stretch of salt water separated from the sea by a low sand bank.
        Example: Lake Chilika in Odisha.
        # Strait:
        A strait is a narrow stretch of water which joins two larger water bodies. Example: Palk Strait joining the Bay of Bengal and the Indian Ocean.
        # Waterfall:
        Waterfall forms when a river flows from a great height.
        # Water Cycle:
          Rivers, lakes and ponds get water through rain. Different parts of the land get different amount of rains due to various geographical reasons. In India, Chirapunchi receives the maximum amount of rainfall.
        # Preserving Water.
        We should be very careful about how we use the water. We have the choice to conserve water resources or pollute them further. Water pollution is a common phenomenon around us. We throw garbage, join sewage to rivers and so on, making river water  contaminated and not fit for use. This, increases the scarcity of  water for household use.
        It is incredible that a wide variety of earth’s  living organisms exist within the oceans.  Earth is made up of land, water and air. Water is necessary for all life forms. Only 3% of the water is found in ground, lakes, ponds, streams and  rivers .`
      }
      /*
       Sambhar Salt Lake in Rajasthan is one of the important inland salt water lake in India.*/
    },
    {
      label: 'Map - Oceans',
      type: 'dragAndDrop',
      id: 'map',
      data: {
        img: 'worldContinents',
        title: 'Drag and drop the Oceans at appropriate places.',
        width: 352,
        height: 260,
        wordWidth: 70,
        words: [
          {
            word: 'Indian',
            x: 210,
            y: 160
          },
          {
            word: 'Pacific',
            x: 15,
            y: 176
          },
          {
            word: 'Atlantic',
            x: 120,
            y: 180
          },
          {
            word: 'Arctic',
            x: 270,
            y: 10
          },
          {
            word: 'Southern',
            x: 150,
            y: 230
          }
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What is the biggest water source?',
            options: 'Ocean, Sea, River, Lake'
          },
          {
            qText: 'What is the biggest ocean?',
            options: 'Pacific, Atlantic, Indian, Artic'
          },
          {
            qText: 'What is the usual starting point of rivers?',
            options: 'Mountain, Lake, Sea, Waterfall'
          },
          {
            qText: 'What is the usual end point for rivers?',
            options: 'Sea, Waterfall, Lake, Dam'
          },
          {
            qText: 'Which of the following can be a man-made water body?',
            options: 'Pond, Ocean, Sea, River'
          },
          {
            qText: 'Which source of water, human beings majorly depend upon?',
            options: 'River, Ocean, Sea, Lake'
          },
          {
            qText: 'What is the major threat to water bodies?',
            options:
              'Water pollution, Evaporation, Animals that drinks water, Fishes'
          },
          {
            qText: 'Living things cannot be found in ______.',
            options: 'Dead Sea, Arabian Sea, Indian Ocean'
          },
          {
            qText:
              'Hydrosphere is the total amount of __________ present on Earth.',
            options: 'Water, Air, Land, Plants'
          },
          {
            qText:
              'Water body that is surrounded by land on all side is called _______',
            options: 'Gulf, Lake, Bay, River'
          },
          {
            qText:
              'Water body that is partially enclosed by land and has wide opening to the sea is called _______.',
            options: 'Bay, Sea, Strait, Pond'
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'truefalse',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as True or False.',
        types: [
          {
            name: 'True',
            text: `About 97% of water on the earth is salt water.
              We should save water.`
          },
          {
            name: 'False',
            text: `Water is not necessary for our basic needs.
              Water in the sea is sweet. 
              We should keep the tap open throughout while washing utensils.
              Living things cannot be found in ocean.`
          }
        ]
      }
    },
    {
      type: 'rightOne',
      id: 'oddone',
      label: 'Odd One Out',
      data: {
        title: 'Pick the odd one out.',
        noCaps: true,
        text: `Ganga, Atlantic, Arctic, Pacific
          Pond, Waterfall, River, Stream
          River, Mountain, Desert, Plateau
          Amazon, Ganga, Yamuna, Kaveri
          Concentration, Evaporation, Condensation, Precipitation`
      }
    },
    {
      type: 'match',
      label: 'Match ',
      id: 'match',
      data: {
        title: 'Match the name with the water body.',
        text: `Arabian, Sea
          Indian, Ocean
          Wular, Lake
          Ganga, River
          Jog, Falls
          Palk, Strait`
      }
    },
    {
      label: 'Water Bodies',
      type: 'sorting',
      slug: '3-planets-order',
      data: {
        title: 'Sort the water bodies based on the size (Largest at the top)',
        text: 'Ocean, Sea, Lake, Pond, Well'
      },
      id: 'sorting'
    },
    {
      label: 'Moving Water Bodies',
      type: 'sorting',
      slug: '3-planets-order',
      data: {
        title: 'Sort the water bodies based on the size (Largest at the top)',
        text: 'River, Stream, Canal, Pipeline'
      },
      id: 'sorting-2'
    },
    {
      label: 'Fill Up',
      id: 'fillup',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1.2rem',
          dashWidth: 80
        },
        text: `97% of the available water in our Earth is *salt* water and only 3% is *fresh* water. 
          *Vembanad* Lake is the largest lake in India which is connected with Arabian Sea. It is partially salt water. *Wular* Lake is the largest fresh water lake in India.
          *Pacific* ocean is the largest ocean. *Arctic* ocean is the smallest ocean.`
      }
    },
    {
      type: 'rightOne',
      id: 'spell',
      label: 'Right Spelling',
      data: {
        title: 'Pick the word with the right spelling',
        noCaps: true,
        text: `Pacific, Pasific
        Arctic, Artic
        Atlantic, Atlandic
        Southern, Southen
        Bengal, Bangal
        Arabian, Arabien`
      }
    }
  ]
};
