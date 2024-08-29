class View {
    static showError(err){
        console.log(err);
    }

    static showData(data){
        console.table(data);
    }
}

module.exports = View;