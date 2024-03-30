const bloques = document.querySelectorAll('.bloque');

bloques.forEach( bloque =>{

    bloque.addEventListener('click',()=>{

        bloque.classList.toggle('active');
    })

    bloque.classList.remove('active');
})