import {getflyingSuperHero} from '../super-hero'

test('return super hero that can fly', () => {
    const hero = getflyingSuperHero();
    expect(hero).toStrictEqual([{name: 'baba', powers: ['tum', 'fly']}])
})