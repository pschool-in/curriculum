export default {
  label: 'Verb',
  id: 'verb',
  list: [
    {
      type: 'selectWord',
      label: 'Identify action word (Verb)',
      id: 'select-action-word',
      commonData: {
        title: 'Select the action word in the below sentence.'
      },
      data: [
        `Subbu is *watching* TV.
The cat is *hiding* under the table.
The dog is *barking.*
The cat is *chasing* the mouse.
Tom is *bathing.*
My father is *washing* clothes.
My mother is *watering* the plants.
My sister is *sleeping.*
I am *reading* a book.
I am *studying.*`,

        `My aunt is *cooking.*
My friends are *playing.*
My uncle is *driving* the car.
Ashok is *doing* his homework.
Seema is *making* dinner for her family.
He is *living* in the next street.
They are *eating* lunch.
He is *preparing* for the trip.
They are *having* their dinner in the kitchen.
I like *walking* back from school.`,

        `The kid is *asking* for more chocolates.
Ramya is *doing* her regular work.
Arif is *having* his breakfast.
Her brother is *drawing* some nice pictures.
I found her *sleeping* in the classroom.
My dad is *driving* our old car.
The mountain train is *moving* very slowly.
We are *living* near the school.
It is *raining* outside.
Tom is *watching* his favorite movie.`
      ]
    },
    {
      type: 'classifySentence',
      label: 'Identify Tense',
      id: 'find-tense',
      commonData: {
        title: 'Read the below sentence and find its tense.',
        types: ['Present', 'Past', 'Future']
      },
      data: [
        [
          `Kumar is asking a question.
I am watching TV.
Anand is not feeling well.
Ramya is a obedient girl.`,
          `He helped his mum last Sunday.
Sita was watching some cartoons.
He was a famous actor.`,
          `Ramya will go to the movie tomorrow.
I will not do this mistake again.
In future, the temperature will increase due to global warming.`
        ],
        [
          `The sun rises in the east.
Honesty is the best policy.
Every Sunday is a holiday.`,
          `Gandhiji asked everyone to speak the truth.
My old school was not so good.
I already had my breakfast.
I went outside to check whether it was raining.`,
          `I wish, I will become the President of my country.
I will be more careful next time.
What will be the time, three hours from now?`
        ],
        [
          `I am going to meet my best friend.
Please come in.
What is your plan for today?`,
          `Last summer, we went to Ooty.
Ashoka was a great king.
I was very cute, when I was a baby.`,
          `We will make some better plans.
I will help you to complete the project.
We will have reached home before you come.
I will see you later.`
        ]
      ]
    },
    {
      label: 'Subject-Verb Agreement',
      type: 'fillupOptions',
      id: 'fillup',
      data: [
        `Mangoes and bananas *are (is) * available in summer.
Ravi *helps (help) * his mother to fetch water every day.
There *are (is) * lot of toys on the roof.
The latest news *is (are) * not encouraging.
Ramya *wants (want) * to be a teacher.
My cousins *live (lives)* in Chennai.
Sarah *listens (listen)* to music all the time.
One of the dogs *barks (bark)* all night long.
Sarath and Raj *are (is)* the best players in the team.
The quality of the candles *is (are) * poor.`,

        `This book *is (are)* a work of fiction.
Janaki and her friends *were (are) * absent yesterday.
Maths *is (are)* my favorite subject.
Dogs *are (is, am)* friendly animals.
Where *is (are)* your house?
When *is (are)* the next train to Mumbai?
Ramya and her brother *are (is)* coming.
Either me or my sister *is (are)* coming for the chess game.
None of the apples *is (are)* good.
Nobody *knows (know)* the truth.`,

        `One of the books *has (have)* been missing.
Bread and butter *is (are)* his favorite breakfast.
The horses *gallop (gallops)* across the field.
Some of my luggage *was (were)* lost.
The movie *takes (take)* about 2 hours to watch.
He *doesn't (don't)* know the answer.
He *didn't (don't, doesn't)* answer my call yesterday.
I *will (would)* be more careful next time.
Everyone *has (have)* a reason to complain.
One of my sisters *is (are)* living in Mumbai`
      ]
    }
  ]
};
