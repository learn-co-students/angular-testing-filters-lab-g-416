describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it("Should have exactly 71 females", function() {
      var $scope = {};
      $controller('ContactController as vm', {$scope: $scope});
      $scope.vm.search = 'female';
      $scope.vm.changeFilter();

      expect($scope.vm.filteredList.length).toEqual(71);
    })

    it("There should be 8 individuals from Manchester", function() {
      var $scope = {};
      $controller('ContactController as vm', {$scope: $scope});
      $scope.vm.search = 'Manchester';
      $scope.vm.changeFilter();

      expect($scope.vm.filteredList.length).toEqual(8);
    })
});
