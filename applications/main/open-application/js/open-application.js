$(function(){
	$('div.app-link').off().click(function(){
		var app_link = $(this).find('input[name=appurl]').val();
		var app_name = $(this).find('span.app-link-name').html();
		$.ajax({
			url: app_link,
			success: function(data){
				$('div#app-viewport div#render').html(data);
				$('div#app-viewport div#viewport-header span#app-name').html(app_name);
				$('div#app-viewport').fadeIn(100);
			}
		});
		$('div#popup-screen').fadeOut(100);
	});
});