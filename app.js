let main = document.querySelector('main');
let cursor = document.querySelector('#Jerry');
let h2 = document.querySelector('h2');
let tom = document.querySelector('#Tom');
let speech = document.querySelector('.Speech img');

function getTomCenter(el){
    let rect = el.getBoundingClientRect();
    return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
}

let JerryNear = false;

main.addEventListener('mousemove', function(e){
   // move Jerry
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

   let tomCenter = getTomCenter(tom);
   console.log(`Tom's position ${tomCenter.x}  ${tomCenter.y}`);

   let dx = e.clientX - tomCenter.x;
   let dy = e.clientY - tomCenter.y;
   console.log(`Jerry's X position ${dx} $ Y position ${dy}`);

   let distance = Math.sqrt(dx * dx + dy * dy);
   console.log(`Distance ${distance}`);

   if (distance < 180) {
      JerryNear = true;
      console.log("if");
      h2.innerText = "HEY! Don’t come near me 😡";
      speech.style.opacity = '1';
      h2.style.opacity = '1';

   } else if (distance < 300 && JerryNear) {
      console.log("if else");
      h2.innerText = "Good. And don’t come again 😤";
      speech.style.opacity = '1';
      h2.style.opacity = '1';

   } else {
      console.log("else");
      h2.style.opacity = '0'; 
      speech.style.opacity = '0';
      JerryNear = false;
   }

})

// tom.addEventListener('mouseenter',function(){
//     console.log("😠");
//     h2.innerHTML = 'HEY! Don’t come near me 😠';
//     speech.style.opacity = '1';
//     h2.style.opacity = '1';
// })

// tom.addEventListener('mouseleave',function(){
//     console.log("😤");
//     h2.innerHTML = 'Good. And don’t come again 😤';
//     speech.style.opacity = '1';
//     h2.style.opacity = '1';
// })
