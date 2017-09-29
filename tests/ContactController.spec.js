describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should return the results that are female', function(){
      var $scope = {}
      $controller('ContactController as vm', { $scope: $scope})

      $scope.vm.search = 'female'

      $scope.vm.changeFilter()

      expect($scope.vm.filteredList.length).toEqual(71)
    })

    it('selects people from different geo locations', function(){
      var $scope = {}
      $controller('ContactController as vm', { $scope: $scope})

      $scope.vm.search = 'manchester'

      $scope.vm.changeFilter()

      expect($scope.vm.filteredList.length).toEqual(8)
    })
});

// Write a test to return all the contacts who are female (hint: there are 71 females).

// Write another test to select people from different geographical locations (hint: there are 8 from Manchester).
