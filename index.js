/* 
Things to fix
  add x button to iframe

  add "Scroll down" to main
  figure out how to get number in iframe, potentially switch radio?
*/
//#region global constants
  const frameWrap = document.getElementById("preview-wrapper");
  const frame = document.getElementById("preview");
//#endregion
//set up the main page
function init(){
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
      item.setAttribute("url",carouselArrays[i][j].preUrl);
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
  }
  //handle clicks on radio buttons
  function clickRadio(e){
    //check if clicked is current selection, then open more info
    if(e.target==e.target.parentElement.curClicked){
      //play some kind of transition animation
      //window.open(e.target.getAttribute("url"),"_self");
      frame.src = e.target.getAttribute("url");
      frameWrap.style.display = "flex";
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
  const mod = (n,m) => ((n%m)+m)%m;
  
  //put this inside document ready
  init();

  function test(){
    frameWrap.style.display="none";
    document.body.style.overflowY="auto";
  }