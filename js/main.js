const listElements = document.querySelectorAll('.list__button--click')

listElements.forEach( el => {
    el.addEventListener('click', () => {
        el.classList.toggle('arrow')

        let height = 0,
            menu = el.nextElementSibling
        
        // El alto necesario para que se muestre el elemento - number
        console.log(menu.scrollHeight)

        if(menu.clientHeight === 0){
            height = menu.scrollHeight
        }

        menu.style.height = `${height}px`
    })
})