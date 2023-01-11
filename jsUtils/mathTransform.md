# Number Series

To convert

```
7, 8, 9, ?0 , ?1 , ?2 | 10, 11, 12
```

into

```
12, 11, 10,  ?0 , ?1 , ?2 | 9, 8, 7
```

snippet

```js
let str = `7, 8, 9, ?0 , ?1 , ?2 | 10, 11, 12
  21, 22, 23, ?0 , ?1 , ?2 | 24, 25, 26
  10, 11, 12, ?0 , ?1 , ?2 | 13, 14, 15
  25, 26, 27, ?0 , ?1 , ?2 | 28, 29, 30
  34, 35, 36, ?0 , ?1 , ?2 | 37, 38, 39`;

let arr = str
  .split("\n")
  .map((item) => item.trim())
  .map((line) => {
    let [quest, ans] = line.split("|").map((item) => item.trim());
    ans = ans.split(",").reverse();
    ans = ans.map((item) => item.trim());
    quest = quest.split(",");
    let newAns = quest.slice(0, 3);
    newAns = newAns.map((item) => item.trim());
    newAns.reverse();

    return `${ans.join(", ")}, ${quest.slice(3)} | ${newAns.join(", ")}`;
  });

console.log(arr.join("\n"));
```

# To Convert

```
1, 3, 5, ?0 , ?1 , ?2 | 7, 9, 11
```

into

```
 ?0 , ?1 , ?2 , 7, 9, 11 | 1, 3, 5
```

# Snippet

```js
let str = `1, 3, 5, ?0 , ?1 , ?2 | 7, 9, 11
            15, 17, 19, ?0 , ?1 , ?2 | 21, 23, 25
            31, 33, 35, ?0 , ?1 , ?2 | 37, 39, 41
            49, 51, 53, ?0 , ?1 , ?2 | 55, 57, 59
            61, 63, 65, ?0 , ?1 , ?2 | 67, 69, 71`;

let arr = str
  .split("\n")
  .map((item) => item.trim())
  .map((line) => {
    let [quest, ans] = line.split("|").map((item) => item.trim());
    ans = ans.split(",");
    ans = ans.map((item) => item.trim());
    quest = quest.split(",");
    let newAns = quest.slice(0, 3);
    newAns = newAns.map((item) => item.trim());

    return ` ${quest.slice(3)} , ${ans.join(", ")} | ${newAns.join(", ")}`;
  });

console.log(arr.join("\n"));
```
