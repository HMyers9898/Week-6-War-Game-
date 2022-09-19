class Deck{
  constructor(){
      this.deck = [];
  }

createDeck(){
  let values = [ 2,3,4,5,6,7,8,9,10,11,12,13,14]
  let suits = ['Spade', 'Club', 'Heart', 'Diamond'];
  for (let i = 0; i < suits.length; i++) {
  for (let x = 0; x < values.length; x++) {
    let newCard = { Value: values[x], Suit: suits[i] };
        this.deck.push(newCard);
       }
  }
}
shuffleDeck(){
    let i = 0;
    let h = 0;
    let temp = 0;
    for (i = this.deck.length - 1 ; i > 0;i--){
       h = Math.floor(Math.random() * (i+1));
       temp = this.deck[i];
       this.deck[i] = this.deck[h];
       this.deck[h] = temp;
      }
  }
dealPlayerCards(){
    let index = Math.floor(Math.random()*this.deck.length);
    let card = this.deck[index];
    this.deck.splice(index,1);
    return card;
  }
}

class Player{ 
  constructor(){
    this.score = 0;
    this.cards=[] ;
  }
  takeACard(card){
    this.cards.push(card);
  }
  playCard(){
    return this.cards.pop();
  }
  newScore(){
    this.score++;
  }
}

class Game{
  constructor(){
    this.player1= new Player;
    this.player2 = new Player;
    this.deck = new Deck;
  }

start(){
  alert(`Start the game.`)
  const newDeck= this.deck
  newDeck.createDeck();
  newDeck.shuffleDeck();
  console.log(newDeck);
  for(let i = 0; i < 26; i++){
    let dealtCard= newDeck.dealPlayerCards();
    this.player1.takeACard(dealtCard);
    dealtCard = newDeck.dealPlayerCards();
    this.player2.takeACard(dealtCard);
      }
  for (let i =0; i <26; i++){
    let player1Deck= this.player1.playCard();
    let player2Deck= this.player2.playCard();
      console.log(player1Deck, player2Deck);
    if(player1Deck.Value > player2Deck.Value){
      this.player1.newScore();
      console.log('Player 1 wins this round!');
          }
      else if (player1Deck.Value < player2Deck.Value){
        this.player2.newScore();
        console.log('Player 2 wins this round!')
          }
      else{console.log('You tied, try again')}
        console.log(`Player 1 has: ${this.player1.score} points, and Player 2 has: ${this.player2.score} points`)
      }
    if(this.player1.score> this.player2.score){
        alert(`Player 1 has won.`)
      }
    else{ alert(`Player 2 has won.`)}

    alert('Fin.');

  }

}

let game= new Game;
game.start();