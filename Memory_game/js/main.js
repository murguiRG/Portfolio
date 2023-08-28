class Card{
    constructor(cardEmoji, flippedCards) {        
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
        cardContent.innerHTML = cardEmoji;

        cardElement.appendChild(cardContent);   
        cardElement.flipped = false;

        //Establishes that the cardContent div is a property under the same name
        //within cardElement
        cardElement.cardContent = cardContent;

        this.cardElement = cardElement;
        this.flipCards = this.flipCards.bind(this);
        this.cardElement.addEventListener("click", () => this.flipCards(flippedCards));
    }    
    flipCards(flippedCards)
    {        
        if (!this.cardElement.flipped)

        {   //Appends the class to the HTML part of the object (cardElement)
            this.cardElement.classList.add("flipped"); 
            this.cardElement.flipped = true;                            
            flippedCards.push(this);   
            
            console.log(flippedCards); 

            if (flippedCards.length === 2) {
                
                if (flippedCards[0].cardElement.cardContent.innerText !== flippedCards[1].cardElement.cardContent.innerText){

                    setTimeout(() => {
                        flippedCards.forEach(card => {
                            card.cardElement.classList.remove("flipped");
                            card.cardElement.flipped = false;                               
                        });
                        flippedCards.length = 0;
                    }, 800); //Delays in ms                    
                }
                //If cards are a pair
                else {
                    flippedCards.length = 0;
                }
            }
        }  
    }
}

function dealCards() {

    let flippedCards = [];

    let cardGroup1 = ["👩🏽‍🦱", "👩🏽‍🦱", "🦆", "🦆", "🔥", "🔥", "🦜", "🦜"];
    let cardGroup2 = ["🐬", "🐬", "✅", "✅", "🐍", "🐍", "🐡", "🐡"];
    let cardGroup3 = ["😍", "😍", "👖", "👖", "🌸", "🌸", "😡", "😡"];
    let cardGroup4 = ["🦩", "🦩", "🦦", "🦦", "✏️", "✏️", "⭐", "⭐"];
    const allCards = cardGroup1.concat(cardGroup2, cardGroup3, cardGroup4);    

    const shuffledCards = allCards.sort(() => Math.random() - 0.5);

    const cardGroups = [
        shuffledCards.slice(0, 8),
        shuffledCards.slice(8, 16),
        shuffledCards.slice(16, 24),
        shuffledCards.slice(24, 32)
    ];

    const container = document.getElementById("container");

    cardGroups.forEach(cardGroup => {
        cardGroup.forEach(cardEmoji => {
            //Calls the constructor
            const newCard = new Card(cardEmoji, flippedCards); 
            container.appendChild(newCard.cardElement);
        })
    })
}
dealCards();