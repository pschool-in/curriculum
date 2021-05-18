export default {
  label: 'Continents',
  id: 'continents',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Continents - Notes',
      data: {
        title: 'Continents',
        text: `Where do we all live? We all live on the Earth. Earth is our home. The total land on the earth is formed of seven continents of various sizes. Some are connected to each other while others are not. Each continent has a different number of countries. The seven continents of the world are: Asia, Africa, North America, South America, Antarctica, Europe and Australia.
          # Asia
          Asia is the world's largest continent in size and population. The world's two most populous countries, China and India are in Asia. Asia has the highest point on earth, the peak of Mount Everest which is in the Himalayas. Asia is the birth of great ancient civilisations: Indus civilisation, Chinese civilisation and Mesopotamian civilisation.The Great Wall of China is the man made structure that can be seen from space.
          # Africa
        Africa is the second largest continent of the seven continents of the world, The world's longest river, the Nile and the world's largest desert, the Sahara, both are home in Africa. More than 50% of the world's gold and diamonds come from the mineral rich continent of Africa. The continent remained unknown for thousands of years. So Africa is also known as 'Dark Continent'
        # North America
        North America is the third largest continent by area. The United States of America (USA) is a part of North America. Christopher Columbus, a famous explorer and navigator discovered America. Canada and Mexico are other important countries in North America.
        # South America
        South America is the fourth largest continent. The world's largest river, which is also the second longest, is the Amazon river in South America. Brazil, a country in South America, is one of the largest coffee producer in the world. Amazon rain forest is home to thousands of animals, insects and plant species. Other important countries are Argentina, Bolivia, Colombia, Ecuador, Peru, and Venezuela.
        # Antarctica
        Antarctica is the coldest continent on Earth. It is also called the White Continent or the Frozen Continent. Antarctica experiences half a year of sun light and half a year of complete darkness. Penguins are found in Antarctica. There are only permanent research stations from different countries can be found there.
        # Europe
        Europe and Asia are parts of the same major landmass. Europe is separated from Asia by the Ural mountains and the Caspian Sea. The world's smallest country, the Vatican City, is in Europe. Finland, in Europe, is called the 'Land of Lakes' because melting ice sheets have created a lot of lakes here. Some countries in European continent are: France, Spain, United Kingdom, Germany, Norway and Italy.
        #Australia 
        Australia is the smallest continent. It is also a country. Australia is an Island continent covered with unique landscapes and natural wonders. The Great Barrier Reef, the pride and joy of Australia is made up of nearly 2,500 individual reefs and visible from space. Australia is also called the land of Kangaroos.`
      }
      /*
         Sambhar Salt Lake in Rajasthan is one of the important inland salt water lake in India.*/
    },
    {
      label: 'Map - Continents',
      type: 'dragAndDrop',
      id: 'map',
      data: {
        img: 'worldContinents',
        title: 'Drag and drop the continents at appropriate places.',
        width: 352,
        //  height: 260,
        wordWidth: 75,
        words: [
          {
            word: 'N America',
            x: 40,
            y: 80
          },
          {
            word: 'S America',
            x: 75,
            y: 176
          },
          {
            word: 'Europe',
            x: 160,
            y: 70
          },
          {
            word: 'Africa',
            x: 140,
            y: 150
          },
          {
            word: 'Asia',
            x: 210,
            y: 100
          },
          {
            word: 'Australia',
            x: 256,
            y: 200
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
            qText: 'There are ______ continents in the world.',
            options: 'Seven, Five, Nine'
          },
          {
            qText: 'The largest continent is ______.',
            options: 'Asia, Africa, Europe'
          },
          {
            qText: '_______ is the longest river in the world.',
            options: 'Nile, Amazon, Ganga'
          },
          {
            qText: 'Penguins are found in ________.',
            options: 'Antarctica, Australia, Africa'
          },
          {
            qText: '_______ is known as the Dark Continent.',
            options: 'Africa, Asia, Europe'
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
            text: `Antarctica has the coldest climate.
            Australia is the smallest continent.
            Africa is the second largest continent.`
          },
          {
            name: 'False',
            text: `Amazon is the longest river.
            The Great Wall of China is present in Africa.
            Mexico is a part of South America.`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match ',
      id: 'match',
      data: {
        title: 'Match the continents with its speciality.',
        text: `Australia, Kangaroo
        South America, Amazon Forest
        Asia, Biggest Continent
        Africa, Sahara desert
        Europe, Vatican city`
      }
    },
    {
      type: 'match',
      label: 'Match Countries with Continents',
      id: 'match-2',
      data: {
        title: 'Match Countries with Continents',
        text: `Asia, China
          Africa, Egypt
          North America, Canada
          Europe, France,
          South America, Brazil`
      }
    },
    {
      label: 'Arrange By Size',
      type: 'sorting',
      data: {
        title:
          'Rearrange the continents based on the size (Largest at the top)',
        text:
          'Asia, Africa, North America, South America, Antarctica, Europe, Australia'
      },
      id: 'sort'
    },
    {
      label: 'Fill up by drag and drop.',
      id: 'fillup',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `The top two highly populated countries are present in *Asia*. It is very difficult to live in the continent *Antarctica*. The Great Barrier Reef, is one of the pride of *Australia*. The world's largest desert, Sahara desert is present in *Africa*. Amazon rain forest is present in *South America*. Countries like France and Spain are present in *Europe*.
        Canada is part of *North America*.`
      }
    }
  ]
};
