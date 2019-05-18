"use strict";
/**
 * movieState
 * Manage what's in fav/watch list
 *
 * @module movieState
 * @author Juri Kyoya
 */
var movieState = movieState || {

    updateWatch: function(obj){
       // try{
            let thisObj = $(obj);
            let watchDOM = $(obj.closest('.movieBlock'));
            let movieIMDBID = watchDOM.attr('movie-imdbid');
            let movieTitle = watchDOM.attr('movie-title');
            let movieYear = watchDOM.attr('movie-year');
            let moviePoster = watchDOM.attr('movie-poster');

            let movieData = {'movieTitle': movieTitle, 'movieYear': movieYear, 'moviePoster': moviePoster, 'movieIMDBID': movieIMDBID};
            
            if (thisObj.hasClass('fa-star-o')){
                this.addToWatchList(movieIMDBID, movieData);
                thisObj.removeClass('fa-star-o').addClass('fa-star');

            } else {
                this.removeWatchList(movieIMDBID);
                thisObj.removeClass('fa-star').addClass('fa-star-o');
            }
        //} catch(e){
            
       // }
    },
    
    updateFav: function(obj){
		//try{
            let thisObj = $(obj);
            let favDOM = $(obj.closest('.movieBlock'));
            let movieIMDBID = favDOM.attr('movie-imdbid');
            let movieTitle = favDOM.attr('movie-title');
            let movieYear = favDOM.attr('movie-year');
            let moviePoster = favDOM.attr('movie-poster');

            let movieData = {'movieTitle': movieTitle, 'movieYear': movieYear, 'moviePoster': moviePoster, 'movieIMDBID': movieIMDBID};

            if (thisObj.hasClass('fa-heart-o')){
                this.addToFavorites(movieIMDBID, movieData);
                thisObj.removeClass('fa-heart-o').addClass('fa-heart');

            } else {
                this.removeFavorites(movieIMDBID);
                thisObj.removeClass('fa-heart').addClass('fa-heart-o');
            }
       // } catch(e){

        //}
    },
    
	getWatchList: function(imdbID){
		if (imdbID){
			return sessionStorage.getItem('watch-' + imdbID);
		} else
			return false;
	},

	addToWatchList: function(imdbID, movieData){
		sessionStorage.setItem('watch-' + imdbID, JSON.stringify(movieData));
	},

	removeWatchList: function(imdbID){
		sessionStorage.removeItem('watch-' + imdbID);
	},

	getFavorites: function(imdbID){
		if (imdbID){
			return sessionStorage.getItem('favorites-' + imdbID);
		} else
			return false;
	},

	addToFavorites: function(imdbID, movieData){
		sessionStorage.setItem('favorites-' + imdbID, JSON.stringify(movieData));
	},

	removeFavorites: function(imdbID){
		sessionStorage.removeItem('favorites-' + imdbID);
	},

	/**
	 * run
	 *
	 * @ignore
	 * @returns {null}
	 */
	run: function() {
		return;
	},
};

