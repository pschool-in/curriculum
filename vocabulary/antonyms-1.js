export default {
  label: 'Antonyms Collection - 1',
  id: 'antonyms-1',
  defs: {
    data: [
      `yes, no
I, you
yesterday, tomorrow
young, old
early, late
cry, laugh`,

      `fail, pass
many, few
poor, rich   
speed, slow
cruel, kind
above, below`,

      `left, right
always, never
bottom, top
careful, careless
warm, cool
east, west`,

      `bad, good
after, before
boy, girl
near, far
dark, light
empty, full`,

      `against,for
question, answer
brave, coward
closed,  open
day, night
found, lost`,

      `all,none
black, white
dull, bright
cold, hot
down, up
give, take`,

      `begin, end
lend, borrow 
broad, narrow
come, go
dry, wet
hate, love`,

      `out, in
heaven, hell
here, there
large, small
loss, win
low, high`,

      `north, south
push, pull
smooth, rough
slim, fat
soft, hard
them, us`,

      `true, false
tall, short
truth, lie
loud, quiet
loose, tight
on, off`
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
            text: `yes × no
you × I
yesterday × tomorrow
young × old
early × late
cry × laugh`
          },
          {
            type: 'hilight',
            text: `fail × pass
many × few
poor × rich   
speed × slow
cruel × kind
above × below`
          },
          {
            type: 'hilight',
            text: `left × right
always × never
bottom × top
careful × careless
warm × cool
east × west`
          },
          {
            type: 'hilight',
            text: `bad × good
after × before
boy × girl
close × far
dark × light
empty × full`
          },
          {
            type: 'hilight',
            text: `against × for
question × answer
brave × coward
closed × open
day × night
found × lost`
          },
          {
            type: 'hilight',
            text: `all × none
black × white
dull × bright
cold × hot
down × up
give × take`
          },
          {
            type: 'hilight',
            text: `begin × end
lend × borrow 
broad × narrow
come × go
dry × wet
hate × love`
          },
          {
            type: 'hilight',
            text: `out × in
heaven × hell
here × there
large × small
loss × win
low × high`
          },
          {
            type: 'hilight',
            text: `north × south
push × pull
smooth × rough
slim × fat
soft × hard
them × us`
          },
          {
            type: 'hilight',
            text: `true × false
tall × short
truth × lie
loud × quiet
loose × tight
on × off`
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
