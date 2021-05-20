import writing from "./writing.js";
import picture from "./picture.js";
import grammar from "./grammar.js";
import vocabulary from "./word.js";
import sentence from "./sentence.js";
import wordsearch from "./wordsearch.js";
import crossword from "./crossword.js";
import reading from "./reading.js";
import science from "./science.js";
import social from "./social.js";

let mainMenu = [
  writing,
  picture,
  vocabulary,
  sentence,
  reading,
  grammar,
  science,
  social,
  wordsearch,
  crossword,
];

//Rethna: The below code is used to detect the number of activites
/*
  let total = 0;
  mainMenu.forEach((playlist) => {
    if (playlist.list) {
      let count = playlist.list.reduce(
        (accu, item) =>
          Array.isArray(item.data) ? accu + item.data.length : accu + 1,
        0
      );
      console.log(playlist.label, count);
      total += count;
    }
  });
  console.log('total activities', total);
  */
export default mainMenu;
