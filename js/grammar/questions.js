export default {
  label: 'Questions',
  id: 'questions',
  pdf: 'questions-1.pdf',
  notes:
    'mcq: Find the right question for the given statement. One more activity on fill by drag drop',
  list: [
    {
      type: 'sequence',
      label: 'Jumbled Sentence',
      data: {
        title: 'Connect the blocks to form meaningful questions.',
        text: `what is your name
how old are you
can I help you
how are you feeling
what is the matter
what is your favorite snack
where is the restroom
can you help me
where is your mother
can you drive a car`
      },
      id: 'sentence'
    },
    {
      label: 'Fillup',
      type: 'fillupOptions',
      id: 'fillup',
      data: {
        title: 'Fill in the blanks with the right word.',
        text: `*What* is your name?
*How* old are you?
*How* are you feeling?
*What* is the matter?
*What* is your favorite snack?
*Where* is the restroom?
*Where* is your mother going?
*How* is your health?
*Where* is your home?`,
        options: 'What, How, Where'
      }
    },
    {
      type: 'fillupOptions',
      label: 'What / Why/ Where',
      data: {
        text: `*What* is your name?
*Where* is your house?
*What* do you want?
*Why* are you crying?
*Where* is your book?
*What* is your age?
*Why* did you come late?
*Where* is he sitting?
*What* is the time now?
*Why* are you standing here?`,
        options: 'What, Where, Why'
      },
      id: 'fillup-2'
    },
    {
      id: 'mcq',
      label: 'Choose the best question',
      type: 'mcq',
      data: {
        title: 'Choose the best question for the given statement.',
        questions: [
          {
            qText: 'I am five years old.',
            options: 'How old are you?, What old are you?, When old are you?'
          },
          {
            qText: 'I live near the river.',
            options: 'Where do you live?, How do you live?, When do you live?'
          },
          {
            qText: 'It is raining outside.',
            options: 'Why are you wet?, When are you coming?, How is the rain?'
          },
          {
            qText: 'I went to school by bus.',
            options:
              'How did you go to school?, Did you go to school?, Where is the bus?'
          },
          {
            qText: 'I had a great day.',
            options:
              'How was your day?, What did you do today?, What made your day?'
          }
        ]
      }
    },
    {
      id: 'find-right-word',
      label: 'Fill up',
      type: 'classifySentence',
      data: {
        title: 'Fill up the blanks by selecting the right option.',
        types: [
          {
            name: 'Where',
            text:
              '_____ is your homework?\n_____ is your house?\n_____ is your ball?'
          },
          {
            name: 'What',
            text:
              "_____ is your name?\n_____ is the time?\n_____ makes you happy?\n_____ is your sister's age?"
          },
          {
            name: 'When',
            text:
              '_____ do you come?\n_____ is your birthday?\n_____ will your father come here?'
          }
        ]
      }
    }
  ]
};
