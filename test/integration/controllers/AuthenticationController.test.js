var request = require('supertest');

describe('AuthenticationController', function() {

  describe('#login()', function() {
    it('should redirect to /', function (done) {
      request(sails.hooks.http.app)
        .post('/authentication/login')
        .send({ name: 'test', password: 'test' })
        .expect(302)
        .expect('location','http://localhost:1337/', done);
    });
  });

});