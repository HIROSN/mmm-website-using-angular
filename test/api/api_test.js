'use strict';

var chai = require('chai');
var server = 'http://localhost:' + (process.env.PORT || 3000);
var expect = chai.expect;

require('../../index');
chai.use(require('chai-http'));

describe('API tests', function() {
  it('should return status 500 for empty request', function(done) {
    chai.request(server)
    .get('/api')
    .end(function(err, res) {
      expect(err).equals(null);
      expect(res).to.be.a('object');
      expect(res).to.have.status(500);
      done();
    });
  });

  it('should return accurate results', function(done) {
    chai.request(server)
    .get('/api')
    .send({numbers: [5, 5, 6, 7]})
    .end(function(err, res) {
      expect(err).equals(null);
      expect(res).to.be.a('object');
      expect(res).to.have.status(200);
      expect(res.body).to.be.a('object');
      expect(res.body).to.have.property('mean');
      expect(res.body.mean).to.equal(5.75);
      expect(res.body).to.have.property('median');
      expect(res.body.median).to.equal(5.5);
      expect(res.body).to.have.property('mode');
      expect(res.body.mode).to.equal(5);
      done();
    });
  });
});
