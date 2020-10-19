import {getflyingSuperHero} from '../super-heros'

test('return super hero that can fly', () => {
  const hero = getflyingSuperHero()
  expect(hero).toMatchInlineSnapshot(`
    Array [
      Object {
        "name": "baba",
        "powers": Array [
          "tum",
          "fly",
        ],
      },
      Object {
        "name": "crakcrak",
        "powers": Array [
          "boom",
          "fly",
        ],
      },
      Object {
        "name": "crakcrak",
        "powers": Array [
          "boom",
          "fly",
        ],
      },
    ]
  `)
})
