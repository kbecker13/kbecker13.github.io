/*#region Journal Builder Pseudocode
	Things to fix
        ...
        card scaling
        test disallowing table to shrink: might make better output
    Features to add
        add a general notes section
        export button instead of print view: opens a new tab that's sized for 8.5x11?
        pretty fonts  : different font for titles: this one is too squished  
        card notes: consistent sizes for all the notes?
        add common combinations
        rewrite to use jquery   
        transitions when adding elements? can transition flex?
        prettify the "how many cards" form    
        custom cursors for general, rotate and grabbing (palmistry hand!), lock/unlock, random
        Guide in footer
        error message for unsupported browsers and too small: https://www.w3schools.com/howto/howto_css_modals.asp
        welcome tutorial?
        on resize window, check if too small etc

Resources
    https://www.htmlgoodies.com/cms/styling-select-css-html/ css variables for my colors!
 #endregion
 */

 //#region constants
    //HTML elements
    const table = document.getElementById("tabletop");
    // probability of a card being upright
    const revProb = 66;
    //card sizes
    const cardW=299; const cardH=517; const cardPad = 10;
    //img srcs
    const suitImages = ["Assets/TarotMajor.png","Assets/TarotCups.png","Assets/TarotPentacles.png","Assets/TarotSwords.png","Assets/TarotWands.png"];
    const cardBack = "Assets/TarotBack.png"
    //custom cursors
    const cursorRot = "Assets/Icons/refresh.png";
    //card data
    const deck = [];
    const cardSuits=["Pick a suit","Major","Cups","Pentacles","Swords","Wands"];
    const cardsMinor=["Pick a card","Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Page","Knight","Queen","King"];
    const cardsMajor=["Pick a card","The Fool","The Magician","The High Priestess","The Empress","The Emperor","The Hierophant",
    "The Lovers","The Chariot","Strength","The Hermit","Wheel of Fortune","Justice","The Hanged Man","Death","Temperance",
    "The Devil","The Tower","The Star","The Moon","The Sun","Judgement","The World"];
    const cardData = JSON.parse(data);
    //util
    const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//#endregion

//#region global variables 
    let spread=[]; //container for all card objects
    let locrot;//are we translating 0 or rotating 1? 
    let startX=0; let startY=0; //translation 
    let curRot=0;//rotation
    let tWidth="40%"; let tHeight="36vh"; 
    let cardScale = 0.5;//what is the scale of the cards?
    let dragging;//what element is being dragged?
//#endregion

//#region initialize
function init(e){
    //#region initialize deck
    for (let i=0;i<78;i++)deck[i]=i;
    //#endregion

    let num = parseInt(document.forms["start"]["numCards"].value);
    document.getElementById("start").remove();
    document.getElementById("header").style.display="flex";
    document.getElementsByTagName("footer")[0].style.display="flex";

    let notes=document.getElementById("notes");

    //#region make cards and notes
    for (let i=0;i<num;i++){
        //#region create card container
        let card = document.getElementById("cardTemplate").cloneNode(true);
        card.id="card"+i;
        card.index = i;
        card.style.width=cardW+"px";
        card.style.height=cardH+"px";
        card.style.display="initial";
        //#endregion

        //#region position front and back images
        let front=card.querySelector(".cardFront");
        let back=card.querySelector(".cardBack");

        back.style.width=cardW+"px";
        back.style.height=cardH+"px";

        front.style.width=cardW+"px";
        front.style.height=cardH+"px";
        front.style.transform="rotateY(180deg) rotate(0deg)";
        //#endregion

        //#region add label to card
        let cardLbl = card.querySelector(".cardLabel");
        cardLbl.innerHTML=i+1;
        cardLbl.style.fontSize=cardH/4+"px";
        //#endregion

        //add card to table and spread
        table.appendChild(card);
        spread.push(card);

        //#region create card select sections
        let cardSelect = document.getElementById("cardSelectTemplate").cloneNode(true);
        cardSelect.id = "cardSelect"+i;
        cardSelect.index = i;
        cardSelect.style.display = "flex";
        cardSelect.querySelector("h2").innerHTML+=" "+(i+1)+": &nbsp;"
        cardSelect.linkedCard = card;
        document.getElementById("spreadInfoInner").appendChild(cardSelect);
        //#endregion

        //#region create card note sections
        let cardNote = document.getElementById("cardNoteTemplate").cloneNode(true);
        cardNote.id = "cardNote"+i;
        cardNote.index = i;
        cardNote.querySelector("legend").innerHTML= "Card "+(i+1)+": ";
        cardSelect.cardNote = cardNote;
        notes.insertBefore(cardNote,notes.querySelector("#notesSpacer"));
        //#endregion
    }
    //#endregion

    //determine initial card layout
    cardLayout();

    //#region init listeners
    //set up scroll boxes
    let scrollBoxes = document.getElementsByClassName("scrollBox");
    for(let i=0; i<scrollBoxes.length; i++){
        //get scrollable
        let scrollable = scrollBoxes[i].querySelector(".scrollable");
        //programmatically add shadow and scrollwrapper
        let shadow = document.createElement("div");
        shadow.className="shadowed";
        let wrapper= document.createElement("div");
        wrapper.className="scrollWrapper";
        scrollBoxes[i].appendChild(shadow);
        scrollBoxes[i].appendChild(wrapper);

        //programmatically add top and bottom to scrollable
        let top=document.createElement("div");
        top.className = "top";
        let bottom=document.createElement("div");
        bottom.className = "bottom";
        top.shadow=shadow;
        bottom.shadow=shadow;
        scrollable.appendChild(top);
        scrollable.appendChild(bottom);
        //append scrollable inside scrollwrapper
        wrapper.appendChild(scrollable);
        //apply listeners to top and bottom
        observer.observe(top);
        observer.observe(bottom);
    }

    //start table size listener
    reObserver.observe(document.getElementById("table"));
    //#endregion

    //#region clean up templates
    document.getElementById("cardSelectTemplate").remove();
    document.getElementById("cardNoteTemplate").remove();
    document.getElementById("cardTemplate").remove();
    //#endregion
}
//#endregion

