const axios = require('axios')

async function obterPosts() {
    const url = `https://jsonplaceholder.typicode.com/posts/`
    const response = await axios.get(url)
    return response.data
}

async function obterPessoas(nome) {
    const url = `https://swapi.dev/api/people/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

module.exports = {
    obterPosts,
    obterPessoas
}
