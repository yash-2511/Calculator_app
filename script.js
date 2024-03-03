let input=document.getElementById('input');
let btn=document.querySelectorAll('button');
let string="";

let arr= Array.from(btn);
arr.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        if(btn.innerHTML=='='){
            string=eval(string);
            input.value=string;
        }
        else if(btn.innerHTML=='AC'){
            string='';
            input.value=string;
        }
        else if(btn.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=btn.innerHTML;
            input.value=string;
        }
    })
    
});