//#region mouse event handling
function hover(e){
    if(dragging==null){
        let cen = getCenter(e.target);
        let threshold=cen.side*0.45;
        let dista = dist(e.clientX,e.clientY,cen.x,cen.y);
        e.target.style.cursor = dista>threshold ? "url("+cursorRot+") 9 9,ne-resize":"grab";
        locrot = dista>threshold ? 1:0;
    }
}
function dragMouseDown(e) {
    e.preventDefault();
    dragging=e.target;//set which object is being dragged/rotated
    dragging.classList.add("selectedCard");
    document.body.style.cursor = dragging.style.cursor;
    startX = e.clientX;
    startY = e.clientY;
    // call a function whenever the cursor moves:
    //detect whether to move or rotate
    document.onmousemove = locrot == 0 ? elementDrag : elementRotate;
    document.onmouseup = closeDragElement;//when we drop
}
function elementDrag(e) {
    e.preventDefault();
    // calculate the new cursor position:
    let curX = startX - e.clientX;
    let curY = startY - e.clientY;
    startX = e.clientX;
    startY = e.clientY;
    // set the element's new position:
    dragging.style.top = ((dragging.offsetTop - curY)/table.clientHeight )*100+ "%";
    dragging.style.left = ((dragging.offsetLeft - curX)/table.clientWidth)*100 + "%";
    dragging.style.cursor = "grabbing";
}
function elementRotate(e){
    e.preventDefault();
    let angleDelta = getAngle(startX,startY) - getAngle(e.clientX,e.clientY);
    startX = e.clientX;
    startY = e.clientY;
    curRot-=angleDelta;
    dragging.style.transform = dragging.style.transform.replace(/(.*?rotate\()(.*?)(deg\))/,"$1"+curRot+"$3");
}
function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    dragging.classList.remove("selectedCard");
    dragging = null;
    document.body.style.cursor = "auto";
}
function toggleEdit(e){
    //disable/enable editing cards
    if(e.target.editing==null)e.target.editing=true;
    e.target.children[0].src=e.target.editing?"Assets/Icons/unlock.png":"Assets/Icons/lock.png";
    e.target.title=e.target.editing?"Unlock edit":"Lock edit";
    e.target.editing=!e.target.editing;
    let locked=document.getElementsByClassName("lockable");
    for(let i=0;i<locked.length;i++){
        locked[i].classList.toggle("locked");
    }
}
function cardLayout(){
    let num = spread.length;
    let numX = 0; //indexes per row
    let numY = 0; //indexes of rows
    let numR = 0; //indexes cards in last row

    if(num<=5){
        numX=num;
        numY=1;
        numR=num;
    }
    else{
        numX=Math.round(Math.sqrt(num*5/2));
        numY=Math.ceil(num/numX);
        numR=num%numX==0?numX:num%numX;
    }
    while((cardW*cardScale*numX)+(cardPad*(numX+1))>table.clientWidth)cardScale-=0.02;
    while(cardH*cardScale*numY+cardPad*numY>table.clientHeight)cardScale-=0.02;
    let marginX = (table.clientWidth-((numX*cardW*cardScale)+((numX-1)*cardPad)))/2;
    let marginR = (table.clientWidth-((numR*cardW*cardScale)+((numR-1)*cardPad)))/2;
    let marginY = (table.clientHeight-((numY*cardH*cardScale)+((numY-1)*cardPad)))/2;

    for (let i=0;i<numY;i++){
        for (let j=0;j<numX;j++){
            let count=i*numX+j;
            if(count==num)break;

            let card = spread[count];
            card.style.transform="translate(-"+(1-cardScale)/2*cardW+"px, -"+(1-cardScale)/2*cardH+"px)";
            card.style.transform+="scale("+cardScale+")";
            card.style.transform+="rotate(0deg)";
            card.style.display="initial";
            //calc location
            card.style.top=(marginY+i*(cardH*cardScale+cardPad))/table.clientHeight*100+"%";
            let offset=i<numY-1?marginX:marginR;
            card.style.left=(offset+j*(cardW*cardScale+cardPad))/table.clientWidth*100+"%";
        }
    }
}
function cardResize(scale){
    //get all card class
    //loop through and set new size
    cardScale+=scale*0.02;
    let cards = document.getElementsByClassName("cardOuter");
    let re=/(translate\(.*?\)).*?(scale\(.*?\))/;
    let nTrans; let nScale; 
    for(let i=0;i<cards.length;i++){
        nTrans = "translate(-"+(1-cardScale)/2*cardW+"px, -"+(1-cardScale)/2*cardH+"px) ";
        nScale = "scale("+cardScale+")";
        cards[i].style.transform=cards[i].style.transform.replace(re,nTrans+nScale);
    }
}
let dateTransfer = e => {
    e.target.nextElementSibling.innerHTML=dateConvert(e.target.value);
}
function printViewToggle(e){
    //change scrolling divs to full-size
    let printExpand = document.querySelectorAll("body,#header,.scrollBox,.cardNote");
    for(let i=0;i<printExpand.length;i++) printExpand[i].classList.toggle("printExpand");

    //hide selections / editables / shadows
    let printHide = document.querySelectorAll(".cardSelectInner,.box,#tableButtons,#dateInput,#dateOutput,#dateLabel,.shadowed");
    for(let i=0;i<printHide.length;i++) printHide[i].classList.toggle("printHide");
    document.getElementById("locker").classList.toggle("locked");

    //toggle spans read-only
    let editables = document.querySelectorAll("[contenteditable]");
    for(let i=0;i<editables.length;i++){
        editables[i].contentEditable=editables[i].contentEditable=='true'?'false':'true';
        //hide un-edited optional spans
        if(editables[i].textContent.includes("[optional]")) editables[i].classList.toggle("printHide");
    }

    let spreadUrl=document.getElementById("spreadUrl");
    //toggle footer and spread URL
    if(e.target.title=="Print view"){
        e.target.title="Edit view";
        e.target.children[0].src="Assets/Icons/edit.png";
        e.target.parentElement.style.backgroundImage = "none";
        spreadUrl.link = spreadUrl.innerText;
        if(!spreadUrl.link.includes("[optional]"))
            spreadUrl.innerHTML="<a href='"+spreadUrl.link+"' target='blank'>"+spreadUrl.link+"</a>";
    }
    else{
        e.target.title="Print view";
        e.target.children[0].src="Assets/Icons/print.png";
        e.target.parentElement.style.backgroundImage = "linear-gradient(0deg, rgb(0,0,0), transparent)";
        spreadUrl.innerHTML = spreadUrl.link;
    }
}
//#endregion

