"use strict";
/**
 * movieQueueList
 * Manage movie queue list
 *
 * @module movieQueueList
 * @owner Juri Kyoya
 */
var movieQueueList = movieQueueList || {

	/**
	 * formatMovieResult
	 * Update DOM structure with movie results
	 *
	 * @ignore
	 * @returns {null}
	 */
	displayQueueList: function(listType) {
		// clean movie results section first 
        $('.movieResults').html('');
        let movieList = '';
        if (listType === 'fav'){
            movieList = movieState.getAllFavorites();
        } else {
            movieList = movieState.getAllWatchList();
        }
        
        let movieListArr = JSON.parse(movieList);

		if (movieListArr.length === 0){
			$('.movieResults').html('<div class="no-results">No movie results. Try again.</div>');
		} else {
			// Parse through all movie result items
			$(movieListArr).each(function(iCnt){
				movieQueueList._createMovieBlock(this, iCnt, listType);
			});	
		}

		return;
	},

	_createMovieBlock: function(imdbID, currentCount, listType){
        let movieData = '';

        if (listType === 'fav'){
            movieData = JSON.parse(movieState.getFavorites(imdbID));
        } else {
            movieData = JSON.parse(movieState.getWatchList(imdbID));
        }

		let movieTitle = movieData.movieTitle;
		let movieYear = movieData.movieYear;
		let moviePoster = movieData.moviePoster;
		currentCount++;
		let movieTitleID = "movieTitle" + currentCount;
		let movieYearID = "movieYear" + currentCount;
		
		let resultsHTML = '<div class="movieBlock" movie-list="' + listType + '" movie-imdbid="' + imdbID + '" movie-title="' + movieTitle + '" movie-year="' + movieYear + '" movie-poster="' + moviePoster + '">'+
							'<div class="posterImg"><img src="' + moviePoster + '"/></div><div class="moveieInfo"><h2 class="movieTitle"><label for="' + movieTitleID +'">' + 
							'Title: </label><span id="' + movieTitleID + '">' + movieTitle +  '</span></h2><div class="movieYear"><label for="' + movieYearID + '">' + 
                            'Year: </label><span class="' + movieYearID + '">' + movieYear + '</span></div></div><div class="updateStat">'; 
        resultsHTML += '<button class="input-group-text red lighten-3" onclick="movieQueueList.removeMovieBlock(this)">Remove</span></button>';
		resultsHTML += '</div></div>';

		$('.movieResults').append($(resultsHTML));	
    },
    
    removeMovieBlock: function(obj){
        try{
            let thisObj = $(obj);
            let watchDOM = $(obj.closest('.movieBlock'));
            let movieList = watchDOM.attr('movie-list');
            let movieIMDBID = watchDOM.attr('movie-imdbid');
            let movieTitle = watchDOM.attr('movie-title');
            let movieYear = watchDOM.attr('movie-year');
            let moviePoster = watchDOM.attr('movie-poster');

            let movieData = {'movieTitle': movieTitle, 'movieYear': movieYear, 'moviePoster': moviePoster, 'movieIMDBID': movieIMDBID};
    
            if (movieList === 'fav'){
                movieState.removeFavorites(movieIMDBID);
            } else {
                movieState.removeWatchList(movieIMDBID);
            }
            $(watchDOM).remove();
        } catch(e){
            
        }

    },

	/**
	 * run
	 * Run constructor
	 *
	 * @ignore
	 * @returns {null}
	 */
	run: function(listType) {

		this.displayQueueList(listType);

		return;
	},
};
