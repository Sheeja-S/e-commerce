import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
  stock:DS.attr()
});
