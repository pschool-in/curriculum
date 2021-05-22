export default {
  label: 'Facts vs Opinions',
  id: 'facts-opinions',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Facts vs Opinion',
        text: [
          `A declarative statement can be classified into Facts and Opinions`,
          `# Facts`,
          `Statements that can be verified are known as Facts. They can be proven true or false. Statements of fact are objective reality. It can be an event or information, based on real occurrences which can be tested.`,
          {
            type: 'hilight',
            text: `The cost of these chocolates is Rs 100.
              Tomorrow is a holiday.
              A week has seven days.`
          },
          `An opinion is an expression of a person’s feelings that cannot be proven. An opinion is an inconclusive statement, used in subjective matters, which cannot be proved true or false. It is what a person thinks or feels about something or someone. `,
          {
            type: 'hilight',
            text: `These chocolates are expensive.
              I think it may rain tomorrow.
              Strawberries are better than oranges.`
          }
        ]
      }
    },
    {
      type: 'classifySentence',
      label: 'Fact Vs Opinion',
      id: 'fact-opinion',
      commonData: {
        title: 'Classify the below sentences as Facts and Opinions',
        types: ['Fact', 'Opinion']
      },
      data: [
        [
          `Sun rises in the East.
  Mr. Narendra Modi is the Prime Minister of India.
  The Ganges is the longest river in India.
  There are 60 seconds in a minute.
  Christmas comes in December.`,
          `Blue is a better color than red.
  Balu is the best person in my class.
  No one can hit six like Dhoni.
  I think it will rain tomorrow.
  I like dogs more than cat.`
        ],
        [
          `We saw a rainbow yesterday.
  Our TV is not working.
  Arun has done his college in the US.
  Dogs are faithful animals.
  We went to Delhi last summer.`,
          `I think, the teacher doesn't like me.
  Arun is the best math teacher in the whole world.
  It may rain tomorrow.
  He may be fifty years old.
  Pizza tastes better than Burger.`
        ],
        [
          `She has won three medals.
  It is raining hard.
  I am eleven years old.
  This is the tallest building in the city.
  Earth has only one moon.`,
          `England will win the next world cup.
  Our head master is the most intelligent man in our school.
  I didn't like the food you bought.
  The movie I saw yesterday was the most boring movie.
  Sometimes he behaves like a fool.`
        ],
        [
          `The national currency of India is Rupee.
Sun sets in the west.
Tomatoes are fruits.
Water covers 70% of our Earth.
Kangaroos can't walk backwards.`,

          `The doll is pretty in a yellow dress.
It may rain heavily today.
Green apples are tasty.
Priya is the happiest girl.
It’s better to buy a pencil than a pen.`
        ],
        [
          `A group of sheep is called herd.
Octopus has blue blood.
Peanuts are grown in the roots.
The moon rotates around the Earth.
Finger nails grows faster than the toenails`,

          `Maths is an easy subject.
Winter is the most beautiful season.
Turtles are the cutest aquatic animals.
The story was interesting at the beginning.
Rainbow is more beautiful than the sun set.`
        ],
        [
          `Penguins can't fly.
Spider has eight legs.
Owls cant move their eyeballs.
Virat Kohli is a cricketer.
Taj Mahal is located in Agra.`,
          `Pizza is delicious in that shop.
The uniform of that school is not good. 
I think Geetha was not happy with her birthday gift.
Purple is the best colour.
Kids like to read story books.`
        ],
        [
          `Kangaroo is the national animal of Australia.
Diwali is called the Festival of Lights.
The young one of a deer is called fawn.
Ganga is the largest river in India.
Telephone was invented by Alexander Graham bell.`,

          `Roses are beautiful flowers.
I think Sheep are not smart animals.
Math is an easier subject than English.
Animals should not be kept in a zoo.
I think your hand writing is not legible.`
        ]
      ]
    }
  ]
};
