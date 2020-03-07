const axios = require("axios");

module.exports = function getLatest() {
    return axios({
        method: 'GET',
        url: 'https://api.exchangeratesapi.io/latest'
    })
    .then((exchanges) => {
        console.log(exchanges);
        return exchanges;
    })
    .catch((err) => {
        return {err};
    });
}

// getLatest()
//     .then(exchangs => {
//         console.log(exchangs);
//     })