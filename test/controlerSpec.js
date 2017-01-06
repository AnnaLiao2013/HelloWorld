describe('mainCtrl', function() {
  beforeEach(module('myApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.message', function() {
    it('display message', function() {
      var $scope = {};
      var controller = $controller('mainCtrl', { $scope: $scope });
      expect($scope.message).toEqual('!!! Hello World !!!');
    });
  });
});