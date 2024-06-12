let a = 4;
console.log(Math.pow(a, 2));
console.log(Math.pow(a, 3));
console.log(Math.pow(a, 4));

const el = document.querySelector('.test');
const elOut = document.querySelector('.test-output');
el.addEventListener('change', (ev) => {

      let variable = ev.target.value;
      console.log(variable);
      elOut.innerHTML = variable;
}
)

let b = 10;
b = b - 1;
console.log(b)

let c = 10;
let d = 12;
let e = c + d;

console.log(e);