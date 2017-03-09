import Ember from 'ember';

export default Ember.Component.extend({
 addNewProduct: false,
 actions:{
   productFormShow(){
     this.set('addNewProduct', true);
   },

   saveProduct(){
     var params = {
       name: this.get('name'),
       price: this.get('price'),
       content:this.get('content'),
       stock:this.get('stock'),
       image:this.get('image')
     };

   this.set('addNewProduct',false);
   this.sendAction('saveProduct',params);
   }
  }
 });
