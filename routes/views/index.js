var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.title = 'Home | Azoic Ventures';

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	view.on('init', function (next) {

		var q = keystone.list('Investment').model.find().where('state', 'published').sort('-publishedDate');


		q.exec(function (err, results) {
			// console.log(results);
			console.log(locals);
			locals.investments = results;
			next(err);
		});
	});

	// Render the view
	view.render('index');
};
