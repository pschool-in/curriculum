# Language Apps Project

We will develop separate apps for major languages spoken in India. We will
support the below languages.

1. Hindi
2. Telugu
3. Tamil
4. Malayalam
5. Kannada
6. Marathi
7. Bengali

(Note: This list may expand based on popular demand and feasibility)

# What we cover

1. How to write different letters. (which are the building blocks of any
   language)
2. Getting to know the words and their spelling based on pictures. (fruits,
   vegetables, flowers, animals, etc). It is limited to the stack images we
   have. (www.pschool.in/author/images)
3. More about words. Antonyms, Synonyms, correct spelling, confusing words,
   connecting letters to form words etc
4. More about sentences. Tense, question & answer
5. Simple reading exercises. Common poems etc
6. Simple activities in Science
7. Simple activities in Social
8. wordsearch (20 count)
9. crossword (20 count)

# How it works?

Step 1: The subject expert will prepare the content in google doc or directly in
github. The content should fit into any of the available templates.

Step 2: Our technical person will convert the content into template format
(json), and publish as app

Step 3: The subject expert will review the app and report any issue.

Step 4: The app will be published to app stores. (We don't host it in pschool
server to avoid hosting cost)

# Templates

We have different templates which are explained in our
[template page.](templates.md)

We kindly request the language experts to go through them and prepare content
accordingly. Any content which doesn't fall within these templates will be
outside the scope of this project.

# Topics

1. Colors (ta-colors) (Tech: Familiarity with colorcode)
2. Numbers (ta-numbers)
3. Rhyming Words (ta-rhyme-words)

## Image and Sound based activities

### Image Classification

1. Animals and Birds - Basic
2. Fruits and Vegetables - Basic
3. Nature, Body Parts, Flowers, Others
4. People, House, Dress, School, Kitchen
5. Action words, Sports
6. Animals and Birds - Advanced
7. Fruits, Vegetables, ediables - Advanced
8. Vehicles, Jobs
9. Gadgets, Others, flowers- advanced
10. Social and Science words
11. Tools and music instruments

### Activity Types

1. We display the image and the word with the first letter missing. The student
   has to pick the first letter from the option. (The options should not be very
   easy and have different unique set of options) (ta-picture/animals)
2. Match image with its first letter. (ta-picture/match-animals)
3. Drag and drop the words given at the bottom to the right images
   (ta-picture-3/dragDrop-animal)
4. Complete the word based on the image, through the keypad input
   (ta-picture-2/animals)
5. Based on the image find the word by connecting the letters.
   (ta-picture-2/connect-animals)
6. Read-only activity. Slide through the images with the associated sounds.
   (ta-sound/animals)
7. Select the right image based on the played sound. (ta-sound/pick-animal)
8. Select the right word based on the played sound. (ta-word-2/sound)
9. Dictionary - listen to the sound and type the word.(ta-picture-3/dictation-2)

# Developer Requirements

## Input component

We need to develop an input component for each language, so that the user can
key in any possible character present in the language.

## Words to Chars

An utility function to split words into characters. Many characters in languages
are represented as a combination of more than one unicode character.

```js
input: "Hello";

output: ["H", "e", "l", "l", "o"];
```

For English, achieving this is simple but not so for other languages.

# Developer Notes

The input for the app should be in json format. But we keep the content as 'js
object' to make use of extra features.

1. js objects support multiline text
2. js objects support comments.

These features are not present in json.

We will run the script 'node processdata.js' with proper configuration to
convert the es6 based js object into json. (To do this we need nodejs 13 or
above.)
