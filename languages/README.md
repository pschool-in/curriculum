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

# About PSchool

[www.pschool.in](https://pschool.in) is a learning app for kids. It has
thousands of learning activities. Presently we have content from kg to 5th
standard. In future, we will add content till 12th. We keep lot of activities as
free, and by paying Rs 500/- (per year) the user can unlock more content.
Presently we are focusing more on Math and English.

We support Hindi and other regional languages of India. We do have sample
activities in our pschool showcase page. We frequently get request to support
more languages and add more activities for the exisiting languages. But due to
resource constraints and unfamiliarity with different languages, our team cannot
do it independently.

So we decided to keep this project (language-apps) as an open source project.
The goal is to develop a separate app for each language. We request volunteers
to help us to complete this project.

# Scope

1. The content prepared by this project will always be available as a free app.
2. We will prepare between 500 to 1000 activities for each language.
3. The activities may vary from kg to 5th standard
4. In PSchool app, all activities are template based. And we manage the source
   code and content separating. Here we are making only the 'content' as open
   source and not the 'source code' of the project.

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
github. The content should fit into any of the 18 available templates.

Step 2: Our technical person will convert the content into template format
(json), and publish as app

Step 3: The subject expert will review the app and report any issue.

Step 4: The app will be published to app stores. (We don't host it in pschool
server to avoid hosting cost)

# Templates

We have 18 different templates which will be explained in our
[template page.](templates.md)

We kindly request the language experts to go through the 18 types of activites
we have. Any content which doesn't fall within this 18 template will be outside
the scope of this project.

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
