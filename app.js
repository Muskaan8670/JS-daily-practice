const para = document.querySelector('p');
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const text = para.innerHTML;

para.addEventListener('mouseenter',()=>{

   let iteration = 0;

   function randomText(){
     let str = text.split('').map((char,index)=>{
        if(iteration > index){
            return char;
        }
        return chars.split('')[Math.floor(Math.random()*53)]
     }).join('');
     
     para.innerHTML = str;

     iteration += 0.2 ;
   }

   setInterval(randomText,30);
   
});