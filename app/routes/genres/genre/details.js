import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.modelFor('genres.genre');
    },
    actions: {
        willTransition(transition) {
            if (this.controller.isEditing) {
                let leave = window.confirm('Are you sure?');
                if (!leave) {
                    transition.abort();
                }
            }
        }
    }
});