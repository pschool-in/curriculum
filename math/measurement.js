export default {
  label: 'Measurement',
  id: 'measurement',
  list: [
    {
      type: 'match',
      id: 'match',
      label: 'Match Equals',
      commonData: {
        title: 'Match Equals',
        allowFrac: true
      },
      data: [
        `1000^m, 1^km
100^cm, 1^m
0.5^km, 500^m
250^cm, 2.5^m
100^mm, 10^cm`,

        `100^g, 0.1^kg
1000^g, 1^kg
10^g, 0.01^kg
400^g, 0.4^kg
4000^g, 4^kg`,

        `60^min, 1^hr
60^sec, 1^min
120^min, 2^hr
120^sec, 2^min
24^hr, 1^day`,

        `2^l, 2000^ml
0.2^l, 200^ml
20^l, 20000^ml
0.25^l, 250^ml
1.5^l, 1500^ml`
      ]
    },
    {
      type: 'numberInput',
      id: 'conversion',
      label: 'Convert Units',
      commonData: {
        title: 'Convert units as requested',
        type: 'conversion',
        fontSize: '1.5rem',
        allowFrac: true
      },
      data: [
        `2^kg = ?^g, 2000
100^cm = ?^m, 1
0.5^km = ?^m, 500
250^cm = ?^m, 2.5
100^mm = ?^cm, 10
3.5^kg = ?^g, 3500
2900^g = ?^kg, 2.9
500^g = ?^kg, 0.5
70^cm = ?^m, 0.7
1000^m = ?^km, 1`,

        `7^m = ?^cm, 700
2.5^km = ?^m,  2500
2^l = ?^ml, 2000
0.4^l = ?^ml, 400
0.01^l = ?^ml, 10
300^ml = ?^l, 0.3
3.3^kg = ?^g, 3300 
0.9^kg = ?^g, 900
3^kg = ?^g, 3000
10^cm = ?^m,  0.1`,

        `2^hr = ?^min, 120
30^min = ?^hr, 0.5
1^day = ?^hr, 24
60^sec = ?^min, 1
5^min = ?^sec, 300
10^min = ?^sec, 600
1^hr = ?^sec, 3600
4^min = ?^sec, 240
0.5^day = ?^hr, 12
3^hr = ?^min, 180`,

        `334^cm = ?^m ?^cm, 3, 34
111^cm = ?^m ?^cm, 1, 11
150^sec = ?^min ?^sec, 2, 30
3.5^kg = ?^kg ?^g, 3, 500
2300^g = ?^kg ?^g, 2, 300
324^cm = ?^m ?^cm, 3, 24
90^sec = ?^min ?^sec, 1, 30
100^min = ?^hr ?^min, 1, 40
200^min = ?^hr ?^min, 3, 20
30^hr = ?^day ?^hr, 1, 6`,

        `2 1/2 ^kg = ?^g, 2500
1 1/2 ^hr = ?^min, 90
3 1/2 ^km = ?^m, 3500
5 1/4 ^kg = ?^g, 5250
1 1/4 ^km = ?^m, 1250
2 3/4 ^km = ?^m, 2750
1 2/5 ^kg = ?^g, 1400
2 1/2 ^min = ?^sec, 150
7 3/5 ^kg = ?^g, 7600
5 1/5 ^kg = ?^g, 5200`
      ]
    }
  ]
};
