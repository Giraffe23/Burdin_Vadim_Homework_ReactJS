
class Author {
	
	constructor (name) {
	    this.name = name;
	}
	
	get author() {
	    document.write(`<h1>Автор проекта: <em>${this.name}</em></h1><br>`);
		return this.name;
	}
	
	greeting() {
	    document.write ('<h2>Welcome!</h2><br>');
	}
	
};

module.exports = Author;






