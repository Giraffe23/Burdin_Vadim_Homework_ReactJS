
//-------------------------------------[exercise 4]-----------------------------------------------------//

function go() {
    let obj = {};
    function* profile() {
        yield obj['firstName'] = prompt(`Your first name:`, `Vadim`);
        yield obj['lastName'] = prompt(`Your last name:`, `Burdin`);
        yield obj['age'] = prompt(`How old are you?`, 42);
        yield obj['country'] = prompt(`Where are you from?`, `Russia`);
        yield obj;
    }
    let generator = profile();
    for(let value of generator) {
        console.log(value);
    }
}
