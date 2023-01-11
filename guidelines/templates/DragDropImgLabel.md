The input to this template can be given as below.

```js
{
    type: 'dragDropImgLabel',
    label: 'Drag and Drop',
    id: 'dragDropImgLabel',
    data: {
        title: 'Drag the names and drop on the images.',
        text: `apple | Apple
orange | Orange
pineapple | Pineapple
papaya | Papaya
mango | Mango
grapes | Grapes`
    }
}
```

The image name and the label are separated by a pipe character.

# SVG

In some cases, the image can be simple svg path as below. Here we have a special
attribute `images: 'svg'`.

```js
{
    type: 'dragDropImgLabel',
    label: 'Match Shapes',
    id: 'dragDropImgLabel',
    data: {
        title: 'Drag the names and drop on the images.',
        images: 'svg',
        text: `M 10 10 H 190 V 190 H 10 Z | Square
M 100 10 L 190 190 H 10 Z | Triangle
M 10, 100 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180,0 | Circle
M 10, 100 a 90,45 0 1,0 180,0 a 90,45 0 1,0 -180,0 | Oval
M 10 45 H 190 V 155 H 10 Z | Rectangle
M 100 10 L 150 100 L 100 190 L 50 100 Z | Diamond`
    }
}
```

# Sprite

We can also use singe image sprite as below. The `image` attribute will tell the
image location. The width and height of each image in the sprite is also
provided.

```js
{
    type: 'dragDropImgLabel',
    label: 'Match Shapes',
    id: 'dragDropImgLabel',
    data: {
        title: 'Drag the names and drop on the images.',
        image: 'social/map-symbols.jpg',
        imgWidth: 60,
        imgHeight: 60,
        text: `4,0 | Airport
 0,0 | Bus
 3,0| Ship
 1,0| Taxi
 2,0| Train
 0,1| Petrol Station
 1,1 | Factory
2,1| Library
3,1| Museum`
    }
}
```
