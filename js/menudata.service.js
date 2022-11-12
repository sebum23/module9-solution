(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  
  function MenuDataService ($http) {
    var service = this;

    service.getAllCategories = function () {
      console.log("getAllCategories");
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      }).then(function (result) {
        console.log("categories: %o", result.data);
        var items = result.data;
        return items;
      });
    }
    // https://davids-restaurant.herokuapp.com/menu_items.json?category=
    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName
      }).then(function (result) {
        console.log("menu_items: %o", result.data.menu_items);
        var items = result.data.menu_items;
        return items;
      });
    }

  }
  
  })();