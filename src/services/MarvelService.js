export default class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public'
    _apiKey = 'apikey=94fbed8d84f81a67bcde61e443c5bc5a'
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok){
            throw new Error(`Ошибка по url ${url} с кодом ${res.status}`)
            return
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}/characters?limit=9&offset=210&${this._apiKey}`)
    }
    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}/characters/${id}?${this._apiKey}`)
    }
}

