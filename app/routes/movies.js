import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
let Movie = EmberObject.extend({
    title: '',
    genre: '',
    rating: 0
});
export default Route.extend({
    model() {
        let blackDog = Movie.create({
            title: 'Black Dog',
            genre: 'Led Zeppelin',
            rating: 3
        });
        let yellowLedbetter = Movie.create({
            title: 'Yellow Ledbetter',
            genre: 'Pearl Jam',
            rating: 4
        });
        let pretender = Movie.create({
            title: 'The Pretender',
            genre: 'Foo Fighters',
            rating: 2
        });
        return [blackDog, yellowLedbetter, pretender];
    }
});