var expect =               require('chai').expect;
var Pool =                 require('../../models/pools');
var factory =              require('../factories');
describe('Pools', function() {

  it('should be invalid if poolNumber is null', function(done) {
    var p = new Pool();
    p.validate(function(err) {
			expect(err.errors.poolNumber).to.exist;
			done();
		});
	});

  it('should be invalid if poolNumber < 1', function(done) {
    var p = new Pool();
    p.poolNumber = 0;
    p.validate(function(err) {
			expect(err.errors.poolNumber).to.exist;
			done();
		});
	});

  it('should be valid if poolNumber >= 1', function(done) {
    var p = new Pool();
    p.poolNumber = 1;
    p.validate(function(err) {
      expect(err.errors.poolNumber).to.not.exist;
      done();
    });
  });

  it('should be invalid if stripNumber is null', function(done) {
    var p = new Pool();
    p.validate(function(err) {
			expect(err.errors.stripNumber).to.exist;
			done();
		});
	});

  it('should be invalid if stripNumber < 1', function(done) {
    var p = new Pool();
    p.stripNumber = 0;
    p.validate(function(err) {
			expect(err.errors.stripNumber).to.exist;
			done();
		});
	});

  it('should be valid if stripNumber >= 1', function(done) {
    var p = new Pool();
    p.stripNumber = 1;
    p.validate(function(err) {
      expect(err.errors.stripNumber).to.not.exist;
      done();
    });
  });

  it('should have a default value of "not started" for status', function(done) {
    var p = new Pool();
    p.validate(function(err) {
			expect(p.status).to.equal('not started');
			done();
		});
	});

  it('should be invalid for non enum values of status', function(done) {
    var p = new Pool();
    p.status = 'test';
    p.validate(function(err) {
			expect(err.errors.status).to.exist;
			done();
		});
	});

  it('should be valid for a status of "in progress"', function(done) {
    var p = new Pool();
    p.status = 'in progress';
    p.validate(function(err) {
			expect(err.errors.status).to.not.exist;
			done();
		});
	});

  it('should be valid for a status of "final"', function(done) {
    var p = new Pool();
    p.status = 'final';
    p.validate(function(err) {
			expect(err.errors.status).to.not.exist;
			done();
		});
	});

  it('should be valid for a list of pool bouts', function(done) {
    var p = new Pool();
    p.bouts = [factory.validPoolBout];
    p.validate(function(err) {
			expect(err.errors.bouts).to.not.exist;
			done();
		});
	});

  it('should be valid for a list of fencers', function(done) {
    var p = new Pool();
    p.fencers = [factory.validFencer];
    p.validate(function(err) {
			expect(err.errors.fencers).to.not.exist;
			done();
		});
	});







});
