const keystone = require('keystone');
// const investments = require('../investments');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    locals.section = 'investments';
    locals.filter = {
        company: req.params.company
    }
    locals.title = `${locals.filter.company} | Azoic Ventures`;

    view.on('init', function (next) {
        var q = keystone.list('Investment').model.findOne({
            state: 'published',
            title: locals.filter.company
        }).populate('author');

        q.exec(function (err, result) {
            console.log(result);
            locals.company = result;
            next(err);
        });
    });

    view.on('init', function (next) {

        var q = keystone.list('Investment').model.find().where('state', 'published').sort('-publishedDate');


        q.exec(function (err, results) {
            console.log(results);
            locals.investments = results;
            next(err);
        });
    });

    view.render('investment');
}
