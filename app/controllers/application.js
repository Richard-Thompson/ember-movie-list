import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addMovie(title, description, image) {
            var newMovie = this.store.createRecord('movie', {
                title:title,
                description:description,
                image:image
              });
              newMovie.save();
        },
      },
});
