"use strict";
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
			$(data.Search).each(function(iCnt){
				movieSearch._createMovieBlock($(this)[0], iCnt);
			});	
		}

		return;
	},

	_createMovieBlock: function(data, currentCount){
		let movieTitle = data.Title;
		let movieYear = data.Year;
		let moviePoster = data.Poster;
		currentCount++;
		let movieTitleID = "movieTitle" + currentCount;
		let movieYearID = "movieYear" + currentCount;
		let imdbID = data.imdbID;
		
		let resultsHTML = '<div class="movieBlock" movie-imdbid="' + imdbID + '" movie-title="' + movieTitle + '" movie-year="' + movieYear + '" movie-poster="' + moviePoster + '">'+
							'<div class="posterImg"><img src="' + moviePoster + '"/></div><div class="moveieInfo"><h2 class="movieTitle"><label for="' + movieTitleID +'">' + 
							'Title: </label><span id="' + movieTitleID + '">' + movieTitle +  '</span></h2><div class="movieYear"><label for="' + movieYearID + '">' + 
							'Year: </label><span class="' + movieYearID + '">' + movieYear + '</span></div></div><div class="updateStat">';
		
		if (!movieState.getFavorites(imdbID)){
			resultsHTML += '<div class="addToFavorites"><label for="favStar"></label><i onclick="movieState.updateFav(this)" class="fa fa-heart-o" aria-hidden="true"></i></div>'
		} else {
			resultsHTML += '<div class="addToFavorites"><label for="favStar"></label><i onclick="movieState.updateFav(this)"  class="fa fa-heart" aria-hidden="true"></i></div>'
		}

		if (!movieState.getWatchList(imdbID)){
			resultsHTML += '<div class="addToWatchList"><label for="watchEye"></label><i onclick="movieState.updateWatch(this)" class="fa fa-star-o" aria-hidden="true"></i><div>'
		} else {
			resultsHTML += '<div class="addToWatchList"><label for="watchEye"></label><i onclick="movieState.updateWatch(this)" class="fa fa-star" aria-hidden="true"></i><div>'
		}

		resultsHTML += '</div></div>';

		$('.movieResults').append($(resultsHTML));	
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

