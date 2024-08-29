class Genre {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

class Song {
    constructor(id, title, duration, artist, lyrics, releasedDate, GenreId, GenreName) {
        this.id = id
        this.title = title
        this.duration = duration
        this.artist = artist
        this.lyrics = lyrics
        this.releasedDate = releasedDate
        this.GenreId = GenreId
        this.GenreName = GenreName
    }
}

class Factory {
    static createGenre(id, name){
        return new Genre(id, name);
    }

    static createSong(id, title, duration, artist, lyrics, releasedDate, GenreId, GenreName){
        return new Song(id, title, duration, artist, lyrics, releasedDate, GenreId, GenreName);
    }
}

module.exports= Factory;