// let counting start by 0
let count = 0;

// let applicate the Dom methode
 const value = document.querySelector("#value");
 const btns = document.querySelectorAll(".btn");

// let apply foreach element :
btns.forEach(function(btn) {
  btn.addEventListener("click", function(e){
    let event = e.target.classList;
    if(event.contains("decrease")){
        count--;
    }else if(event.contains("increase")){
        count++;
    }else{
        count = 0;
    }
    if(count > 0){
        value.style.color = "green";
    } else if( count < 0){
        value.style.color = "red";
    } else{
        value.style.color = "black";
    }
    value.textContent = count;
  })
});