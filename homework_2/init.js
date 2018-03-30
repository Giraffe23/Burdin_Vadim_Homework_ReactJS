//import './author.js';

let Author = require('./author');

let authorInstance = new Author('Бурдин Вадим Станиславович');
    authorInstance.author; 
    authorInstance.greeting();




module.exports = function() {
    Author
};





/*
//let nowDate = require ('./date');
module.exports = function() {
    nowDate
};

nowDate();

function nowDate(id) {
    id.innerHTML = Date();
}
*/