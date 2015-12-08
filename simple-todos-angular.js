Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
    angular.module('simple-todos', ['angular-meteor']);

    angular.module('simple-todos').controller('TodosListCtrl', ['$scope',
      function($scope){
        // we are using $meteor service to bind our tasks collection to our $scope.tasks variable
        $scope.tasks = $meteor.collection(Tasks);
      }]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
