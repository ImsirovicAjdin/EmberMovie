import {inject as service} from '@ember/service';
import Route from '@ember/routing/route';

// export default class Index1Route extends Route {
// }

export default Route.extend({
    router: service(),
    beforeModel() {
        this.router.transitionTo('genres');
    }
});