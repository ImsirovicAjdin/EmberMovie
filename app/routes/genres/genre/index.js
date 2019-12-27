import {inject as service} from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
    router: service(),
    redirect(genre) {
        if (genre.description) {
            this.router.transitionTo('genres.genre.details');
        } else {
            this.router.transitionTo('genres.genre.movies');
        }
    }
});