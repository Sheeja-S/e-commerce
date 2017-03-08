import Ember from 'ember';

export default Ember.Component.extend({
    editProductForm: false,

    actions:{
      editProductForm(){
      this.set('editProductForm', true);
  },
   edit(product){
     var params = {
       name: this.get('name'),
       price: this.get('price'),
       content:this.get('content'),
       stock: this.get('stock'),
       image: this.get('image')
     };
     this.set('editProductForm', false);
     this.sendAction('edit', product, params);
   }
 }
});
