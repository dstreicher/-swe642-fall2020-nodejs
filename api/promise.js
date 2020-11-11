const axios = require('axios');

function getDogWithPromise(callback) {
    axios.get('https://dog.ceo/api/breeds/list/all')
        .then(res => res.data)
        .then(data => {
            var keys = Object.keys(data.message);
            const breed = keys[Math.floor(keys.length * Math.random())];
            return axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
        })
        .then(res => res.data)
        .then(data => callback(data.message))
        .catch(err => console.log(err));
}

exports.getDog = getDogWithPromise;

