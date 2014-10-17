var EffectsSelector = (function() {
	// Private Variables
	var $scroller = $('#main ul.stroll');
	var img = ["logo.jpg", "logo2.jpg", "logo3.jpg", "logo.jpg", "logo2.jpg", "logo3.jpg", "logo.jpg", "logo2.jpg", "logo3.jpg", "logo.jpg", "logo2.jpg", "logo3.jpg", "logo.jpg", "logo2.jpg", "logo3.jpg", "logo.jpg", "logo2.jpg", "logo3.jpg"];

	// Public Function
	function init() {
		getMyImages();
		attachEvents();
	}

	// Private Functions
	function attachEvents(event) {
		stroll.bind($scroller, {live: true});

		$('.nav li').on('click', function(event){
			var target = $(event.target);
			var effectName = target.text();
			var effect = 'stroll ' + effectName;
			$scroller.removeClass();
			$scroller.addClass(effect);
		});
	}

	function getMyImages(){
		for (i=0; i<img.length; i++) {
			var imgShow=img[i];
			var listItem=document.createElement('li');
			$(listItem).appendTo($scroller);
			$('<img />', {src:"img/"+imgShow}).appendTo(listItem);
		}
	}

	return {
		init: init
	}
})();

$(function(){
	EffectsSelector.init();
});