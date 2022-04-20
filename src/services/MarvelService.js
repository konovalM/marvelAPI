export default class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public'
    _apiKey = 'apikey=94fbed8d84f81a67bcde61e443c5bc5a'
    _startOffset = 210
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok){
            throw new Error(`Ошибка по url ${url} с кодом ${res.status}`)
            return
        }
        return await res.json();
    }
    //https://gateway.marvel.com:443/v1/public/characters/1011095?apikey=94fbed8d84f81a67bcde61e443c5bc5a
    getAllCharacters = async (offset = this._startOffset) => {
        const res = await this.getResource(`${this._apiBase}/characters?limit=9&offset=${offset}&${this._apiKey}`)
        return res.data.results.map(this.formatData)
    }
    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}/characters/${id}?${this._apiKey}`)
        return this.formatData(res.data.results[0])
    }
    formatData = (obj) => {
        return ({
            id: obj.id,
            name: obj.name,
            description: obj.description,
            thumbnail: obj.thumbnail.path + '.' + obj.thumbnail.extension,
            homepage: obj.urls[0].url,
            wiki: obj.urls[1].url,
            comics: obj.comics.items
        })
    }
}

