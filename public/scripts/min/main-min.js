$(window).scroll(function(){500<$(this).scrollTop()?$(".fade").fadeIn():$(".fade").fadeOut(),$(".staff a").each(function(a,e){$(e).on("click",function(){$(".bio").hide(),$(".bio*[data-name="+$(this).data("name")+"]").show(),$(".staff a").removeClass("selected"),$(this).addClass("selected")})})});