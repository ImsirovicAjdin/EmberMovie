import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
    isAddingGenre: false,
    newGenreName: '',
    
    isAddButtonDisabled: empty('newGenreName'),
    router: service(),
    actions: {
        addGenre() {
            this.set('isAddingGenre', true);
                },
        cancelAddGenre() {
            this.set('isAddingGenre', false);
                },         
        saveGenre(event) {
            event.preventDefault();
            let newGenre = this.store.createRecord('genre', 
            { name: this.newGenreName 
            
            });
             newGenre.save();
            this.setProperties({
                newGenreName: '',
                isAddingGenre: false
                });
                this.router.transitionTo('genres.genre.movies', newGenre.id);

                },
            }
    });
    
