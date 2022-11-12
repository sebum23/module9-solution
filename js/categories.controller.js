(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['MenuDataService', 'items'];
  
  function CategoriesController (MenuDataService, items) {
    var categories = this;
    categories.items = items;
    console.log("controller items: ", categories.items)
  }
  
  })();