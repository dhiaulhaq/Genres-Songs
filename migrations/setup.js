const pool = require('../config/connection');


async function setupTables() {
    try {
        let dropTable = `DROP TABLE IF EXISTS "Songs", "Genres";`;

        let createGenres = `CREATE TABLE IF NOT EXISTS "Genres" (
            id SERIAL PRIMARY KEY,
            name VARCHAR NOT NULL
        );`;
        
        let createSongs = `CREATE TABLE IF NOT EXISTS "Songs" (
            id SERIAL PRIMARY KEY,
            title VARCHAR NOT NULL,
            duration INTEGER NOT NULL,
            artist VARCHAR NOT NULL,
            lyrics TEXT NOT NULL,
            "releasedDate" DATE NOT NULL,
            "GenreId" INTEGER NOT NULL REFERENCES "Genres"(id)
        );`;

        await pool.query(dropTable);
        console.log('DROP SUCCESS');
        
        await pool.query(createGenres);
        console.log('GENRES SUCCESS');
        
        await pool.query(createSongs);
        console.log('SONGS SUCCESS');
        
    } catch (error) {
        console.log(error);
    }
}

setupTables();