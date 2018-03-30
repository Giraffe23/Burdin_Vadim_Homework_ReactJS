
//---------------------------------[exercise 2, 4]-------------------------------------------------//

class Author {
	
	constructor (name) {
	    this.name = name;
	}
	
	get author() {
	    document.write(`<h1>Автор проекта: <strong>${this.name}</strong></h1><br>`);
	}
	
	greeting() {
	    document.write ('<h2>Welcome!</h2><br>');
	}
	
};
module.exports = Author;

//---------------------------------[exercise 3]-------------------------------------------------//

let createComponent = require('./div');

createComponent();


/*

module.exports = function(name) {
    this.author = function() {
	document.write('<div><h2>' + name + '</h2></div><br>');
	}

    this.greeting = function() {
        document.write('<h2>Welcome!</h2><br>');
    }
};
*/


	/*
	let body = document.getElementsByTagName('body');
	let div = document.createElement('div');
	body.appendChild(div);
	div.innerHTML = 'fullName';
	document.write(div);
	*/
	/*
	div.clickHandler = function() {
	    div.setAttribute(class, className);
	};
	
	*/
