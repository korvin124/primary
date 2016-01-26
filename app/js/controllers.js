'use strict';

/* Controllers */
var ImagesApp = angular.module('ImagesApp', ['ngRoute']);
//infinite-scroll="myPagingFunction()" infinite-scroll-distance="3"
var NewApp = angular.module('NewApp', ['infinite-scroll']);


ImagesApp.config(['$routeProvider', function($routeProvide){

  $routeProvide
    .when('/',{
    templateUrl:'template/home.html',
    controller:'ImagesListCtrl'
    })
    .when('/albums',{
    templateUrl:'template/albums.html',
    controller:'ImagesListCtrl'
    })
   .when('/popular',{
    templateUrl:'template/popular.html',
    controller:'UsersListCtrl'
    })
    .when('/photos/:photoId', {
            templateUrl:'template/photo-detail.html',
             controller:'PhotoDetailCtrl'
           })
    .when('/albums/:albumId', {
            templateUrl:'template/album-detail.html',
             controller:'AlbumDetailCtrl'
           })
   .otherwise({
    redirectTo: '/'
   });

}]);

ImagesApp.controller('ImagesListCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
    
    console.log('$location.url() - ', $location.url());
    console.log('$location.path() - ', $location.path());
    console.log('$location.search() - ', $location.search());
    console.log('$location.hash() - ', $location.hash());
  $scope.title = 'Image Servise';
$http({
  method: 'GET',
  url: 'http://jsonplaceholder.typicode.com/photos'
  }).success(function(data, status, headers, config) {
      console.log("receive_photos");
      $scope.photos = data;
    });
$http({
  method: 'GET',
  url: 'http://jsonplaceholder.typicode.com/albums'
  }).success(function(data) {
      console.log("receive_albums");
      $scope.albums = data;
    });

  $http({
  method: 'GET',
  url: 'http://jsonplaceholder.typicode.com/users'
  }).success(function(data) {
      console.log("yes");
      $scope.users = data;
    });

}]);

ImagesApp.controller('AlbumsListCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
}]);

ImagesApp.controller('UsersListCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
}]);

ImagesApp.controller('PhotoDetailCtrl',['$scope','$http', '$location','$routeParams', function($scope, $http, $location, $routeParams) {
  $scope.photoId = $routeParams.photoId;

}]);

ImagesApp.controller('AlbumDetailCtrl',['$scope','$http', '$location','$routeParams', function($scope, $http, $location, $routeParams) {
  $scope.albumId = $routeParams.albumId;

}]);