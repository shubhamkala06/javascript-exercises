const getTheTitles = function(Books) {
    let titles = [];
    for (let i of Books) {
        titles.push(i['title']);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
