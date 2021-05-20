export default {
  label: 'Noun',
  id: 'noun',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Noun - Notes',
      data: {
        title: 'Noun',
        text: [
          `A noun is the name of a person, place, thing, or idea. eg: man, John, Africa, honesty`,
          `Nouns are basically classified into four types.`,
          `# Proper Noun`,
          'A proper noun is a name that identifies a particular person, place, or thing. In written English, proper nouns begin with capital letters. eg: Ram, London, Monday',
          `# Common Noun`,
          `A common noun is a noun that refers to people or things in general. eg: girl, city, dog, pencil`,
          `# Abstract Noun`,
          `An abstract noun is a noun which refers to ideas, qualities, and conditions - things that cannot be seen or touched. eg: beauty, time, truth, danger, `,
          `# Collective Noun`,
          `Collective nouns refer to groups of people or things, e.g. audience, family, government, team, jury.`
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify Proper Noun',
      id: 'select-proper',
      data: {
        title: 'Select the proper noun in the below sentence.',
        text: `*Siva* is a farmer.
I am living in *Chennai.*
*Delhi* is very hot in summer.
*Devi* is studying.
We order food from *Swiggy.*
My mummy is doing online shopping in *Amazon.*
I know how to cook *Maggi.*
*Newton* was a great scientist.
We went to *Ooty* for vacation.
*Microsoft* is a famous software company.`
      }
    },
    {
      type: 'selectWord',
      label: 'Identify Common Noun',
      id: 'select-common',
      commonData: {
        title: 'Select the common noun in the below sentence.'
      },
      data: [
        `She is watching *TV.*
He is my *brother.*
His *father* is cooking.
They are playing in *garden.*
The *car* is moving fast.
We saw *birds* flying.
He is eating *ice-cream.*
I like to play *football.*
We have no *homework* today.
She goes to *market.*`,

        `I am working in the *garden*.
We must eat plenty of *vegetables*.
Akbar told me the entire *story*.
I live in a small *town*.
Let's go to the *movies*.
I will sleep in my *bed*.
These *flowers* are beautiful.
Which is your *country*?
Do you have a *pen?*
Joe is her *cousin*.`,

        `Putta and Putti are *twins*.
Where is your *notebook*, Rameez?
The *dam* was built on the banks of the Kaveri.
I have named my *cat* Jerry.
Both my *parents* were born in March.`
      ]
    },
    {
      type: 'classifySentence',
      label: 'Identify Noun Type',
      id: 'identify-type',
      data: {
        title: 'Find the type of the underlined nouns in the below sentences.',
        types: [
          {
            name: 'Proper',
            text: `Every *Sunday* I go to the beach.
*Tamil* is my mother tongue.
We will visit *Taj Mahal* next month.
My best friend is *John*.
*Pacific Ocean* is the biggest ocean.`
          },
          {
            name: 'Common',
            text: `I like to ride my *bicycle*.
All *shops* are closed.
Wash your *hands* with soap and water.
Jupiter is the biggest *planet* in Solar System.
Please give me a *pencil*.`
          },
          {
            name: 'Abstract',
            text: `Ramya always speak the *truth*.
We should work hard for *success*.
I have no *idea* why he is sad.
My grand-father is doing *good*.
Don't under-estimate your *strength*.`
          }
        ]
      }
    },
    {
      label: 'Collective Nouns',
      type: 'matchByDragDrop',
      id: 'collective-noun',
      commonData: {
        title: 'Drag and drop the collective nouns at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `A *herd* of cattle
A *flock* of birds
A *school* of fish
A *pack* of wolves
A * swarm* of bees
A *choir* of singers
A *troupe* of dancers`,

        `A *pride* of lions is sitting by the tree.
The *class* of students is studying for the exams.
The cat in the attic gave birth to a *litter* of kittens.
I bought a *bunch* of grapes from the market.
A *herd* of buffaloes is bathing in the river.
Sania bought a *bouquet* of flowers for her mother.`,

        `A *staff* of employees
A *gang* of thieves
A *loaf* of bread
A *bowl* of rice
A *cup* of tea
A *crowd* of people
A *forest* of trees`
      ]
    }
  ]
};
