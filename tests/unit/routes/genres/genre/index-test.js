import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | genres/genre/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:genres/genre/index');
    assert.ok(route);
  });
});
