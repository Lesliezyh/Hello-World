function autovideosize(){var e=$(document).width(),i=$(window).height(),n=$(document).height();$(".banner-video").width(e),$(".banner-video").height(n),$(".banner-video .video").css({top:(i-576)/2})}$(function(){var e=!1;$(".slide-video .btn-play").on("click",function(){e?player.play():(player=new Txplayer({containerId:"video18",vid:"x0784xyu20l",width:"auto",height:"576"}),e=!0,player.on("ready",function(){player.play()})),$(".banner-video,.fullmask").show(),autovideosize()}),$(window).resize(function(){autovideosize()}),$(".banner-video .close").on("click",function(){$(".banner-video,.fullmask").hide(),player.pause()}),$(".flexslider").flexslider({animation:"fade",slideshowSpeed:5e4,animationSpeed:600,controlsContainer:$(".custom-controls-container"),customDirectionNav:$(".custom-navigation a"),start:function(){$(".slide-video").each(function(){$(this).find("video")[0].pause()}),$(".flex-active-slide").find("video")[0].play()},before:function(){setTimeout(function(){$(".slide-video").each(function(){$(this).find("video")[0].pause()}),$(".flex-active-slide").find("video")[0].play()},0)}}),$(".fullmask").height($(document).height()),navigator.platform.toUpperCase().indexOf("MAC")>=0&&$(".slide-video").eq(0).find("video").attr("src","../video/bannerbg1_mac.mp4")});