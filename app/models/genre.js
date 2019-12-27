import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default Model.extend({
    
    // @attr() name;
    // @attr() description;
    // @hasMany() movies;
    name: attr('string'),
    description: attr('string'),
    movies: hasMany(),
});