const p =document.querySelector('.content');
const btn =document.querySelector(".btn");
const inputs =document.querySelector(".ids");
<<<<<<< HEAD
const container =document.querySelector(".first-div")


function generateR() {
  const values = inputs.value.trim();
const random = Math.floor(Math.random()*((values)- 2));
console.log(random);

const r = random ;
const g = random  ;
const b = random ;
const rgba =`rgb(${r},${g},${b})`;
if (values === "") {
    console.log(values);
    
 p.textContent=`enter a valid number`;
   p.style.backgroundColor = 'red';
   container.style.backgroundColor = ''
}
   
   else if (values < 0 || values  > 255) {
       p.textContent=`enter a  number between 1-255`;
       container.style.backgroundColor = ''
=======
const container =document.querySelector(".first-div");
Const inputValue = inputs.value.trim();
function generateR() {
    const random = Math.floor(Math.random()*(inputValue));
    return random
}

inputs.addEventListener('change',function () {
console.log(typeof( values), values);

const r = generateR();
console.log(r);

const g = generateR();
const b =generateR();
const rgba =`rgb(${r},${g},${b})`;

function changes() {

    if (inputValue === "") {
        p.textContent=`enter a valid number`;
>>>>>>> 84aa928b183eb92cc7ac9e3aaae9a0acd71dc5c7
       p.style.backgroundColor = 'red';
   }

else{
   container.style.backgroundColor =rgba;
   p.textContent =rgba;
   p.style.backgroundColor = rgba;
 
   
}
  }

btn.addEventListener("click",function (e) {
    e.preventDefault()

    generateR()
})

