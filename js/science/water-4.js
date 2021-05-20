export default {
  label: 'Water Cycle',
  id: 'water-4',
  pdf: 'water-4.pdf',
  list: [
    {
      label: 'Water - Reading',
      type: 'passage',
      id: '100',
      data: {
        title: 'Water',
        text: [
          '# Three states of water',
          ' Water occurs naturally in three forms: ice, water and water vapour. These forms are also called states of water. Ice is in solid form, water is in liquid form and water vapour is in gaseous form. These states occur naturally because of temperature changes. Water becomes ice in cold regions, remains as water in oceans/rivers and becomes water vapour due to the heat of the Sun.',
          'We measure heat and cold using temparature. The natural temparature is known as room temparature. When we get fever, our body temparature will raise. We can measure temparature using a thermometer',
          'At temperature below 0° C water becomes ice. This process is called freezing.',
          '# Water Cycle',
          'Continuous movement of water from the Earth to the atmosphere and back to the Earth is known as water cycle or hydrologic cycle. Water cycle consists of the following four stages.',
          '# Evaporation',
          'The process in which water is changed into water vapour by the heat of the sun is called evaporation. It takes place from the surfaces of rivers, oceans, lakes and ponds. Plants also release water by transpiration. Water can slowly convert to water vapour even in room temperature. It is called evaporation. Water from ocean becomes clouds due to evaporation. Wet cloths dry when exposed to sunlight or air due to evaporation.',
          '# Condensation',
          'The process of converting water vapour into water on cooling is called condensation. Water vapour in the atmosphere being lighter, rises up and cools down. It further condenses to form tiny water droplets.',
          '# Precipitation',
          'The water droplets join together to form clouds. As they get cooler, the droplets become bigger and heavier and fall as rain. If the air is very cold, they freeze to fall as hail of snow.',
          '# Flowing back to Oceans',
          'Rain water forms streams and springs which join together to form rivers. Rivers flow finally into the sea and ocean thereby completing the cycle.',
          '# Activity 1',
          'Take half a glass of water. Clean the outside part of the glass. Add few ice cubes and leave it for 5-10 minutes. You will observe drops of water appearing outside the glass. This happens because the water vapour in the air condenses on the cold surface of the glass.',
          '#Let us do',
          '1. Fill water in an ice tray and keep it in the freezer. After few hours, take it out. What happened to the water?',
          '2. Now keep this ice tray on a table for some time. What happens to the ice?',
          '3. Pour water from the ice tray into a kettle. Ask an elder at your home to heat the kettle and observe the mouth of the kettle when the water starts boiling. What do you see?',
          'In nature, water keeps changing its state. Let us see how this happens. Due to the Sun‛s heat, water in oceans and rivers changes into water vapour and rises up.',
          'Water becoming water vapour on heating is called evaporation. The water vapour, when comes into contact with cool air, becomes water droplets. This is called condensation. The water droplets combine to form clouds. The water droplets continue to combine, and they become big and heavy. These water droplets then fall down as rain. This is called precipitation. In colder places, combined water droplets come down as snow, sleet or hail. This continuous change of water from one state to another in nature is called water cycle.',
          'When we pour cold water in a glass, we could notice water droplets being formed on the outer side of the glass. It is due to condensation. Water vapour present in the air, when comes in contact with the cold glass, it becomes water.',
          '# Rainwater harvesting',
          'It is the process of collecting and storing rainwater for future use. Rainwater can be collected in natural reservoirs or artificial tanks. Roof top harvesting is also a type of rainwater harvesting. The rainwater on the top of the building is collected and passed into the ground through pipes. Water passing through the pipes enters the pit which consist of gravels and coarse sand. As it passes impurities are filtered and stored as ground water. Do you know?',
          '1. Each day, we lose a little more than a cup of water when we exhale.',
          '2. 73% of our brain‛s mass consists of water.',
          '3. The Antartic region has about 70% of the worlds fresh water.'
        ]
      }
    },
    {
      label: 'Choose the Correct Answer - Water',
      type: 'mcq',
      id: '200',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Water is the most __________ resource on the Earth',
            options: 'precious, solid, gas'
          },
          {
            qText: 'Water exists in _________ states.',
            options: 'three, four, two'
          },
          {
            qText: ' At temperature below _______ water freezes to form ice.',
            options: '0° C, 10° C, 100° C'
          },
          {
            qText: '______ is the process by which water becomes water vapour.',
            options: 'Evaporation, Condensation, Freezing'
          },
          {
            qText: 'Which controls the ecological functions of life?',
            options: 'Water cycle, Bicycle,  Recycle Water'
          },
          {
            qText:
              'Water is present in huge quantities as vapour and clouds in the ________',
            options: 'atmosphere,sky,earth,rain'
          }
        ]
      }
    },
    {
      id: '300',
      label: 'Fill Up',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Water is converted into *water vapour (ice cube)* when it is heated.
Water becomes ice on *freezing (heating)*.
Water droplets combine to form *clouds (rain)*.
Water cycle increases the availability of *ground water (water tank)*.
*Roof top harvesting (Water cycle)* is a type of rainwater harvesting.`
      }
    },
    {
      label: 'True or False',
      type: 'classifySentence',
      id: '400',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Water becoming water vapour on heating is called vapourization.
Water is a good example for all states of matter.
Water cycle controls Earth's temperature.`
          },
          {
            name: 'False',
            text: `37% of our brain‛s mass consists of water.
At 100° C, water becomes ice.
Roof top harvesting method is used in agriculture field.`
          }
        ]
      }
    },
    {
      label: 'Water, Ice and Vapor',
      type: 'matchByDragDrop',
      id: '500',
      data: {
        isPractice: false,
        title: 'Drag and drop to complete the below sentences.',
        styles: {
          fontSize: '1rem',
          dashWidth: 60
        },
        text: `If you *heat* water to a temperature of *100 °C*, it *vapourize* to form water vapour.
If you *cool* water to a temparature of *0 °C*, it *freezes* to form ice.
Ice *melts* when we keep it in *room* temperature. `
      }
    },
    {
      id: '600',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Freezing Point, 0° C
Boiling Point, 100° C
Temperature, Thermometer
Water, 3 States
Condensation, Clouds`,
        title: 'Match the following'
      }
    },
    {
      label: 'Temperature',
      type: 'sorting',
      id: '700',
      data: {
        title:
          'Sort the below items based on their usual temperature. (Coolest should come at the top)',
        text: 'ice cubes, cool drinks, tap water, hot water, boiling water'
      }
    }
  ]
};
