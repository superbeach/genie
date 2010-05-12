(function($){
	$.fn.genie = function(options) {

	var o, base;
	var curr_slide;
	var defaults = {
	};
	
	var images = new Array();

	o = $.extend(defaults, options);

	return this.each(function() {
		base = this.getContext("2d");
		
		function preload(i) {
			images[i] = new Image();
			images[i].onload = function(){

				if(i < options.length - 1) {
					i++;
					preload(i);
				}
				else {
					cast_spell();
				 	return;
				}
			}
			images[i].src = options[i].src;
		}
	
		preload(0);		
	});
	
	
	function cast_spell() {
		base.drawImage(images[0], 0, 0);
		curr_slide = 0;
		setInterval(next_slide, 1500);
	}
	
	function next_slide() {

		base.drawImage(images[curr_slide], 0, 0);
		curr_slide++;
		if(curr_slide > images.length - 1) {
			curr_slide = 0;
		}		
	}

}

})(jQuery);
