var app = angular.module('informationWebApp');

app.controller('tableController', ['$scope',  function($scope){

var business = [
		{name: "Globtech", operations: "Navigation", salary: 55000, country: "Ireland"},
		{name: "MiniGiga", operations: "Manager", salary: 44000, country: "England"},
		{name: "La Perret", operations: "IT Support", salary: 37000, country: "France"},
		{name: "GQS", operations: "Security", salary: 56000, country: "Ireland"},
		{name: "RSH", operations: "CEO", salary: 100000, country: "Denmark"},
		{name: "Abtran", operations: "Genreral Oprative", salary: 30000, country: "Norway"},
		{name: "VoxPro", operations: "Manager", salary: 50000, country: "Spain"},


];


$scope.business = business;

}]);