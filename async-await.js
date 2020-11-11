const axios = require('axios');

async function getDogWithAsyncAwait(callback) {
    try {
        const listRes = await axios.get('https://dog.ceo/api/breeds/list/all');
        var keys = Object.keys(listRes.data.message);
        const breed = keys[Math.floor(keys.length * Math.random())];
        const imageRes = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
        callback(imageRes.data.message)
    }
    catch (err) {
        console.log(err);
    }
}

exports.getDog = getDogWithAsyncAwait;

