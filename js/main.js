// Necesito que cuando haga click sobre el elemento el elemento p resalte, se despliegue el parrafo escondido y la flecha cambie de direccion. Y al hacer denuevo click sobre el elemento vuelva a su estado original.


const question = document.querySelectorAll('.question')

question.forEach(element => {
    element.addEventListener('click', () => {
        if (element.nextElementSibling.classList.contains('hidden-answer')) {
            element.style.fontWeight = '700'
            element.nextElementSibling.classList.remove('hidden-answer')
            element.parentElement.nextElementSibling.classList.add('rotate-arrow')
        } else {
            element.style.fontWeight = '400'
            element.nextElementSibling.classList.add('hidden-answer')
            element.parentElement.nextElementSibling.classList.remove('rotate-arrow')
        }
    })

})

