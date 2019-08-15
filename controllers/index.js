const date = require('../helpers/dateFunctions.js');

exports.get_index = function(req, res, next) {
 res.render('index', {
        title: 'Goodbye',
        today: date.today()
    });
}

exports.submit_form = function(req, res, next) {
 console.log("Job Title: ", req.body.jobTitle);
 res.redirect('/');
}
