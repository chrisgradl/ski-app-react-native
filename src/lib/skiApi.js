const url = 'https://appfeeds.orf.at/alpine.v2/api/cuprankings/4';

export function fetchWorldCupMale() {
    return fetch(url)
        .then(res => res.json());
}