
# Testing Playlist file

Activities are like atoms, Playlists are like molecules. 
Though activities are the building blocks in pschool, they cannot exist on their own. 
Each activity has be part of some playlist

Each playlist is available as independent file. Playlist file can have any of the following extension

```
*.pschool, *.json, *.js
```

The first two are basically json and the last one is js object. We prefer to keep it in js format because it has two major advantages which are not there in json.

1. Multiline string support. It offers better readability
2. Commenting Option. We can temporarily turn off some option

But while going for production, the *js* file has to be converted into json.

From 'Create Playlist' option you can export the playlist file. Or you can create your own playlist file by using the existing files in github as reference.

Once you have the js file, it can be tested by using the below link.

```
www.pschool.in/import
```

# Language Utils

We need two utilities for each language.

## Word to Char Array converter.

We need a function which takes a 'word' as input and returns an array by breaking the word into characters.





