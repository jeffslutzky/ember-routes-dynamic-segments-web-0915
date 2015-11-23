import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.findAll("artist");
	},
  actions: {
    addArtist: function(artist){
        let model = this.modelFor(this.routeName);
        var newArtist = Ember.Object.create({name: artist});
        model.pushObject(newArtist);
        this.controller.set('artistName', '');
    }
    }
});