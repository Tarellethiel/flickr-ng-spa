'use strict';

/**
 * @ngdoc overview
 * @name flickrNgSpaApp
 * @description
 * # flickrNgSpaApp
 *
 * Main module of the application.
 */
angular
  .module('flickrNgSpaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/home/homeView.html',
        controller: 'homeController'
      })
      .when('/discover', {
        templateUrl: 'components/discover/discoverView.html',
        controller: 'discoverController'
      })
      .when('/details/:id' ,{
         templateUrl: 'components/details/detailsView.html',
        controller: 'detailsController'
        })
      .otherwise({
        redirectTo: '/'
      })
        .when('/users/:nsid' ,{
         templateUrl: 'components/users/userView.html',
        controller: 'userController'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
