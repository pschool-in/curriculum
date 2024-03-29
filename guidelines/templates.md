# Template Types

# 1. Writing

Allow students to trace different letters. We can also add sound to 'pronounce'
the letter.

<img src="screenshots/01_writing.png" width="300" >

# 2. Sequence

Connect letters to form a word. Also connect words to form a sentence.

<img src="screenshots/02_sequence.png" width="300" >

# 3. Complete Word

We have stack images.
([www.pschool.in/author/images](https://pschool.in/author/images)). Allow
students to write one or more missing letters. We can have an input component
(like shown in image) or a set of options to pick from.

Instead of image, we can also give a clue as text. (something like a crossword
clue)

<img src="screenshots/03_completeWord.png" width="300" >

# 4. Connect Letters

It is just a variation of the above activity. Giving options may be easy to
guess. The input component may be hard for a kid to type. In such case, the kid
has to connect letters from left to write as shown in the image.

<img src="screenshots/04_connectLetters.png" width="300" >

# 5. Right Match

This is a very simple activity where the student has to drag and match the right
option. Can be used for compound words, prefix, suffix, antonyms, synonyms

<img src="screenshots/05_completePuzzle.png" width="300" >

# 6. MCQ

Common Multiple Choice Questions (MCQ)

<img src="screenshots/06_mcq.png" width="300" >

The options can be given in a couple of ways. And the first entry is always the
right option.

If the options are words or phrases then we separate the options using comma.
(comma as delimiter)

If the options are sentences, then we separate the options using new line. (line
break as delimiter)

If we have 'none of the above' or 'all of the above' as options then we don't
want to shuffle the options and we expect them to always come as the last
option.

Sometimes, we want to give more than one right option.

For the above two cases, add astrisk before the right option(s).

# 7. Right Option

Very similar to MCQ, but their is no separate question, only instruction. Find
the word with right/wrong spelling. Find the word that doesn't rhyme.

This activity is also used to 'pick the word based on audio'.

<img src="screenshots/07_rightOne.png" width="300" >

# 8. Match

The regular match the following. We can have stack images as options.

<img src="screenshots/08_match.png" width="300" >

# 9. Passage

Can be used to have story, passage, poem (with images).

<img src="screenshots/09_passage.png" width="300" >

# 10. Fill Up

We classify fillup into three types.

1. The whole set of fillups will have same options. (Eg Fill in the blanks with
   articles. Here the options are fixed for all blanks (a, an, the))
2. Each blank will have different set of options.
3. No options. The student has to input letter by letter using the input
   component.

<img src="screenshots/10_fillup.png" width="300" >

If the options are not fixed, then the wrong options should be given within the bracket. If there are more than 1 wrong options then it should be separated by comma.

```
{
   title: 'Fill in the blanks',
   text: `Pink *and (or, but)* yellow are colors.
I think there are two *or (and, so)* three pens.
Tie your laces *so (and, or)* you don't fall.
I like shoes *but (so, or)* my sister likes sandals.`
}
```

If the options are fixed, then we need to have separate property called 'options' in the JS.

```
{
   title: 'Fill in the blanks',
   text: `Pink *and* yellow are colors.
I think there are two *or* three pens.
Tie your laces *so* you don't fall.
I like shoes *but* my sister likes sandals.`,
   options: 'and, or, but'
}
```

We can also have the hybrid of the above two. We can override the 'global' options with 'local' options. It is needed in the below case where we need to capitalize the first letter.

```
{
   title: 'Fill in the blanks',
   text: `He ate *an* apple.
I will meet *the* President today.
The mangoes cost thirty rupees *a* piece.
I have *an* exam today. 
*A (An, The)* dog is barking.`,
   options: 'and, or, but'
}

```

If we don't want to give options and ask students to type the word, then we should give the property 'noOptions'.

```
{
   title: `Click on the blanks and type the right helping verb.`,
   noOptions: true,
   text: `She, along with her family *is* going on a vacation.
The monkeys *are* chattering in the trees near the river.
The students *were* relieved at the cancellation of exams!
Raja *has* a match today.
It *is* going to be one o’ clock.` 
}
```


# 11. Fill Up by Drag & Drop

Drag and drop the words given at the bottom and fill it at the appropriate
place.

<img src="screenshots/11_fillupDragDrop.png" width="300" >

# 12. Drag and Drop on Images

This is drag and drop on images. Like parts of body, face, plants etc

<img src="screenshots/12_drag-drop-image.png" width="300" >

# 13. Classify Sentence

Classify a sentence. eg True or False, Past vs Present vs Future, Fact vs
Opinion

<img src="screenshots/13_classify.png" width="300" >

# 14. Classify words into two groups

Drag and drop the given words into the two boxes. eg fruits vs vegetables, noun
vs verb

<img src="screenshots/14_group.png" width="300" >

# 15. Select Word

Select a word from the sentence or a set of sentences. eg. select the verb,
select the word with spelling mistake

<img src="screenshots/15_select_word.png" width="300" >

# 16. Sorting

Rearrange the items in a particular order. Eg: Rearrange the number in
ascending/descending order.

<img src="screenshots/16_sorting.png" width="300" >

# 17. Word Search

Find words from a table of characters.

<img src="screenshots/17_wordsearch.png" width="300" >

# 18. Crossword

Classic crossword.

<img src="screenshots/18_crossword.png" width="300" >
