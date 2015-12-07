var app = angular.module('informationWebApp');

app.controller('infoController', ['$scope', '$location', '$http', function($scope, $location, $http) {
    
    $scope.formData = {};

    $scope.message = 'Please type your information below';
    $scope.amount = 10000;
    $scope.options1 = [{ name: "Lower", id: 2 }, { name: "Middle", id: 3 }, { name: "Higher", id: 4 }];
    $scope.options2 = [{ name: "Yes", id: 5 }, { name: "No", id: 6 }];
    $scope.options = [{ name: "Man", id: 0 }, { name: "Woman", id: 1 }];
    $scope.formData.paymentOptions = $scope.options[0];
    $scope.formData.paymentOptions1 = $scope.options1[0];
    $scope.formData.paymentOptions2 = $scope.options2[0];


    //Reset our formData fields
    $scope.formData.paymenttype = 'Man';
    $scope.formData.paymenttype1 = "Lower";
    $scope.formData.paymenttype2 = " Yes";
    $scope.formData.amount = 10000;
    $scope.formData.upvotes = 0;

    $scope.addinformation = function(){
      $scope.formData.paymenttype = $scope.formData.paymentOptions.name;
      $scope.formData.paymenttype1 = $scope.formData.paymentOptions1.name;
      $scope.formData.paymenttype2 = $scope.formData.paymentOptions2.name;



       $http.post('/informations', $scope.formData)
            .success(function(data) {
                $scope.informations = data;
                $location.path('/informations');
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
              });
            }
  }

  ]);
