let question = document.getElementsByClassName('question')

document.addEventListener('click', function (e) {
    if(e.target.classList.contains('question')) {
        e.target.style.fontWeight = '700'
        e.target.nextElementSibling.classList.add('show-answer')
        e.target.parentElement.nextElementSibling.classList.add('rotate-arrow')
        // console.log(e.target.parentElement.nextElementSibling)
    }
    
})

