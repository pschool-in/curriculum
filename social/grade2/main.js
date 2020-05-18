const list =[
  {type: "match", label: "Match Smiley", data: {
    qText: 'Match smiley with emotion.',
    list: [['🙂', 'Happy'], ['😆', 'Laugh'], ['😢', 'Sad'], ['😠', 'Angry'], ['😮', 'Surprise'], ['😱', 'Fear']]
  }},
  {
    label: 'National and Religious Festivals',
    type: "group",
    data: {
      label: 'National vs Religious Festivals',
      types: [
        {
          name: "National",
          text: `Independence Day, Republic Day, Gandhi Jayanthi, Children's Day, Teacher's Day`,
        },
        {
          name: "Religious",
          text: `Ramzan, Bakrid, Christmas, Easter, Diwali, Shivratri, Holi`,
        },
      ],
    }
  },
  {
    label: "National Festivals - Month",
    type: "matchByDragDrop",
    data: {
      isPractice: false,
      title: "Drag and drop to match National festivals with months.",
      styles: {
        fontSize: "1.3rem",
        dashWidth: 80,
      },
      text: `Independence Day → ~August~
      Republic Day → ~January~
      Gandhi Jayanthi → ~October~
      Children's Day → ~November~
      Teacher's Day → ~September~`
    },
  },
  {
    label: 'Transport- MCQ',
    type: 'mcq',
    data: {
      title: 'Multiple Choice Questions',
      questions: [
          {
              qText: ` _________ helps to take sick people to hospital.`,
              options: `An ambulance, An engine, A car `
          },
          {
              qText: `A _________ helps us to put out ﬁre.`,
              options: `fire engine, police car, bulldozer`
          },
          {
              qText: ` A _________ moves on a track and have an engine`,
              options: `train, car, boat`
          },
          {
              qText: ` A _________  has two wheels and a handle.`,
              options: `bicycle, car, auto-rickshaw`
          },
           {
              qText: ` Row, row, row your _________ , gently down the stream.`,
              options: `boat, bus, rocket`
          },
           {
              qText: ` _________  is the fastest means of transport to reach far-off places.`,
              options: `Aeroplane, Car, Boat`
          }
      ] 
    }
  },
  {
    label: "People and Jobs",
    type: "matchByDragDrop",
    data: {
      isPractice: false,
      title: "Drag and drop to match People and Jobs.",
      styles: {
        fontSize: "1rem",
        dashWidth: 60,
      },
      text: `A ~fireman~ puts out fire.
A ~butcher~ cuts meat and sell.
A ~policeman~ prevents crime.
A ~veterinary doctor~ looks after sick animal.
A ~postman~ delivers letter to our house.
A ~tailor~ makes clothes`,
    },
  }
]