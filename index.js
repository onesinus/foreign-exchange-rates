export default function getLatest() {
    fetch('https://api.exchangeratesapi.io/latest')
        .then(reponse => {
            return response.json();
        })
        .then(exchanges => {
            return exchanges;
        })
        .catch(err => {
            return err;
        });
}