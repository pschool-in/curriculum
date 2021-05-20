export default {
  label: 'Synonyms Collection - 3',
  id: 'synonyms-3',
  defs: {
    data: [
      `lift, raise
bag, sack
bravery, courage
grasp, absorb
enlarge, grow
honest, trustworthy
important, essential`,
      `need, necessity
opportunity, chance
question, query
weak, fragile
magnify, expand
miniature, tiny`,
      `fake,artificial
close, shut
more, additional
ancient, old
find, discover
steady, constant`,
      `race, competition
guard, protect
astonish, amaze
border, margin
bear, tolerate
busy, engaged`,
      `careful, cautious
decrease, reduce
divide, split
fetch, retrieve
freedom, liberty
frequent, often`,
      `try, attempt
trash, waste
shy, bashful
harmony, unity
anxious, worried
transparent, clear`,
      `dive, plunge
evidence, proof
trivial, unimportant
prompt, immediate
paticular, specific
vanish, disappear`,
      `annoy, bother
bargain, deal
attire, dress
amiable, friend
strong, firm
box, carton`,
      `unmarried, single
pastime, hobby
extra, additional
rescue, save
expensive, dear
encourage, urge`,
      `obvious, clear
shiver, tremble
effect, result,
blaze, fire
latest, modern
explore, search`
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
            text: `lift − raise
bag − sack
bravery − courage
grasp − absorb
enlarge − grow
honest − trustworthy
important − essential`
          },
          {
            type: 'hilight',
            text: `need − necessity
opportunity − chance
question − query
weak − fragile
magnify − expand
miniature − tiny`
          },
          {
            type: 'hilight',
            text: `fake − artificial
close − shut
more − additional
ancient − old
find − discover
steady − constant`
          },
          {
            type: 'hilight',
            text: `race − competition
guard − protect
astonish − amaze
border − margin
bear − tolerate
busy − engaged`
          },
          {
            type: 'hilight',
            text: `careful − cautious
decrease − reduce
divide − split
fetch − retrieve
freedom − liberty
frequent − often`
          },
          {
            type: 'hilight',
            text: `try − attempt
trash − waste
shy − bashful
harmony − unity
anxious − worried
transparent − clear`
          },
          {
            type: 'hilight',
            text: `dive − plunge
evidence − proof
trivial − unimportant
prompt − immediate
paticular − specific
vanish − disappear`
          },
          {
            type: 'hilight',
            text: `annoy − bother
bargain − deal
attire − dress
amiable − friend
strong − firm
box − carton`
          },
          {
            type: 'hilight',
            text: `unmarried − single
pastime − hobby
extra − additional
rescue − save
expensive − dear
encourage − urge`
          },
          {
            type: 'hilight',
            text: `obvious − clear
shiver − tremble
effect − result
blaze − fire
latest − modern
explore − search`
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
