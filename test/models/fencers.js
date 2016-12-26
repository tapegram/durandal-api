var expect = require('chai').expect;
var Fencer = require('../../models/fencers');

describe('Fencer', function() {

	it('should be invalid if firstName is empty', function(done) {
    var f = new Fencer();
    f.validate(function(err) {
			expect(err.errors.firstName).to.exist;
			done();
		});
	});

  it('should be valid if firstName exists', function(done) {
    var f = new Fencer();
    f.firstName = "TestFirstName";
		f.validate(function(err) {
			expect(err.errors.firstName).to.not.exist;
			done();
		});
	});

  it('should have a blank default middle name', function(done) {
    var f = new Fencer();
		f.validate(function(err) {
			expect(f.middleName).to.equal('');
			done();
		});
	});

  it('should be invalid if lastName is empty', function(done) {
    var f = new Fencer();
    f.validate(function(err) {
			expect(err.errors.lastName).to.exist;
			done();
		});
	});

  it('should be valid if lastName exists', function(done) {
    var f = new Fencer();
    f.lastName = "TestLastName";
		f.validate(function(err) {
			expect(err.errors.lastName).to.not.exist;
			done();
		});
	});

  it('should be invalid if DOB is empty', function(done) {
    var f = new Fencer();
		f.validate(function(err) {
			expect(err.errors.dob).to.exist;
			done();
		});
	});

  it('should be invalid if DOB is in the future', function(done) {
    var f = new Fencer();
    f.dob = (Date.now() + 100000);
		f.validate(function(err) {
			expect(err.errors.dob).to.exist;
			done();
		});
	});

  it('should be valid if DOB is in the past', function(done) {
    var f = new Fencer();
    f.dob = (Date.now() - 100000);
		f.validate(function(err) {
			expect(err.errors.dob).to.not.exist;
			done();
		});
	});

  it('should be invalid if sex is empty', function(done) {
    var f = new Fencer();
		f.validate(function(err) {
			expect(err.errors.sex).to.exist;
			done();
		});
	});

  it('should be invalid if sex is a non-enum value', function(done) {
    var f = new Fencer();
    f.sex = 'illegalvalue';
    f.validate(function(err) {
			expect(err.errors.sex).to.exist;
			done();
		});
	});

  it('should be valid if sex is "male"', function(done) {
    var f = new Fencer();
    f.sex = 'male';
    f.validate(function(err) {
			expect(err.errors.sex).to.not.exist;
			done();
		});
	});

  it('should be valid if sex is "female"', function(done) {
    var f = new Fencer();
    f.sex = 'female';
    f.validate(function(err) {
			expect(err.errors.sex).to.not.exist;
			done();
		});
	});

  it('should be valid if sex is "other"', function(done) {
    var f = new Fencer();
    f.sex = 'other';
    f.validate(function(err) {
			expect(err.errors.sex).to.not.exist;
			done();
		});
	});

  it('should be invalid if epeeRating is empty', function(done) {
    var f = new Fencer();
		f.validate(function(err) {
			expect(err.errors.epeeRating).to.exist;
			done();
		});
	});

  it('should be invalid if epeeRating is non-enum value', function(done) {
    var f = new Fencer();
    f.epeeRating = 'Z';
    f.validate(function(err) {
			expect(err.errors.epeeRating).to.exist;
			done();
		});
	});

  it('should be valid if epeeRating is "U"', function(done) {
    var f = new Fencer();
    f.epeeRating = 'U';
		f.validate(function(err) {
			expect(err.errors.epeeRating).to.not.exist;
			done();
		});
	});

  it('should be valid if epeeRating is "A"', function(done) {
    var f = new Fencer();
    f.epeeRating = 'A';
		f.validate(function(err) {
			expect(err.errors.epeeRating).to.not.exist;
			done();
		});
	});

  it('should be valid if epeeRatingYear is 2016', function(done) {
    var f = new Fencer();
    f.epeeRatingYear = 2016;
		f.validate(function(err) {
			expect(err.errors.epeeRatingYear).to.not.exist;
			done();
		});
	});

  it('should be invalid if foilRating is empty', function(done) {
    var f = new Fencer();
		f.validate(function(err) {
			expect(err.errors.foilRating).to.exist;
			done();
		});
	});

  it('should be invalid if foilRating is non-enum value', function(done) {
    var f = new Fencer();
    f.foilRating = '19';
    f.validate(function(err) {
			expect(err.errors.foilRating).to.exist;
			done();
		});
	});

  it('should be valid if foilRating is "D"', function(done) {
    var f = new Fencer();
    f.foilRating = 'D';
		f.validate(function(err) {
			expect(err.errors.foilRating).to.not.exist;
			done();
		});
	});

  it('should be valid if foilRating is "B"', function(done) {
    var f = new Fencer();
    f.foilRating = 'B';
		f.validate(function(err) {
			expect(err.errors.foilRating).to.not.exist;
			done();
		});
	});

  it('should be valid if foilRatingYear is 2016', function(done) {
    var f = new Fencer();
    f.foilRatingYear = 2016;
		f.validate(function(err) {
			expect(err.errors.foilRatingYear).to.not.exist;
			done();
		});
	});

  it('should be invalid if sabreRating is empty', function(done) {
    var f = new Fencer();
		f.validate(function(err) {
			expect(err.errors.sabreRating).to.exist;
			done();
		});
	});

  it('should be invalid if sabreRating is non-enum value', function(done) {
    var f = new Fencer();
    f.sabreRating = '$';
    f.validate(function(err) {
			expect(err.errors.sabreRating).to.exist;
			done();
		});
	});

  it('should be valid if sabreRating is "E"', function(done) {
    var f = new Fencer();
    f.sabreRating = 'E';
		f.validate(function(err) {
			expect(err.errors.sabreRating).to.not.exist;
			done();
		});
	});

  it('should be valid if sabreRating is "C"', function(done) {
    var f = new Fencer();
    f.sabreRating = 'C';
		f.validate(function(err) {
			expect(err.errors.sabreRating).to.not.exist;
			done();
		});
	});

  it('should be valid if sabreRatingYear is 2016', function(done) {
    var f = new Fencer();
    f.sabreRatingYear = 2016;
		f.validate(function(err) {
			expect(err.errors.sabreRatingYear).to.not.exist;
			done();
		});
	});

});
