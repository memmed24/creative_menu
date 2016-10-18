$(document).ready(function(){
	//variables
	var menu = $(".menu");
	var span = $("span");
	var icon = $(".menu-icon");
	var new_icon = $(".hidden-menu-icon i");
	var fa_icon = $("i");
	var list =  $(".list");
	var icon_push = true;
	//functions 
	list.css({
		display: 'none'
	});
	menu.mouseenter(function () {
	    $(this).data('timeout', setTimeout(function () {
	       	span.css({
				transition: '100ms all ease',
				display: 'none'
			});
			menu.delay(100).css({
				transition: '150ms all ease',
				transform: 'rotate(0)',
				boxShadow: '0 0 68px black'
			});
			icon.css({
				display: 'block'
			});

	    }, 50));
	}).mouseleave(function () {
	    clearTimeout($(this).data('timeout'));
	    menu.css({
			transition: '150ms all ease',
			transform: 'rotate(-45deg)',
			boxShadow: '0 0 10px black'
		});
		icon.fadeOut(150, function() {
			span.fadeIn(10);
		});
	});	
	fa_icon.on('click',function() {
		
		list.fadeIn(400);
		if(icon_push){
			icon_push = false;
			new_icon.removeClass('fa-bars').addClass('fa-times');			
		}else{
			icon_push = true;
			new_icon.removeClass('fa-times').addClass('fa-bars');
			list.fadeOut(400);
		}
	});
	// menu.hover(function() {
	// 	span.css({
	// 		transition: '100ms all ease',
	// 		display: 'none'
	// 	});
	// 	menu.delay(100).css({
	// 		transition: '150ms all ease',
	// 		transform: 'rotate(0)'
	// 	});
	// 	icon.css({
	// 		display: 'block'
	// 	});	
	// }, function() {
	// 	// span.fadeIn(150, function() {
	// 	menu.css({
	// 		transition: '150ms all ease',
	// 		transform: 'rotate(-45deg)'
	// 	});
	// 	icon.fadeOut(150, function() {
	// 		span.fadeIn(10);
	// 	});
	// 	// });
	// 	// menu.html("<span>Menu</span>");
	// });
});