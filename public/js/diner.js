/* global sharedVueStuff, Vue, socket */
'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getOrderNumber() {
  // It's probably not a good idea to generate a random order number, client-side. 
  // A better idea would be to let the server decide.
  return "#" + getRandomInt(1, 100);
}

new Vue({
  el: '#mainID',
  mixins: [sharedVueStuff], // include stuff that goes to both diner and kitchen
  methods: {
    placeOrder: function() {
      // create an array of checked items to order
    var orderItems = [].filter.call(document.getElementsByName('itemName'), function(i) {
      return i;
    }).map(function(i) {
      return document.getElementById(i.value + "amount").textContent + ' st ' + i.value;
    });
      if (orderItems.length != 0) socket.emit('order', {orderId: getOrderNumber(), orderItems: orderItems});
      document.getElementById('rows').removeChild(document.getElementById('bestallningar'));
  }
  }
});