//#region card data functions
function suitChanged(e){
    setCards(e.target.parentElement.querySelector(".cards"),e.target,cardsMajor[0]);
}
function setCards(cards,suit,value){
    cards.style.display="initial";
    cards.innerHTML="";
    if(suit=="unknown"){
        suit=cards.parentElement.querySelector(".suits");
        if(suit.value==""||suit.value==cardSuits[0]) return;
    }
    if(suit.value==""||suit.value==cardSuits[0]){
        cards.style.display="none";
        cardSelected(suit,cards,-1);
    }
    else if(suit.value=="Major"){
        for(let i=0;i<cardsMajor.length;i++){
            if(i>0&&!deck.includes(i-1))continue;
            let cardOp = document.createElement("option");
            cardOp.value=cardOp.innerHTML=cardsMajor[i];
            cardOp.cardIndex=i-1;
            cards.appendChild(cardOp);
        }
    }
    else{
        for(let i=0;i<cardsMinor.length;i++){
            let index = 22+(i-1)+14*(cardSuits.indexOf(suit.value)-2);
            if(i>0&&!deck.includes(index))continue;
            let cardOp = document.createElement("option");
            cardOp.value=cardOp.innerHTML=cardsMinor[i];
            cardOp.cardIndex=i==0?-1:index;
            cards.appendChild(cardOp);
        }
    }
    cards.value=value;
}
function randomCard(e){
    let suit=e.target.parentElement.querySelector(".suits");
    let card = e.target.parentElement.querySelector(".cards");
    card.style.display="initial";

    let index =getRandom(0,deck.length-1);
    let reverse = getRandom(0,100);
    suit.value=cardData[deck[index]].Suit;
    setCards(card,suit,"");
    card.value=cardData[deck[index]].Card;
    cardSelected(suit,card,deck[index],reverse);
}
function cardChanged(e){
    let suit=e.target.parentElement.querySelector(".suits");
    let card = e.target;
    let index = card.selectedOptions[0].cardIndex;
    cardSelected(suit,card,index,0);
}
async function cardSelected(suit,card,index,reverse){
    let cardSelect=card.closest(".cardSelect");
    let reversal = card.parentElement.querySelector(".reversal");
    let cardNote = cardSelect.cardNote;
    let newCard=cardNote.linkedCard==null;

    cardNote.linkedCard = document.getElementById("card"+cardNote.index);
    if(cardNote.cardIndex!=null) deck.push(cardNote.cardIndex);//put the previous card back in the deck
    
    //handling for selecting "Pick a suit" or "Pick a card"
    if(index==-1){
        cardNote.cardIndex=null;
        cardNote.linkedCard.children[0].style.transform="rotateY(0deg)";
        cardNote.cardInfo=null;
        cardNote.linkedCard=null;
        reversal.style.display="none";
        cardNote.style.display="none";
    }
    else{
        reversal.value = reverse>revProb?"Reversed":"Upright";
        reversal.style.display="initial";

        cardNote.cardIndex=index;
        deck.splice(deck.indexOf(index),1);

        //get info of selected card
        cardNote.cardInfo=cardData[cardNote.cardIndex];
        cardNote.querySelector("legend").innerHTML="Card "+(cardNote.index+1)+": "+cardNote.cardInfo.Url;
        if(reverse>revProb)cardNote.querySelector("legend").innerHTML+=", Reversed";
        cardNote.querySelector(".box").style.display="flex";
        let cardBoxData = cardNote.querySelector(".collapsible.selected");
        if(cardBoxData) cardNote.querySelector(".boxData>p").innerHTML = cardNote.cardInfo[cardBoxData.innerHTML];
        
        cardNote.querySelector(".cardInfoLink").href="https://www.alittlesparkofjoy.com/"+cardNote.cardInfo["Url Helper"]+"-tarot-card-meanings/";

        let shorthand=cardNote.querySelector(".shorthand");
        let re=/Upright:\s*?(.*)\s*?<br>\s*?Reversed:\s*?(.*)/i;
        let short=cardNote.cardInfo.Shorthand.match(re);
        if(short.length==3){
            shorthand.querySelector(".upright").innerHTML=short[1];
            shorthand.querySelector(".reversed").innerHTML=short[2];
        }
        else{
            console.log("Error: invalid syntax for shorthand.");
        }

        let cardImg=cardNote.linkedCard.querySelector(".cardFront img");
        let suitNum=(cardSuits.indexOf(suit.value))-1;

        //calculate offset
        let cardNum = suitNum==0?cardsMajor.indexOf(card.value)-1:cardsMinor.indexOf(card.value)-1;
        let x=cardNum%7;
        let y=Math.floor(cardNum/7);

        cardImg.style.filter="blur(50px)";
        await new Promise(r => setTimeout(r, 190));
        cardImg.src=suitImages[suitNum];
        cardImg.style.objectPosition=(-5+(-x*cardW))+"px "+(-5+(-y*cardH))+"px";
        let rot = reverse>revProb?180:0;
        cardImg.parentElement.style.transform = 
            cardImg.parentElement.style.transform.replace(/(.*?rotate\()(.*?)(deg\))/,"$1"+rot+"$3");
        if(newCard) cardNote.linkedCard.children[0].style.transform="rotateY(180deg)";
        await new Promise(r => setTimeout(r, 20));
        cardImg.style.filter="blur(0px)";
        cardNote.style.display="initial";
    }
    //update all cardselects with updated deck
    let cardSelects = document.querySelectorAll(".cards");
    for (let i=0;i<cardSelects.length;i++)
    {
        if(cardSelects[i]!=card)
            setCards(cardSelects[i],"unknown",cardSelects[i].value);
    }
}
function reverseCard(e){
    let cardFront=e.target.closest(".cardSelect").linkedCard.querySelector(".cardFront");
    let rot = e.target.selectedIndex*180;
    cardFront.style.transform = cardFront.style.transform.replace(/(.*?rotate\()(.*?)(deg\))/,"$1"+rot+"$3");
    let cardLegend=e.target.closest(".cardSelect").cardNote.querySelector("legend");
    if(e.target.selectedIndex==1){
        if(cardLegend.innerHTML.indexOf("Reversed")==-1) cardLegend.innerHTML+=", Reversed";
    }
    else cardLegend.innerHTML=cardLegend.innerHTML.replace(", Reversed","");
}
async function toggleSelect(e){
    let header=e.target.parentElement;
    let cardNote=header.closest(".cardNote");
    let dataBlock=header.parentElement.querySelector(".boxDataWrapper");
    let dataP = dataBlock.querySelector(".boxData>p");

    let data=cardNote.cardInfo[e.target.innerHTML];

    if(e.target==header.selected){
        header.selected=null;
        dataBlock.style.height="0px";
        await new Promise(r => setTimeout(r, 300));
        dataP.innerHTML="";
        dataP.style.padding="0px";
    }
    else if (header.selected){
        header.selected.classList.remove("selected");
        header.selected=e.target;
        dataBlock.querySelector(".scrollWrapper").scrollTop=0;
        dataP.innerHTML=data;
    }
    else {
        header.selected=e.target;
        dataBlock.style.height="200px";
        dataP.innerHTML=data;
        dataP.style.padding = "10px";
    }
    e.target.classList.toggle("selected");
}
//#endregion

