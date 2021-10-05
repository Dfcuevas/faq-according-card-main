let question = document.getElementsByClassName('question')

for(index of question) {
    index.addEventListener('click', mostrarAnswer)
}

function mostrarAnswer (e) {
    console.log(e.target.nextElementSibling.classList.contains('hidden-answer'))
    // e.target.nextElementSibling.classList.add('show-answer')
    if(e.target.nextElementSibling.classList.contains('hidden-answer')) {
        e.target.nextElementSibling.classList.remove('hidden-answer')
        e.target.style.fontWeight = '700'
        
    } else if (!e.target.nextElementSibling.classList.contains('hidden-answer')) {
        e.target.nextElementSibling.classList.add('hidden-answer')
        e.target.style.fontWeight = '400'
    }
    
}






