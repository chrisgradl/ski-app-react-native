

export function fetchWorldCupMale() {
    const url = 'https://appfeeds.orf.at/alpine.v2/api/cuprankings/4';
    return fetch(url)
        .then(res => res.json());
}

export function fetchPersonDetail(id) {
    const url = `https://appfeeds.orf.at/alpine.v2/api/person/${id}`
    return fetch(url)
        .then(res => res.json());

}