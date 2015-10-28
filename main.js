(function(){
	"use strict";

	window.moviesService.fetchItems().then(window.controller.drawList);
})();