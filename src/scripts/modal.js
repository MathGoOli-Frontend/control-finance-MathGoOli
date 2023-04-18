/* Desenvolva sua lógica aqui */
import {addNewData} from "./dataHandle.js"
import {cardHandle, deckHandle, navFilterHandle} from './deckHandle.js'

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

export function handleModalSubmitButton(){
    const submitButton = document.querySelector(".register__submit")
    const inputs = document.querySelectorAll(".register__input")
    
    
    submitButton.addEventListener('click',(event) => {
        event.preventDefault()

        inputs.forEach(input => {
            if(input.value === ""){
                
                return alert("input sem valor")
            }
        })

        let value = parseFloat(inputs[0].value)
        inputs[0].value = ""

        console.log(value)
        console.log(typeof value === "number")

        let category = undefined
        if (inputs[1].checked){
            category = 0
        } else if (inputs[2].checked){
            category = 1
        }
        if (typeof value === "number"){
            addNewData(value, category)
            deckHandle()
            
        }

})


}