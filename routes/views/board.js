const keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    locals.section = 'boards';
    locals.filter = {
        company: req.params.company
    }
    locals.title = `${locals.filter.company} | Azoic Ventures`;

    view.on('init', function (next) {
        var q = keystone.list('Board').model.findOne({
            state: 'published',
            slug: locals.filter.company
        }).populate('author');

        q.exec(function (err, result) {
            locals.company = result;
            next(err);
        });
    });

    view.on('init', function (next) {

        var q = keystone.list('Board').model.find().where('state', 'published').sort('-publishedDate');

        q.exec(function (err, results) {
            locals.investments = results;
            next(err);
        });
    });

    view.render('board');
}
