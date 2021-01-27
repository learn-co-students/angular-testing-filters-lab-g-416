describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should filter all female contacts correctly', function () {
        var $scope = {};
        $controller('ContactController as ctrl', {$scope: $scope});
        $scope.ctrl.search = 'female'
        $scope.ctrl.changeFilter()
        expect($scope.ctrl.filteredList.length).toEqual(71);
    });

    it('should filter all contacts geographically', function () {
        var $scope = {};
        $controller('ContactController as ctrl', {$scope: $scope});
        $scope.ctrl.search = 'Manchester'
        $scope.ctrl.changeFilter()
        expect($scope.ctrl.filteredList.length).toEqual(8);
    });

});
