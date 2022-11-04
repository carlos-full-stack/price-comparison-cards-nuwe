const open = document.querySelectorAll('.open');
const container = document.getElementById('container');
const close = document.getElementById('close');
const submit = document.getElementById('submit');


open.forEach(function(button) {
    button.addEventListener ("click", (event) => {
           container.classList.add('show');
  });
  
});

close.addEventListener("click", (event) => {
        container.classList.remove('show');
});

submit.addEventListener("click", (event) => {
       alert("¡Suscripcion confirmada!");
});