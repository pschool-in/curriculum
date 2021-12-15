```
{
     label: 'True or False',
     id: 'tf',
     type: 'classifySentence',
     data: {
       title: 'State whether the following statements are true or false. ',
       types: [
         {
           name: 'True',
           text: `The names of all females are called feminine gender nouns.
       Cousin is a common gender noun.
       Husband is a masculine gender noun.`
         },
         {
           name: 'False',
           text: `Non-living things are named as common gender nouns.
       Non-living things are named neutral gender nouns.`
         }
       ]
     }
   }
```
