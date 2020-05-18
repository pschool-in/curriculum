const vowels = "அஆஇஈஉஊஎஏஐஒஓஔ".split('');
const extra = "ஃ"
const basic = "கஙசஞடணதநபமயரலவழளறன".split('')
const partialsStr= 'க்காகிகீகுகூகெகேகைகொகோகௌ';
/*
  The above letters (partialsStr list) are represented by a pair of unicode. 
  We are interested only in the second unicode. 
  Just to make it look meaningful and readable, we are having the first unicode. 
  Hence we are retaining only the unicode at the even places as shown below to get the partials
*/
const partials = partialsStr.split('').filter(function (char, index) {
  return index % 2 === 1;
});


export const getAllChars = () => {
  const others = new Array();
  for(let i = 0; i < basic.length; i++){
    for(let j = 0; j < partials.length; j++){
      others.push(basic[i] + partials[j])
    }
  }
  return [
    ...vowels,
    extra,
    ...basic,
    ...others
  ]
}

export const convertStringToCharArray = str => {
  str = str.split("").map(char => char.trim()).join('');
  var len = 0;
  var wordArr = [];
  var isPrevLetterJoinable = false;
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (vowels.indexOf(char) != -1) {
      len++;
      wordArr.push(str.charAt(i));
      isPrevLetterJoinable = false;
    } else if (basic.indexOf(char) != -1) {
      len++;
      wordArr.push(str.charAt(i));
      isPrevLetterJoinable = true;
    } else if (partials.indexOf(char) != -1) {
      if (isPrevLetterJoinable) {
        isPrevLetterJoinable = false;
        var lastIndex = wordArr.length - 1;
        wordArr[lastIndex] = wordArr[lastIndex] + str.charAt(i);
      } else {
        return false;
      }
    } else {
      //return false;
      throw "invalid";
    }
  }
  return wordArr;
};
