//-------------------------------------[exercise 2]-----------------------------------------------------//

const calculateArea = (figure = 'square', width = 0, height = 0, radius = 0) => {
	let figures = {
	    square        :  width**2,
	    quadrilateral :  width*height,
	    triangle      :  width*height/2,
        circle        :  Math.PI*(radius**2)
	},
	area = Math.round(figures[`${figure}`]*100)/100,
	input = `figure = ${figure}, width = ${width}, height = ${height}, radius = ${radius}`;
    return {area, figure, input};
};


//---------------------------------------------------------------------------------------------------//

let x = calculateArea();
console.log(x);

let square1 = calculateArea('square', 4);
console.log(square1);

let quadrilateral1 = calculateArea('quadrilateral', 4, 2);
console.log(quadrilateral1);

let triangle1 = calculateArea('triangle', 4, 2)
console.log(triangle1);

let circle1 = calculateArea('circle', 0, 0, 2);
console.log(circle1);