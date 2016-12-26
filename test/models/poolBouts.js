var expect =               require('chai').expect;
var Fencer =               require('../../models/fencers');
var PoolBout =             require('../../models/poolBouts');
var factory =              require('../factories');
describe('PoolBouts', function() {

	it('should have a default value of 0 for scoreLeft', function(done) {
    var p = new PoolBout();
    p.validate(function(err) {
			expect(p.scoreLeft).to.equal(0);
			done();
		});
	});

  it('should be invalid if scoreLeft < 0', function(done) {
    var p = new PoolBout();
    p.scoreLeft = -1;
    p.validate(function(err) {
			expect(err.errors.scoreLeft).to.exist;
			done();
		});
	});

  it('should be invalid if scoreLeft > 5', function(done) {
    var p = new PoolBout();
    p.scoreLeft = 6;
    p.validate(function(err) {
			expect(err.errors.scoreLeft).to.exist;
			done();
		});
	});

  it('should be valid if 0 <= scoreLeft <= 5',  function(done) {
    var p = new PoolBout();
    p.scoreLeft = 3;
    p.validate(function(err) {
			expect(err.errors.scoreLeft).to.not.exist;
			done();
		});
	});

  it('should have a default value of 0 for scoreRight', function(done) {
    var p = new PoolBout();
    p.validate(function(err) {
			expect(p.scoreRight).to.equal(0);
			done();
		});
	});

  it('should be invalid if scoreRight < 0', function(done) {
    var p = new PoolBout();
    p.scoreRight = -1;
    p.validate(function(err) {
			expect(err.errors.scoreRight).to.exist;
			done();
		});
	});

  it('should be invalid if scoreRight > 5', function(done) {
    var p = new PoolBout();
    p.scoreRight = 6;
    p.validate(function(err) {
			expect(err.errors.scoreRight).to.exist;
			done();
		});
	});

  it('should be valid if 0 <= scoreRight <= 5',  function(done) {
    var p = new PoolBout();
    p.scoreRight = 3;
    p.validate(function(err) {
			expect(err.errors.scoreRight).to.not.exist;
			done();
		});
	});

  it('should be invalid if fencerLeft is null',  function(done) {
    var p = new PoolBout();
    p.validate(function(err) {
			expect(err.errors.fencerLeft).to.exist;
			done();
		});
	});

  it('should be valid if fencerLeft is valid',  function(done) {
    var p = new PoolBout();
    p.fencerLeft = factory.validFencer();
    p.validate(function(err) {
			expect(err.errors.fencerLeft).to.not.exist;
			done();
		});
	});

  it('should be invalid if fencerRight is null',  function(done) {
    var p = new PoolBout();
    p.validate(function(err) {
			expect(err.errors.fencerRight).to.exist;
			done();
		});
	});

  it('should be valid if fencerRight is valid',  function(done) {
    var p = new PoolBout();
    p.fencerRight = factory.validFencer();
    p.validate(function(err) {
			expect(err.errors.fencerRight).to.not.exist;
			done();
		});
	});

  it('should have a default value of "none" for priority', function(done) {
    var p = new PoolBout();
    p.validate(function(err) {
			expect(p.priority).to.equal('none');
			done();
		});
	});

  it('should be invalid for non enum values of priority', function(done) {
    var p = new PoolBout();
    p.priority = 'test';
    p.validate(function(err) {
			expect(err.errors.priority).to.exist;
			done();
		});
	});

  it('should be valid for a priority of "left"', function(done) {
    var p = new PoolBout();
    p.priority = 'left';
    p.validate(function(err) {
			expect(err.errors.priority).to.not.exist;
			done();
		});
	});

  it('should be valid for a priority of "right"', function(done) {
    var p = new PoolBout();
    p.priority = 'right';
    p.validate(function(err) {
			expect(err.errors.priority).to.not.exist;
			done();
		});
	});

  it('should have a default value of "not started" for status', function(done) {
    var p = new PoolBout();
    p.validate(function(err) {
			expect(p.status).to.equal('not started');
			done();
		});
	});

  it('should be invalid for non enum values of status', function(done) {
    var p = new PoolBout();
    p.status = 'test';
    p.validate(function(err) {
			expect(err.errors.status).to.exist;
			done();
		});
	});

  it('should be valid for a status of "in progress"', function(done) {
    var p = new PoolBout();
    p.status = 'in progress';
    p.validate(function(err) {
			expect(err.errors.status).to.not.exist;
			done();
		});
	});

  it('should be valid for a status of "final"', function(done) {
    var p = new PoolBout();
    p.status = 'final';
    p.validate(function(err) {
			expect(err.errors.status).to.not.exist;
			done();
		});
	});

  it('should have a default value of 180000 for timeRemaining', function(done) {
    var p = new PoolBout();
    p.validate(function(err) {
			expect(p.timeRemaining).to.equal(180000);
			done();
		});
	});

  it('should be invalid if timeRemaining < 0', function(done) {
    var p = new PoolBout();
    p.timeRemaining = -1;
    p.validate(function(err) {
			expect(err.errors.timeRemaining).to.exist;
			done();
		});
	});

  it('should be invalid if timeRemaining > 180000', function(done) {
    var p = new PoolBout();
    p.timeRemaining = 180001;
    p.validate(function(err) {
			expect(err.errors.timeRemaining).to.exist;
			done();
		});
	});

  it('should be valid if 0 <= timeRemaining <= 180000',  function(done) {
    var p = new PoolBout();
    p.timeRemaining = 5000;
    p.validate(function(err) {
			expect(err.errors.timeRemaining).to.not.exist;
			done();
		});
	});





});
