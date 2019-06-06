
let rocket_parts = document.querySelectorAll('.rocket-part');

let test = function () {
    let attribute = this.getAttribute("id");
    console.log(attribute);
    console.log('function run');

};

for (let i = 0; i < rocket_parts.length; i++) {
    rocket_parts[i].addEventListener('mouseenter', test, false)
}

console.log(rocket_parts);





