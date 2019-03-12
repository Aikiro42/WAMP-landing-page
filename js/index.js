$(function(){
	
	$('div#logo-button').off().click(function(){
		var function_list = $('ul#function-list');
		if(function_list.css('display') == 'none'){
			function_list.slideDown(100);
		}else{
			function_list.slideUp(100);
		}
	});
	
	$('li#open-application').off().click(function(){
		var popup_screen = $('div#popup-screen');
		var render = $('div#render');
		$.ajax({
			url: "applications/main/open-application/open-application.php",
			success: function(data){
				render.html(data);
			}
		});
		popup_screen.fadeIn(100);
		
	});
	
	$('li#show-viewport').off().click(function(){
		var app_viewport = $('div#app-viewport');
		if(app_viewport.css('display') == 'none'){
			$('div#app-viewport').fadeIn(100);
			$(this).html('Hide Viewport');
		}else{
			$('div#app-viewport').fadeOut(100);
			$(this).html('Show Viewport');
		}
	});
	
	$('div#close-popup-button').off().click(function(){
		var popup_screen = $('div#popup-screen');
		
		popup_screen.fadeOut(100);
	});
	
	$('div#close-viewport-button').off().click(function(){
		$(this).parent().parent().fadeOut(100);
		$('li#show-viewport').html('Show Viewport');
	});
	
});