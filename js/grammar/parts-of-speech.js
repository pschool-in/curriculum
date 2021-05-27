export default {
  label: 'Parts of Speech',
  id: 'parts-of-speech',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Parts of Speech - Notes',
      data: {
        title: 'Parts of Speech',
        text: [
          `A sentence is made up of words. Each word does a function to make the sentence work. How the word function in a sentence can be classified into eight types. They are known as parts of speech.`,
          `# Noun`,
          'A noun is the name of a person, place, thing, or idea. eg: man, John, Africa, honesty',
          `# Pronoun`,
          `A pronoun is a word used in place of a noun. eg: he, she, it, they`,
          `# Verb`,
          `A verb expresses action or being. eg: sing, work, wait, are, be`,
          `# Adjective`,
          `An adjective modifies or describes a noun or pronoun. eg: young, beautiful, smart, lazy`,
          `# Adverb`,
          `An adverb modifies or describes a verb, an adjective, or another adverb. eg: carefully, always, quickly`,
          `# Preposition`,
          `A preposition is a word that shows relationship between a noun, pronoun, or any other word in a sentence. eg: by, with, about, under`,
          `# Conjunction`,
          `A conjunction joins words, phrases, or clauses. eg: and, but, or`,
          `# Interjection`,
          `An interjection is a word used to express emotion. eg: oh!, wow!, oops!`,
          `Same word can perform different functions in different sentences.`,
          {
            type: 'html',
            text: `<b>Stones</b> are hard to break. - Noun<br>They built a <b>stone</b> wall. - Adjective`
          }
        ]
      }
    },
    {
      type: 'group',
      label: 'Noun vs Verb',
      id: 'classify-noun-verb',
      commonData: {
        title: 'Drag and drop the below words in the respective boxes.',
        printTitle:
          'Rewrite the words given at the bottom at approprate boxes.',
        types: ['Noun', 'Verb']
      },
      data: [
        [
          `tree, desk, table, house, shoe, dress`,
          `walk, laugh, play, cook, sleep, eat`
        ],
        [
          'nose, rose, fridge, baby, bus, hill, button',
          'smile, dance, sing, catch, drive, wait, buy'
        ],
        [
          'toy, bell, ball, leaf, bird, man, nail',
          'feel, think, hear, smell, stand, jump, pay'
        ]
      ]
    },
    {
      label: 'Identify adjective and preposition',
      type: 'group',
      id: 'classify-adjective-preposition',
      data: {
        title: 'Drag and drop: Adjective vs Preposition.',
        printTitle:
          'Rewrite the words given at the bottom at approprate boxes.',
        types: [
          {
            name: 'Adjective',
            text: 'important, every, hot, basic, old, strong, nice'
          },
          {
            name: 'Preposition',
            text: 'under, during, after, outside, before, over, with'
          }
        ]
      }
    },
    {
      label: 'Verb / Adjective/ Adverb',
      type: 'classifySentence',
      id: 'classify-between3',
      commonData: {
        title: 'Classify the underlined word as verb or adjective or adverb.',
        types: ['Verb', 'Adjective', 'Adverb']
      },
      data: [
        [
          `She *went* to the market.
He *ran* after a puppy.
Masons *build* houses.
John *is* my friend.`,
          `She went to the *fish* market.
He ran after a *black* puppy.
Masons build *brick* houses.`,
          `She *slowly* went to the market.
He ran *fast*.
Masons build houses *wonderfully*.`
        ],
        [
          `There was *calm* after the heavy rain.
The dog *barks* loudly.
I have *done* my work.
She *paints* the wall pink.`,
          `Ramya is a *good* singer.
John is my *best* friend.
There was calm after the *heavy* rain.`,
          `Climb up the ladder *carefully*.
She can sing classical songs *excellently*.
It is raining *heavily*.`
        ],
        [
          `He was *driving* when I called him.
He *teaches* English.
He is *doing* a good job.`,
          `He is a *careful* driver.
His *driving* skill is not great.
He is an *English* teacher.
Can you try some *dark* pants?`,
          `You can *easily* open the box.
She can *quickly* read a book.
The class is *very* loud today.`
        ]
      ]
    },
    {
      type: 'match',
      label: 'Match Words with Parts of Speech',
      id: 'match',
      commonData: {
        title: 'Match Words with Parts of Speech'
      },
      data: [
        `school, noun
drink, verb
quickly, adverb
they, pronoun
good, adjective
because, conjunction
before, preposition`,

        `fast, adverb
it, pronoun
large, adjective
but, conjunction
teacher, noun
sleeping, verb
into, preposition`,

        `tasty, adjective
and, conjunction
hospital, noun
reading, verb
after, preposition
slowly, adverb
himself, pronoun`,

        `silent, adjective
playing, verb
silently, adverb
she, pronoun
until, conjunction
under, preposition
city, noun`,

        `beautiful, adjective
that, pronoun
or, conjunction
with, preposition
doctor, noun
preparing, verb
loudly, adverb`
      ]
    }
  ]
};
