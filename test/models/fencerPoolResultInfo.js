var expect =               require('chai').expect;
var FencerPoolResultInfo = require('../../models/fencerPoolResultInfo');
var factory =              require('../factories');
describe('FencerPoolResultInfo', function() {

	it('should be invalid if fencer is empty', function(done) {
    var f = new FencerPoolResultInfo();
    f.validate(function(err) {
			expect(err.errors.fencer).to.exist;
			done();
		});
	});

  it('should be valid if fencer is present', function(done) {
    var f = new FencerPoolResultInfo();
    f.fencer = factory.validFencer();

    f.validate(function(err) {
			expect(err.errors.fencer).to.not.exist;
			done();
		});
	});

  it('should be invalid if wins is empty', function(done) {
    var f = new FencerPoolResultInfo();
    f.validate(function(err) {
			expect(err.errors.wins).to.exist;
			done();
		});
	});

  it('should be valid if wins is >= 0', function(done) {
    var f = new FencerPoolResultInfo();
    f.wins = 0;

    f.validate(function(err) {
			expect(err.errors.wins).to.not.exist;
			done();
		});
	});

  it('should be invalid if wins is < 0', function(done) {
    var f = new FencerPoolResultInfo();
    f.wins = -3;

    f.validate(function(err) {
			expect(err.errors.wins).to.exist;
			done();
		});
	});

  it('should be invalid if wins is not a number', function(done) {
    var f = new FencerPoolResultInfo();
    f.wins = 'test';

    f.validate(function(err) {
			expect(err.errors.wins).to.exist;
			done();
		});
	});

  it('should be invalid if numBouts is empty', function(done) {
    var f = new FencerPoolResultInfo();
    f.validate(function(err) {
			expect(err.errors.numBouts).to.exist;
			done();
		});
	});

  it('should be valid if numBouts is >= 0', function(done) {
    var f = new FencerPoolResultInfo();
    f.numBouts = 0;

    f.validate(function(err) {
			expect(err.errors.numBouts).to.not.exist;
			done();
		});
	});

  it('should be invalid if numBouts is < 0', function(done) {
    var f = new FencerPoolResultInfo();
    f.numBouts = -10;

    f.validate(function(err) {
			expect(err.errors.numBouts).to.exist;
			done();
		});
	});

  it('should be invalid if numBouts is not a number', function(done) {
    var f = new FencerPoolResultInfo();
    f.numBouts = 'test';

    f.validate(function(err) {
			expect(err.errors.numBouts).to.exist;
			done();
		});
	});

  it('should be invalid if touchesFor is empty', function(done) {
    var f = new FencerPoolResultInfo();
    f.validate(function(err) {
			expect(err.errors.touchesFor).to.exist;
			done();
		});
	});

  it('should be valid if touchesFor is >= 0', function(done) {
    var f = new FencerPoolResultInfo();
    f.touchesFor = 0;

    f.validate(function(err) {
			expect(err.errors.touchesFor).to.not.exist;
			done();
		});
	});

  it('should be invalid if touchesFor is < 0', function(done) {
    var f = new FencerPoolResultInfo();
    f.touchesFor = -5;

    f.validate(function(err) {
			expect(err.errors.touchesFor).to.exist;
			done();
		});
	});

  it('should be invalid if touchesFor is not a number', function(done) {
    var f = new FencerPoolResultInfo();
    f.touchesFor = 'test';

    f.validate(function(err) {
			expect(err.errors.touchesFor).to.exist;
			done();
		});
	});

  it('should be invalid if touchesAgainst is empty', function(done) {
    var f = new FencerPoolResultInfo();
    f.validate(function(err) {
			expect(err.errors.touchesFor).to.exist;
			done();
		});
	});

  it('should be valid if touchesAgainst is >= 0', function(done) {
    var f = new FencerPoolResultInfo();
    f.touchesAgainst = 0;

    f.validate(function(err) {
			expect(err.errors.touchesAgainst).to.not.exist;
			done();
		});
	});

  it('should be invalid if touchesAgainst is < 0', function(done) {
    var f = new FencerPoolResultInfo();
    f.touchesAgainst = -1;

    f.validate(function(err) {
			expect(err.errors.touchesAgainst).to.exist;
			done();
		});
	});

  it('should be invalid if touchesAgainst is not a number', function(done) {
    var f = new FencerPoolResultInfo();
    f.touchesAgainst = 'test';

    f.validate(function(err) {
			expect(err.errors.touchesAgainst).to.exist;
			done();
		});
	});


});
