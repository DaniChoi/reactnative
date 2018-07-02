const express                   = require('express')
const app                       = express()
const bodyParser                = require('body-parser')
const rp                        = require('request-promise')

//////////////////////////////////////////////////////////////////////////
                            // Server Set Up
//////////////////////////////////////////////////////////////////////////

// let options = {
//     method: 'POST',
//     uri: 'http://localhost:8000/predict/machine-comprehension',
//     body: {
//         question: query,
//         passage: passage
//     },
//     json: true // Automatically stringifies the body to JSON
// };


//////////////////////////////////////////////////////////////////////////
                            // Server Set Up
//////////////////////////////////////////////////////////////////////////

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//////////////////////////////////////////////////////////////////////////
                            // Functions
//////////////////////////////////////////////////////////////////////////

function getAllPokemon(){
    let options = {
        method: 'GET',
        uri: 'https://pokeapi.co/api/v2/pokemon',
        json: true // Automatically stringifies the body to JSON
    };

    return rp(options)
        .then( ( res )=> {
            // console.log("DATA", res)
            return res.results
        })
        .catch( ( err ) => {
            console.log("ERROR", err)
            return err
        })
}

function getSinglePokemon(pokemonName){
    let options = {
        method: 'GET',
        uri: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
        json: true // Automatically stringifies the body to JSON
    };

    return rp(options)
        .then( ( res )=> {
            console.log("DATA", res)
            return res
        })
        .catch( ( err ) => {
            console.log("ERROR", err)
            return err
        })
}

function getSingleData(pokemonName){
    let options = {
        method: 'GET',
        uri: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
        json: true // Automatically stringifies the body to JSON
    };
    
    return rp(options)
    .then( ( res )=> {
        // console.log("DATA", res)
        pokemonData = {}
        pokemonData['id'] = res.id
        pokemonData['name'] = res.name
        pokemonData['height'] = res.height
        pokemonData['weight'] = res.weight
        pokemonData['type'] = res.types[0].type.name
        pokemonData['image'] = res.sprites.front_default
        pokemonData['image_shiny'] = res.sprites.front_shiny
        return pokemonData
    })
    .catch( ( err ) => {
        console.log("ERROR", err)
        return err
    })
}




//////////////////////////////////////////////////////////////////////////
                            // End points
//////////////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
    let pokes = []
    counter = 0
    getAllPokemon()
        .then( ( pokemonList ) => {
            console.log("POKEMON LIST", pokemonList)
            // return pokemonList
            // res.send( pokemonList )
            return new Promise( function(resolve, reject){
                pokemonList.forEach(function(ele, i){
                    getSingleData(ele.name)
                        .then( (pokeData) => {
                            console.log("POKEDATA", pokeData)
                            console.log("POSITION", i)
                            pokes.push(pokeData)
                            if ( counter === 19 )
                                resolve()
                            counter++
                        })
                })
            }) 
        })
        .then( ()=> {
            res.send(pokes)
        })
        .catch( (err)=> {
            res.send(err)
        }) 
})

app.post('/getSinglePokemon', (req, res) => {
    let { pokemonName } = req.body 
    getSinglePokemon( pokemonName )
        .then( ( pokemonStats ) => {
            console.log( Object.keys(pokemonStats) )
            res.send( pokemonStats )
        })
})




app.listen(3000, function(){
    console.log("Running on port 3000")
})




/**
 * Data to get 
 * 
 *
 * species
 * 
 */





 /**
  * id - id 
  * height - height
  * type - types[0].type.name
  * sprites - sprites.front_default && sprites.front_shiny
  * name - name
  * 
  */