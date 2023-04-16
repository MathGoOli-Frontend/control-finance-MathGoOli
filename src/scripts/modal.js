/* Desenvolva sua lógica aqui */

export function handleModal(){
    const button = document.getElementsByClassName('header__button')[0]
    const modal = document.querySelector('.register__dialog')
    button.addEventListener('click',()=>{
        
        modal.showModal()
    })
}

export function handleModalCloseButton(){
    const modal = document.querySelector('.register__dialog')
    const buttons = document.querySelectorAll('.register__close')
    
    buttons.forEach((button) => {
        button.addEventListener('click', (event) =>{
            event.preventDefault()
            modal.close()
        })
    })
}