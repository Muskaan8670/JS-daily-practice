let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let inner = document.querySelector('.inner');
let c =0;

btn.addEventListener('click', function(){
    btn.innerHTML="Downloading...";
    btn.style.pointerEvents = 'none';
    let stop = setInterval(() => {
      c++;
     h1.innerHTML = c+'%';
     inner.style.width = c+'%';
     console.log(c);
    },50);

    setTimeout(() => {
      clearInterval(stop);
      btn.style.opacity=0.5;
      btn.innerHTML="Download again!";
      btn.style.pointerEvents = 'auto';
      btn.style.opacity = 1;
      c = 0;
    },5000);

     
})