export default {
  label: 'Conjunction',
  id: 'conjunction',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Conjunction - Notes',
      data: {
        title: 'Conjunction',
        text: `A conjuction is a word that is used for joining other words, phrases or sentences.
              # and, or, but
              'and' means 'also', 'added to'
              'or' means  'any one of the two'
              'but' is used to say something opposite.
              {"type": "hilight", "text": "I like coffee and tea.\\nI like to have coffee or tea.\\nI don't like coffee, but I like tea."}
              # So vs Because
              'Because' is used to explain the reason for the first event.
              'So' is used to explain the result of the first event.
              {"type": "hilight", "text": "I cannot go out because it is raining.\\nIt was raining so I got wet."}
              # Conjunction Pairs
              Sometime conjunctions are used in pairs: either/or, both/and, whether/or, neither/nor, not only/but also
              {"type": "html", "text": "You can <em>either</em> call me <em>or</em> message me.<br> He was <em>both</em> honest <em>and</em> talented.<br> I didn't know <em>whether</em> he will come <em>or</em> not.<br> He is <em>neither</em> tall <em>nor</em> short.<br> <em>Not only</em> he came late, <em>but also</em> he forgot the gift."}
              `
      }
    },
    {
      label: 'Find Conjunction',
      type: 'selectWord',
      slug: 'select-word',
      editable: true,
      commonData: {
        title: 'Click on the word in the sentence, which is a conjunction.'
      },
      data: [
        `I love to swim *and* play tennis.
We may go to the movies *or* to the theme park.
John *and* Peter are good basketball players.
I have a raincoat *but* I forgot to bring it.
I was on leave *because* I had a headache.
He was afraid of the dog *so* he ran away.
Don't open your mouth *unless* I ask you to speak.
Let me know *if* you want to go.
She is short *whereas* her brother is tall.
I ran fast, *yet* I came last.`,

        `We go to the nearby park *whenever* my cousins visit us.
She is rich *but* unhappy.
Work hard *or* you will fail.
He did not study well *because* he was lazy.
Children like to play cricket *or* football.
We cannot go home *unless* we get the permission.
I can stay here *until* you ask me to leave.
Please do not call me *unless* it is an emergency.
He wears a hat *whenever* he goes outside.
Dad goes fishing *whenever* he's free.`,

        `I am glad to help you *whenever* you need me.
I usually don't like movies *though* I like cartoons.
You can eat an apple *if* you get hungry before dinner.
I’m staying home *since* it started raining.
I liked him *so* I helped him.
Water *and* oil do not mix.
*Before* we left home, I had my breakfast.
We reached home *before* the rain came.
*As* I opened my eyes, I saw a strange animal.
I waited for him *until* he arrived.`
      ],
      id: 'select-word'
    },
    {
      id: 'because-so',
      label: 'So vs Because',
      type: 'fillupOptions',
      commonData: {
        title: 'Click on the blanks and pick the correct conjunction.',
        options: 'because, so'
      },
      data: [
        `I cannot go out *because* it is raining.
He missed the bus *because* he came late.
Priya was sick *so* she consulted a doctor.
He came late *so* he missed the bus.
She had no money *so* she did not buy the book.
She did not buy the book *because* she had no money.
The cat was hungry *so* it ate a fish.
I was on leave *because* I had a headache.
He was afraid of the dog *so* he ran away.
She went home early *because* she had to attend a function.`,

        `The rat ran fast *because* a cat was chasing it.
He drank cold water *so* he got cough.
He missed his purse *so* he was sad.
I was late *because* there was a heavy traffic.
He lost the key *so* he couldn't open his room.
I worked hard *so* I got promotion.
Tom left the class *because* he was sick.
The classroom was noisy *because* the teacher was away.
I missed the bus *so* I took a taxi.
He was angry *because* I made fun of him.`,

        `She didn't have breakfast, *so* she is feeling hungry.
His father is a rich man, *so* he can buy expensive dress.
We didn't go to the party *because* they didn't invite us.
They weather is hot *so* the kids are swimming.
The door was open *so* I closed it.
We didn't swim *because* the water wasn't clean.
I didn't complete the homework *because* I forgot about it.
She doesn't like him *because* he isn't honest.
The water wasn't clean *so* we didn't swim.
My mom quit her job *so* she is looking for a new job.`
      ]
    },
    {
      id: 'and-or-but',
      label: 'And, Or, But',
      type: 'fillupOptions',
      data: {
        title: 'Click on the blanks and pick the correct preposition.',
        text: `I wanted to wash my shoes, *but* I forgot to do it.
I bought a sandwich *and* coffee for lunch.
Here name is Priya *or* Maya.
She travels abroad once *or* twice a year.
She has a lot of talent, *but* she is very lazy.
My mom is either in kitchen *or* in garden.
I spent an hour *or* so cleaning my room.
He switched off the light *and* went to bed.
He has a ball *but* not a bat.
Please bring a paper *and* a pencil.`,
        options: 'and, or, but'
      }
    },
    {
      id: 'match-pairs',
      type: 'match',
      label: 'Conjunction Pairs',
      data: {
        title: 'Match the conjunction pairs.',
        text: `either, or
both, and
neither, nor
not only, but also`
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at the right blanks.',
        styles: {
          dashWidth: 100
        },
        text: `Either dad *or* mom will come to pick me.
I am *both* tired and hungry.
I have no idea *whether* she will like the dress or not.
The coffee was *neither* hot *nor* cold.
Not only it was raining *but also* the power went off.`
      }
    }
  ]
};
