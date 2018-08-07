var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'catpages/product.html',
    controller  : 'HomeCntlr'
  })
  .when('/electronics', {
    templateUrl : 'catpages/product.html',
    controller  : 'ElectronicsCntlr'
  })

  .otherwise({redirectTo: '/'});
});
app.controller('HomeCntlr', function($scope){
    $scope.cat = 'Main';
});
app.run(function($rootScope) {
  $rootScope.cat = 'Main';
})