
document.addEventListener( 'DOMContentLoaded' , () =>{

  const cardArray= [ 
      {
          name: 'fries',
          img: 'images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'images/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'images/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'images/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'images/hotdog.png'
        },
        {
          name: 'fries',
          img: 'images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'images/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'images/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'images/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'images/hotdog.png'
        }
]
cardArray.sort(() => 0.5- Math.random() ) ;
const resultDisplay = document.querySelector('#result')
 

resultDisplay.textContent= 0 ;


const buttonControl = document.querySelector('#button1');
// buttonControl.addEventListener('click' , startAgain ) ;
var cardsChosen= [] 
var cardsChosenId= [] 
var cardsWon=  [] ;
 
  //create board 
  var grid = document.querySelector('.grid' ) ;

  function createBoard() {
    
    if( grid.length == cardArray.length ){
     cardArray.sort(() => 0.5- Math.random() ) ;
      

      
    }
      for( let i  = 0 ; i< cardArray.length ; i++ ){
          const card = document.createElement('img')
          card.setAttribute('src' , 'images/blank.png' );
          card.setAttribute('border' , '1px solid red')
          card.setAttribute('data-id' , i ) ;
         
          card.addEventListener( 'click'  , flipcard ) ;
          grid.appendChild( card ) ;
          
      }
      
      
        }
  


//check for match 

function checkForMatch() {
var cards = document.querySelectorAll( 'img')
const optionOneId = cardsChosenId[0] ;
const optionTwoId = cardsChosenId[1] ;

if( cardsChosenId[0] == cardsChosenId[1]){
  alert('you clicked on the same image ');
  cards[optionOneId].setAttribute('src' , 'images/blank.png' ) ; 
  cards[optionTwoId].setAttribute('src' , 'images/blank.png' ) ; 
}

else if( cardsChosen[0] === cardsChosen[1]){
  alert('you found a match ') 
  cards[optionOneId].removeEventListener('click' , flipcard);
  cards[optionTwoId].removeEventListener('click' , flipcard) ;
  
  cardsWon.push(cardsChosen);
  
}
else {
  cards[optionOneId].setAttribute('src' , 'images/blank.png' ) ; 
  cards[optionTwoId].setAttribute('src' , 'images/blank.png' ) ; 
  alert('sorry try again ')
    }
    cardsChosen = [] 
    cardsChosenId= [] 
    resultDisplay.textContent = cardsWon.length
    if( cardsWon.length == cardArray.length/2 ){
      resultDisplay.textContent ="Hurrey u found all pairs "
    }
   


}
  
//flip your card 
function flipcard() {
let cardId = this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name)
cardsChosenId.push(cardId) ;
this.setAttribute('src' , cardArray[cardId].img)
if(cardsChosen.length== 2 ){
  setTimeout(checkForMatch, 20 ) ;
}
}



createBoard() ;


})

function generate() {
  
  window.location.reload() ; 
}