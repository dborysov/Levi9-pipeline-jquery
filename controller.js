window.controller = (function(){
	"use strict";

	var listElement = $('#list-container');
	var cardElement = $('#card-container');

	function showList() {
		listElement.show();
		cardElement.hide();
	}

	function showDetails() {
		listElement.hide();
		cardElement.show();
	}

	function createRow(el){
		return $('<tr></tr>').attr('data-id', el.id)
		.append('<td><img src="'+ el.media[0]['media-metadata'][0].url +'"/></td>')
		.append('<td>' + el.title + '</td>');
	}

	function drawDetails(movie) {
		var backButton = $('<button></button>').text('Back')
		.addClass('btn btn-default')
		.click(showList);

		var abstract = $('<div></div>').text(movie.abstract);
		var externalLink = $('<a/>').attr('href', movie.url).text('Show more...');

		cardElement.empty();

		cardElement.append(backButton, abstract, externalLink);

		showDetails();
	}

	function drawTableHeader(table) {
		var tableHeader = $(
			'<thead>'+ 
			'	<tr>' +
			'		<th>Image</th>' +
			'		<th>Title</th>' +
			'	</tr>' +
			'</thead>');

		table.append(tableHeader);
	}

	function drawList(list) {
		var table = $('<table class="table"></table>').addClass('table-striped table-hover');
		
		drawTableHeader(table);

		var tableBody = $('<tbody></tbody>').click(event => {
			var id = +$(event.toElement).closest('tr').attr('data-id');
			var movie = moviesService.getMoviesList().find(m => m.id === id);
			drawDetails(movie);
		});
		table.append(tableBody);

		tableBody.append(list.map(createRow));

		listElement.append(table);
	}	

	return {
		drawList: drawList
	}
})()