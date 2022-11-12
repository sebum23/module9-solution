(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['MenuDataService', 'items'];
  
  function ItemsController (MenuDataService, items) {
    var menuList = this;
    menuList.items = items;
    console.log("menuList items: ", menuList.items)
  }
  
  })();