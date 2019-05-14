/**
 * movieSearch
 * The actual movie search functionality
 *
 * @module movieSearch
 * @owner Juri Kyoya
 */

const apiKey = '3273aa2e';
var movieSearch = movieSearch || {

	/**
	 * formatMovieResult
	 * Update DOM structure with movie results
	 *
	 * @ignore
	 * @returns {null}
	 */
	formatMovieResult: function(data) {
		// clean movie results section first 
		$('.movieResults').html('');

		if (data.Response === 'False'){
			$('.movieResults').html('<div class="no-results">No movie results. Try again.</div>');
		} else {
			// Parse through all movie result items
			$(data.Search).each(function(){
				movieSearch.createMovieBlock($(this)[0]);
			});	
		}

		return;
	},

	createMovieBlock: function(data){
		let movieTitle = data.Title;
		let movieYear = data.Year;
		let moviePoster = data.Poster;
		
		$('.movieResults').append($('<div class="movieBlock"><h2 class="movieTitle">' + movieTitle + 
			'</h2><div class="posterImg"><img src="' + moviePoster + '"</div><span class="movieYear">'
			 + movieYear + '</span></div>'));
	},

	/**
	 * searchMovieEvent
	 * Set up movie search ajax event
	 *
	 * @ignore
	 * @returns {null}
	 */
	searchMovieEvent: function() {
		$( "form" ).submit(function( event ) {
			event.preventDefault();
			$.ajax({
				method: "GET",
				url: "http://www.omdbapi.com/",
				data: { apikey: apiKey, s:  $('#movieTitle').val()}
			})
				.done(function( callback ) {
					movieSearch.formatMovieResult(callback);
				});
		});
		
		return;
	},

	/**
	 * run
	 * Run constructor
	 *
	 * @ignore
	 * @returns {null}
	 */
	run: function() {

		this.searchMovieEvent();

		return;
	},
	
};

$(document).ready(function(){
	movieSearch.run();
});

