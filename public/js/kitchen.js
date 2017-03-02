/* global sharedVueStuff, Vue, socket */
'use strict';

new Vue({
  el: '#orders',
  mixins: [sharedVueStuff], // include stuff that goes to both diner and kitchen
  methods: {
    markDone: function(orderid) {
      var button = document.getElementById(orderid); //Hitta knappen som man tryckt på

            //Kolla färg/status på knappen. Ifall röd- gör gul.
      if (document.getElementById(orderid).className == "pending") {
      button.setAttribute("style", "background-color: yellow");
      button.setAttribute('class', 'ongoing');
            //Ifall gul gör grön.
      } else if (document.getElementById(orderid).className == "ongoing") {
      button.setAttribute("style", "background-color: green");
      button.setAttribute('class', 'ready');
      } else {
      //Ifall grön gör klar.
      this.orders[orderid].done = true;
      socket.emit("orderDone", orderid);
      }
    }
  }
});