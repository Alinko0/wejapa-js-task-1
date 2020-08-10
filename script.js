const p =document.querySelector('.content');
const btn =document.querySelector(".btn");
const inputs =document.querySelector(".ids");
const container =document.querySelector(".first-div")
function generateR(min,max) {
    const random = Math.floor(Math.random()*(max - min)-1);
    return random
}

inputs.addEventListener('change',function () {
 const values = inputs.value.trim();
console.log(typeof( values), values);

const r = generateR(values,255);
console.log(r);

const g = generateR(values,255);
const b =generateR(values,255);
const rgba =`rgb(${r},${g},${b})`;

function changes() {

    if (!values || NaN || "") {
        p.textContent=`enter a valid number`;
       p.style.backgroundColor = 'red';
    }
       
       else if (values < 0 || values  > 255) {
           p.textContent=`enter a  number between 1-255`;

           p.style.backgroundColor = 'red';
       }
   
   else{
       container.style.backgroundColor =rgba;
       p.textContent =rgba;
       p.style.backgroundColor = rgba;
     
       
   }
}
btn.addEventListener('click',function (e) {
    e.preventDefault()

    changes()   
    console.log(values);
})

})


