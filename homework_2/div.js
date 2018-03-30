module.exports = function() {
	document.write (`<div class = "date" style="width: 800px; height: 40px; border: 1px solid black; text-align: center; font-size: 35px" onclick ="nowDate(this)">Click me!</div>`);
	document.write(`<script>const nowDate = elem => elem.innerHTML = Date()</script>`);
};