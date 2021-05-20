export default {
  label: 'Pronoun',
  id: 'pronoun',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Pronouns',
        text: [
          `Pronoun are words used in place of nouns, to avoid repetition of nouns.`,
          '# Personal Pronouns',
          `They are used to indicate a specific or group of people or things.`,
          `A personal pronoun can be used as subject or object in a sentence. In the below word pairs, the first one is used as subject and the second one is used as object.`,
          {
            type: 'hilight',
            text: `I , me
                we, us
                she, her
                he, him
                they, them`
          },
          `'You' will be used as both subject and object.`,
          '# Possesive Pronouns',
          `They are used to show ownership or possession. eg: mine, yours, his, hers, ours, theirs`,
          `# Demonstrative Pronouns`,
          `They are used to point at something. eg: this, that, these, those, their`,
          '# Reflexive Pronouns',
          `It is used as an object that refers back to the subject. eg: myself, yourself, herself, himself, itself`,
          {
            type: 'hilight',
            text: `She herself cooked the food.
            I myself saw him.
            He himself cut the cake.`
          },
          `# Emphatic Pronouns`,
          `They are used to put emphasis on the subject. So usually they follow the subject.`,
          {
            type: 'hilight',
            text: `He cuts himself while chopping the vegetables.
            I don't trust myself in tough times.`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match Related Pronouns',
      id: 'complete-word',
      data: {
        lang: 'en',
        title: 'Match the pronouns that have similar meaning.',
        text: `I, Me
        He, Him
        She, Her
        They, Them
        We, Us`
      }
    },
    {
      id: 'i-me',
      label: 'I vs Me',
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with 'I' and 'me'.",
        text: `Could you pass *me* the salt?
*I* don't want to go out now.
Vinoth and *I* are going to the movies.
Am *I* invited?
She gave *me* some coins.`,
        options: 'I, me'
      }
    },
    {
      id: 'we-us',
      label: 'We vs Us',
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with 'we' and 'us'.",
        text: `Let *us* cross the road.
Can *we* all go to the swimming pool tomorrow?
*We* were talking to the principal.
Thank you for driving *us* to the market.
The teacher asked *us* to form a circle.`,
        options: 'we, us'
      }
    },
    {
      id: 'she-her',
      label: 'She vs Her',
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with 'she' and 'her'.",
        text: `I gave *her* the books.
*She* doesn't have a pen.
*She* is so clever.
If I tell Roshima, *she* might tell Sunitha.
I will talk to *her* about this issue.`,
        options: 'she, her'
      }
    },
    {
      id: 'they-them',
      label: 'They vs Them',
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with 'they' and 'them'.",
        text: `We asked *them* to keep the door open.
If you build it, *they* will come.
*They* are very nice people.
What do *they* want?
I have lost my keys. I can't find *them* anywhere.`,
        options: 'they, them'
      }
    },
    {
      id: 'he-him',
      label: 'He vs Him',
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with 'he' and 'him'.",
        text: `If you see David, give *him* these books.
Does *he* want some coffee?
*He* is a wise man.
Did Mohan get the promotion *he* wanted?
I didn't recognize *him*.`,
        options: 'he, him'
      }
    },
    {
      label: 'Pronouns',
      type: 'fillupOptions',
      data: {
        text:
          "Saranya likes to cook. Everyone likes *her (his) * cooking. \nKumar and his brother enjoy watching action films. This movie is for *them(they) *. \nDo you like movies? Please join *us (them) * at the theatre. \nI will meet Sangeetha tomorrow. I am meeting *her (him)* for the first time. \nYou left *your (yours) * text books on the table. \nI want to know *who (whom)* is going to play as villain. \nPlease eat whatever you want. The choice is *yours (your)*. \nRekha told *him (his)* about the celebration next week. \nRahul cannot come with *us (them)* today. \nShe grows Jasmine on her terrace. *They (Them)* smell sweet. \nPeacock is our national bird. *It (They)* has beautiful feathers. \nRam will visit *his (her) * grandmother this week. \nDon't walk fast. *We (Us)* feel tired. \nEvery Sunday, we meet *them (they)* at the sea shore. "
      },
      id: '200'
    },
    {
      type: 'classifySentence',
      label: 'Reflexive vs Emphatic Pronouns',
      data: {
        title:
          'Classify the below sentences as Reflexive and Emphatic Pronouns.',
        types: [
          {
            name: 'Reflexive',
            text: `He cuts *himself* while chopping the vegetables.
I don't trust *myself* in tough times.
We blame *ourselves* for the accident.
He was speaking to *himself*.
Be careful. You may hurt *yourself*.`
          },
          {
            name: 'Emphatic',
            text: `She *herself* cooked the food.
I *myself* saw him.
He *himself* cut the cake.
We will watch the game *ourselves*.
We saw the President *himself*.`
          }
        ]
      },
      id: 'reflexive-emphatic'
    }
  ]
};
