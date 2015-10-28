window.moviesService = (function(){
	"use strict";
	
	var moviesList = [];
	function fetchItems() {
		var url = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/movies/30.json?api-key=52c786f7d5fcb689e304bcbd58687057%3A5%3A73132144";

		return $.ajax(url).then(response => {
			moviesList = response.results;
			return response.results;
		})
	}
	
	return {
		fetchItems: fetchItems,
		getMoviesList: () => moviesList
	};
})();