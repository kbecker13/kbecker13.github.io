let curCodeRadio=document.querySelector("#coding-item-0");
function init(){
    cycle(document.querySelector(".cards").children,0);
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
      let cards = e.target.parentElement.querySelector(".cards").children;
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