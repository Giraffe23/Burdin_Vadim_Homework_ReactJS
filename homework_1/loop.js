//-------------------------------------[exercise 1]-----------------------------------------------------//

const loop = (times = 0, callback = null) => {
    let res = '';
	while(times > 0 && callback != null) {
	    res += callback;
		times--;
	}
	return res;
}

//---------------------------------------------------------------------------------------------------//

let callback1 = function(x) {
    return x;
};
/*
function* callback2 (times) {
    for(i = 0; i < times; i++){
	    yield i;
	}	
}
*/
let one = loop(10, callback1('__/\\__'));
let two = loop(10, callback1('~ABCabc~'));
let three = loop(10);

console.log(one, two, three);

