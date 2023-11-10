/*************************************************************
 * Filename: previews.js
 * Description: Populates the preview window for the currently selected portfolio asset
 * Copyright: 2023 Kaitlyn Becker
 *************************************************************/

$( document ).ready(function() {
    if (location.href.includes("previews.html?")) updatePreview();

    //button handling
    $("#prevPre").click(function(){
        var loc = location.href.split('?')[1].split('$');
        location.href = `${location.href.split("?")[0]}?${loc[0]}$${mod(parseInt(loc[1])-1,carouselArrays[loc[0]].length)}`;
    });
    $("#nextPre").click(function(){
        var loc = location.href.split('?')[1].split('$');
        location.href = `${location.href.split("?")[0]}?${loc[0]}$${mod(parseInt(loc[1])+1,carouselArrays[loc[0]].length)}`;
    });
});
//populate preview page template
async function updatePreview(){
    $(".fade").css("opacity",0);
    var loc = location.href.split('?')[1].split('$');
    preData = carouselArrays[loc[0]][loc[1]];
    $("#title").html(preData.title);
    $("#counter").html( 
        `${(parseInt(loc[1])+1).toString().padStart(2,0)}/${(carouselArrays[loc[0]].length).toString().padStart(2,0)}` 
        );
    $("#tags").html(preData.tags);
    //***test if there is timeline info, if not, hide
    (preData.timelineInfo)?$("#timeline").show():$("#timeline").hide();
    $("#timelineInfo").html(preData.timelineInfo);

    $("#description").html(preData.description);
    $("#image iframe").attr('src',preData.preUrl);
    $(".fade").css("opacity",100);
}



//utility functions
const mod = (n,m) => ((n%m)+m)%m;