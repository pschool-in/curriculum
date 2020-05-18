const list = [ 
  {
    label: 'Brain - Reading',
    type: "passage",
    data: {
      title: `The Brain`,
      text: `Brain is the decision maker of our body. It controls all the movements of the body. It is responsible for human intelligence, memory and imagination.
Brain is the most important organ for us. That is why, we should wear a helmet when you ride a two wheeler.
# Structure of the Human brain.
The brain is kept in a bony case called Skull. Skull is made up of eight immovable bones. The brain is protected by three membranes called menings. The brain is made up of tiny nerve cells called neurons. The brain is the centre of the nervous system.
The brain is made up of three parts.             
1. Cerebrum
2. Cerebellum
3. Medulla oblongata

# Cerebrum
1. It is the largest part of the brain.
2. It is responsible for our memory.
3. We are able to learn languages, understand signs and symbols with the help of cerebrum.
4. The right side of the Cerebrum controls the left side of our body and vice versa.
5. Cerebrum is responsible for intelligence, imagination and reasoning.
# Cerebellum
1. It co-ordinates the movements of the muscles of our body.
2. It helps to maintain the balance of the body.

# Medulla oblongata
1. It is also called the brain stem.
2. It controls the breathing, heart beat and other involuntary muscles.
3. It connects the brain to the spinal cord.`,
    },
  },
  {
    label: "Parts of Brain - Practice",
    type: "dragAndDrop",
    data: {
      img:
        "https://s3.ap-south-1.amazonaws.com/pschool.in/assets/science/brain.png",
      title: `Drag and drop the parts of the brain at appropriate places.`,
      width: 271,
      height: 368,
      wordWidth: 120,
      words: [
        { word: "Cerebrum", x: 20, y: 10 },
        { word: "Medulla oblongata", x: 125, y: 270 },
        { word: "Cerebellum", x: 10, y: 310 },
      ],
    },
  },
  {
    label: "Brain - MCQ",
    type: "mcq",
    data: {
      title: "Multiple Choice Question",
      questions: [
        {
          qText: `What is the largest part of the brain?`,
          options: `Cerebrum, Cerebellum, Medulla oblongata`,
        },
        {
          qText: `Brain is protected by ________.`,
          options: `skull, hair, neurons, spinal cord`,
        },
        {
          qText: `Which part of the brain controls the movement of muscles?`,
          options: `Cerebellum, Medulla oblongata, Cerebrum`,
        },
        {
          qText: `Which part of the brain controls heart beat?`,
          options: `Medulla oblongata, Cerebrum, Cerebellum`,
        },
        {
          qText: `Which part of the brain connects the brain to the spinal cord?`,
          options: `Medulla oblongata, Cerebrum, Cerebellum`,
        },

        {
          qText: `Medulla oblongata is also known as _________.`,
          options: `brain stem, neck, root of brain`,
        },
        {
          qText: `The brain is made up of tiny nerve cells called _______.`,
          options: `neurons, menings, nerves`,
        },
        {
          qText: `Which part of the brain helps in learning a language?`,
          options: `Cerebrum, Cerebellum, Medulla oblongata`,
        },
      ],
    },
  },
  {
    label: "Parts of Brain - Test",
    type: "dragAndDrop",
    data: {
      img:
        "https://s3.ap-south-1.amazonaws.com/pschool.in/assets/science/brain.png",
      title: `Drag and drop the parts of the brain at appropriate places.`,
      width: 271,
      height: 368,
      wordWidth: 120,
      isPractice: false,
      words: [
        { word: "Cerebrum", x: 20, y: 10 },
        { word: "Medulla oblongata", x: 125, y: 270 },
        { word: "Cerebellum", x: 10, y: 310 },
      ],
    },
  },
  {
    label: 'Satellites - Reading',
    type: "passage",
    data: {
      title: `Satellites`,
      text: `Moon is called the natural satellite of Earth, because it revolves around the earth. Apart from moon, there are many man-made satellites that revolve around the earth. Satellites are send to space and put it on an orbit with the help of rockets. 
Man-made satellites helps us in many ways.
1. Satellites help in predicting weather. We get forecast about rains and storms because of them.
2. They guide us in transportation. They take photos of Earth from high distance and help us in preparing maps.
3. They are helpful in information and communciation technology.
4. They are helpful in studying the resources in Ocean.
In India, ISRO is responsible for sending rockets and satellites to space. ISRO stands for Indian Space Research Organization. Usually rockets are launched from Sriharikotta in Andra Pradesh.
There are some man-made satellites, in which human beings live to conduct scientific experiments. They are called space stations. Life in space station is very different from earth, mainly because there is no gravity in space. So people will keep floating in the space.`,
    },
  },
  {
    label: "Satellites - MCQ",
    type: "mcq",
    data: {
      title: "Multiple Choice Question",
      questions: [
        {
          qText: `_________ is the earth's natural satellite.`,
          options: `Moon, Sun, Space Station`,
        },
        {
          qText: `Satellites of earth orbits around the ________.`,
          options: `Earth, Moon, Sun, Solar System`,
        },
        {
          qText: `Life in space station is very different from earth, because of lack of ___________.`,
          options: `gravity, food, light, electricity`,
        },
        {
          qText: `People go to space _____________`,
          options: `to do scientific experiments, for fun and adventure , to collect things from space`,
        },
        {
          qText: `People go to space with the help of a ________. `,
          options: `rocket, satellite, airplane, hot air balloon`,
        }
      ],
    },
  },
]