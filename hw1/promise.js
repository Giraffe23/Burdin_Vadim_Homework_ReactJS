
//-------------------------------------[exercise 5]-----------------------------------------------------//

function httpGet(url) {
    return new Promise(function(resolve, reject) {
	var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}
let res = [];
for(let i = 1; i <=10; i++){
	httpGet(`https://jsonplaceholder.typicode.com/users/${i}`)
    .then(
        response => res.push(JSON.parse(response)),
        error => console.log(`Rejected: ${error}`)
    );
}
console.log(res);




/*
function* range(start, stop) {
	for(let i = start; i <= stop; i++) {
	    yield `https://jsonplaceholder.typicode.com/users/${i}`;
	}
}
let generator = range(1, 10);
	

for(let value of generator){
	httpGet(value)
    .then(
        response => console.log (`Fulfilled:${JSON.stringify(response)}`),
        error => console.log(`Rejected: ${error}`)
    );
*/
