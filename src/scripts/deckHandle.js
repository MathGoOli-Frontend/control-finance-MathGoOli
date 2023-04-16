import {insertedValues, valuesCategory} from "./valuesData.js"
import { removeData } from "./dataHandle.js"
export function cardHandle({id, value, categoryID}){
    // cria cards
    const li = document.createElement('li')
    li.className = "card__container"

    const cardValue = document.createElement('span')
    cardValue.innerText = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    cardValue.className = "card__value"

    const cardType = document.createElement('span')
    cardType.innerText = valuesCategory[categoryID]
    cardType.className = "card__type"

    const excludeButton = document.createElement('img')
    excludeButton.src = "./src/assets/trash.svg"
    excludeButton.className = "card__button"
    excludeButton.dataset.cardId = id

    li.append(cardValue, cardType, excludeButton)

    return li

}

function excludeButtonHandle(){
    const buttons = document.querySelectorAll(".card__button")

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const id = event.target.dataset.cardId

            console.log(parseInt(id))
            removeData(id)
            deckHandle()
        })
    })

}

export function deckHandle(){
    const deck = document.querySelector(".deck__container")
    deck.innerHTML = ""
    const value = document.querySelector('.nav__totalValue')
    let sum = 0
    
    const radioButtons = document.querySelectorAll(".nav__radio")

    let filter = undefined
    radioButtons.forEach(radio => {
        if(radio.checked){
            if (radio.value === "all"){
                filter = undefined
            }else if (radio.value === "entry"){
                filter = 0
            } else if (radio.value === "outflow"){
                filter = 1
            }
        }
    })


    insertedValues.forEach((card) =>{
        if (filter === undefined){
            deck.appendChild(cardHandle(card))
            sum += card.value
        } else {
            if(filter === card.categoryID){
                deck.appendChild(cardHandle(card))
                sum += card.value
            }
        }
        
    })
    value.innerText = sum.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    excludeButtonHandle()
}

export function navFilterHandle(){
    const radioButtons = document.querySelectorAll(".nav__radio")
   radioButtons.forEach((button =>{
    button.addEventListener('change', (event) =>{
        const value = event.target.value

        if(value === "all"){
            deckHandle()
        } else if(value === "entry"){
            deckHandle(0)
        } else if(value === "outflow"){
            deckHandle(1)
        }
    })
}))
}