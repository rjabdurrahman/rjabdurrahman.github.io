app.controller('ElectronicsCntlr', function($scope) {
    $scope.message = 'Home Controller';
    $scope.cat = "Electronics";
    $scope.products = [
        {
            name: "Electronic 1",
            price: 145
        },
        {
            name: "Electronic 2",
            price: 180
        },
        {
            name: "Electronic 3",
            price: 190
        },
        {
            name: "Electronic 4",
            price: 200
        }
    ];
});  