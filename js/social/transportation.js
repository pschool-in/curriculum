export default {
  label: 'Transportation ',
  id: 'transportation',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Transportation - Notes',
      data: {
        title: 'Transportation ',
        text: `Transportation is the action of moving people or things from one place to another.
          Before the invention of wheels, humans used to walk everywhere. Ancient India, used bullock carts to cover distances. Even today, many use bicycles to travel to work and schools. Bicycles are a popular and environment friendly mode of transportation in India.
          # Modes of Transportation
          There are different modes of transportation in India.
          # Roadways
          India has been building roads since old times. India's road network is the second longest in the world. Bus forms the most important means of public road transport system in India. Buses are usually often managed by the respective state governments.
          1. National Highways:  These are the main roads connecting cities in the country. e.g. N.H. 44 runs from Srinagar to Kanyakumari.
          2. State Highways: These are the road connecting important cities within the State.
          3. District roads: These roads connect markets and offices in the district to people.
          4. Village Roads: These roads connect villages or a group of villages with each other and also to other major roads near it.
          # Railways
          In India, railway is the most important form of transport system connecting various states. The first railway line was laid between Mumbai and Thane in 1853. Steam engines were used at the time. From steam engines to high speed rail, the growth of Indian Railways over the past 150 years has been vast and it has contributed to development of India.
          The fastest train in India is the Gatimaan Express that runs between Delhi and Agra.
          There are also sub-urban rails that connects different places within a city.
          Indian Railways is the largest railway network to be operated by a single government and it is the 4th largest network in the world. Darjeeling Himalayan Rail in West Bengal is a World Heritage Site and it is the only steam operated railway in India.
          # Water transport 
          India has a very long coastline and hence ports remain main centers for trade.
          Shipping Corporation of India, a government owned company manages all offshore and other marine transport related infrastructure in the country.
          Water transport happens through:
          1. Boat
          2. Speed Boat
          3. Ship
          The boats are widely used for fishing in coastal regions.
          # Air Transport
          Air transport is the fastest way to travel to different parts of the world.
          Air India, a government airlines plays a huge role in connecting India to other cities within the country and across the world.
          Helicopters are used for hilly regions like Haridwar, Badrinath, Kedarnath and Darjeeling.
          India has the world's highest helipad at the Siachen glacier which is 21,000 feet above sea level.
          # Advantages of transportation
          1. Transport system plays a huge role in the growth of agricultural and industrial production by carrying raw materials to different parts of the country.
          2. It helps in promoting foreign trade in a country. Transportation plays a key role in a country's export and import of goods.
          3. It helps people from different countries visit other countries. Without a good transport system, promotion of tourism is not possible.`
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
            qText: 'Which of the following is an example of land transport?',
            options: 'Car, Ship, Helicopter, Aeroplane'
          },
          {
            qText: 'The first railway line was laid in _____.',
            options: '1853, 1850, 1953, 1950'
          },
          {
            qText: '________ is the oldest form of transportation.',
            options: 'Walking, Cycle, Boat, Bus'
          },
          {
            qText: 'Land transport is divided into roadways and _________.',
            options: 'railways, oceanways, airways, waterways'
          },
          {
            qText: `India's fastest train Gatimaan Express connects Delhi and _______.`,
            options: 'Agra, Mumbai, Jaipur, Chennai'
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
            text: `Walking is a type of transportation.
            India's road network is the second longest in the world.
            The only steam operated railway in India is present in Darjeeling.`
          },
          {
            name: 'False',
            text: `Transportation is not needed for people.
            Shipping Corporation of India, a government owned company is responsible for fishing.
            Selling things to other countries is called import.
            Transportation doesn't help agriculture.`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match ',
      id: 'match',
      data: {
        title: 'Match the related words.',
        text: `Environment Friendly, Cycle
        Fastest Transport, Airways
        Fastest Train, Gatimaan Express
        First Transport, Walking
        First Invention, Wheel`
      }
    },
    {
      label: 'Fill Up',
      id: 'fillup',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          dashWidth: 80
        },
        text: `Buying and selling of goods and services is called *trade*. If we buy from a different country, it is called *import*. If we sell to a different country, it is called *export*. We have lot of *ports* as we have a long *coastal* area.`
      }
    },
    {
      label: 'Fill Up - 2',
      id: 'fillup-2',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          dashWidth: 80
        },
        text: `*National Highway* connects the major cities in the country.
        *State Highway* connects the major cities within a state.
        *District Roads* connects the offices and markets
        *Village Roads* connects the village to the nearby town.
        *NH 44* runs from Srinagar to Kanyakumari.`
      }
    },
    {
      type: 'rightOne',
      id: 'spell',
      label: 'Right Spelling',
      data: {
        title: 'Pick the word with the right spelling',
        noCaps: true,
        text: `coastal, costal, coestal
        government, goverment, gowerment
        environment ,enviroment, enviranment 
        heritage, heretage , heritege 
        invention, invension, inwention`
      }
    }
  ]
};
