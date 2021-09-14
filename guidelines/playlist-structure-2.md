# Introduction

Content Developers can slowly learn the Playlist structure and start editing
them over a period of time. Ofcourse learning cannot happen in one day. It is a
gradual process.

1. Step 1: Editing the text. Whatever is present within the quotes. It can be a
   single line or multiline text. Modifying properties.
2. Step 2: Adding new activities. Ususally we copy the activity structure from
   some other activity and do the necessary modification to the text.
3. Step 3: Changing the structure of the activities. Making a single activity
   into group and vice versa. Moving a set of activities from one playlist to
   another.
4. Step 4: Creating a playlist from scratch. And adding them as part of a
   curriculum.

# Single vs Group Activity

Activities can be grouped together, if they have the same 'activity label' and
they are of same activity type.

```
 {
   type: 'match',
   label: 'Match Countries and Capitals',
   id: 'match',
   data: {
      title: 'Match Countries and Capitals'
      text:  `Australia, Canberra
Brazil, Brasilia
Canada, Ottawa
China, Beijing
England, London
France, Paris`,
   }
},
{
   type: 'match',
   label: 'Match Countries and Capitals',
   id: 'match',
   data: {
      title: 'Match Countries and Capitals'
      text: `Germany, Berlin
India, New Delhi
Italy, Rome
Japan, Tokyo
Malaysia, Kuala Lumpur
United States, Washington D.C.`,
   }
}
```

The above two activities are different. But they can be grouped together,
because they have the same label and they are of same activity type. It can be
grouped as below.

```
{
   type: 'match',
   label: 'Match Countries and Capitals',
   id: 'match',
   data: [
      {
         title: 'Match Countries and Capitals'
         text:  `Australia, Canberra
Brazil, Brasilia
Canada, Ottawa
China, Beijing
England, London
France, Paris`,
      },
      {
         title: 'Match Countries and Capitals'
         text: `Germany, Berlin
India, New Delhi
Italy, Rome
Japan, Tokyo
Malaysia, Kuala Lumpur
United States, Washington D.C.`,
      }
   ]
}
```

If the data attribute is an object ({}), then it is a single activity. If the
data attribute is an array ([]), then it is a group activity. This is the easy
way to indentify the group activity.

If you refer the above structure, the 'title' property is common. In some other
activities, we will have more than one common property. In that case, repeating
the same data multiple times can be avoided. So they can be grouped together
under the property 'commonData' as below.

```
{
   type: 'match',
   label: 'Match Countries and Capitals',
   id: 'match',
   commonData: {
      title: 'Match Countries and Capitals'
   }
   data: [
      {
         text:  `Australia, Canberra
Brazil, Brasilia
Canada, Ottawa
China, Beijing
England, London
France, Paris`,
      },
      {
         text: `Germany, Berlin
India, New Delhi
Italy, Rome
Japan, Tokyo
Malaysia, Kuala Lumpur
United States, Washington D.C.`,
      }
   ]
}
```

In case if the activity data contains only the 'text' property, then the object
can be replaced with the value of the 'text' property. It is again a short-hand
convention.

```
{
   type: 'match',
   label: 'Match Countries and Capitals',
   id: 'match',
   commonData: {
      title: 'Match Countries and Capitals'
   }
   data: [
      `Australia, Canberra
Brazil, Brasilia
Canada, Ottawa
China, Beijing
England, London
France, Paris`,
     `Germany, Berlin
India, New Delhi
Italy, Rome
Japan, Tokyo
Malaysia, Kuala Lumpur
United States, Washington D.C.`,
   ]
}
```
