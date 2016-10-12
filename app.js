/**
 * Created by cleverjam on 10/12/16.
 */
angular.module("exampleApp",[])
    .controller("defaultCtrl", function($scope){
        $scope.counter = 0;

        $scope.incrementCounter = function(){
            $scope.counter++;
        }
    });