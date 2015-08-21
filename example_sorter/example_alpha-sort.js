(function ($){
	$.fn.alpha_sort_pie = function ( options ){
		var settings = $.extend({
			pull_title: "h4",
			marker_tag: "div",
			add_before: false
		}, options);

		// declare array of navigation letters
		var nav_letters = [];
		
		// populate array ---------------------------------------
		$(this.selector + " " + settings.pull_title).each(function(){
			var put_this_in = $(this).text().substr(0,1).toUpperCase();
			if( $.inArray(put_this_in, nav_letters) == -1 ){ // is letter in array?
				nav_letters[nav_letters.length] = put_this_in; // add it
				// add a breakpoint to the page
				$(this).before('<'+settings.marker_tag+' id="scrollto_'+put_this_in+'" class="scroll_marker">'+put_this_in+'</'+settings.marker_tag+'>');
			}
		});

		// build the menu --------------------------------------
		var nav_build = '<div class="quick_nav_menu"><ul class="scrollto_menu">';
		$.each(nav_letters, function(key, value){
			nav_build += '<li><a class="scrolly_link" href="#scrollto_'+value+'">'+value+'</a>';
		});
		nav_build += '</ul></div>';

		// place menu on page ----------------------------------
		console.log(this.selector);
		if (settings.add_before !== false){
			$(this.selector).before(nav_build);
		} else {
			$(this.selector).prepend(nav_build);	
		}

 		// make the menu sticky if srolled past this.selector
 		var entry_pos = $(this.selector).position();
 		$(window).scroll(function(e){
			var scroll_pos = $(window).scrollTop();
			var y_pos = scroll_pos-entry_pos.top;
			if( scroll_pos >= entry_pos.top ){
				// if scroll position is past container
				if(scroll_pos >= entry_pos.bottom){ return; }
				$('.quick_nav_menu').css("position", "fixed");
			} else {
				$('.quick_nav_menu').css("position", 'relative');
			}
		});

		// set class to active on click
		$('.scrolly_link').on('click', function(){
			$('.scrollto_menu li').removeClass("active");
			$(this).parent('li').addClass("active");
		});
	}

}(jQuery));