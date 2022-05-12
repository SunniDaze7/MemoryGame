//cards

const cardArray = [
    {
        name: "coffee",
        img: 'images/coffeecard.png'
    },
    {
        name: "strawberry",
        img: 'images/strawberrycard.png'
    },
    {
        name: "strawberry cup",
        img:'images/strawberrycup.png'
    },
    {
        name: "strawberry milk",
        img: 'images/strawberrymilkcard.png'
    },
    {
        name: "sun",
        img: 'images/suncard.png'
    },
    {
        name: "sunflower",
        img: 'images/sunflowercard.png'
    },
    {
        name: "coffee",
        img: 'images/coffeecard.png'
    },
    {
        name: "strawberry",
        img: 'images/strawberrycard.png'
    },
    {
        name: "strawberry cup",
        img:'images/strawberrycup.png'
    },
    {
        name: "strawberry milk",
        img: 'images/strawberrymilkcard.png'
    },
    {
        name: "sun",
        img: 'images/suncard.png'
    },
    {
        name: "sunflower",
        img: 'images/sunflowercard.png'
    }, 
    {
        name: "coffee",
        img: 'images/coffeecard.png'
    },
    {
        name: "strawberry",
        img: 'images/strawberrycard.png'
    },
    {
        name: "strawberry cup",
        img:'images/strawberrycup.png'
    },
    {
        name: "strawberry milk",
        img: 'images/strawberrymilkcard.png'
    },
    {
        name: "sun",
        img: 'images/suncard.png'
    },
    {
        name: "sunflower",
        img: 'images/sunflowercard.png'
    }, 
    {
        name: "coffee",
        img: 'images/coffeecard.png'
    },
    {
        name: "strawberry",
        img: 'images/strawberrycard.png'
    },
    {
        name: "strawberry cup",
        img:'images/strawberrycup.png'
    },
    {
        name: "strawberry milk",
        img: 'images/strawberrymilkcard.png'
    },
    {
        name: "sun",
        img: 'images/suncard.png'
    },
    {
        name: "sunflower",
        img: 'images/sunflowercard.png'
    },
    ]
    
    
    cardArray.sort(() =>  0.5 - Math.random())
    
    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []
    
    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute("src", "images/blank.png")
            card.setAttribute("data-id", i)
            card.addEventListener("click", flipCard)
            grid.appendChild(card)
        }
    }
    
    
    function flipCard(){
        let cardId = this.getAttribute("data-id")
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkforMatch, 500)
        }
    }
    
    
    
    function checkforMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]
    
        if(optionOneId == optionTwoId){
            alert('You have clicked the same image!')
            cards[optionOneId].setAttribute("src", "images/blank.png")
            cards[optionTwoId].setAttribute("src", "images/blank.png")
        }else if (cardsChosen[0] === cardsChosen[1]){
            alert("You have found a match!")
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener("click", flipCard)
            cards[optionTwoId].removeEventListener("click", flipCard)
            cardsWon.push(cardsChosen)
        }else{
            alert('Not a Match! Try Again.')
            cards[optionOneId].setAttribute("src", "images/blank.png")
            cards[optionTwoId].setAttribute("src", "images/blank.png")
        }
        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length / 2){
            resultDisplay.textContent = "Congratulations! You Win!"
        }
    
    }
    
    createBoard()