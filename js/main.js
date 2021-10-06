let question = document.getElementsByClassName('question')
let containers = document.getElementsByClassName('faq-container')
let arrows = document.getElementsByClassName('arrow-img')

for(index of question) {
    index.addEventListener('click', mostrarAnswer)
}

function mostrarAnswer (e) {

    if(e.target.nextElementSibling.classList.contains('hidden-answer')) {
        e.target.nextElementSibling.classList.remove('hidden-answer')
        e.target.style.fontWeight = '700'
        
    } else if (!e.target.nextElementSibling.classList.contains('hidden-answer')) {
        e.target.nextElementSibling.classList.add('hidden-answer')
        e.target.style.fontWeight = '400'
    }
    
}

const rotarArrows = (e) => {
    e.target.style.transform = 'rotate(180deg)'
}


for (imgArrow of arrows) {
    imgArrow.addEventListener('click', rotarArrows)
}


