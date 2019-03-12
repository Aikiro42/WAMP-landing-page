$(function(){
	$('div.app-link').off().click(function(){
		var app_link = $(this).find('input').val();
		$.ajax({
			url: app_link,
			success: function(data){
				$('div#app-viewport').fadeIn(100);
				$('div#app-viewport div#render').html(data);
			}
		});
		$('div#popup-viewport').fadeOut(100);
	});
});