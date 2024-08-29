const pool = require('../config/connection');
const { createGenre, createSong } = require('./class');

class Model {
    static async readGenres(){
        let query = `SELECT * FROM "Genres"`;
        let genres = (await pool.query(query)).rows.map(el => createGenre(el.id, el.name));
        return genres;
    }

    static async readSongs(){
        let query = `SELECT s.*, g.name AS "GenreName" FROM "Songs" s
        JOIN "Genres" g
        ON s."GenreId" = g.id`;
        let songs = (await pool.query(query)).rows.map(({id, title, duration, artist, lyrics, releasedDate, GenreId, GenreName}) => createSong(id, title, duration, artist, lyrics, releasedDate, GenreId, GenreName));
        return songs;
    }
}

module.exports = Model;