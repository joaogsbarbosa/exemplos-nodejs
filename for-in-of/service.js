const axios = require('axios')

async function obterPosts() {
    const url = `https://jsonplaceholder.typicode.com/posts/`
    const response = await axios.get(url)
    return response.data
}

module.exports = {
    obterPosts
}
