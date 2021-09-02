
# Playlist Structure

```
export default {
  id: 'playlist-id',
  label: 'Playlist Name',
  list: [
   {
     ....
   },
   {
      ...
   }
  ]
}

```

# Activity Structure

```
{
  id: 'activity-id',
  label: 'Activity Name',
  type: 'mcq',
  data: {
    ....
  }
}
```

# Activity Data

## passage

At basic level, passages support three styles alone: paragraph, title and list

```
{
  title: 'The Rain',
  text: `Simply put, it comes from THE RAIN.
        # How rivers are formed?
        When rain falls on the mountains, water flows down. Further, many rivulets combine to form a river.
        1. List Item 1
        2. List Item 2`
 }

```

## match

```
{
       title: 'Match the following'
       text: `Sea, Salt Water
River, Fresh Water
Dengue, Mosquito
Typhoid, Unclean water
Well, Ground water`,
}
```

## mcq

```
{
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' Which is the main source of water for us?',
            options: 'Rain, Lake, Sea'
          },
          {
            qText:
              ' Only _____ of the water in the entire Earth is freshwater.',
            options: '3%, 0.3%, 30%'
          },
          {
            qText: 'By __________ water, we can kill the germs.',
            options: 'boiling, cooling,f iltering'
          },
          {
            qText: 'Which of these is not true?',
            options: `We should always waste water.
            Plants and animals need water too.
            We should use water carefully.
            Water is precious.`
          },
          {
            qText: 'Where does the rain water go after falling on the ground?',
            options: `* Seeps into the ground
            * Plants absorb the water
            * Mingles with sea and ocean
            * Mixes with lake and pond`
          }
       ]
}
```

## group

```
{
    title: 'Classify the below.',
    types: [
      {
        name: 'Natural',
        text:
          'wells, dams, bore-wells, hand-pumps, canals, taps, reservoirs'
      },
      {
        name: 'Man-made',
        text: 'springs, streams, rivers, lakes, creeks, seas, oceans, ponds'
      }
    ]
}
```

## classifySentence


```
{
    title: 'True or False',
    types: [
      {
        name: 'True',
        text: `Water is transparent.`
      },
      {
        name: 'False',
        text: `Pure water looks bluish in colour.
        When water is heated a lot, it turns into ice.
        Sugar does not dissolve in water.`
      }
    ]
  }
  ```

## matchByDragDrop

```
{
    isPractice: false,
    title: 'Drag and drop the words at proper place.',
    styles: {
      fontSize: '1rem',
      dashWidth: 80
    },
    text: `*Pure* water has no colour, smell or taste.
    Water is *transparent*.
    Water does not have a *shape* of its own.
    Ice is the *solid* state of water.`
}
```

## fillupOptions

```
{
        title: 'Fill in the blanks.'
        text: `India gets a lot of rain during *monsoon (summer, winter)* season. 
Water is a *transparent (opaque, transluscent)* body.       
Ice is formed at *cold (hot, room)* temperature.      
The process of evaporation talks about water turning into its *vapour (solid, liquid)* state.   
Humidity is caused due to the presence of *water (ice, blood)* in the air.     
Water takes the *shape (size, taste)* of the container it is kept in.`,
}
```



