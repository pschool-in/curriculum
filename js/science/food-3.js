export default {
  label: 'Nutrients',
  id: 'food-3',
  pdf: 'food-3.pdf',
  list: [
    {
      label: 'Food - Reading',
      type: 'passage',
      id: '100',
      data: {
        title: 'Why food is important?',
        text: [
          `Every day we feel hungry and then eat something. Our body is telling us that it needs food. Why do we need food?`,
          `1. Food gives us energy to work and play.`,
          `2. Food builds our body.`,
          `3. Food keeps us healthy.`,
          `We eat different food items, some are raw and some are cooked. Each of these food items contains different nutrients. There are five main nutrients that our body requires. They are carbohydrates, proteins, fats, vitamins and minerals.`,
          `# Carbohydrates`,
          `Our body needs energy to do work, play and do other activities. Carbohydrates are energy-giving food. Food that contains carbohydrate are rice, wheat, potato, sugar cubes and bread.`,
          `# Proteins`,
          `Proteins build, maintain and replace the tissues in our body. They are also known as body - building foods. E.g., Fish, Milk, Egg, Nuts and Sprouted seeds.`,
          `# Fats`,
          `Fats provide energy to us. They act as the body's energy reservoir. Fats also help to keep the body warm during very cold weather. Too much fat in the body may lead to obesity or overweight. Some food items that contain fat are cheese, butter, ghee, meat, oil and nuts.`,
          `# Vitamins`,
          `Our body needs vitamins to work properly. They protect our body from deficiency diseases. E.g., Carrot, Orange, Gooseberry, Papaya and Greens.`,
          `# Minerals`,
          `Minerals help in formation of blood, bone, teeth, etc. They regulate the body functions. E.g., Fig, Pear, Garlic, Banana and Apple.`,
          `Most children love to eat food items like burgers, pizzas and chocolates, which are not good for health. They make children to gain extra weight. Avoid eating unhealthy foods and eat nutritious food to stay healthy. A healthy snack may include sprouts, fruits and salads.`
        ]
      }
    },
    {
      label: 'Carbohydrates vs Proteins',
      type: 'group',
      id: '200',
      data: {
        title: 'Classify the below food items based on its major nutrients.',
        types: [
          {
            name: 'Carbohydrates',
            text: 'Rice, Wheat, Potato, Sugar, Bread'
          },
          {
            name: 'Proteins',
            text: 'Fish, Milk, Egg, Nuts, Sprouted seeds'
          }
        ]
      }
    },
    {
      label: 'Fats vs Vitamins',
      type: 'group',
      id: '300',
      data: {
        title: 'Classify the below food items based on its major nutrients.',
        types: [
          {
            name: 'Fats',
            text: 'Cheese, Butter, Ghee, Meat, Oil'
          },
          {
            name: 'Vitamins',
            text: 'Carrot, Orange, Gooseberry, Papaya, Spinach '
          }
        ]
      }
    },
    {
      id: '400',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Rice, Carbohydrates
Fish, Proteins
Meat, Fats
Papaya, Vitamins
Garlic, Minerals`,
        title: 'Match the foods with their major nutrients.'
      }
    },
    {
      label: 'Choose the best answer.',
      type: 'mcq',
      id: '500',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Bread,wheat and potato are rich in _______________ .',
            options: 'carbohydrate, protein, roughage, fats'
          },
          {
            qText: 'A balanced diet contains _______________ .',
            options: `Carbohydrates and vitamins
Proteins and fats and minerals
Fibre and water
* All`
          },
          {
            qText: 'The Vitamin present in carrot is _______________ .',
            options: 'Vitamin-A , Vitamin-D, Vitamin-E, Vitamin-K '
          },
          {
            qText: 'Which of these things are BAD for you?',
            options:
              'Eating lot of fat food items,Washing vegetables before cutting them,  Eating green vegetables, Eating lot of pulses '
          },
          {
            qText: 'What is the food that we eat in the morning called?',
            options: 'Breakfast, Lunch, Dinner'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: '600',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        },
        text: `Food rich in proteins are called *body-building* food.
Food helps in proper *functioning* of our body.
A *balanced diet* is necessary for the proper growth and development of our body.
Sprouted seeds contain more *proteins*.
*lunch* is the second meal of a day.`
      }
    },
    {
      type: 'match',
      label: 'Match the Following',
      id: '700',
      data: {
        title: 'Match the words with same meaning.',
        fontSize: '1rem',
        text: `Carbohydrates and fats, Energy-giving food
Vitamins,Fights diseases 
Protein,Supports body growth
Minerals,Regulates body functions`
      }
    },
    {
      label: 'Balanced Diet - Reading',
      type: 'passage',
      id: '800',
      data: {
        title: 'Balanced Diet',
        text: [
          'Diet refers to the food we eat. A balanced diet contains all nutrients in the right amounts. It also includes fibre and water. It helps in the growth and development of our body. Fibre is an indigestible food that your body cannot absorb.',
          'A meal is what we eat during a particular time of the day. Breakfast, lunch and dinner are the three main meals we eat every day.',
          'Food habit of people at a place depends on the climate, culture and availability of food. For example, in coastal areas, people eat a lot of sea food. India is a big country with different climate and culture.',
          'South Indians depend on rice, dhal, coconut, jaggery for their food. Hence, they make food like Idly, Sambar and Payasa',
          'North Indians depend on wheat, onions, milk and curd. Hence, they make foods like Chappathi, Paratha and Lassi.',
          'The amount of food a person needs depends on his age. These needs change with age groups and level of physical activity. Athletes may need more amount of energy during training. Young children should eat a wide variety of food.',
          'Our ancestors ate food that were easily available from nature, which lead to healthy lives.',
          '# Home Garden',
          'Cultivation of crops in a small available place in house-holds is known as Home garden or Kitchen garden or Nutrition garden.',
          '# Advantage of Home Garden',
          '1. Waste water can be reused.',
          '2. It saves our money.',
          '3. We get vegetables which are fresh and high in nutritive value.',
          '4. It can be a good hobby.'
        ]
      }
    },
    {
      type: 'match',
      label: 'Match - Time and Meals',
      id: '900',
      data: {
        title: 'Match the time and the meal.',
        text: `6 AM, Tea
8 AM, Breakfast 
1 PM, Lunch
5 PM, Snacks
8 PM, Dinner`
      }
    },
    {
      label: 'Multiple Choice Questions.',
      type: 'mcq',
      id: '1000',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What is indigestible for our body?',
            options: 'fibre, protein, vitamin'
          },
          {
            qText: 'Food habits of the people depends on ___________',
            options: `climate
culture
availability of food
* all of the above`
          },
          {
            qText: 'Which of the following is not an advantage of home garden?',
            options:
              'We can sell our vegetables, We get fresh vegetables, We can reuse waste water, It is a good hobby'
          },
          {
            qText:
              'A _______ diet contains all nutrients in the right amounts.',
            options: 'balanced, light, heavy, lunch'
          },
          {
            qText: 'How many main meals do we eat every day?',
            options: 'three, four, two'
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: '1100',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true or false',
        types: [
          {
            name: 'True',
            text: `The amount of food a person needs depends on his age.
Our ancestors ate food that were easily available from nature.
Our ancestors led a healthy life.`
          },
          {
            name: 'False',
            text: `People living in coastal areas, usually don't eat sea food.
Athletes need less amount of energy.`
          }
        ]
      }
    }
  ]
};
