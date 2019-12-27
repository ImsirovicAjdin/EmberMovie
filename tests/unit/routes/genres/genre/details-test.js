import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | genres/genre/details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:genres/genre/details');
    assert.ok(route);
  });
});
