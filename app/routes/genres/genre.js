import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    router: service(),
    model(params) {
            let genre = this.modelFor('genre');
            return genre.findBy('id', params.id);
           // return this.store.findRecord('genre', params.id);
        },
    
});