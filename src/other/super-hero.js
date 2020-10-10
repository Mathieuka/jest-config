const superHeros = [
    {name: 'toto', powers: ['joke', 'fun']},
    {name: 'tata', powers: ['plouf', 'fun']},
    {name: 'baba', powers: ['tum', 'fly']},
    {name: 'tutu', powers: ['tufo', 'fun']},
    {name: 'dede', powers: ['boom', 'fun']},
]

function getflyingSuperHero() {
    return superHeros.filter(hero => {
        return hero.powers.includes('fly')
    })
}

export {getflyingSuperHero}