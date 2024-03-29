var svgns = "http://www.w3.org/2000/svg";
var device;
var startClicks = 0;
var offsetX;
var offsetY;
var isDrag=false;
var timer;
var s = $("#story");
var d= document.getElementById("ui");
// $(window).load(function(){
//     $("#loader").fadeOut(2000,function(){
//         $(this).hide();
//     });
// });
$(document).on("swipeleft",function(e){
    if(startClicks<=1){startClick();}
    else{
        if(device!='computer'){
            e.preventDefault();
            nextClick();
        }
    }
});
$(document).on("swiperight",function(e){
    if(startClicks>1){
        if(device!='computer'){
            e.preventDefault();
            backClick();
        }
    }
});
function nextClick(){
    if(index < pages.length-1){
        index = index+1;
        swap();
    }
}
function backClick(){
    if(index > 0){
        index=index-1;
        swap();
    }
}
function startClick(){
    if(startClicks!=0||device=='computer') document.getElementById('tWrap').style.display = 'none';
    else{//if #clicks is 0
        document.getElementById('titleImg').src = "images/instructions.jpg";
        document.getElementById('startButton').style.display="none";
    }
    startClicks ++;
}
function startHover(obj){obj.style.backgroundColor = "#FFFFFF";}
function stopHover(obj){obj.style.backgroundColor = "#AAAAAA";}

function startTDrag(e){
    if (!e) { var e= window.event};
    offsetX = (device=="computer")? e.clientX:e.touches[0].pageX;
    isDrag = true;
    document.onmousemove=dragThis;
}
function dragThis(e){
    //alert(isDrag);
    if(!isDrag){return;}
    if (!e) { var e= window.event};
    var newX = (device=="computer") ? e.clientX:e.touches[0].pageX;
    var move = parseInt($("#star").css("left"))+newX-offsetX;
    //alert(move);
    var bw = $("#bar").width();
    move = move/bw*100;
    move=Math.max(1,Math.min(98,move));
    $("#star").css("left",move+"%");
    offsetX = newX;
    return false;
}
function stopDrag(){
    if(isDrag){
        isDrag = false;
        index = Math.round((parseFloat($("#star")[0].style.left)/100.0)*pages.length);
        //alert(index);
        swap();
    }
}

function touchstart(e) {
    e.preventDefault();
}
function fadeLayer(nlay,n){
    var path = "";
    if(nlay!=""){
        d.innerHTML = "<b>loading</b>";
        path = "images/"+nlay;
    }
    s.fadeOut(300);
    $(n).fadeOut(300,function(){
        $(this).attr("src",path);
        $(this).load(function(){
            $(this).fadeIn(1000);
        });
    }).load(function(){d.innerHTML = "";});
}
function swapText(){
    s.fadeOut(300,function(){
        s.html(pages[index][1]);
        s.css("top",pages[index][2]+"%");
        s.css("left",pages[index][3]+"%");
        s.fadeIn(1000);
    });
}
function swap(){
    var ncel = pages[index][0];
    $("#star").css("left",index/pages.length*100+"%");
    swapText();
    for (i = 0; i < ncel.length; i++)
    {
        if(ncel[i] != curCel[i]){
            curCel[i]=ncel[i];
            fadeLayer(ncel[i],buffer[i]);
        }
    }
    if(device=='computer'){
        if(index == 0){$('#back').css({display:'none'});}
        else if(index == pages.length-1){$('#next').css({display:'none'});}
        else {$('#back').css({display:'block'});$('#next').css({display:'block'});}
    }
    callTime();
}
function testOrientation() {
    if(device!='computer' ) {
        if (document.getElementById('tWrap').style.display != 'none'){
            var timg = document.getElementById('titleImg');
            var tbg= document.getElementById('tcontainer');
            if(Math.abs(orientation)!=90){
                var h = parseFloat(timg.style.height)/parseFloat(timg.style.width);
                timg.style.width = screen.width+"px";
                timg.style.height = screen.width*h+"px";
                tbg.style.width = screen.width+"px";
                tbg.style.height = screen.height+"px";
            }
            else{
                timg.style.width = "100%";
                timg.style.height = "100%";
                tbg.style.width = screen.height+"px";
                tbg.style.height = screen.widht+"px";
            }
        }
        if(orientation==-90||orientation==90)
            $("#pWarning").fadeOut();
        else $("#pWarning").fadeIn();
    }
}
function callTime(){
    clearInterval(timer);
    if(startClicks!=0) timer=setInterval(resetFunc,90000);
    else timer = setInterval(resetFunc,300000);
}
function resetFunc(){
    location.reload();
}
function init(){
    if(/iPhone/i.test(navigator.userAgent)){
        device = 'phone';
        $("#phone").css({display:'block'});
    }
    else{
        var c = document.getElementById('container');	
        var tc = document.getElementById('tcontainer');
        var height,width;
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            device = 'mobile';
            width =  window.innerWidth;
            if(/iPad|iPhone|iPod/i.test(navigator.userAgent)){width=screen.height;}
            height = width*0.75;
            c.style.width = width+"px";
            c.style.height = height+"px";

            tc.style.width = width+"px";
            tc.style.height = height+"px";
            document.getElementById('titleBG').style.height = Math.max(screen.height,screen.width);
            $('#back').css({display:'none'});
            $('#next').css({display:'none'});
        }
        else{
            device = 'computer';
            height=window.innerHeight;
            c.style.height = height+"px";
            c.style.width = (height*4/3)+"px";
            tc.style.height = height+"px";
            tc.style.width = (height*4/3)+"px";
        }
        scene.style.width = "130%";
        scene.style.height = "130%";
        scene.style.left = "-15%";
        scene.style.top = "-15%";
        var size = height*0.045;
        s.css("font-size",size+"px");
        s.html(pages[0][1]);
        s.css("top",pages[0][2]+"%");
        s.css("left",pages[0][3]+"%");
    }
    var svgCont = document.getElementById('bar');
    for(i=0;i<pages.length;i++){
        var circ = document.createElementNS(svgns,"circle");
        circ.setAttributeNS(null,"cy","50%");
        circ.setAttributeNS(null,"cx",(i/(pages.length-1)*98+1)+"%");
        circ.setAttributeNS(null,"r","3");
        circ.setAttributeNS(null,"style","fill:rgba(175,200,250,0.8)");
        svgCont.appendChild(circ);
    }
    document.onmouseup = stopDrag;
    document.getElementById('star').addEventListener("touchstart",startTDrag,false);
    document.addEventListener("touchmove",dragThis,false);
    document.addEventListener("touchend",stopDrag,false);
    testOrientation();
}