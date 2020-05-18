const list = [
  {
    label: "Force - Reading",
    type: "passage",
    data: {
      title: `Force: Push and Pull`,
      text: `In everyday life, we push or pull things to move them. A push or pull is called force. This force helps us to do many things. It can make an object move. It can  stop a moving object. It can change the shape of an object, change the speed of the moving object and change the size of the object. There are different types of forces that act on a body.
      When you throw a ball up, no matter how high it goes, it is sure to come down. This is because of gravitational force. This force attracts objects to the center of the earth.
      When two objects touch each other, a special type of force develops between them. This special force is called friction. Friction slows down movements. When friction is very less, things move easily. When frictions is more, it becomes difficult to move things. A wet floor is slippery because there is very little friction. Friction makes it possible for you to write. You cannot hold a pencil in your hand without friction. It would slip out from your hands. The pencil cannot make a mark on the paper without friction.`,
    },
  },
  {
    label: "Force - MCQ",
    type: "mcq",
    data: {
      title: "Multiple Choice Questions",
      questions: [
        {
          qText: `_________ helps to pull big and heavy things?`,
          options: `engine, computer, television`,
        },
        {
          qText: `Kicking a ball is an example of a _________`,
          options: `push, pull, speed`,
        },
        {
          qText: `A ball is pushed to the top of a hill. When it rolls down, it will _____________`,
          options: `go faster, go slower, stop`,
        },
        {
          qText: `Picking up a ball is an example of _______`,
          options: `pull, push, stretch`,
        },
        {
          qText: `When I ____________________, I move it away from me.`,
          options: `kick a ball, pull a chair`,
        },
        {
          qText: `A push or pull cannot change an object's _________ .`,
          options: `weight, direction, shape `,
        },
      ],
    },
  },
  {
    label: "Push and Pull - Classify",
    type: "group",
    data: {
      title: "Drag and drop: Classify push and pull.",
      types: [
        {
          name: "Push",
          text: `kicking a ball, Switching on light, peddling cycle `,
        },
        {
          name: "Pull",
          text: `putting on gloves, lifting weights`,
        },
      ],
    },
  },
  {
    label: "Water, Ice & Vapor",
    type: "matchByDragDrop",
    data: {
      isPractice: false,
      title: "Drag and drop to complete the below sentences.",
      styles: {
        fontSize: "1rem",
        dashWidth: 60,
      },
      text: `If you ~heat~ water to a temperature of ~100 °C~, it ~evaparates~ to form water vapour.
      If you ~cool~ water to a temparature of ~0 °C~, it ~freezes~ to form ice.`,
    },
  },
  {
    label: 'Lighter vs Heavier',
    type: "group",
    data: {
      title: "Lighter vs Heavier",
      types: [
        {
          name: "Lighter",
          text: `leaves, ball, butterfly, balloon, coffee cup, feather, pencil `,
        },
        {
          name: "Heavier",
          text: `tree, bat, cycle, house, car, elephant`,
        },
      ],
    },
  },
  {
    label: 'Summer vs Winter',
    type: "group",
    data: {
      label: 'Summer vs Winter',
      types: [
        {
          name: "Summer",
          text: `cotton clothes, sun-glass, cool-drinks, ice-cream`,
        },
        {
          name: "Winter",
          text: `woolen clothes, umbrella, sweater, raincoats`,
        },
      ],
    }
  },
  {
    label: "Seasons - MCQ",
    type: "mcq",
    data: {
      title: "Multiple Choice Questions",
      questions: [
        {
          qText: `India gets lot of rain during ________.`,
          options: `monsoon, winter, summer`,
        },
        {
          qText: `We need to drink lot of water during ______.`,
          options: `summer, winter, monsoon`,
        },
        {
          qText: `What season India has during May month?`,
          options: `Summer, Winter, Monsoon, Spring`,
        },
        {
          qText: `What season India has during January month?`,
          options: `Winter, Monsoon, Spring, Summer`,
        },
        {
          qText: `________ helps in predicting weather.`,
          options: `Satellites, Rockets, Aeroplane, Astrology`,
        },
      ],
    },
  },
  {
    label: 'Planets',
    type: "sorting",
    data: {
      title: "Sort the planets based on its distance from sun. (Nearest planet at top)",
      text: `Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune`,
    },
  }
]