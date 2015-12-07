var app = angular.module('informationWebApp');

app.controller('informationsController', ['$scope','$http', function($scope, $http) {
    // create a message to display in our view
    $scope.message = 'Information displayed below, Your Colleagues may vote on whether they think your pay is fair';
    
    $http.get('/informations')
        .success(function(data) {
            $scope.informations = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.incrementUpvotes = function(id){
          $http.put('/informations/' + id + '/votes')
            .success(function(data) {
                $scope.informations = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
          }

    $scope.delete = function(id) {
      if (confirm("Are you sure you want to delete?")) {
              console.log('Deleting id : ' + id);
        $http.delete('/informations/' + id)
            .success(function(data) {
                $scope.informations = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
          }
    };
  
  }
  ]);