//#region listeners and utility functions
let dist = (x1,y1,x2,y2) => Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));

let getCenter = (obj) => {
    let rect=obj.getBoundingClientRect();
    let side = rect.width < rect.height ? rect.width : rect.height;
    return {"x":rect.right-rect.width/2,"y":rect.bottom-rect.height/2,"side":side};
}

let getAngle = (x,y) => {
    let cen = getCenter(dragging);
    return 15*Math.round((Math.atan2( cen.y- y, cen.x - x ) * ( 180 / Math.PI ))/15);
}

let getRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) ) + min;
}

let dateConvert = (date) => {
    let dateSplit = date.split("-");
    return months[parseInt(dateSplit[1])-1]+" "+dateSplit[2]+", "+dateSplit[0];
}

const reObserver = new ResizeObserver(entries=>{
    //resize header to match table height
    entries[0].target.parentElement.style.height=entries[0].target.clientHeight+"px";
    //potentially add later: card resizing
    //check delta height and width, compare delta to total, change scale to match
});
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        //console.log(entry.target.parentElement.id+" "+entry.target.parentElement.className+" "+entry.target.className);
        let shadow = entry.target.shadow;
        if(entry.target.className=="top"){
            if(!entry.isIntersecting)shadow.style.borderTopWidth="15px";
            else entry.target.shadow.style.borderTopWidth="0px";
        }
        else if(entry.target.className=="bottom"){
            if(!entry.isIntersecting)shadow.style.borderBottomWidth="15px";
            else shadow.style.borderBottomWidth="0px";
        }
    });
});
//#endregion
