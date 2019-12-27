import Route from '@ember/routing/route';
import { A } from '@ember/array';
import Genre from '../models/genre';
import Movie from '../models/movie';

export default Route.extend({
    model() {
        let blackDog = Movie.create({
        title: 'Black Dog',
        band: 'Led Zeppelin',
        rating: 3
        });
        let yellowLedbetter = Movie.create({
        title: 'Yellow Ledbetter',
        band: 'Pearl Jam',
        rating: 4
        });
        let pretender = Movie.create({
        title: 'The Pretender',
        band: 'Foo Fighters',
        rating: 2
        });
        let daughter = Movie.create({
        title: 'Daughter',
        band: 'Pearl Jam',
        rating: 5
        });
        let ledZeppelin = Genre.create({ name: 'Led Zeppelin', songs:
            A([blackDog]) });
            let pearlJam = Genre.create({ name: 'Pearl Jam', songs:
            A([yellowLedbetter, daughter]) });
            let fooFighters = Genre.create({ name: 'Foo Fighters', songs:
            A([pretender]) });
            return A([ledZeppelin, pearlJam, fooFighters]);

        // return this.store.findAll('genre');

        
    },
    actions: {
        didTransition() {
        document.title = 'Genres - List of Movies';
        },
    }
});