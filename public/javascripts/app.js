/**
 * Created by dougritzinger on 10/6/15.
 */

var app=angular.module('memeApp',[]);

app.controller("MainController", ['$scope','$http', function($scope, $http){

//$http.get('/json').then(function(data){
//    console.log ('json data: ',data);
//    $scope.data=data;
//    });

//  $scope[response.data[i].model] = response.data[i].quote;

    $scope.cat = "I am loafcat";
    $scope.face = "I am pumpkin face";
    $scope.neil = "Raise the roof!";
    $scope.scumbag = "Justin Beiber wanabe";
    $scope.yao = "Oh no, Jade!!";

}]);
