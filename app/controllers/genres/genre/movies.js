import Controller from '@ember/controller';
import {empty} from '@ember/object/computed';

export default Controller.extend({
    isAddingSong: false,
    newSongTitle: '',
    isAddButtonDisabled: empty('newMovieTitle'),
    actions: {
        addMovie() {
            this.set('isAddingMovie', true);
        },
        cancelAddMovie() {
            this.set('isAddingMovie', false);
        },
        async saveSong(event) {
            event.preventDefault();
            let newMovie = this.store.createRecord('movie', {
                title: this.get('newMovieTitle'),
                movie: this.model
                });
                await newMovie.save();
            this.set('newMovieTitle', '');
        },
        updateRating(movie, rating) {
            movie.set('rating', movie.rating === rating ? 0 : rating);
            movie.save();
            }
    }
});