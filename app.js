let cursor = document.querySelector('#cursor');
let box = document.querySelector('.box');

let x=0, y=0;
addEventListener('mousemove',(e)=>{
    console.log(e.clientX,e.clientY);

    x = e.clientX ;
    y = e.clientY ;

    console.log(x,y);

    box.style.setProperty('--x', `${x}px`);
    box.style.setProperty('--y', `${y}px`);

    // document.body.style.setProperty('--x', e.clientX + 'px');
    // document.body.style.setProperty('--y', e.clientY + 'px');

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    if(e.clientY >=164 && e.clientY <= 200 && e.clientX >= 550 && e.clientX <= 800){
         box.style.background = 'radial-gradient(300px at var(--x) var(--y), rgba(198, 197, 197, 0) , rgb(0, 0, 0))';
         cursor.style.transform = 'translate(200%,200%)';            
    }
    else{
        box.style.background = 'radial-gradient(150px at var(--x) var(--y), rgba(198, 197, 197, 0) , rgb(0, 0, 0))';
        cursor.style.transform = 'translate(90%,90%)';
    }
});
