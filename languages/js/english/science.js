const science = {
  label: "Science",
  id: "science",
  img: "science",
  list: [
    {
      id: "tree",
      label: "Parts of Tree",
      type: "dragAndDrop",
      data: {
        img: "img/dragDrop/tree.jpg",
        title: "Parts of Tree",
        width: 320,
        height: 396,
        wordWidth: 50,
        words: [
          {
            word: "leaf",
            x: 20,
            y: 30,
          },
          {
            word: "branch",
            x: 190,
            y: 230,
          },
          {
            word: "twig",
            x: 20,
            y: 220,
          },
          {
            word: "fruit",
            x: 210,
            y: 5,
          },
          {
            word: "flower",
            x: 240,
            y: 35,
          },
          {
            word: "trunk",
            x: 70,
            y: 240,
          },
          {
            word: "root",
            x: 40,
            y: 280,
          },
          {
            word: "roothairs",
            x: 260,
            y: 360,
          },
        ],
      },
    },
    {
      id: "water-cyle",
      label: "Water Cycle",
      type: "dragAndDrop",
      data: {
        img: "img/dragDrop/water-cycle.jpg",
        title: "Water Cycle",
        width: 400,
        height: 218,
        wordWidth: 80,
        words: [
          {
            word: "collection",
            x: 20,
            y: 190,
          },
          {
            word: "precipitation",
            x: 10,
            y: 80,
          },
          {
            word: "evaporation",
            x: 300,
            y: 100,
          },
          {
            word: "condensation",
            x: 160,
            y: 5,
          },
        ],
      },
    },
    {
      id: "fish",
      label: "Parts of a Fish",
      type: "dragAndDrop",
      data: {
        img: "img/dragDrop/fish.jpg",
        title: "Parts of a Fish",
        width: 380,
        height: 280,
        wordWidth: 50,
        words: [
          {
            word: "mouth",
            x: 10,
            y: 190,
          },
          {
            word: "eye",
            x: 10,
            y: 70,
          },
          {
            word: "gills",
            x: 30,
            y: 20,
          },
          {
            word: "scales",
            x: 150,
            y: 30,
          },
          {
            word: "fin",
            x: 210,
            y: 250,
          },
          {
            word: "tail",
            x: 280,
            y: 40,
          },
        ],
      },
    },
    {
      id: "flower",
      label: "Parts of a Flower",
      type: "dragAndDrop",
      data: {
        img: "img/dragDrop/flower.jpg",
        title: "Parts of a Flower",
        width: 380,
        height: 336,
        wordWidth: 50,
        words: [
          {
            word: "petal",
            x: 30,
            y: 100,
          },
          {
            word: "stigma",
            x: 50,
            y: 40,
          },
          {
            word: "style",
            x: 30,
            y: 170,
          },
          {
            word: "sepal",
            x: 40,
            y: 250,
          },
          {
            word: "ovary",
            x: 100,
            y: 300,
          },
          {
            word: "receptacle",
            x: 280,
            y: 290,
          },
          {
            word: "anther",
            x: 280,
            y: 20,
          },
          {
            word: "filament",
            x: 320,
            y: 200,
          },
        ],
      },
    },
    {
      id: "skeleton",
      label: "Skeletal System",
      type: "dragAndDrop",
      data: {
        img: "img/dragDrop/skeleton.jpg",
        title: "Skeletal System",
        width: 350,
        height: 448,
        wordWidth: 70,
        words: [
          {
            word: "vertebrae",
            x: 70,
            y: 160,
          },
          {
            word: "pelvis",
            x: 70,
            y: 200,
          },
          {
            word: "skull",
            x: 60,
            y: 30,
          },
          {
            word: "ribs",
            x: 60,
            y: 110,
          },
          {
            word: "femur",
            x: 70,
            y: 300,
          },
        ],
      },
    },
    {
      id: "organs",
      label: "Organs",
      type: "dragAndDrop",
      data: {
        img: "img/dragDrop/organs.jpg",
        title: "Match the Organs",
        width: 304,
        height: 354,
        wordWidth: 60,
        words: [
          {
            word: "heart",
            x: 230,
            y: 140,
          },
          {
            word: "liver",
            x: 10,
            y: 160,
          },
          {
            word: "brain",
            x: 50,
            y: 10,
          },
          {
            word: "lungs",
            x: 230,
            y: 70,
          },
          {
            word: "kidney",
            x: 0,
            y: 210,
          },
          {
            word: "stomach",
            x: 220,
            y: 220,
          },
          {
            word: "small-intestine",
            x: 0,
            y: 250,
          },
          {
            word: "large-intestine",
            x: 210,
            y: 270,
          },
        ],
      },
    },
    {
      label: "Force - Reading",
      type: "passage",
      id: "3-force-passage",
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
      id: "3-force-mcq",
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
      id: "3-push-pull",
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
      id: "3-water-ice-vapor",
      data: {
        isPractice: false,
        title: "Drag and drop to complete the below sentences.",
        styles: {
          fontSize: "1rem",
          dashWidth: 60,
        },
        text: `If you *heat* water to a temperature of *100 °C*, it *evaporates* to form water vapour.
          If you *cool* water to a temparature of *0 °C*, it *freezes* to form ice.`,
      },
    },
    {
      label: "Lighter vs Heavier",
      type: "group",
      id: "3-lighter-heavier",
      data: {
        title: "Lighter vs Heavier",
        types: [
          {
            name: "Lighter",
            text: `leaves, plastic ball, butterfly, balloon, coffee cup, feather, pencil `,
          },
          {
            name: "Heavier",
            text: `tree, bat, cycle, house, car, elephant`,
          },
        ],
      },
    },
    {
      label: "Seasons - MCQ",
      id: "3-seasons-mcq",
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
      label: "Planets",
      type: "sorting",
      id: "3-planets-order",
      data: {
        title:
          "Sort the planets based on its distance from sun. (Nearest planet at top)",
        text: `Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune`,
      },
    },
    {
      label: "Solar System - Fillup",
      id: "4-solor-system-fillup",
      type: "matchByDragDrop",
      data: {
        isPractice: false,
        title: "Drag and drop the words at proper places.",
        styles: {
          fontSize: "1rem",
          dashWidth: 70,
        },
        text: `*Sun* is the center of solar system.
  *Jupiter* is the biggest planet.
  *Saturn* has a big ring around it.
  *Venus* is the bright and hottest planet.
  *Uranus* is the coldest planet.
  *Pluto* is a dwarf planet.`,
      },
    },
  ],
};

export default science;
