const list = [
        { type: "tracing", label: "Capital Letters (A - E)", data: {type: "capitalLetters", repeatCount: 3, chars: "ABCDE"}},
        { type: "tracing", label: "Capital Letters (F - J)", data: {type: "capitalLetters", repeatCount: 3, chars: "FGHIJ"}},
        { type: "tracing", label: "Capital Letters (K - O)", data: {type: "capitalLetters", repeatCount: 3, chars: "KLMNO"}},
        { type: "tracing", label: "Capital Letters (P - T)", data: {type: "capitalLetters", repeatCount: 3, chars: "PQRST"}},
        { type: "tracing", label: "Capital Letters (U - Z)", data: {type: "capitalLetters", repeatCount: 3, chars: "UVWXYZ"}},
        {type: "match", label: "Match Fruits", data: {
          qText: 'Match Fruits with their first letter.',
          list: [['A', 'apple'], ['B', 'banana'], ['C', 'cherry'], ['G', 'grapes'], ['S', 'strawberry']],
          rightImgType: 'fruits'
        }},
        {  type: "tracing", label: "Small Letters (a - e)", data: {type: "smallLetters", repeatCount: 3, chars: "abcde"}},
        {  type: "tracing", label: "Small Letters (f - j)", data: {type: "smallLetters", repeatCount: 3, chars: "fghij"}},
        {  type: "tracing", label: "Small Letters (k - o)", data: {type: "smallLetters", repeatCount: 3, chars: "klmno"}},
        {  type: "tracing", label: "Small Letters (p - t)", data: {type: "smallLetters", repeatCount: 3, chars: "pqrst"}},
        {  type: "tracing", label: "Small Letters (u - z)", data: {type: "smallLetters", repeatCount: 3, chars: "uvwxyz"}},
        {type: "match", label: "Match Wild Animals", data: {
          qText: 'Match wild animals with their first letter.',
          list: [['E', 'elephant'], ['L', 'lion'], ['M', 'monkey'], ['T', 'tiger'], ['Z', 'zebra']],
          rightImgType: 'animals'
        }},
        {type: "match", label: "Match Domestic Animals", data: {
          qText: 'Match domestic animals with their first letter.',
          list: [['C', 'cat'], ['D', 'dog'], ['G', 'goat'], ['P', 'pig'], ['H', 'horse']],
          rightImgType: 'animals'
        }},
      ]
