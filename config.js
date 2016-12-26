module.exports = {
    'mongoUrl' : process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/durandal-api'
}
