const url = `http://localhost:4231/posts`
fetch(url)
    .then(result => {
        return result.json()
    })
    .then(data => {
        console.log(data)
    })