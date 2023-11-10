/*************************************************************
 * Filename: index.js
 * Description: Uses carouselData.js to populate the image carousels of the main page
 *              Executes input handling to rotate carousel and open/close preview iFrame
 * Copyright: 2023 Kaitlyn Becker
 *************************************************************/

/* 
Things to fix
  add x button to iframe
  rewrite preview bounce-in relative to text size rather than vh
  welcome text is smushed on tablet
  scrolling on landing, on tablet
  about me looks bad on tablet, figure out sizing
*/
//#endregion

//set up the main page
$( document ).ready(function() {
  //populate each portfolio carousel
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
      item.setAttribute("loc",i+'$'+j);
      //set the first item as "currently selected"
      if(j==0) {
        item.checked = true;
        radio.curClicked=item;
      }
      radio.appendChild(item);

      //set up cards
      let card = document.getElementById("card-label-template").cloneNode(true);
      card.removeAttribute("class");
      card.removeAttribute("id");
      card.setAttribute("for",item.id);
      card.querySelector(".card-content img").src = carouselArrays[i][j].imgUrl;
      card.querySelector(".card-content h2").innerHTML = carouselArrays[i][j].title;
      card.querySelector(".card-bg>img").src = carouselArrays[i][j].bgUrl;
      card.querySelector(".card-detail").innerHTML = carouselArrays[i][j].detail;
      cards.appendChild(card);
    }
  } 
    //bind click event to each radio button
    let decks = document.querySelectorAll(".carousel-cards");
    for(let j=0;j<decks.length;j++)
      cycle(decks[j].children,0);
    $('input[type="radio"]').bind('click', clickRadio);

} );

//handle clicks on radio buttons
function clickRadio(e){
  //check if clicked is current selection, then open more info
  if(e.target==e.target.parentElement.curClicked){
    var newSrc= `${$("#preview").attr('src').split("?")[0]}?${e.target.getAttribute("loc")}`;
    $("#preview").attr('src',newSrc);
    $("#preview-wrapper").css({display:"flex"});
    document.body.style.overflowY = "hidden";
  }
  else{
    let cards = e.target.parentElement.parentElement.querySelector(".carousel-cards").children;
    let selected = parseInt(e.target.id.slice(-1));
    cycle(cards,selected);
  }
  e.target.parentElement.curClicked=e.target;
}
//set location of each carousel card
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
//close the preview window and update carousel
function closePreview(){
  $("#preview-wrapper").hide();
  $(document.body).css({overflowY:'auto'});
  //get current card index for #preview and cycle current carousel
  let loc = $("#preview").contents().get(0).location.href.split("?")[1].split("$");
  let curCarousel = $(".carousel")[loc[0]];
  let cards = curCarousel.querySelector(".carousel-cards").children;
  let selected = parseInt(loc[1]);
  cycle(cards,selected);
  let radio = curCarousel.querySelector(".carousel-radio");
  radio.curClicked = radio.children[selected];
}
//keypress handling
$(document).keyup(function(e){
  if(e.key==="Escape"){
    console.log("pressed");
    if($("#preview-wrapper").is(":visible")) closePreview();
  }
});

//utility functions
const mod = (n,m) => ((n%m)+m)%m;