$( document ).ready(function() {
    console.log( "ready!" );

    if (location.href.includes("previews")){
        var params = location.href.split('?')[1];
        if(params){
            params=params.split("$");
            preData = previewArrays[params[0]][params[1]];
            console.log(preData);
            $("#title").html(preData.title);
            $("#counter").html( 
                `${(params[1]+1).toString().padStart(2,0)}/${(previewArrays[params[0]].length+1).toString().padStart(2,0)}` 
                );
            $("#tags").html(preData.tags);
            $("#timelineInfo").html(preData.timelineInfo);
            $("#description").text(preData.description);
            $("#image img").attr('src',preData.imageSrc);
        }
    }
});