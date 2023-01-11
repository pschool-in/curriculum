# Three letter words

1.  create the array.
2.  check for duplicate words.
3.  reverse the words and check whether they exist in the array.

```es6
let str = `act, and, ant, add, age, ago, aim, air, can, car, cat, cow
       bag, big, bed, boy, box, dam, den, did, die, dip, dim
       ear, eat, egg, ego, end, far, fan, fox, fat, fin, 
       gas, gum, gem, had, has, hat, hen, his, hit, her, 
       ice, ink, jam, jar, jaw, joy, jug, key, kid, 
       lay, leg, lip, log, low, mat, may, man, map, mud, mug
       net, nil, nut, oak, oar, off, oil, one, our, out, owl, own, 
       pad, pay, pet, pig, pen, put, rag, ran, run, rat, red, 
       rip, rib, row, rug,  
       sad, see, saw, say, sea, she, sky, spy, sun, sit
       tag, two, van, web, why, war, was, win, who, yak, yes,you`;

let list = str.split("\n").map((item) => item.trim());

list = list.map((line) =>
  line
    .split(",")
    .map((word) => word.trim())
    .filter((word) => word !== "")
);
list = list.flat();

list.sort();
console.log("before", list.length);
list = list.filter((word, i) => list.indexOf(word) === i);

list = list.filter((word, i) => {
  let bool = list.indexOf(word.split("").reverse().join("")) === -1;
  if (!bool) {
    console.log(`word = ${word}`);
  }
  return bool;
});
console.log("after", list.length);
console.log(list.join(", "));
```

wordslist

act, add, age, ago, aim, air, and, ant, bag, bed, big, box, boy, can, car, cat,
cow, dam, den, die, dim, dip, ear, eat, egg, ego, end, fan, far, fat, fin, fox,
gas, gem, had, has, hat, hen, her, his, hit, ice, ink, jam, jar, jaw, joy, jug,
key, kid, lay, leg, lip, log, low, man, map, mat, may, mud, net, nil, nut, oak,
oar, off, oil, one, our, out, owl, own, pad, pay, pen, pet, pig, put, rag, ran,
rat, red, rib, rip, row, rug, run, sad, say, sea, see, she, sit, sky, spy, sun,
tag, two, van, war, web, who, why, win, yak, yes, you

ear = are, won = now = own, ten=net, how=who
has = ash, leg = gel, eat=tea, dam=mad, owl = low
