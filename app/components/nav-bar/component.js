import Ember from 'ember';

export default Ember.Component.extend({
    tagname: 'nav',
    classNameBindings:['expand:big'],
    classNames:['navbar'],

    expand: false,

    movies:null,

    actions: {
        onClick: function () {
            this.set('expand', true);
        }
    }
});
