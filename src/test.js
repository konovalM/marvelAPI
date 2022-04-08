const url = 'https://jsonplaceholder.typicode.com/posts';

function sendRequest(url){
    return fetch(url)

}

sendRequest(url).then(response => {
    console.log(response)
})
