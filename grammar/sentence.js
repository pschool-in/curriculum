export default {
  label: 'Sentence',
  id: 'sentence',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading ',
      data: {
        title: 'Sentence',
        text: [
          `A sentence is usually a group of words connected to form a meaningful idea. Any written text is made up of a collection of sentences. Sentences can be classified into 4 types.`,
          `# Declarative`,
          `A declarative sentence simply makes a statement or expresses an opinion. It other words, it just declares something. This is the most common and frequently used type of sentence. eg: `,
          `I am reading a book.`,
          `# Imperative`,
          `An  imperative sentence gives a command or makes a request. Usually in imperative sentences, the subject is hidden and understood. eg:`,
          `Please sit down.`,
          `# Interrogative`,
          `An interrogative sentence asks a question. eg: `,
          `What is your name?`,
          `# Exclamatory`,
          `An exclamatory sentence is a sentence that expresses great emotion such as excitement, surprise, happiness and anger, and ends with an exclamation point. eg: `,
          `Wow! I really like it!`
        ]
      }
    },
    {
      type: 'classifySentence',
      label: 'Classify Sentence Type',
      id: 'sentence-type',
      commonData: {
        title: 'Classify the below sentences.',
        types: ['Declarative', 'Imperative', 'Interrogative']
      },
      data: [
        [
          `I like coffee.
Two plus two makes four.
London is the capital of England.`,
          `Pass the salt.
Move out of my way!
Get out of here!
Wake up now!`,
          `What is your name?
Why is the sky blue?
How are you today?`
        ],
        [
          `I want to know where he is.
Snow is white.
Ashok was working at night.`,
          `Please join us for dinner.
Complete the homework by tomorrow.
Make sure you come in clean clothes.`,
          `Which is the fastest route to the zoo?
Why did Ramya leave so early?
Is your house ready for visitors?
Have you brushed your teeth today?`
        ],
        [
          `I don't think anyone has met an alien.
        There is no life in any other planets.
        The teacher asked us to form a circle.
She is a very clever girl.`,
          `Stop feeding the dog from the table.
Go straight ahead and take the second left.
Don't eat too much of junk foods.`,
          `Is this your jacket?
Where is your house?
Why are you not interested?`
        ]
      ]
    },
    {
      type: 'sequence',
      label: 'Order Sentence',
      id: 'find-sentence',
      commonData: {
        printTitle: 'Rewrite the words and form proper sentence.'
      },
      data: [
        `we are happy
it is dark
dog is hungry
they are coming
I am a boy
I live in Mumbai
please come in line
we are watching tv
they are playing cricket
I am reading poems`,

        `we have holiday tomorrow
I am drinking water
the dog is barking
the crow is thirsty
the bird is wounded
people are living happily
I have a beautiful pet
he lives in a big city
honesty is the best policy
I am going to Chennai`,

        `I am sitting in sofa
Siva is sleeping in bed
the cat is drinking milk
I am thinking of icecream
sun rises in the east
I am playing with my friends
I have not done my homework
I saw a very beautiful puppy
Ravi is very good in math
English is not my favorite subject`
      ]
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'The declarative sentence is usually used to ',
            options: 'make statements, issue commands, ask questions'
          },
          {
            qText: 'Statements usually end with  _____',
            options: 'a full-stop/period, a question mark, an exclamation mark'
          },
          {
            qText: 'An interrogative sentence usually ends with _______.',
            options: 'a question mark, a full-stop/period, an exclamation mark'
          },
          {
            qText:
              'The subject is usually understood and not mentioned in ________ sentence.',
            options: 'an imperative, an exclamatory, an interrogative '
          },
          {
            qText: 'The most frequent sentence type is',
            options: 'declarative, interrogative, imperative'
          }
        ]
      }
    },
    {
      type: 'fillupOptions',
      label: 'Choose Appropriate Word',
      id: 'fillup',
      data: [
        `John wanted to read *a (an, the)* comic book. *He (She, It) * went to the library. But *the (a, an)* library was closed.
        *I (He, We) * am eight years old. John *is (are, am) * my friend. *He (She, It)* is also eight years old. *We (Us, Me)* go to school together.
        Today, a group of dogs barked at *us (we, he)*. *We (He, She)* ran fast. 
        *They (Them, We)* chased us. *We (Me, Us)*  climbed a tree to escape from *them (us, him)*. `,

        `There *was (were)* a tree in the backyard. It was a mango *tree (plant)*. It had *many (lot)* fruits. They were *very (so)* high. We were not *able (can)* to reach them with *our (my)* hands. 
        We saw a monkey sitting on the tree. It was suprisingly looking *at (to)* us. We said 'hi' to *the (a, an)* monkey. It was impressed. It picked and *threw (throw)* a few mangoes to us. We collected *them (us, it)* happily and left the place.`,

        `Every week we *have (has, had)* Sunday as *our (my, they)* holiday.  Why Sunday is *so (to, do)* special for me?  My father takes *me (I, we)* along for his morning walk.  We walk briskly *to (do, so)* the sea shore. It is *just (first)* ten minutes *from (on, in)* my home.  I can hear the rolling waves of the *sea (see, say)*.  It is so good to watch the waves in the morning *sun (moon, star)* rays.`
      ]
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
        ]
      ]
    }
  ]
};
