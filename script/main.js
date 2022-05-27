const one = document.querySelector('.conteiner');


const two = document.querySelector('input[name="registrarion"]');

two.addEventListener('change' , (ev) => {
    console.log(ev.target);
    const text = ev.target.value;
    one.innerHTML = 'Good job!';

     console.log(text);

});