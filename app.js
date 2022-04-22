var dt= new Date().getHours();

var greet= document.getElementById("greeting")

if(dt >=0 && dt<12){
    greet.innerHTML="Good Morning"
    greet.style.display="block"
}
else if(dt>=12 && dt<=17){
    greet.innerHTML="Good AfterNoon"
    greet.style.display="block"
}
else{
    greet.innerHTML="Good Evening"
    greet.style.display="block"
}

setTimeout(function(){
    greet.innerHTML="";
    greet.style.display="none"
    del.style.display="none"
},10000)

const del= document.querySelector('.fa-times')
del.addEventListener('click',runEvent)

function runEvent(e){
    greet.innerHTML=""
    greet.style.display="none"
    del.style.display="none"
}


function colorChange(){
    setTimeout(function(){

        let color = document.getElementById('colorInput').value;
        document.body.style.backgroundColor=color;
    },1000)
}