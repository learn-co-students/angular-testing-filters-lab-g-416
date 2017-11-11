describe("ContactController", function() {
    var $controller;

    beforeEach(module("app"));

    beforeEach(
        inject(function(_$controller_) {
            $controller = _$controller_;
        })
    );

    it("should filter list for 71 females", function() {
        var $scope = {};
        $controller("ContactController as vm", { $scope: $scope });

        // $scope.vm.search = "F";

        // $scope.vm.changeFilter();

        expect($scope.vm.filteredList.length).toEqual(71);
    });

    it("should find 8 people from Manchester", function() {
        var $scope = {};
        $controller("ContactController as vm", { $scope: $scope });

        $scope.vm.search = { location: { city: "Manchester" } };

        $scope.vm.changeFilter();

        expect($scope.vm.filteredList.length).toEqual(2);
    });
});
