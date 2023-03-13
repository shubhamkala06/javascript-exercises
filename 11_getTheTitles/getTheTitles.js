const getTheTitles = function(Books) {
    let titles = [];
    for (let i of Books) {
        titles.push(i['title']);
    }
    return titles;
};

//-----------Alternate Solution-------------
//const getTheTitles = function(array) {
//    return array.map(book => book.title);
//  };

// Do not edit below this line
module.exports = getTheTitles;
