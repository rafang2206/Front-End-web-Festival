document.addEventListener('DOMContentLoaded', iniciarApp)

function iniciarApp(){
    crearGaleria()
    scrollNav();
}

function scrollNav(){
    const enlaces = document.querySelectorAll('.nav__ul a')
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e){
            console.log(e.target)
        })
    })
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <img loading="lazy" src="/src/img/thumb/${i}.jpg" alt="imagen">
        `;
        imagen.onclick = function(){
            monstrarImagen(i);
        }
        galeria.appendChild(imagen)
        
    }
}

function monstrarImagen(id){
    const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <img loading="lazy" src="/src/img/grande/${id}.jpg" alt="imagen">
        `;
        //crear el overlay con la imagen
        const overlay = document.createElement('DIV');
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');

        // boton para cerrar el modal
        const cerrarModal = document.createElement('P');
        cerrarModal.textContent = 'X';
        cerrarModal.classList.add('btn-cerrar');
        cerrarModal.onclick = function(){
            const body = document.querySelector('body');
            body.classList.remove('fijar-body');
            overlay.remove();

        }
        overlay.appendChild(cerrarModal)

        //añadirlo al html
        const body = document.querySelector('body');
        body.appendChild(overlay)
        body.classList.add('fijar-body');
}