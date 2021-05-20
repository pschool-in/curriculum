const sentence = {
  label: "Sentence",
  id: "sentence",
  img: "sentence",
  list: [
    {
      type: "sequence",
      label: "Order Sentence",
      id: "order-sentence",
      data: {
        text: `we are happy
it is dark
dog is hungry
they are coming
I am a boy
I live in Mumbai
please come in line
we are watching tv
they are playing cricket
I am reading poems`,
      },
    },
    {
      type: "sequence",
      label: "Order Sentence - 2",
      id: "order-sentence-2",
      data: {
        text: `we have holiday tomorrow
I am drinking water
I am going to chennai
I am sitting in sofa
Siva is sleeping in bed
the cat is drinking milk
I am thinking of icecream
sun rises in the east
I am playing with my friends
I have not done my homework`,
      },
    },
    {
      id: "sort",
      label: "Order the Sentence",
      type: "sorting",
      commonData: {
        title: "Rearrange words to form sentence.",
        multiple: true,
      },
      data: [
        `we, saw, an, injured, dog, on, the, street
I, love, to, swim, in, the, beach
I, have, three, chocolates, at, my, home
we, are, building, a house, for, our, dog
what, is, the, fifth, month, of, a, year
there, are, forty, students, standing, in, the, queue
we, are, having, bread, and butter, as, breakfast
Simla, is, one, of, the, most, beautiful, places
my mom, gave, me, four, pink, color, pencils
I like, coffee, but, my brother, doesn't, like, it`,

        `the cat, is, sitting, under, the, dining, table
we, will, meet, during, the, lunch, time
we, must, submit, the, assignment, by, Saturday
my friends, came, to, my house, on, my, birthday
the, house, was, very, quiet, at, midnight
please, do, not, write, below, this, line
the crow, dropped, pebbles, into, the, jar
she, received, a gift, from, her, brother
there, is, a big, tree, beside, the river
they, were, hiding, inside, the, wardrobe`,

        `what, is, your, plan, for, the weekend
did, you, complete, the homework, on, time
what, is, the, name, of, your, father
what, is, the, capital, of, your, country
what, is, the, biggest, river, in, India
why, are, you, late, for, the, meeting 
can, you, please, help, me, with, my, homework
at, what, time, do, you, go, to, sleep
what, do you, do, after, completing, your, homework
when, are, you, coming, to, our, house`,
      ],
    },
    {
      label: "Fill Up",
      type: "matchByDragDrop",
      id: "fill-up",
      commonData: {
        isPractice: false,
        title: "Drag and drop: Fill the blanks with the appropriate word",
        styles: {
          fontSize: "1rem",
          dashWidth: 80,
        },
      },
      data: [
        `We were on a road trip to *Kolkata*. On day three, we *crossed* over into Bengal in our *trusted* old car. My *siblings* and I were tired and irritable and my mother was nursing a *headache*. Distracted, my father drove on. We found ourselves in a quaint, *picturesque* village at the *foothills* of a mountain.`,

        `It was a *bright* March morning and the air was *fresh*, laden with the scent of *jasmine*. As we *drove* through, we heard the sound of temple *bells*. The houses on *either* side of the road were old but well cared for. There was not a *soul* in sight.`,

        `Our earth is getting *hotter* day by day. It is caused by the increasing *amount* of carbon dioxide in the air. Carbon Dioxide is produced by *burning* fossil fuel, coal, oil, petroleum, and wood. When we *produce* more Carbon Dioxide and *other* greenhouse gasses, it *accelerates* Global Warming.`,
      ],
    },
  ],
};

export default sentence;
