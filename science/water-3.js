export default {
  id: 'water-3',
  label: 'Water',
  pdf: 'water-3.pdf',
  list: [
    {
      label: 'Water - Reading',
      type: 'passage',
      id: '100',
      data: {
        title: 'Water',
        text: [
          'Water is one of the most important resources on Earth. All living things like small organisms, plants and animals need water to survive. People use water for various purposes. Rain is one of the main sources of water.',
          '# Potable Water',
          'Drinking water is known as potable water. Potable water is water that is good to drink and useful for food preparation.',
          'Potable Water should be:',
          '1. free from dangerous chemicals.',
          '2. transparent.',
          '3. odourless and colourless.',
          '4. free from bacteria which cause diseases.',
          '# Sources of Drinking Water',
          'Water is available in many natural sources, but not all the water sources are suitable for drinking. Water should be boiled to kill the germs in it, and only then it is suitable for drinking. A few sources of water are rain, well, river, lake and stream.',
          '# Saving Water',
          'Only 3% of the water in the entire Earth is freshwater. Water is precious. So, we should never waste water.',
          'Some methods to prevent wastage of water:',
          '1. Never allow water to overflow from buckets.',
          '2. Wash fruits and vegetables in a bowl of water and not under running tap water.',
          '3. Always close the taps while brushing the teeth.',
          '4. Use left over water in your water bottle to water a potted plant.',
          '5. Turn off the tap after each use.',
          '6. Use a sprinkler to water the garden.',
          '# Conservation of Water Bodies',
          'All the water that we get comes from rain. When it rains, some water flows over the ground giving rise to streams and rivers. Some water gets collected in low lying areas such as ponds and lakes. The flow of the river is blocked by building a dam across it. Some rainwater seeps into the ground as underground water.',
          '# Lake',
          'It is a large area filled with water surrounded by land. It is usually a part of a river or some other water source.',
          '# Pond',
          'A pond is a body of stagnant water, either natural or artificial; it is smaller than a lake.',
          '# Tanks',
          'A water tank is a container for storing water for our daily use.',
          '# Methods to Conserve Water Bodies',
          '1. Deepening of ponds and lakes',
          '2. Plant trees at the bank of the lake and pond',
          '3. Reduce water pollution',
          '4. Avoid digging too many wells in a region',
          '# Water borne diseases',
          'Stagnant water can become a breeding ground for the mosquitoes that transmit diseases. Malaria and Dengue Fever are the main dangers of stagnant water.',
          'Waterborne diseases such as cholera, dysentery, typhoid are caused by drinking unclean water.',
          '# Experiment',
          'Let us assemble a Simple Pump',
          { type: 'img', src: 'img/science/waterPumpExperiment.png' },
          '# Materials needed',
          'Any hollow tube – PVC, metal or even a long papaya stem',
          '# Procedure',
          'Hold the tube with your left hand and move it up and down into a bucket of water. Keep the palm of your right hand on the top of the tube and open and close it with each up and down reciprocation. Soon, water will start squirting out. Here the up-down motion of the left hand does the pumping while the right palm acts like a valve.',
          '# Do you know?',
          '1. A camel can drink 60 to 100 litres of water at a time and live without water for several days.',
          '2. World Water Day is observed on 22nd March.'
        ]
      }
    },
    {
      label: 'Choose the best Answer - Water',
      id: '200',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' Which is the main source of water for us?',
            options: 'Rain,Lake,Sea'
          },
          {
            qText:
              ' Only _____ of the water in the entire Earth is freshwater.',
            options: '3%,0.3%,30%'
          },
          {
            qText: 'By __________ water, we can kill the germs.',
            options: 'boiling,cooling,filtering'
          },
          {
            qText: 'Which of these is not true?',
            options:
              'We should always waste water, Plants and animals need water too,  We should use water carefully,  Water is precious'
          },
          {
            qText: 'Where does the rain water go after falling on the ground?',
            options:
              '* Seeps into the ground, * Plants absorb the water, * Mingles with sea and ocean, * Mixes with lake and pond'
          },
          {
            qText: 'Which animal can live without water for several days?',
            options: 'camel, elephant, lion, tiger'
          },
          {
            qText: 'World water day is observed on _________.',
            options: 'March 22, March 2, May 2, May 22'
          },
          {
            qText: 'Which of the following can be man-made?',
            options: 'pond, sea, river, ocean'
          },
          {
            qText: 'Which of the following is responsible for water in a well?',
            options: 'ground water, river, water tank, stream'
          },
          {
            qText:
              'Which of the following does not relate to preserving water?',
            options:
              'taking umbrella while going out in rain,avoiding water pollution,planting more trees,saving rain water'
          }
        ]
      },
      slug: 'mcq',
      editable: true
    },
    {
      type: 'rightOne',
      id: '300',
      label: 'Odd one out',
      data: {
        title: 'Odd one out',
        fontSize: '1.3rem',
        noCaps: true,
        text: `Hill,Lake,Pond, Sea
Rose, Lily, Lotus,Water Hyacinth   
Fish,Horse, Tiger, Cow
Combing, Swimming, Washing,Bathing
Water Tank, Sea, Ocean, Lake
Ice Cream, Water, Ice, Vapour`
      }
    },
    {
      label: 'True or False',
      id: '400',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Saving water is our duty.
Always close the water tap while brushing teeth.
Planting more trees leads to rainfall.
It is necessary to collect rain water.`
          },
          {
            name: 'False',
            text: `Living things do not need water.
A tank is a large area to store water compared to reservoirs.
To save water, we should wash our vehicles everyday.
We can bathe in shower to save water.`
          }
        ]
      }
    },
    {
      id: '500',
      label: 'Fill Up',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Drinking water is known as *potable (pot)* water.
Water that collects in the low lying areas is called *lake (sea)*.
It is our *responsibility (work)* to keep the public water resources clean.
The largest source of water on the earth is *ocean (sea)*.
*All (Few)* living things need water.
*Malaria (Cholera)* is caused by mosquitoes.`
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: '600',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `We need water to *clean* our face.
We need water to *brush* our teeth.
We need water to *cook* our food.
We need water to *wash* our vessels.
We need water to *drink*.`
      }
    },
    {
      label: 'Activities needing water',
      id: '700',
      type: 'group',
      data: {
        title: 'Classify the activities that need water.',
        types: [
          {
            name: 'Needs Water',
            text:
              'grow plant, water coloring, row a boat, knead dough, wash dress'
          },
          {
            name: "Doesn't need",
            text: 'play game, sing a song, run fast, write'
          }
        ]
      }
    },
    {
      type: 'sequence',
      label: 'Jumbled word',
      id: '800',
      data: {
        title: 'Find out the different sources of water.',
        text: 'rain, lake, pond, stream, well, sea, ocean'
      }
    },
    {
      label: 'Size of water bodies',
      type: 'sorting',
      id: '900',
      data: {
        title:
          'Sort the water bodies based on their size. (Largest should come at the top)',
        text: 'ocean, sea, river, lake, pond, water tank'
      }
    },
    {
      id: '1000',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Sea, Salt Water
River, Fresh Water
Dengue, Mosquito
Typhoid, Unclean water
Well, Ground water`,
        title: 'Match the following'
      }
    }
  ]
};
