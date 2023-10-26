const fetch = require('node-fetch');

const makeGetRequest = async (name, age) => {
    const response = await fetch(`https://httpbin.org/post?name=${name}&age=${age}`, {
        method: 'GET'
    });
    return response;
}

makeGetRequest('Deniss', 32).then(response => {
    //console.log(response);
    if (response.status !== 200) {
        throw new Error ('GET request failed');
    } else {
        return response.json();
    }
}).then(json => {
    console.log(json);
})