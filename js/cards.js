let cardTitleList = ['Animais','Arquitetura','Cidades','Decoração','Esportes','Natureza','Paisagem','Pessoas','Refeições']
let cardQuantity = cardTitleList.length
let gallery = document.querySelector('.gallery')

function createCard(){    

    for (let i = 0; i < cardQuantity; i++){
        let card = document.createElement('div')
        card.classList.add('gallery-card')
        card.setAttribute('id',`card-${i+1}`)

        let cardTitle = document.createElement('h2')
        cardTitle.classList.add('gallery-card-title')
        cardTitle.textContent = cardTitleList[i]

        let cardBtn = document.createElement('a')
        cardBtn.classList.add('gallery-card-btn')
        cardBtn.textContent = 'Mais fotos'

        card.appendChild(cardTitle)
        card.appendChild(cardBtn)

        gallery.appendChild(card)
    }
}

createCard()