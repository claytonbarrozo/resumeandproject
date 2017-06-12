$(document).ready(function(){
	$(".fa-times").click(function(){
		$(".sidebar_menu").addClass("hide_menu");
		$(".toggle_menu").addClass("opacity_one");
	});

	$(".toggle_menu").click(function(){
		$(".sidebar_menu").removeClass("hide_menu");
		$(".toggle_menu").removeClass("opacity_one");
	});

		$(".navigation_item").click(function(e){
			
			e.preventDefault();

			var sectionID = e.currentTarget.id + "Section";
			
			$("html, body").animate({
				scrollTop: $('#' + sectionID).offset().top
			}, 2000)

		
	})
});

/*Improved animated scrolling script*/
