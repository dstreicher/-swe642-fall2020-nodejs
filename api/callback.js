const request = require('request');

function getDogWithCallback(callback) {
    request('https://dog.ceo/api/breeds/list/all', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        var keys = Object.keys(body.message);
        const breed = keys[Math.floor(keys.length * Math.random())];
        request(`https://dog.ceo/api/breed/${breed}/images/random`, { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            callback(body.message);
        });
    });
}

exports.getDog = getDogWithCallback;

