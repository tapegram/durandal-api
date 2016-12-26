var expect =     require('chai').expect;
var Tournament = require('../../models/tournaments');
var factory =    require('../factories');
describe('Tournaments', function() {

  it('should be invalid if name is null', function(done) {
    var t = new Tournament();
    t.validate(function(err) {
			expect(err.errors.name).to.exist;
			done();
		});
	});

  it('should be valid if name exists', function(done) {
    var t = new Tournament();
    t.name = "test";
    t.validate(function(err) {
			expect(err.errors.name).to.not.exist;
			done();
		});
	});

  it('should be invalid if tournamentDate is not a date', function(done) {
    var t = new Tournament();
    t.tournamentDate = "test";
    t.validate(function(err) {
			expect(err.errors.tournamentDate).to.exist;
			done();
		});
	});

  it('should be invalid if registrationEnd is not a date', function(done) {
    var t = new Tournament();
    t.registrationEnd = "test";
    t.validate(function(err) {
			expect(err.errors.registrationEnd).to.exist;
			done();
		});
	});

  it('should be invalid if mustBeBornBefore is not a date', function(done) {
    var t = new Tournament();
    t.mustBeBornBefore = "test";
    t.validate(function(err) {
			expect(err.errors.mustBeBornBefore).to.exist;
			done();
		});
	});

  it('should be invalid if mustBeBornAfter is not a date', function(done) {
    var t = new Tournament();
    t.mustBeBornAfter = "test";
    t.validate(function(err) {
			expect(err.errors.mustBeBornAfter).to.exist;
			done();
		});
	});

  it('should be invalid if weapon is null', function(done) {
    var t = new Tournament();
    t.validate(function(err) {
			expect(err.errors.weapon).to.exist;
			done();
		});
	});

  it('should be invalid if weapon is not in enum', function(done) {
    var t = new Tournament();
    t.weapon = "test"
    t.validate(function(err) {
			expect(err.errors.weapon).to.exist;
			done();
		});
	});

  it('should be valid if weapon is "epee"', function(done) {
    var t = new Tournament();
    t.weapon = "epee"
    t.validate(function(err) {
			expect(err.errors.weapon).to.not.exist;
			done();
		});
	});

  it('should be valid if weapon is "foil"', function(done) {
    var t = new Tournament();
    t.weapon = "foil"
    t.validate(function(err) {
			expect(err.errors.weapon).to.not.exist;
			done();
		});
	});

  it('should be valid if weapon is "sabre"', function(done) {
    var t = new Tournament();
    t.weapon = "sabre"
    t.validate(function(err) {
			expect(err.errors.weapon).to.not.exist;
			done();
		});
	});

  it('should be invalid if sex is null', function(done) {
    var t = new Tournament();
    t.validate(function(err) {
			expect(err.errors.sex).to.exist;
			done();
		});
	});

  it('should be invalid if sex is not in enum', function(done) {
    var t = new Tournament();
    t.sex = "test"
    t.validate(function(err) {
			expect(err.errors.sex).to.exist;
			done();
		});
	});

  it('should be valid if sex is "female"', function(done) {
    var t = new Tournament();
    t.sex = "female"
    t.validate(function(err) {
			expect(err.errors.sex).to.not.exist;
			done();
		});
	});

  it('should be valid if sex is "male"', function(done) {
    var t = new Tournament();
    t.sex = "male"
    t.validate(function(err) {
			expect(err.errors.sex).to.not.exist;
			done();
		});
	});

  it('should be valid if sex is "mixed"', function(done) {
    var t = new Tournament();
    t.sex = "mixed"
    t.validate(function(err) {
			expect(err.errors.sex).to.not.exist;
			done();
		});
	});

  it('should be valid for a list of registered fencers', function(done) {
    var t = new Tournament();
    t.registeredFencers = [factory.validFencer];
    t.validate(function(err) {
			expect(err.errors.registeredFencers).to.not.exist;
			done();
		});
	});

  it('should be valid for a list of fencers as the initial seed', function(done) {
    var t = new Tournament();
    t.initialSeeding = [factory.validFencer];
    t.validate(function(err) {
			expect(err.errors.initialSeeding).to.not.exist;
			done();
		});
	});

  it('should be valid for a list of fencers as the final results', function(done) {
    var t = new Tournament();
    t.finalResults = [factory.validFencer];
    t.validate(function(err) {
			expect(err.errors.finalResults).to.not.exist;
			done();
		});
	});

  it('should be valid for a list of pool result info for seeding after pools', function(done) {
    var t = new Tournament();
    t.seedingAfterPools = [factory.validFencerPoolResultInfo];
    t.validate(function(err) {
			expect(err.errors.seedingAfterPools).to.not.exist;
			done();
		});
	});

  it('should be valid for a list of fencers as excluded', function(done) {
    var t = new Tournament();
    t.excludedFencers = [factory.validFencer];
    t.validate(function(err) {
			expect(err.errors.excludedFencers).to.not.exist;
			done();
		});
	});

  it('should be valid for a list of pools', function(done) {
    var t = new Tournament();
    t.pools = [factory.validPool];
    t.validate(function(err) {
			expect(err.errors.pools).to.not.exist;
			done();
		});
	});


});
