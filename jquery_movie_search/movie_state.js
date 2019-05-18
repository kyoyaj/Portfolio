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
       try{
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
        } catch(e){
            
        }
    },
    
    getAllWatchList: function(){
        try {
            if (typeof(Storage) !== 'undefined'){
                return sessionStorage.getItem('watchlist');
            }  else {
                return;
            }
        } catch(e){
            return;
        }
    },
    
	getWatchList: function(imdbID){
        try {
            if (typeof(Storage) !== 'undefined' && imdbID) {
			    return sessionStorage.getItem('watch-' + imdbID);
		    } else {
			    return false;
            }
        } catch(e){
            return false;
        }
    },

    updateAllWatchList: function(imdbID){
        try {
            if (typeof(Storage) !== 'undefined') {
                let watchList = sessionStorage.getItem('watchlist');
                let watchListArr = JSON.parse(watchList);
                if (watchListArr.indexOf(imdbID) > -1){
                    watchListArr.splice($.inArray(imdbID, watchListArr), 1);
                } else {
                    watchListArr.push(imdbID);
                }
                sessionStorage.setItem('watchlist', JSON.stringify(watchListArr));
            }
        } catch(e){
            return;
        }
    },

	addToWatchList: function(imdbID, movieData){
        try {
            if (typeof(Storage) !== 'undefined') {
                sessionStorage.setItem('watch-' + imdbID, JSON.stringify(movieData));
                this.updateAllWatchList(imdbID);
            }
        } catch(e){
            return;
        }
	},

	removeWatchList: function(imdbID){
        try {
            if (typeof(Storage) !== 'undefined') {
                sessionStorage.removeItem('watch-' + imdbID);
                this.updateAllWatchList(imdbID);
            }
        } catch(e){
            return;
        }
    },
    
    updateFav: function(obj){
		try{
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
        } catch(e){

        }
    },

    getAllFavorites: function(){
        try {
            if (typeof(Storage) !== 'undefined'){
                return sessionStorage.getItem('favorites');
            }  else {
                return;
            }
        } catch(e){
            return;
        }
    },

	getFavorites: function(imdbID){
        try {
            if (typeof(Storage) !== 'undefined' && imdbID){
			    return sessionStorage.getItem('favorites-' + imdbID);
		    }  else{
                return false;
            }
        } catch(e){
            return false;
        }
	},

	addToFavorites: function(imdbID, movieData){
        try {
            if (typeof(Storage) !== 'undefined') {
                sessionStorage.setItem('favorites-' + imdbID, JSON.stringify(movieData));
                this.updateFavoritesList(imdbID);
            }
        } catch(e){
            return;
        }
	},

	removeFavorites: function(imdbID){
        try {
            if (typeof(Storage) !== 'undefined') {
                sessionStorage.removeItem('favorites-' + imdbID);
                this.updateFavoritesList(imdbID);
            }
        } catch(e){
            return;
        }
    },
    
    updateFavoritesList: function(imdbID){
        try {
            if (typeof(Storage) !== 'undefined') {
                let favoriteList = sessionStorage.getItem('favorites');
                let favListArr = JSON.parse(favoriteList);
                if (favListArr.indexOf(imdbID) > -1){
                    favListArr.splice($.inArray(imdbID, favListArr), 1);
                } else {
                    favListArr.push(imdbID);
                }
                sessionStorage.setItem('favorites', JSON.stringify(favListArr));
            }
        } catch(e){
            return;
        }
    },

    setupLists: function(){
        try {
            if (typeof(Storage) !== 'undefined') {
                let sessionContent = sessionStorage.getItem('favorites');
                if (!sessionContent){
                    sessionStorage.setItem('favorites', '[]');
                }
                sessionContent = sessionStorage.getItem('watchlist');
                if (!sessionContent){
                    sessionStorage.setItem('watchlist', '[]');
                }
            }
        } catch(e){
            return;
        }
    },

	/**
	 * run
	 *
	 * @ignore
	 * @returns {null}
	 */
	run: function() {
        this.setupLists();
		return;
	},
};

$(document).ready(function(){
    movieState.run();
});

