export default {
  label: 'Coloring Activities',
  id: 'coloring',
  pageBreaks: '',
  defs: {
    data: [
      {
        name: 'parrot',
        width: 400,
        height: 580,
        xpos: [140, 90, 180, 40, 110, 330, 290, 240, 300, 260, 250, 250, 210],
        ypos: [400, 270, 80, 130, 130, 500, 500, 420, 420, 400, 330, 280, 200],
        colorCodes: [1, 2, 2, 1, 4, 4, 3, 4, 4, 3, 3, 4, 3],
        cusColors: ['#d1c4c8', '#94c4f0', '#63c37c', '#e092e1'],
        colors: [
          '#d1c4c8',
          'orange',
          'yellow',
          '#77a3f4',
          '#94c4f0',
          '#63c37c',
          '#e092e1'
        ],
        paths: [
          'M 105 325 L 114 360 C 95 374 49 342 46 374 Q 45 387 63 387 C 72 409 87 387 104 384 Q 103 405 121 394 Q 106 429 141 406 C 139 433 162 432 168 401 C 170 384 213 391 204 369 C 197 357 189 389 165 350 ',
          'M 84 165 Q 59 190 50 220 C 41 257 78 324 107 344 Q 125 366 150 361 Q 173 379 192 353 L 271 322 Q 186 174 84 165 ',
          'M 56 75 C 37 40 81 2 159 12 C 184 13 207 36 207 56 Q 221 71 217 90 C 230 98 242 149 231 181 L 119 184 Q 97 198 91 178 C 57 196 60 170 83 141 L 56 75',
          'M 79 79 C 55 64 10 104 31 153 Q 49 135 80 146 Q 94 118 79 79 ',
          'M 80 146 Q 94 118 79 79 C 85 37 154 31 153 81 C 157 138 111 155 80 146 ',
          'M 256 399 C 285 477 328 541 342 561 C 385 612 379 521 285 392 ',
          'M 232 405 C 259 486 302 550 331 571 C 368 594 336 526 265 393 ',
          'M 195 308 C 216 380 249 458 265 449 C 281 444 246 379 224 309 ',
          'M 235 300 C 259 371 291 448 312 438 C 328 433 293 368 271 298 ',
          'M 208 286 C 229 358 262 436 278 427 C 294 422 259 357 237 287 ',
          'M 277 265 L 299 319 C 317 365 297 374 264 355 Q 219 340 184 315 ',
          'M 247 191 L 278 268 C 283 302 277 311 250 295 C 259 319 242 327 220 308 C 228 329 211 337 178 312 C 146 287 120 263 113 218 ',
          'M 161 157 C 200 143 237 163 245 188 C 270 234 249 257 226 236 C 229 254 219 272 190 253 C 196 288 138 277 112 219 C 107 184 135 168 161 157 ',
          {
            d:
              'M 113 71 C 136 75 134 103 114 105 C 93 104 94 71 113 71 M 63 142 Q 79 133 73 115 M 67 388 C 60 375 75 371 97 374 M 103 384 C 118 365 147 380 164 368 M 195 342 C 189 378 143 374 141 338 ',
            static: true
          }
        ]
      },
      {
        name: 'peacock',
        width: 400,
        height: 300,
        xpos: [
          100,
          100,
          100,
          280,
          280,
          280,
          230,
          50,
          70,
          110,
          200,
          290,
          330,
          340,
          180,
          200,
          225,
          170,
          230
        ],
        ypos: [
          200,
          170,
          110,
          230,
          170,
          130,
          50,
          200,
          140,
          80,
          50,
          90,
          140,
          210,
          250,
          170,
          130,
          200,
          200
        ],
        colorCodes: [3, 4, 3, 3, 4, 3, 4, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 4, 4],
        cusColors: ['#4c4c4c', '#77a3f4', 'green', '#84f684'],
        colors: [
          '#4c4c4c',
          'orange',
          'yellow',
          '#77a3f4',
          '#151573',
          'green',
          '#84f684'
        ],
        paths: [
          'M 184 213 C 141 224 25 268 15 198 C 14 137 136 163 183 205',
          'M 176 193 C 14 182 21 122 36 103 C 59 67 137 105 183 189',
          'M 190 181 C 128 149 40 83 90 38 C 129 9 185 87 197 167',
          'M 235 179 C 329 168 389 159 379 214 C 369 258 278 243 235 216',
          'M 219 169 C 297 97 367 79 377 125 C 385 176 288 189 232 197',
          'M 200 146 C 239 71 286 20 320 55 C 363 105 262 147 222 183',
          'M 195 161 C 158 125 139 6 206 7 C 267 5 250 92 212 170',
          'M 39 196 C 38 217 70 224 71 199 C 72 178 39 176 39 196',
          'M 53 127 C 52 148 84 155 85 130 C 86 109 53 107 53 127',
          'M 100 74 C 99 95 131 102 132 77 C 133 56 100 54 100 74',
          'M 186 39 C 185 60 217 67 218 42 C 219 21 186 19 186 39',
          'M 277 77 C 276 98 308 105 309 80 C 310 59 277 57 277 77',
          'M 316 137 C 315 158 347 165 348 140 C 349 119 316 117 316 137',
          'M 323 203 C 322 224 354 231 355 206 C 356 185 323 183 323 203',
          'M 184 225 C 199 237 143 262 183 257 C 193 283 200 252 201 237 C 219 248 215 280 225 251 C 253 269 226 248 223 226 ',
          'M 187 138 C 177 107 186 78 212 81 C 228 81 237 99 231 114 L 221 121 C 189 111 213 163 233 170 C 253 197 245 233 215 240 C 179 249 153 214 165 177 Q 191 150 187 138',
          'M 230 107 Q 228 117 219 118 Q 225 124 231 142 Q 244 119 230 107',
          'M 168 173 Q 146 204 177 231 C 174 205 203 179 168 173',
          'M 235 173 Q 259 201 229 233 C 237 210 209 193 235 173',

          {
            d:
              'M 200 103 C 199 116 221 118 221 102 C 221 92 201 91 200 103 M 200 82 Q 189 62 187 78 M 208 80 Q 204 65 211 67 M 219 81 Q 225 69 229 71 ',
            static: true
          }
        ]
      },
      {
        name: 'ship',
        width: 400,
        height: 300,
        xpos: [170, 240, 300, 210, 280, 210, 120, 180, 230, 280, 330, 110, 110],
        ypos: [
          90,
          90,
          90,
          130,
          180,
          210,
          140,
          140,
          140,
          140,
          140,
          190,
          210,
          210
        ],
        colorCodes: [4, 4, 4, 3, 2, 3, 1, 1, 1, 1, 1, 3, 1],
        cusColors: ['#4c4c4c', 'orange', 'yellow', '#84f684'],
        colors: [
          '#4c4c4c',
          'orange',
          'yellow',
          '#77a3f4',
          '#151573',
          'green',
          '#84f684'
        ],
        paths: [
          'M 145 114 L 152 21 C 153 3 210 6 209 25 L 207 114',
          'M 222 115 L 225 36 C 224 21 275 23 274 38 L 272 122',
          'M 285 123 L 288 55 C 289 42 330 42 329 56 L 328 126',
          'M 65 169 C 85 103 105 99 181 105 L 343 115 C 377 121 371 159 369 173',
          'M 8 152 L 392 158 C 379 240 363 285 285 285 L 109 281 C 67 283 15 203 8 152',
          'M 16 183 Q 150 205 385 194 L 381 213 Q 116 221 25 201 L 16 183',
          'M 112 133 C 113 115 141 113 141 133 C 138 151 112 147 112 133',
          'M 169 134 C 170 116 198 114 198 134 C 195 152 169 148 169 134',
          'M 223 135 C 224 119 250 117 248 135 C 247 151 222 147 223 135',
          'M 276 138 C 277 122 303 120 301 138 C 300 154 275 150 276 138',
          'M 326 138 C 328 124 347 126 347 139 C 344 150 324 149 326 138',
          'M 91 199 C 95 164 139 177 133 205 C 133 221 95 229 91 199',
          'M 117 212 C 123 210 123 196 113 196 C 99 195 103 211 110 213 L 109 235 L 97 236 C 101 224 87 224 88 238 C 86 252 97 252 97 243 L 109 242 C 106 258 122 260 119 242 L 131 242 C 128 248 139 250 140 239 C 142 226 130 220 130 236 L 117 234 L 117 212',
          {
            d:
              'M 151 40 Q 181 31 207 42 M 206 58 Q 191 43 152 55 M 226 51 Q 253 43 273 55 M 273 67 Q 251 56 225 66 M 290 66 Q 309 61 327 68 M 327 80 Q 309 70 288 79',
            static: true
          }
        ]
      },
      {
        name: 'airplane',
        width: 400,
        height: 300,
        xpos: [170, 30, 170, 170, 320, 330, 120, 180, 230, 280],
        ypos: [110, 180, 250, 210, 70, 150, 140, 140, 140, 140],
        colorCodes: [3, 4, 1, 3, 1, 1, 2, 2, 2],
        cusColors: ['orange', 'yellow', '#77a3f4', '#151573'],
        colors: [
          '#4c4c4c',
          'orange',
          'yellow',
          '#77a3f4',
          '#151573',
          'green',
          '#84f684'
        ],
        paths: [
          'M 21 174 C 44 76 91 85 196 91 C 261 98 367 115 359 139 C 353 170 319 167 224 191',
          'M 3 171 C 5 146 43 146 57 155 C 85 173 129 175 187 172 L 333 165 C 227 216 103 214 37 198 C 25 193 3 184 3 171',
          'M 223 245 C 228 275 148 269 126 262 C 113 247 113 216 165 221 L 209 223',
          'M 167 188 C 199 184 235 203 271 221 C 327 251 341 255 300 263 C 247 271 231 266 199 246 C 99 195 107 193 167 188',
          'M 261 108 C 235 102 285 86 295 69 C 318 36 351 23 379 25 C 399 28 366 82 351 106 C 338 138 284 118 261 108',
          'M 309 137 C 288 143 309 172 397 138 Q 349 126 309 137',
          'M 96 126 C 97 109 146 113 143 126 L 143 154 C 143 167 94 165 94 154 L 96 126',
          'M 151 127 C 152 110 201 114 198 127 L 198 155 C 198 168 149 166 149 155 L 151 127',
          'M 205 126 C 206 109 255 113 252 126 L 252 154 C 252 167 203 165 203 154 L 205 126',
          {
            d:
              'M 48 137 C 48 120 67 117 67 139 C 65 151 46 156 48 137 M 60 113 Q 73 115 75 129 M 251 213 L 231 215 L 298 252 L 315 246 M 136 260 C 149 257 149 228 131 230 M 143 251 C 133 251 112 241 141 231',
            static: true
          }
        ]
      },
      {
        name: 'engine',
        width: 400,
        height: 510,
        xpos: [30, 90, 170, 170, 320, 60, 300, 300, 320, 100, 300],
        ypos: [400, 220, 230, 280, 50, 150, 290, 120, 190, 400, 400],
        colorCodes: [1, 4, 4, 3, 1, 2, 2, 4, 3, 1, 1],
        cusColors: ['#4c4c4c', 'orange', 'yellow', '#84f684'],
        colors: [
          '#4c4c4c',
          'orange',
          'yellow',
          '#77a3f4',
          '#151573',
          'green',
          '#84f684'
        ],
        paths: [
          'M 79 380 L 42 380 C 47 366 25 354 26 373 L 27 422 C 27 432 47 426 45 414 L 85 415',
          'M 75 167 L 72 249 L 133 249 L 133 167',
          'M 152 248 C 151 228 150 200 189 200 C 211 200 224 219 219 250',
          'M 65 236 C 27 271 40 387 77 418 L 377 421 L 377 239 L 65 236',
          'M 67 136 C 49 120 45 97 66 91 Q 75 59 117 63 C 97 19 173 -11 226 32 C 269 -9 363 11 363 48 C 363 73 299 90 239 69 Q 221 106 181 96 Q 186 119 152 138',
          'M 33 127 L 173 129 C 173 154 150 180 132 180 L 72 179 C 55 168 31 156 33 127',
          'M 237 124 L 237 332 Q 235 351 251 350 L 378 350 L 378 129',
          'M 379 138 C 312 122 205 152 223 128 Q 250 86 379 110 L 379 138',
          'M 269 160 L 349 160 L 349 233 L 267 232 L 269 160',
          'M 115 377 C 150 379 175 411 173 446 C 172 468 144 501 112 500 C 74 498 48 463 51 436 C 49 404 85 376 115 377',
          'M 308 379 C 343 381 368 413 366 448 C 365 470 337 503 305 502 C 267 500 241 465 244 438 C 242 406 278 378 308 379',
          {
            d:
              'M 85 439 C 85 452 97 466 115 466 C 126 469 141 454 141 440 C 141 428 131 410 114 412 C 91 412 85 428 85 439 M 277 440 C 277 453 289 467 307 467 C 318 470 333 455 333 441 C 333 429 323 411 306 413 C 283 413 277 429 277 440 M 266 271 C 265 279 283 282 283 271 C 283 261 266 258 266 271',
            static: true
          }
        ]
      },
      {
        name: 'tent',
        width: 400,
        height: 310,
        xpos: [
          50,
          80,
          110,
          140,
          170,
          150,
          340,
          310,
          280,
          250,
          220,
          240,
          180,
          90,
          140,
          190,
          240,
          290,
          210
        ],
        ypos: [
          170,
          170,
          170,
          170,
          170,
          250,
          170,
          170,
          170,
          170,
          170,
          250,
          135,
          110,
          110,
          110,
          110,
          110,
          30
        ],
        colorCodes: [3, 4, 3, 4, 3, 2, 4, 3, 4, 3, 4, 2, 2, 4, 3, 4, 3, 4, 1],
        cusColors: ['orange', 'yellow', 'green', '#84f684'],
        colors: [
          '#4c4c4c',
          'orange',
          'yellow',
          '#77a3f4',
          '#151573',
          'green',
          '#84f684'
        ],
        paths: [
          'M 44 117 Q 45 230 11 289 L 71 286 L 83 117',
          'M 71 119 Q 73 223 48 288 L 107 285 L 125 114',
          'M 107 103 Q 107 199 84 285 L 136 284 L 156 111',
          'M 138 108 Q 133 200 117 285 L 146 283 Q 170 215 176 111',
          'M 168 109 L 160 222 L 189 181 Q 197 165 203 111',
          'M 125 242 Q 139 258 144 282 Q 187 221 201 135 Q 176 202 125 242',
          'M 355 111 Q 352 211 391 283 L 331 285 L 311 111',
          'M 326 107 Q 322 197 343 282 L 289 287 L 282 114',
          'M 298 113 Q 291 200 301 285 L 256 286 L 254 114',
          'M 267 113 Q 259 196 268 285 L 245 286 Q 223 201 225 113',
          'M 231 117 Q 229 170 235 215 L 214 192 L 197 105',
          'M 267 244 Q 253 263 243 283 Q 207 233 201 120 Q 219 197 267 244',
          'M 44 118 C 50 150 93 156 104 111 C 112 153 149 151 167 116 C 164 154 224 140 219 115 C 241 157 296 144 285 113 C 315 160 344 124 355 112 ',
          'M 205 36 Q 133 84 43 118 L 101 117 Q 162 95 205 39',
          'M 203 37 Q 163 84 102 117 L 171 119 Q 193 82 205 36',
          'M 203 39 Q 185 82 165 119 L 227 119 L 205 35',
          'M 205 36 Q 206 79 220 118 Q 271 121 305 114 L 205 36',
          'M 205 36 L 287 118 L 354 114 Q 282 85 205 36',
          'M 204 46 L 205 8 Q 238 11 243 21 Q 221 27 204 46'
        ]
      },
      {
        name: 'christmastree',
        width: 400,
        height: 500,
        xpos: [
          200,
          200,
          200,
          200,
          240,
          200,
          200,
          160,
          240,
          140,
          250,
          110,
          190,
          280
        ],
        ypos: [
          480,
          370,
          280,
          200,
          160,
          60,
          130,
          200,
          200,
          290,
          290,
          410,
          400,
          390
        ],
        colorCodes: [1, 4, 3, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        cusColors: ['#4c4c4c', 'yellow', 'green', '#84f684'],
        colors: [
          '#4c4c4c',
          'orange',
          'yellow',
          '#77a3f4',
          '#151573',
          'green',
          '#84f684'
        ],
        paths: [
          'M 169 430 L 169 490 L 231 489 L 230 429',
          'M 120 294 Q 73 388 2 452 Q 87 470 130 431 Q 203 482 257 428 Q 313 482 395 448 Q 324 384 271 297',
          'M 140 210 Q 103 281 45 336 Q 105 350 144 321 Q 208 360 244 317 Q 294 360 352 334 Q 293 283 262 212',
          'M 161 138 Q 131 198 82 244 Q 132 254 160 230 Q 197 262 232 230 Q 264 258 315 242 Q 259 193 229 130',
          'M 195 62 Q 172 117 128 164 Q 151 170 175 156 Q 202 174 221 154 Q 243 176 269 161 Q 227 124 201 62',
          'M 200 7 L 209 39 L 245 41 L 217 64 L 228 97 L 198 75 L 171 97 L 181 61 L 151 41 L 189 41 L 200 7',
          'M 176 128 C 176 153 216 152 216 129 C 217 97 174 103 176 128',
          'M 147 199 C 147 224 187 223 187 200 C 188 168 145 174 147 199',
          'M 215 199 C 215 224 255 223 255 200 C 256 168 213 174 215 199',
          'M 128 284 C 128 309 168 308 168 285 C 169 253 126 259 128 284',
          'M 225 285 C 225 310 265 309 265 286 C 266 254 223 260 225 285',
          'M 90 403 C 90 428 130 427 130 404 C 131 372 88 378 90 403',
          'M 174 401 C 174 426 214 425 214 402 C 215 370 172 376 174 401',
          'M 257 389 C 257 414 297 413 297 390 C 298 358 255 364 257 389'
        ]
      },
      {
        name: 'cycle',
        width: 400,
        height: 270,
        xpos: [70, 70, 320, 320, 320, 190, 120, 120, 260, 170, 300],
        ypos: [250, 220, 250, 220, 60, 160, 180, 70, 90, 240, 400],
        colorCodes: [1, 2, 1, 2, 4, 4, 3, 1, 3, 1],
        cusColors: ['#4c4c4c', 'yellow', '#fe2d2d', '#e86fea'],
        colors: [
          '#4c4c4c',
          'yellow',
          '#77a3f4',
          '#fe2d2d',
          '#e86fea',
          '#84f684'
        ],
        paths: [
          'M 91 104 C 132 103 165 142 163 183 C 163 215 135 258 80 256 C 38 257 9 214 9 180 C 9 148 36 103 91 104',
          'M 91 127 C 118 127 138 150 138 184 C 137 204 118 231 87 230 C 50 231 35 202 35 180 C 34 157 53 126 91 127',
          'M 314 105 C 355 104 388 143 386 184 C 386 216 358 259 303 257 C 261 258 232 215 232 181 C 232 149 259 104 314 105',

          'M 314 128 C 341 128 361 151 361 185 C 360 205 341 232 310 231 C 273 232 258 203 258 181 C 257 158 276 127 314 128',
          'M 280 43 Q 263 29 315 30 Q 368 33 351 44 Q 349 100 328 100 L 290 100 Q 275 74 279 42',

          'M 119 73 L 162 184 L 193 186 Q 208 125 275 108 L 265 83 Q 207 88 176 144 L 143 69',
          {
            d:
              'M 339 95 L 283 43 L 351 41 L 296 93 M 283 72 L 325 41 L 348 64 L 315 95 L 283 72 M 337 137 L 282 224 M 259 185 L 363 178 M 349 210 L 265 150 M 117 139 L 55 222 M 84 232 L 85 129 M 124 213 L 40 153',
            static: true
          },
          'M 72 177 C 72 153 207 158 202 199 C 202 217 185 227 143 211 C 114 203 69 196 72 177',
          'M 91 64 C 89 52 112 37 127 48 C 141 57 185 42 168 67 C 163 77 110 93 93 73 L 91 64',
          'M 315 190 C 335 187 326 157 308 157 C 274 57 251 11 221 5 C 179 -3 171 21 185 32 C 199 41 215 20 239 62 L 294 168 C 286 184 301 196 315 190',
          'M 181 252 C 205 252 210 226 197 224 L 181 224 L 178 199 C 191 195 179 177 171 183 C 167 182 155 195 169 201 L 173 225 C 143 238 160 254 181 252',
          {
            d: 'M 219 38 Q 208 24 224 6',
            static: true
          }
        ]
      }
    ]
  },
  list: [
    {
      id: 'fun',
      type: 'coloring',
      label: 'Color for Fun',
      commonData: {
        type: 'fun'
      },
      data: [
        {
          refs: 'data~0'
        },
        {
          refs: 'data~1'
        },
        {
          refs: 'data~2'
        },
        {
          refs: 'data~3'
        },
        {
          refs: 'data~4'
        },
        {
          refs: 'data~5'
        },
        {
          refs: 'data~6'
        },
        {
          refs: 'data~7'
        }
      ]
    },
    {
      id: 'code',
      type: 'coloring',
      label: 'Color with color-code',
      commonData: {
        type: 'colorCode'
      },
      data: [
        {
          refs: 'data~0'
        },
        {
          refs: 'data~1'
        },
        {
          refs: 'data~2'
        },
        {
          refs: 'data~3'
        },
        {
          refs: 'data~4'
        },
        {
          refs: 'data~5'
        },
        {
          refs: 'data~6'
        },
        {
          refs: 'data~7'
        }
      ]
    }
  ]
};
