describe('ManagerModel', function() {

  describe('#find()', function() {
    it('should check find function', function (done) {
      Manager.find()
      .then(function(results) {
        // some tests
        done();
      })
      .catch(done);
    });
  });

});