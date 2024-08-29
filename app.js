const Controller = require('./controllers/controllers');
const [command] = process.argv.slice(2);

switch (command) {
    case 'readGenres':
        Controller.readGenres();
        break;
    case 'readSongs':
        Controller.readSongs();
        break;
    default:
        break;
}