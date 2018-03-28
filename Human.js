
//-------------------------------------[exercise 3]-----------------------------------------------------//

class Human {
	constructor(name, age, dateOfBirth){
	    this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
	}
	displayInfo () {
	    return `Имя: ${this.name}, возраст: ${this.age}, дата рождения: ${this.dateOfBirth}`;
	}
}
class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department){
	    super (name, age, dateOfBirth);
		this.salary = salary;
		this.department = department;
	}
	displayInfo () {
	    return `${super.displayInfo()}, оклад: ${this.salary}, отдел: ${this.department}`;
	}
}
class Manager extends Employee {
    constructor(name, age, dateOfBirth,salary, department, developers){
	    super (name, age, dateOfBirth, salary, department);
		this.developers = [];
	}
	displayInfo () {
	    return `${super.displayInfo()}, разработчики: ${this.developers}`;
	}
	set developer (newDeveloper) {
	    this.developers.push(newDeveloper);
	}
	get developer() {
	    return `Разработчики: ${this.developers}`;
	}
	removeDev(devName) {
	    this.developers.splice(this.developers.indexOf(devName), 1);
	}
}
class Developer extends Employee {
	constructor(name, age, dateOfBirth,salary, department, manager){
	    super (name, age, dateOfBirth, salary, department);
	    this.manager = manager;
	}
	displayInfo () {
	    return `${super.displayInfo()}, менеджер: ${this.manager}`;
	}
	set newManager (value) {
	    this.manager = value;
	}
}
//---------------------------------------------------------------------------------------------------//

let vasja = new Employee('Vasja', 42, '1975-06-10', 10000, "Accounting");
console.log(vasja.displayInfo());


let petja = new Manager('Petja', 22, '1997-06-10', 10000, "Accounting");
petja.developer = 'Nikolaj';
petja.developer = 'Viktor';
petja.developer = 'Egorka'
//console.log(petja.developer);
console.log(petja.displayInfo());
petja.removeDev('Egorka');
console.log(petja.displayInfo());

let oleg = new Developer('Oleg', 22, '1997-06-10', 10000, "Development", 'Petja');
oleg.newManager = 'Vasja';
//console.log(oleg.manager);
console.log(oleg.displayInfo());

