import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('genre');
    },
    actions: {
        didTransition() {
        document.title = 'Genres - List of Movies';
        },
        }
});