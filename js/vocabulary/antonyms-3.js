export default {
  label: 'Antonyms Collection - 3',
  id: 'antonyms-3',
  defs: {
    data: [
      `enemy, friend
everything, nothing
construct, destroy
expensive, cheap
future, past
ceiling, floor`,

      `collect, distribute
command, request
advantage, drawback
damage, repair
different, alike
encourage, discourage`,

      `bold, timid
appear, vanish
exterior, interior
straight, crooked
feeble, strong
contract, expand`,

      `cheap, expensive
ancient, modern
clumsy, graceful
despair, hope
guilty, innocent
humble, proud`,

      `build, destroy
antonym, synonym
combine, separate
dawn, dusk
grow, shrink
horizontal, vertical`,

      `abundant, scarce
artificial, natural
compulsory, voluntary
export, import
giant, dwarf
inferior, superior`,

      `apart, together
cheerful, sad
conceal, reveal
external, internal
generous, stingy
include, exclude`,

      `trap, release
absent, present
lengthen, shorten
lazy, industrious
minority, majority
maximum, minimum`,

      `messy, neat
miser, spendthrift
optimist, pessimist
permanent, temporary
poetry, prose
plural, singular`,

      `sink, float
rapid, slow
vacant, occupied
scatter, collect
serious, trivial
virtue, vice`
    ]
  },
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Antonyms',
        text: [
          `Two words are said to be antonyms, if they have opposite meaning.`,
          {
            type: 'hilight',
            text: `enemy × friend
everything × nothing
construct × destroy
expensive × cheap
future × past
ceiling × floor`
          },
          {
            type: 'hilight',
            text: `collect × distribute
command × request
advantage × drawback
damage × repair
different × alike
encourage × discourage`
          },
          {
            type: 'hilight',
            text: `bold × timid
appear × vanish
exterior × interior
straight × crooked
feeble × strong
contract × expand`
          },
          {
            type: 'hilight',
            text: `cheap × expensive
ancient × modern
clumsy × graceful
despair × hope
guilty × innocent
humble × proud`
          },
          {
            type: 'hilight',
            text: `build × destroy
antonym × synonym
combine × separate
dawn × dusk
grow × shrink
horizontal × vertical`
          },
          {
            type: 'hilight',
            text: `abundant × scarce
artificial × natural
compulsory × voluntary
export × import
giant × dwarf
inferior × superior`
          },
          {
            type: 'hilight',
            text: `apart × together
cheerful × sad
conceal × reveal
external × internal
generous × stingy
include × exclude`
          },
          {
            type: 'hilight',
            text: `trap × release
absent × present
lengthen × shorten
lazy × industrious
minority × majority
maximum × minimum`
          },
          {
            type: 'hilight',
            text: `messy × neat
miser × spendthrift
optimist × pessimist
permanent × temporary
poetry × prose
plural × singular`
          },
          {
            type: 'hilight',
            text: `sink × float
rapid × slow
vacant × occupied
scatter × collect
serious × trivial
virtue × vice`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match Antonyms',
      id: 'match',
      commonData: {
        title: 'Match Antonyms'
      },
      data: [
        {
          refs: 'data~0'
        },
        {
          refs: 'data~1'
        },
        {
          refs: 'data~2'
        },
        {
          refs: 'data~3'
        },
        {
          refs: 'data~4'
        },
        {
          refs: 'data~5'
        },
        {
          refs: 'data~6'
        },
        {
          refs: 'data~7'
        },
        {
          refs: 'data~8'
        },
        {
          refs: 'data~9'
        }
      ]
    },
    {
      type: 'completeWord',
      label: 'Write the Antonym',
      id: 'complete-word',
      commonData: {
        lang: 'en',
        title: 'Type the antonym of the given word.'
      },
      data: [
        {
          refs: 'data~0'
        },
        {
          refs: 'data~1'
        },
        {
          refs: 'data~2'
        },
        {
          refs: 'data~3'
        },
        {
          refs: 'data~4'
        },
        {
          refs: 'data~5'
        },
        {
          refs: 'data~6'
        },
        {
          refs: 'data~7'
        },
        {
          refs: 'data~8'
        },
        {
          refs: 'data~9'
        }
      ]
    },
    {
      type: 'connectLetters',
      label: 'Pick the word',
      id: 'connect-letters',
      commonData: {
        title:
          'Connect the letters from left to right to form the antonym for the below word.',
        clueFont: 'big'
      },
      data: [
        {
          refs: 'data~0'
        },
        {
          refs: 'data~1'
        },
        {
          refs: 'data~2'
        },
        {
          refs: 'data~3'
        },
        {
          refs: 'data~4'
        },
        {
          refs: 'data~5'
        },
        {
          refs: 'data~6'
        },
        {
          refs: 'data~7'
        },
        {
          refs: 'data~8'
        },
        {
          refs: 'data~9'
        }
      ]
    }
  ]
};
