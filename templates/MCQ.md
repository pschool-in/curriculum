## Images in question.

It is possible to have images in question. It can be given in `qImg` property.
Without path - it is understood that it is stack image.

```js
 {
      label: 'Choose the best Answer',
      id: 'mcq-2',
      type: 'mcq',
      data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: 'Usually coins are made of ______.',
              qImg: 'coin',
              options: 'metal, rubber, stone, plastic, wood'
            }
            ...
          ]
        }
 }
```

## Options as Images

MCQ also supports images as option. If the images are part of stack images just
give `optionImages: true`.

```js
{
    label: 'Choose the best Answer',
    id: 'mcq',
    type: 'mcq',
    data: {
    title: 'Multiple Choice Questions',
    optionImages: true,
    questions: [
        {
        qText: ' Which of the following is made of wood?',
        options: 'door, dustbin, backpack, spoon'
        }
        ...
    ]
}
```

If the images are not part of stack images then we need to give the folder path.
Usually we need to have the image names in the label format so that it looks
nicely while display the result format.

```js
{
      label: 'Choose the best Answer',
      id: 'mcq',
      type: 'mcq',
      data: {
          optionImages: 'img/social/leaders',
          questions: [
            {
              qText: 'Who was given the Nobel Prize for Peace?',
              options:
                'Mother Teresa, Atal Bihari Vajpayee, Swami Vivekananda, Rabindranath Tagore'
            }
            ...
          ]
      }
}
```
