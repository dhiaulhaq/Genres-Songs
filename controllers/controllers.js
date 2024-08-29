const Model = require('../models/model');
const View = require('../views/view');

class Controller {
    static async readGenres() {
        try {
            let genres = await Model.readGenres();
            View.showData(genres);
        } catch (error) {
            View.showError(error);
        }
    }

    static async readSongs() {
        try {
            let songs = await Model.readSongs();
            View.showData(songs);
        } catch (error) {
            View.showError(error);
        }
    }
}

module.exports = Controller;