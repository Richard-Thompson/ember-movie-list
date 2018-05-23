import Ember from 'ember';

export default Ember.Component.extend({
    tagname:'form',
    classNames:['add-movie'],
    classNameBindings:['expand:fade-in'],

    expand: false,
    
    data: this,
    
    title: null,
    image: null,
    description: null,
});
