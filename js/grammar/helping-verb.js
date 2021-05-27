export default {
  label: 'Helping Verb',
  id: 'helping-verb',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Helping verbs',
        text: [
          `A helping verb is used with a main verb to help express the main verb's tense, mood, or voice.`,
          `# Be verbs`,
          `They are used to describe the condition of people, things, places and ideas.`,
          {
            type: 'sitewords',
            text: 'am, is, are, was, were, being, been, will be',
            width: 80
          },
          `# Have verbs`,
          {
            type: 'html',
            text: `They can be used both main verb and helping verb. If used as a main verb, then it indicates possession. eg: <i> I have a cycle.</i><br> We use <b>have</b> helping verb to make <b>perfect tense</b>.`
          },
          {
            type: 'sitewords',
            text: 'has, have, had, having, will have',
            width: 80
          },
          `# Do verbs`,
          {
            type: 'html',
            text: `They can be used both as main and helping verb. If used as a main verb, then it indicates action. eg: <i> Can you do a favour?</i><br> We use <b>have</b> helping verb to ask questions. We also use them for more emphatic or deliberate actions. `
          },
          `# Other common helping verbs`,
          {
            type: 'sitewords',
            text:
              'can, could, dare, may, might, must, need, shall, should, will, would',
            width: 80
          },
          `# Negatives`,
          `Frequently they can be used to form negative words.`,
          {
            type: 'sitewords',
            text: `isn't, aren't, wasn't, haven't, hasn't, don't, doesn't`,
            width: 80
          },
          `# Third person singular`,
          `Most verbs take a plural form when used with third-person singular noun or pronoun. It applies to helping verbs too. Find below some helping verbs and their plural form.`,
          {
            type: 'hilight',
            text: `do - does
            have - has
            `
          },
          {
            type: 'html',
            text: `<b>Could</b>, <b>would</b>, and <b>might</b> are the past tenses of <b>can</b>, <b>will</b>, and <b>may</b> respectively. They are also used to make polite requests.`
          }
        ]
      }
    },
    {
      id: 'is-are',
      label: 'Am, Is vs Are',
      type: 'fillupOptions',
      data: {
        title: 'Fill in the blank.',
        text: `Anil *is* swimming in the pool.
The school bell *is* ringing.
I *am* Anil.
Ships *are* sailing in the sea.
I *am* not a rabbit.
Birds *are* flying in the sky.
We *are* happy.
Raju and Anil *are* friends.
These children *are* playing in the garden.
The tiger *is* feeling hungry.
I *am* not an idiot.
This *is* a lotus flower.`,
        options: 'am, is, are'
      }
    },
    {
      id: 'was-were',
      label: 'Was vs Were',
      type: 'fillupOptions',
      data: {
        title: 'Fill in the blanks.',
        text: `It *was* very hot yesterday.
*Were* you angry yesterday?
I *was* having fun at the park.
Where *were* you?
Why *were* you crying?
They *were* drinking water.
I *was* winning the race!
Where *were* you going?
I *was* so happy yesterday!
When *were* you at the park?
They *were* going to zoo.
Why *was* your brother sad?`,
        options: 'was, were'
      }
    },
    {
      type: 'group',
      label: 'Helping vs Main verbs',
      commonData: {
        title: 'Drag and drop the below verbs in the respective boxes.',
        types: ['Helping Verb', 'Main Verb']
      },
      data: [
        [`am, is, are, was, can, could`, `walk, laugh, play, cook, sleep, eat`],
        [
          `has, have, had, do, does, would`,
          `feel, think, hear, smell, stand, jump, smile`
        ],
        [
          `will, may, might, shall, should`,
          `dance, sing, catch, drive, wait, buy, pay`
        ]
      ],
      id: '800'
    },
    {
      id: `has-have`,
      label: 'Has vs Have',
      type: 'fillupOptions',
      data: {
        title: "Fill in the blank with 'has' or 'have'.",
        text: `*Has* she been invited?
I *have* heard that story before.
*Have* you seen Gopal?
She *has* a new bicycle.
We don't *have* tuition on Sundays.
Just one person in the crowd *has* seen the accident.
Do you *have* exam tomorrow?
Siva *has* watered the plant.
John and Akbar *have* been waiting for you.
He *has* some oranges.`,
        options: 'has, have'
      }
    },
    {
      id: 'do-does',
      label: 'Do vs Does',
      type: 'fillupOptions',
      data: {
        title: "Fill in the blank with 'do' or 'does'.",
        text: `She *does* not revise her lesson today.
Where *do* you work?
*Does* Kumar drink milk everyday?
Please *do* your homework.
What *does* your brother do?
Siva and Ramya *do* not like coffee.
John *does* came early for the game.
Why are you expecting me to *do* the homework on a Sunday?
Why mom *does* all the work?
*do* you want to dance?`,
        options: 'do, does'
      }
    },
    {
      id: 'can-could',
      label: 'Can vs Could',
      type: 'fillupOptions',
      data: {
        title: "Fill in the blank with 'can' or 'could'.",
        text: `Penquins *can* swim very fast.
I *could* run very fast when I was younger.
It's snowing, so we *can* not go out now.
Yesterday we *could* not play.
*Could* you play the piano when you were seven?
*Can* I ride your cycle?
He has a broken leg, so he *can* not walk for a few days.
I *could* not sleep last night.
We came as fast as we *could*.
Why are you sad? Is there anything I *can* do for you?`,
        options: 'can, could'
      }
    },
    {
      label: 'Classify Helping vs Main Verb',
      type: 'classifySentence',
      editable: true,
      commonData: {
        title: 'Classify the underlined word as main or helping verb.',
        types: ['Main Verb', 'Helping Verb']
      },
      data: [
        [
          `His house *has* no TV.
Do you *have* a glass of water.
She has *had* her dog since 2019.
My parents *had* fish for dinner.
Did you *have* a shower this morning?
We *have* to hurry.`,
          `I *have* had this computer for 3 years.
Lisa *has* been singing for 10 minutes now.
Frank *had* played tennis yesterday.
*Have* you joined the school?`
        ],
        [
          `I *am* hungry.
We *are* happy for you.
The floor *is* wet.
Please *do* your homework.
I *have* five mangoes.`,
          `I *have* never seen a lion before.
I *do* trust you, but close the book next to you, while writing the exam.
You *should* definitely see this movie.
We *are* having breakfast.
I *can't* run fast.`
        ],
        [
          `Raju and Anil *are* friends.
I *am* not a rabbit.
I cannot *be* here by night.
He has *done* the exercise.
He has *been* kind to me.`,
          `These children *are* playing in the garden.
Ships *are* sailing in the sea.
*Can* I ride your cycle?
Birds *are* flying in the sky.
I cannot *be* silent anymore.`
        ]
      ],
      id: 'classify'
    }
  ]
};
