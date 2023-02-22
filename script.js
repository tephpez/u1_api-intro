


console.log('working')

const url = "https://pokeapi.co/api/v2/pokemon/ditto"

fetch(url)
    .then(res => { return.res.json()})
    .then(res => {
        console.log("success!", res.name)
    })
    .catch(err => {
        console.log("error!", err)
    })
