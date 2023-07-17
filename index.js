/* 
Things to fix
  which radio is selected, need to have one for each carousel
*/

let curCodeRadio=document.querySelector("#coding-item-0");

const codingItems = [
  {title:"One More Shot",preUrl:"Previews/Code/OneMoreShotPre.html",imgUrl:"Previews/Code/OneMoreShot.png",bgUrl:"Previews/Code/OneMoreShotBG.png"},
  {title:"Tarot Journal",preUrl:"Previews/Code/TarotJournalPre.html",imgUrl:"Previews/Code/TarotJournal.png",bgUrl:"Previews/Code/TarotJournalBG.png"},
  {title:"A Dress of Stars",preUrl:"Previews/Code/DressStarsPre.html",imgUrl:"Previews/Code/DressStars.png",bgUrl:"Previews/Code/DressStarsBG.png"}
];
const animationItems = [
  {title:"Something Blue",preUrl:"Previews/Code/OneMoreShotPre.html",imgUrl:"Previews/Code/OneMoreShot.png",bgUrl:"Previews/Code/OneMoreShotBG.png"},
  {title:"Tarot Journal",preUrl:"Previews/Code/TarotJournalPre.html",imgUrl:"Previews/Code/TarotJournal.png",bgUrl:"Previews/Code/TarotJournalBG.png"},
  {title:"A Dress of Stars",preUrl:"Previews/Code/DressStarsPre.html",imgUrl:"Previews/Code/DressStars.png",bgUrl:"Previews/Code/DressStarsBG.png"}
];
const illustrationItems = [
  {title:"Hemlock Glade",preUrl:"Previews/Code/OneMoreShotPre.html",imgUrl:"Previews/Code/OneMoreShot.png",bgUrl:"Previews/Code/OneMoreShotBG.png"},
  {title:"Tarot Journal",preUrl:"Previews/Code/TarotJournalPre.html",imgUrl:"Previews/Code/TarotJournal.png",bgUrl:"Previews/Code/TarotJournalBG.png"},
  {title:"A Dress of Stars",preUrl:"Previews/Code/DressStarsPre.html",imgUrl:"Previews/Code/DressStars.png",bgUrl:"Previews/Code/DressStarsBG.png"}
];
const brandingItems = [
  {title:"One More Shot",preUrl:"Previews/Code/OneMoreShotPre.html",imgUrl:"Previews/Code/OneMoreShot.png",bgUrl:"Previews/Code/OneMoreShotBG.png"},
  {title:"Tarot Journal",preUrl:"Previews/Code/TarotJournalPre.html",imgUrl:"Previews/Code/TarotJournal.png",bgUrl:"Previews/Code/TarotJournalBG.png"},
  {title:"A Dress of Stars",preUrl:"Previews/Code/DressStarsPre.html",imgUrl:"Previews/Code/DressStars.png",bgUrl:"Previews/Code/DressStarsBG.png"}
];
const educationItems = [
  {title:"One More Shot",preUrl:"Previews/Code/OneMoreShotPre.html",imgUrl:"Previews/Code/OneMoreShot.png",bgUrl:"Previews/Code/OneMoreShotBG.png"},
  {title:"Tarot Journal",preUrl:"Previews/Code/TarotJournalPre.html",imgUrl:"Previews/Code/TarotJournal.png",bgUrl:"Previews/Code/TarotJournalBG.png"},
  {title:"A Dress of Stars",preUrl:"Previews/Code/DressStarsPre.html",imgUrl:"Previews/Code/DressStars.png",bgUrl:"Previews/Code/DressStarsBG.png"}
];
const carouselArrays = [codingItems,animationItems,illustrationItems,brandingItems,educationItems];

function init(){
  let carousels = document.querySelectorAll(".carousel");
  for(let i=0;i<carousels.length;i++){
    let carousel = carousels[i];
    let name=(carousel.id.substring(carousel.id.indexOf('-')+1,carousel.id.length));
    let cards = document.createElement("div");
    cards.className="carousel-cards";
    carousel.appendChild(cards);
    let radio = document.createElement("div");
    radio.className="carousel-radio";
    carousel.appendChild(radio);

    for (let j=0; j<carouselArrays[i].length;j++){
      //set up radio elements
      let item = document.createElement("input");
      item.type = "radio";
      item.id = name+"-item-"+j;
      item.name = name+"-list";
      item.setAttribute("url",carouselArrays[i][j].preUrl);
      if(j==0) item.checked = true;
      radio.appendChild(item);

      //set up cards
      let card = document.getElementById("card-label-template").cloneNode(true);
      card.removeAttribute("class");
      card.removeAttribute("id");
      card.setAttribute("for",item.id);
      card.querySelector(".card-content img").src = carouselArrays[i][j].imgUrl;
      card.querySelector(".card-content h2").innerHTML = carouselArrays[i][j].title;
      card.querySelector(".card-bg img").src = carouselArrays[i][j].bgUrl;
      cards.appendChild(card);
    }
  }  
    let decks = document.querySelectorAll(".carousel-cards");
    for(let j=0;j<decks.length;j++)
      cycle(decks[j].children,0);
    $('input[type="radio"]').bind('click', clickRadio);
  }
  //jquery to bind onclick to each radio
  function clickRadio(e){
    //check if clicked is current selection, then open more info
    if(e.target==curCodeRadio){
      //play some kind of transition animation
      window.open(e.target.getAttribute("url"),"_self");
    }
    else{
      let cards = e.target.parentElement.parentElement.querySelector(".carousel-cards").children;
      let selected = parseInt(e.target.id.slice(-1));
      cycle(cards,selected);
    }
    curCodeRadio=e.target;
  }
  async function cycle (cards,selected){
    cards[selected].className="front";
    cards[selected].setAttribute("animate","false");
    cards[mod(selected+1,cards.length)].className="right";
    cards[mod(selected+1,cards.length)].setAttribute("animate","false");
    cards[mod(selected-1,cards.length)].className="left";
    cards[mod(selected-1,cards.length)].setAttribute("animate","false");
    for(let i=0; i<cards.length-3; i++)
      cards[mod(selected+2+i,cards.length)].className="back";
    await new Promise(r => setTimeout(r, 400));
    cards[selected].setAttribute("animate","true");
  }
  const mod = (n,m) => ((n%m)+m)%m;
  init();