const pool = require('../config/connection');
const { readFile } = require('fs').promises;

async function seedData() {
    try {
        let data = JSON.parse(await readFile('./data/genres.json', 'utf-8'))
            .map(el => `('${el.name}')`).join(',\n'); // convert data json menjadi string dengan format query

        let insertGenres = `INSERT INTO "Genres" (name) VALUES ${data};`;

        let insertSongs = `INSERT INTO "Songs" (title, duration, artist, lyrics, "releasedDate", "GenreId")
VALUES
('Idol', 123, 'Yoasobi', 'lorem ipsum dolor sit amet', '2023-06-06', 4),
('Quite Like You', 204, 'The Script', 'lorem ipsum dolor sit amet', '2017-11-03', 1);`;

        await pool.query(insertGenres);
        console.log('INSERT GENRES SUCCESS');

        await pool.query(insertSongs);
        console.log('INSERT SONGS SUCCESS');
    } catch (error) {
        console.log(error);
    }
}

seedData();