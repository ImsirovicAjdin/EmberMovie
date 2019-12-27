import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.modelFor('genres.genre');
    },
    resetController(controller) {
        controller.setProperties({
            isAddingMovie: false,
            newSongTitle: ''
        });
    },
    actions: {
        didTransition() {
            let genre = this.modelFor(this.routeName);
             document.title = `${genre.name} movies - List of Movies`;
        },
    }
});
