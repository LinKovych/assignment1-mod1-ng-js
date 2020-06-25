(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
	$scope.food = '';
	$scope.message = '';
	$scope.check = function () {
		var list = $scope.food;
		$scope.message = calculateFood(list);
	}
}

function calculateFood (list) {
	var arr = list.split(',');
	
	if (list == '') {
		return 'Please enter data first';
	}

	if (arr.length <= 3 && arr.length > 0) {
		return 'Enjoy!';
	}

	else if (arr.length > 3) {
		return 'Too much!';
	}
}

})();