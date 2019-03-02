var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'catpages/product.html',
    controller  : 'HomeCntlr'
  })
  .when('/login', {
    templateUrl : 'login.html',
    controller  : 'LoginCntlr'
  })
  .when('/addproduct', {
    templateUrl : 'add_product.html',
    controller  : 'AddProductCntlr'
  })
  .when('/electronics', {
    templateUrl : 'catpages/product.html',
    controller  : 'ElectronicsCntlr'
  })

  .otherwise({redirectTo: '/'});
});
app.run(function($rootScope) {
  $rootScope.cat = 'Main';
});
app.controller('HomeCntlr', function($scope){
    $scope.cat = 'Main';
    $scope.products = [
        {
            name: "Main 1",
            price: 45
        },
        {
            name: "Main 2",
            price: 80
        },
        {
            name: "Main 3",
            price: 90
        },
        {
            name: "Main 4",
            price: 20
        }
    ];
});
app.controller('LoginCntlr', function($scope){
  $scope.title = 'Login';
});
app.controller('AddProductCntlr', function($scope){
  $scope.title = 'Add Product';
});