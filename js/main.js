$(document).ready(function(){
	$('.menu-bar').click(function(){
		$(this).next().slideToggle();

		if($('#p').hasClass('icon-menu')){
			$('#p').removeClass();
			$('#p').addClass('icon-x');
		}
		else if($('#p').hasClass('icon-x')){
			$('#p').removeClass();
			$('#p').addClass('icon-menu');
		}
		
	});
})