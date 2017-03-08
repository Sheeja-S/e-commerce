import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  return this.store.findAll('product');
},
actions: {
  edit(product, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        product.set(key,params[key]);
      }
      product.save();
    });
    this.transitionTo('index');
  }
}
});
