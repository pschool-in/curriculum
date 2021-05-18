export default {
  label: 'Synonyms Collection - 1',
  id: 'synonyms-1',
  defs: {
    data: [
      `huge, large
quick, fast
ill, sick
friendly, kind
silent, quiet
speak, talk
rest, relax`,
      `bad, evil
difficult, hard
begin, start
come, arrive
end, finish
wrong, incorrect`,
      `zero, nil
zone, area
idea, thought
tug, pull
small, tiny
draw, sketch`,
      `store, shop
smile, grin
funny, silly
road, street
gift, present
answer, reply`,
      `below, under
money, cash
child, kid
chill, cool
leave, exit
cost,price`,
      `run, jog
father, dad
mother, mom
hide, cover
angry, upset
right, correct`,
      `empty, blank
two, pair
total, whole
close, near
sad, unhappy
last, end`,
      `thin, slim
over, above
back, behind
omit, skip
work, job
say, tell`,
      `house, home
all, every
calm, quiet
carry, take
neat, tidy
tall, high`,
      `rich, wealthy
chair, seat
happy, joyful
look, see
some, few
thick, fat`
    ]
  },
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Synonyms',
        text: [
          `Two words are said to be synonyms, if they have similar meaning.`,
          {
            type: 'hilight',
            text: `huge − large
quick − fast
ill − sick
friendly − kind
silent − quiet
speak − talk
rest − relax`
          },
          {
            type: 'hilight',
            text: `bad − evil
difficult − hard
begin − start
come − arrive
end − finish
wrong − incorrect`
          },
          {
            type: 'hilight',
            text: `zero − nil
zone − area
idea − thought
tug − pull
small − tiny
draw − sketch`
          },
          {
            type: 'hilight',
            text: `store − shop
smile − grin
funny − silly
road − street
gift − present
answer − reply`
          },
          {
            type: 'hilight',
            text: `below − under
money − cash
child − kid
chill − cool
leave − exit
cost − price`
          },
          {
            type: 'hilight',
            text: `run − jog
father − dad
mother − mom
hide − cover
angry − upset
right − correct`
          },
          {
            type: 'hilight',
            text: `empty − blank
two − pair
total − whole
close − near
sad − unhappy
last − end`
          },
          {
            type: 'hilight',
            text: `thin − slim
over − above
back − behind
omit − skip
work − job
say − tell`
          },
          {
            type: 'hilight',
            text: `house − home
all − every
calm − quiet
carry − take
neat − tidy
tall − high`
          },
          {
            type: 'hilight',
            text: `rich − wealthy
chair − seat
happy − joyful
look − see
some − few
thick − fat`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match Synonyms',
      id: 'match',
      commonData: {
        title: 'Match Synonyms'
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
      label: 'Write the Synonyms',
      id: 'complete-word',
      commonData: {
        lang: 'en',
        title: 'Type the synonym of the given word.'
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
          'Connect the letters from left to right to form the synonym for the below word.',
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
