// Cole Toerien
$(document).ready(function() {

$('.messages').addClass("row");

$('#left').on("click",function(){

    var yt = $('#message').val().indexOf('youtube.com/watch') > -1;
    var ifr ="";

  

    if(yt){
        var video_url = $('#message').val().match(/(?:v=)([\w\-]+)/g);
        ifr = '<iframe height="315" src="https://www.youtube.com/embed/'+video_url+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    }

  


    if($('#message').val() != ""){

    $('.messages').html($('.messages').html()+'<div class = "offset-4 col-4 blue rounded mb-2">'+$('#message').val()+ifr+'</div>');
  

    }

});


$('#right').on("click",function(){

    var yt = $('#message').val().indexOf('youtube.com/watch') > -1;
    var ifr ="";



    if(yt){
        var video_url = $('#message').val().match(/(?:v=)([\w\-]+)/g);
        ifr = '<iframe height="315" src="https://www.youtube.com/embed/'+video_url+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    }

  



    if($('#message').val() != ""){
        $('.messages').html($('.messages').html()+'<div class = "offset-4 col-4 green rounded mb-2">'+$('#message').val()+ifr+'</div>');
    
    }

});

});