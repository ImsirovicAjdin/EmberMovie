import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({

    name() {
        return faker.lorem.sentence();
      },
    
      description() {
        return faker.lorem.paragraph();
      },
    
      movies() {
        return faker.date.past();
      },
    
      afterCreate(genre, server) {
        server.createList('movie', 3, { genre });
      }
});
