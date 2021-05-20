const writing = {
  label: "Social",
  id: "social",
  img: "social",

  list: [
    {
      label: "People and Workplace",
      type: "matchByDragDrop",
      id: "3-people-workplace",
      data: {
        isPractice: false,
        title: "Drag and drop to match People and workplace.",
        styles: {
          fontSize: "1rem",
          dashWidth: 80,
        },
        text: `Doctor → *Hospital*
    Teacher → *School*
    Cashier → *Bank* 
    Chef → *Restaurant*
    Lawyer → *Court*
    Photographer → *Studio*`,
      },
    },
    {
      label: "People and Tools",
      type: "matchByDragDrop",
      id: "3-people-tools",
      data: {
        isPractice: false,
        title: "Drag and drop to match People and the tools they use.",
        styles: {
          fontSize: "1rem",
          dashWidth: 80,
        },
        text: `Doctor → *Stethoscope*
          Painter → *Brush*
          Fisherman → *Net* 
          Photographer → *Camera*
          Butcher → *Knife*
          Farmer → *Plough*
          Woodcutter → *Axe*`,
      },
    },
    {
      label: "Profession - MCQ",
      type: "mcq",
      id: "3-profession-mcq",
      data: {
        title: "Multiple Choice Questions",
        questions: [
          {
            qText: `________ cuts the meat and sells it in their shop.`,
            options: `Butcher,Barber,Plumber,Chef`,
          },
          {
            qText: `_________ makes wooden doors, windows and furnitures.`,
            options: `Carpenter,Mechanic,Waiter,Mason`,
          },
          {
            qText: `We go to _________ when we have toothache.`,
            options: `Dentist,Doctor,Nurse, Chemist`,
          },
          {
            qText: `__________ prevents crime.`,
            options: `Police, Lawyer, Fireman`,
          },
          {
            qText: `__________ drives a bus.`,
            options: `Driver, Pilot, Captain`,
          },
          {
            qText: `Who is the backbone of our country?`,
            options: `Farmer, Lawyer, Scientist, Police`,
          },
          {
            qText: `Sherlock Holmes is a famous _________ in stories.`,
            options: `Detective, Actor , Teacher, Police`,
          },
        ],
      },
    },
    {
      label: `What festival brings?`,
      type: "group",
      id: "3-festival-brings",
      data: {
        title: "What festival brings?",
        types: [
          {
            name: "Brings",
            text: `joy, celebrations, blessings, happiness, greetings`,
          },
          {
            name: "Doesn't Bring",
            text: ` worry, jealousy, hatred`,
          },
        ],
      },
    },
    {
      label: "Road Manners - Reading",
      type: "passage",
      id: "3-road-manners-passage",
      data: {
        title: `Road Manners`,
        text: `Zebra Crossing is the black and white lines on the road. It is the safest place to cross the road. They are also known as pedestrian crossing. Pedestrians are people who walks on the road. 
  At zebra crossing, we have to wait for green signal to cross the road. At some places, traffic police will help you to cross the road.
  Apart from zebra crossings, subways and footbridges are provided on big roads, where there is heavy traffic. These are present only in big cities and towns. At small towns and villages, it is our responsibility to cross the road with care.
  We should not rush to cross the road. We have to wait till the road is clear. We have to be patient for our own safety. Never cross the road at a corner or curve, because we cannot see the approaching vehicle.
  We have to cross road by walking and should not run. If we run, we may fall. 
  We have to follow some good habits when travelling in bus. Always follow the queue while entering or leaving the bus. Don't rush or push other people while getting into the bus. While waiting for bus, stand on the pavement and don't block the road. Do not play at the bus stop. Never board or alight from the bus when it is moving. Shouting and making noise is definitely bad manners, and it will distract the driver. If you are sitting in window seat, do not put any part of your body outside. If you are travelling by standing always hold the handrail.
  It is always cool to have good manners. We can feel proud about ourself, and others also will have high opinion on us.`,
      },
    },
    {
      label: "Road Manners - MCQ",
      type: "mcq",
      id: "3-road-manners-mcq",
      data: {
        title: "Multiple Choice Questions",
        questions: [
          {
            qText: `Who are pedestrians?`,
            options: `people who walk on the road, people who cross the road, people riding bicycle, people who are waiting for bus.`,
          },
          {
            qText: `We can go forward when the signal turns ______`,
            options: `green, orange, red`,
          },
          {
            qText: `True or False: It is safe to run while crossing the road, because we can cross the road fast.`,
            options: `False, True`,
          },
          {
            qText: `True or False: It is alright to cross the road at the curve`,
            options: `False, True`,
          },
          {
            qText: `We should not make noise inside bus because _________`,
            options: `it will disturb the driver, friends will not like it, we will get throat pain`,
          },
          {
            qText: `True or False: It is alright to put our hand outside the window and experience the wind.`,
            options: `False, True`,
          },
        ],
      },
    },
  ],
};

export default writing;
