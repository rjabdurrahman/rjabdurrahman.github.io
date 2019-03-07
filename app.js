var app = angular.module('myApp', ['ngRoute', 'firebase']);

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
app.controller('HomeCntlr', function($scope, $firebaseArray){
    $scope.cat = 'Main';
    let db = firebase.database();
    $scope.products = $firebaseArray(db.ref('products/food'));
});
app.controller('LoginCntlr', function($scope){
  $scope.title = 'Login';
});
app.controller('AddProductCntlr', function($scope){
  $scope.title = 'Add Product';
});