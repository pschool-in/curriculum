# indian-lang-utils
A set of javascript utilities function to identify characters in various languages available in India.

# pschool.in
We have a website with learning activities for kids ([www.pschool.in](https://pschool.in)) which is primarily meant for mobile devices. Due to lockdown we are getting lot of traffic and people are really liking it I guess. ;) Users are asking support for other languages like Hindi, Telugu, Kannada, Marathi, Malayalam etc.

We know only English and Tamil and unable to handle other languages. So we request help from the community.

We want to handle the below activites for most common indian languages.

1. https://pschool.in/activity/tamilVowels
2. https://pschool.in/activity/sequence
3. https://pschool.in/activity/crossword
4. https://pschool.in/activity/wordsearch

# Todo Task

We need two javascript functions for the most common indian languages. 

## getAllChars()
This function will return all the characters (unicode) of the language. Please refer how it is done in Tamil. In Tamil, there are 12 vowels, 1 special character (ஃ)  and 18 consonents. And we have another 12 x 18 characters which are derived by combining the vowels and consonents. So totally there are 247 characters in tamil.

## convertStringToCharArray(str)

This function will take a string as input and returns an array of characters. The challenge here is, some characters are represented by a combination of more than one unicode char. Please refer how it is done in tamil.
