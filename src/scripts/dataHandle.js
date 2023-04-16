// funções para gerenciamento de dados

import {insertedValues, valuesCategory} from "./valuesData.js"

export function removeData(id){
    const index = insertedValues.findIndex(element => element.id === id)
    insertedValues.splice(index, 1)
}

function newID (){
    let newid = 0
    insertedValues.forEach(card => {
        if(card.id >= newid){
            newid = card.id + 1
        }
    })

    return newid
}

export function addNewData(cardValue, cardCategoryID){
    insertedValues.push({
        id: newID(),
        value: cardValue, 
        categoryID: cardCategoryID})

}